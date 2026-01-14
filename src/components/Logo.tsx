import { Sparkles } from "lucide-react";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-md opacity-40 rounded-full"></div>
        <div className={`relative bg-gradient-to-br from-primary to-accent ${size === "large" ? "p-3" : "p-2"} rounded-xl`}>
          <Sparkles className={`${size === "large" ? "h-7 w-7" : "h-5 w-5"} text-primary-foreground`} />
        </div>
      </div>
      <span className={`${size === "large" ? "text-3xl" : "text-2xl"} font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`}>
        Lulu CRM
      </span>
    </div>
  );
}
