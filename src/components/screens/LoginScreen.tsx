import { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface LoginScreenProps {
  onNavigate: (screen: string, newUser?: boolean) => void;
}

export function LoginScreen({ onNavigate }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("otp", false); // false means existing user (login)
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          <div className="flex justify-center mb-8">
            <Logo size="large" />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your Lulu CRM account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <motion.div
                animate={{
                  scale: focusedField === "email" ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="h-11 border-border bg-input-background focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <motion.div
                animate={{
                  scale: focusedField === "password" ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className="h-11 border-border bg-input-background focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90">
                Log in
              </Button>
            </motion.div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate("signup")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Don't have an account?{" "}
              <span className="text-primary hover:underline">Sign up</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}