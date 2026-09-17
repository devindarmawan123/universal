import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <div className="bg-ink text-paper">
      <div className="section-shell py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.id}>
            <p className="font-display text-3xl md:text-4xl text-paper">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-paper/65">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
