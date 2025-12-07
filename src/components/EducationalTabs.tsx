import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BookOpen, Lightbulb, Zap, Lock, Unlock, Clock, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const goodPasswords = [
  { password: "Tr0ub4dor&3#Horse", reason: "Mix of words, numbers, symbols" },
  { password: "correct-horse-battery-staple", reason: "Passphrase - long and memorable" },
  { password: "M@sterCh3f2024!", reason: "Personal but not obvious" },
];

const badPasswords = [
  { password: "password123", reason: "Extremely common, easily guessed" },
  { password: "qwerty", reason: "Keyboard pattern" },
  { password: "john1990", reason: "Name + birth year" },
  { password: "iloveyou", reason: "Common phrase" },
];

const hackingMethods = [
  {
    name: "Brute Force Attack",
    icon: Zap,
    description: "Systematically tries every possible combination until finding the correct password.",
    defense: "Use longer passwords with mixed characters. Each character exponentially increases crack time.",
  },
  {
    name: "Dictionary Attack",
    icon: BookOpen,
    description: "Uses lists of common words, phrases, and known leaked passwords to guess your password.",
    defense: "Avoid real words and common substitutions like 'p@ssw0rd'. Use random combinations.",
  },
  {
    name: "Social Engineering",
    icon: AlertTriangle,
    description: "Attackers research you online to guess passwords based on personal info (birthdays, pet names).",
    defense: "Never use personal information. Treat security questions as secondary passwords.",
  },
  {
    name: "Credential Stuffing",
    icon: Server,
    description: "Uses leaked username/password pairs from one breach to access other accounts.",
    defense: "Use unique passwords for every account. Enable two-factor authentication.",
  },
];

const securityTips = [
  { icon: Lock, tip: "Use a password manager to generate and store unique passwords" },
  { icon: Unlock, tip: "Enable two-factor authentication (2FA) wherever possible" },
  { icon: Clock, tip: "Change passwords immediately if a service you use is breached" },
  { icon: AlertTriangle, tip: "Never share passwords via email or messaging apps" },
  { icon: Server, tip: "Check haveibeenpwned.com to see if your email was in a data breach" },
  { icon: Lightbulb, tip: "Consider using passphrases - they are long but easy to remember" },
];

export function EducationalTabs() {
  return (
    <Tabs defaultValue="why" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-secondary p-1 rounded-lg">
        <TabsTrigger 
          value="why" 
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-md transition-all"
        >
          Why It Matters
        </TabsTrigger>
        <TabsTrigger 
          value="methods"
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-md transition-all"
        >
          Hacking Methods
        </TabsTrigger>
        <TabsTrigger 
          value="tips"
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-md transition-all"
        >
          Pro Tips
        </TabsTrigger>
      </TabsList>

      <TabsContent value="why" className="mt-6 animate-fade-in">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Why Strong Passwords Matter</h3>
            <p className="text-muted-foreground leading-relaxed">
              In 2023, over 24 billion passwords were exposed in data breaches. Weak passwords are the #1 
              vulnerability exploited by hackers. A strong password is your first line of defense against 
              identity theft, financial fraud, and privacy invasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-destructive/10 border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                <Unlock className="w-4 h-4" />
                Bad Password Examples
              </h4>
              <div className="space-y-3">
                {badPasswords.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <code className="font-mono text-sm bg-muted px-2 py-1 rounded text-destructive">
                      {item.password}
                    </code>
                    <span className="text-sm text-muted-foreground">{item.reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Good Password Examples
              </h4>
              <div className="space-y-3">
                {goodPasswords.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <code className="font-mono text-sm bg-muted px-2 py-1 rounded text-primary">
                      {item.password}
                    </code>
                    <span className="text-sm text-muted-foreground">{item.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="methods" className="mt-6 animate-fade-in">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Common Attack Methods</h3>
            <p className="text-muted-foreground">
              Understanding how hackers crack passwords helps you create stronger defenses.
            </p>
          </div>

          <div className="grid gap-4">
            {hackingMethods.map((method, i) => (
              <div 
                key={i}
                className={cn(
                  "p-5 rounded-lg bg-card border border-border",
                  "hover:border-accent/50 transition-all duration-300"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <method.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{method.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <div className="flex items-start gap-2 p-3 rounded-md bg-primary/5 border border-primary/10">
                      <Lock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{method.defense}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="tips" className="mt-6 animate-fade-in">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Security Best Practices</h3>
            <p className="text-muted-foreground">
              Follow these expert recommendations to maximize your account security.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {securityTips.map((item, i) => (
              <div 
                key={i}
                className={cn(
                  "p-4 rounded-lg bg-card border border-border",
                  "hover:border-primary/30 hover:bg-primary/5 transition-all duration-300",
                  "flex items-start gap-3"
                )}
              >
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-foreground">{item.tip}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent" />
              The Passphrase Advantage
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Instead of complex random characters, consider using a passphrase: 4-6 random words strung together.
            </p>
            <div className="font-mono text-accent bg-muted/50 px-4 py-2 rounded-md inline-block">
              correct-horse-battery-staple
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This 28-character passphrase would take centuries to crack but is easy to remember.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
