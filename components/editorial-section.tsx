"use client";

type EditorialSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  variant?: "light" | "tinted";
};

export function EditorialSection({
  id,
  eyebrow,
  title,
  description,
  children,
  variant = "light",
}: EditorialSectionProps) {
  const sectionClassName =
    variant === "tinted"
      ? "relative overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 sm:py-32"
      : "relative overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 sm:py-32";

  return (
    <section id={id} className={sectionClassName}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_24%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:4rem_4rem] dark:opacity-20 dark:[background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <div className="md:sticky md:top-24 md:self-start">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-indigo-600 dark:text-violet-300">{eyebrow}</p>
          ) : null}
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
          {description ? (
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">{description}</p>
          ) : null}
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}