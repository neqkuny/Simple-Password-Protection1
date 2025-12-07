import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PasswordInput } from "@/components/PasswordInput";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import { EducationalTabs } from "@/components/EducationalTabs";
import { Shield, Github } from "lucide-react";

const Index = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-semibold text-foreground">Simple Password Protection</span>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection />

      {/* Main Content */}
      <main className="container pb-20">
        {/* Password Checker Section */}
        <section className="max-w-2xl mx-auto mb-20">
          <div className="p-6 md:p-8 rounded-2xl card-gradient border border-border">
            <PasswordInput value={password} onChange={setPassword} />
            <div className="mt-8">
              <PasswordStrengthMeter password={password} />
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Learn to Protect Yourself
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Understanding password security is the first step to protecting your online identity.
            </p>
          </div>
          <EducationalTabs />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Simple Password Protection</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
