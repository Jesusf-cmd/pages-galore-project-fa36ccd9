export default function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="flex flex-col mt-10">
      {steps.map((step, i) => (
        <div
          key={i}
          className="grid grid-cols-[56px_1fr] gap-5 py-6"
          style={{
            borderBottom: "1px solid hsl(var(--concrete) / 0.08)",
            borderTop: i === 0 ? "1px solid hsl(var(--concrete) / 0.08)" : "none",
          }}
        >
          <div className="font-display text-4xl font-black text-orange opacity-35 leading-none">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div>
            <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-1.5">{step.title}</div>
            <div className="text-[0.82rem] text-muted-text leading-relaxed">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
