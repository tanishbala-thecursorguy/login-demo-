import React, { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Mail, Shield } from "lucide-react";

interface ForgotPasswordOTPScreenProps {
  onNavigate: (screen: string) => void;
  email: string;
}

export function ForgotPasswordOTPScreen({ onNavigate, email }: ForgotPasswordOTPScreenProps) {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      onNavigate("reset-password");
    }, 1500);
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
          <div className="flex justify-center mb-6">
            <Logo size="large" />
          </div>
          
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold mb-2">Verify your email</h1>
            <p className="text-muted-foreground">
              Enter the 6-digit code sent to {email}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Verification code</Label>
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
                disabled={isLoading}
              >
                <InputOTPGroup className="w-full justify-center">
                  <InputOTPSlot index={0} className="h-12 w-12 text-xl" />
                  <InputOTPSlot index={1} className="h-12 w-12 text-xl" />
                  <InputOTPSlot index={2} className="h-12 w-12 text-xl" />
                  <InputOTPSlot index={3} className="h-12 w-12 text-xl" />
                  <InputOTPSlot index={4} className="h-12 w-12 text-xl" />
                  <InputOTPSlot index={5} className="h-12 w-12 text-xl" />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-muted-foreground text-center">
                Didn't receive the code? <button className="text-primary hover:underline">Resend</button>
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button 
                type="submit" 
                className="w-full h-11 bg-primary hover:bg-primary/90"
                disabled={otp.length !== 6 || isLoading}
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </Button>
            </motion.div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate("forgot-password")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Email
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}