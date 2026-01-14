import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Check, X } from "lucide-react";

interface SignupScreenProps {
  onNavigate: (screen: string, newUser?: boolean) => void;
}

export function SignupScreen({ onNavigate }: SignupScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const getPasswordStrength = () => {
    if (password.length === 0) return { strength: 0, label: "", color: "" };
    if (password.length < 6) return { strength: 33, label: "Weak", color: "bg-red-500" };
    if (password.length < 10) return { strength: 66, label: "Medium", color: "bg-yellow-500" };
    return { strength: 100, label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength();
  const passwordsMatch = confirmPassword && password === confirmPassword;
  const passwordsDontMatch = confirmPassword && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordsMatch) {
      onNavigate("otp", true); // true means new user (signup)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          <div className="flex justify-center mb-8">
            <Logo size="large" />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-2">Create your account</h1>
            <p className="text-muted-foreground">Get started with Lulu CRM today</p>
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
              
              <AnimatePresence>
                {password && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Password strength: {passwordStrength.label}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${passwordStrength.strength}%` }}
                        className={`h-full ${passwordStrength.color}`}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <motion.div
                animate={{
                  scale: focusedField === "confirmPassword" ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setFocusedField("confirmPassword")}
                    onBlur={() => setFocusedField(null)}
                    className="h-11 border-border bg-input-background focus-visible:ring-2 focus-visible:ring-primary pr-10"
                    required
                  />
                  <AnimatePresence>
                    {passwordsMatch && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <Check className="h-5 w-5 text-green-500" />
                      </motion.div>
                    )}
                    {passwordsDontMatch && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <X className="h-5 w-5 text-red-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90"
                disabled={!passwordsMatch}
              >
                Create account
              </Button>
            </motion.div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate("login")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Already have an account?{" "}
              <span className="text-primary hover:underline">Log in</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}