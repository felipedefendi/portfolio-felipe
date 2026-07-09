import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-border py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            {subtitle ? (
              <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
