import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Capabilities } from "./components/Capabilities";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Work />
        <Experience />
        <Capabilities />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
