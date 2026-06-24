import { tickerItems } from "@/lib/site-data";

export function MarqueeTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-foreground text-background py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center mx-6 sm:mx-10 text-sm sm:text-base font-medium">
            {item}
            <span className="ml-6 sm:ml-10 text-primary font-bold">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
