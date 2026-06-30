import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

const COUNTER_KEY = "portfolio:visits";
const COOKIE_NAME = "alr_visited";
const ONE_DAY_SECONDS = 60 * 60 * 24;

export async function POST(req: NextRequest) {
  try {
    const alreadyCounted = req.cookies.has(COOKIE_NAME);

    const count = alreadyCounted
      ? ((await redis.get<number>(COUNTER_KEY)) ?? 0)
      : await redis.incr(COUNTER_KEY);

    const res = NextResponse.json({ count, counted: !alreadyCounted });

    if (!alreadyCounted) {
      res.cookies.set(COOKIE_NAME, "1", {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        maxAge: ONE_DAY_SECONDS,
        path: "/",
      });
    }

    return res;
  } catch (error) {
    console.error("visits POST error:", error);
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
export async function GET() {
  try {
    const count = (await redis.get<number>(COUNTER_KEY)) ?? 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error("visits GET error:", error);
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
