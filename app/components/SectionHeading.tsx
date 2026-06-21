type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-brass">{index}</span>
        <span className="hairline-full flex-1" />
      </div>
      <h2 className="mt-3 font-display text-3xl md:text-[2.25rem] text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-[15px] text-ink-soft leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
