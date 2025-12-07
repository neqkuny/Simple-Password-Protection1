import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Check, X, Shield, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";

interface PasswordStrengthMeterProps {
  password: string;
}

interface Requirement {
  label: string;
  met: boolean;
}

export function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const analysis = useMemo(() => {
    const requirements: Requirement[] = [
      { label: "At least 12 characters", met: password.length >= 12 },
      { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
      { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
      { label: "Contains number", met: /[0-9]/.test(password) },
      { label: "Contains special character (!@#$%^&*)", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
      { label: "No common patterns", met: password.length > 0 && !/(123|abc|password|qwerty)/i.test(password) },
    ];

    const metCount = requirements.filter(r => r.met).length;
    const score = password.length === 0 ? 0 : Math.round((metCount / requirements.length) * 100);

    let strength: "none" | "weak" | "medium" | "strong" | "excellent" = "none";
    if (password.length === 0) strength = "none";
    else if (score < 40) strength = "weak";
    else if (score < 60) strength = "medium";
    else if (score < 85) strength = "strong";
    else strength = "excellent";

    // Estimate crack time
    let crackTime = "";
    if (password.length === 0) {
      crackTime = "Enter a password";
    } else if (password.length < 6) {
      crackTime = "Instantly";
    } else if (password.length < 8) {
      crackTime = "A few seconds";
    } else if (password.length < 10 || score < 50) {
      crackTime = "A few minutes";
    } else if (password.length < 12 || score < 70) {
      crackTime = "A few hours";
    } else if (score < 85) {
      crackTime = "Several months";
    } else {
      crackTime = "Centuries";
    }

    return { requirements, score, strength, crackTime };
  }, [password]);

  const strengthConfig = {
    none: { color: "bg-muted", glowClass: "", icon: Shield, label: "Enter Password" },
    weak: { color: "bg-destructive", glowClass: "glow-destructive", icon: ShieldX, label: "Weak" },
    medium: { color: "bg-warning", glowClass: "glow-warning", icon: ShieldAlert, label: "Medium" },
    strong: { color: "bg-primary", glowClass: "glow-success", icon: ShieldCheck, label: "Strong" },
    excellent: { color: "bg-primary", glowClass: "glow-success animate-glow-pulse", icon: ShieldCheck, label: "Excellent" },
  };

  const config = strengthConfig[analysis.strength];
  const Icon = config.icon;

  return (
    <div className="space-y-6">
      {/* Strength Indicator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={cn(
              "w-5 h-5 transition-colors duration-300",
              analysis.strength === "none" && "text-muted-foreground",
              analysis.strength === "weak" && "text-destructive",
              analysis.strength === "medium" && "text-warning",
              (analysis.strength === "strong" || analysis.strength === "excellent") && "text-primary"
            )} />
            <span className="font-medium text-foreground">{config.label}</span>
          </div>
          <span className="text-sm text-muted-foreground font-mono">{analysis.score}%</span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              config.color,
              config.glowClass
            )}
            style={{ width: `${analysis.score}%` }}
          />
        </div>

        {/* Crack Time */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Estimated crack time:</span>
          <span className={cn(
            "font-mono font-medium",
            analysis.strength === "weak" && "text-destructive",
            analysis.strength === "medium" && "text-warning",
            (analysis.strength === "strong" || analysis.strength === "excellent") && "text-primary"
          )}>
            {analysis.crackTime}
          </span>
        </div>
      </div>

      {/* Requirements Checklist */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Requirements</h4>
        <div className="grid gap-2">
          {analysis.requirements.map((req, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 p-2 rounded-md transition-all duration-300",
                req.met ? "bg-primary/10" : "bg-muted/50"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {req.met ? (
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
              ) : (
                <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              )}
              <span className={cn(
                "text-sm transition-colors",
                req.met ? "text-foreground" : "text-muted-foreground"
              )}>
                {req.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
