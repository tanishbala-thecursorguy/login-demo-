import React, { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface OnboardingDetailsScreenProps {
  onNavigate: (screen: string) => void;
}

export function OnboardingDetailsScreen({ onNavigate }: OnboardingDetailsScreenProps) {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [customBusinessType, setCustomBusinessType] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("onboarding-usage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Step 1 of 3</span>
              <span className="text-sm font-medium text-primary">33%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "33%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Let's get to know you</h1>
            <p className="text-muted-foreground">Tell us about yourself and your business</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <motion.div
                animate={{
                  scale: focusedField === "fullName" ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className="h-11 border-border bg-input-background focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessName">Business name</Label>
              <motion.div
                animate={{
                  scale: focusedField === "businessName" ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Acme Inc."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  onFocus={() => setFocusedField("businessName")}
                  onBlur={() => setFocusedField(null)}
                  className="h-11 border-border bg-input-background focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business type</Label>
              <Select value={businessType} onValueChange={(value) => {
                setBusinessType(value);
                if (value !== "other") {
                  setCustomBusinessType("");
                }
              }} required>
                <SelectTrigger className="h-11 border-border bg-input-background">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="agency">Agency</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              
              {businessType === "other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3"
                >
                  <Label htmlFor="customBusinessType">Please specify your business type</Label>
                  <motion.div
                    animate={{
                      scale: focusedField === "customBusinessType" ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="customBusinessType"
                      type="text"
                      placeholder="Enter your business type"
                      value={customBusinessType}
                      onChange={(e) => setCustomBusinessType(e.target.value)}
                      onFocus={() => setFocusedField("customBusinessType")}
                      onBlur={() => setFocusedField(null)}
                      className="h-11 border-border bg-input-background focus-visible:ring-2 focus-visible:ring-primary mt-2"
                      required
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-4">
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90"
                disabled={!fullName || !businessName || !businessType || (businessType === "other" && !customBusinessType)}
              >
                Next
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
