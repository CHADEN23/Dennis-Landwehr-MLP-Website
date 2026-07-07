type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  as: Tag = "h2",
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <Tag id={id} className="text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
