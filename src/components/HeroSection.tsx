import { Shield, Lock, Key } from "lucide-react";

export function HeroSection() {
  return (
    <header className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Password Security Hub</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Is Your Password{" "}
            <span className="text-gradient">Strong Enough?</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Test your password strength, learn about common attack methods, and discover 
            how to create unbreakable passwords that protect your digital life.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <Lock className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">24B+</div>
              <div className="text-xs text-muted-foreground">Passwords Leaked</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <Key className="w-5 h-5 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">80%</div>
              <div className="text-xs text-muted-foreground">Reuse Passwords</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <Shield className="w-5 h-5 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2min</div>
              <div className="text-xs text-muted-foreground">Avg Crack Time</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
