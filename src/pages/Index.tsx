import { useState, useEffect, useRef, useCallback } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PasswordInput } from "@/components/PasswordInput";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import { EducationalTabs, SecurityTipsSection } from "@/components/EducationalTabs";
import { Shield, Github, Heart } from "lucide-react";

// Simple confetti implementation
const createConfetti = () => {
  const colors = ['#22d3ee', '#10b981', '#14b8a6', '#06b6d4', '#34d399'];
  const confettiCount = 100;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      opacity: 1;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      pointer-events: none;
      z-index: 9999;
      animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
};

// Add keyframes to document
const addConfettiStyles = () => {
  if (document.getElementById('confetti-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'confetti-styles';
  style.textContent = `
    @keyframes confetti-fall {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

const Index = () => {
  const [password, setPassword] = useState("");
  const hasConfettiFired = useRef(false);

  // Add confetti styles on mount
  useEffect(() => {
    addConfettiStyles();
  }, []);

  // Check if password is excellent and fire confetti
  const checkAndFireConfetti = useCallback((pwd: string) => {
    const isExcellent = pwd.length >= 12 &&
      /[A-Z]/.test(pwd) &&
      /[a-z]/.test(pwd) &&
      /[0-9]/.test(pwd) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(pwd) &&
      !/(123|abc|password|qwerty)/i.test(pwd);

    if (isExcellent && !hasConfettiFired.current) {
      hasConfettiFired.current = true;
      createConfetti();
    } else if (!isExcellent) {
      hasConfettiFired.current = false;
    }
  }, []);

  useEffect(() => {
    checkAndFireConfetti(password);
  }, [password, checkAndFireConfetti]);

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
          <SecurityTipsSection />
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
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive" /> for a safer internet
            </p>
            <p>Your passwords never leave your browser</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
