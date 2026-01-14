import { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Sparkles } from "lucide-react";

interface OnboardingUsageScreenProps {
  onNavigate: (screen: string) => void;
}

export function OnboardingUsageScreen({ onNavigate }: OnboardingUsageScreenProps) {
  const [inboundUsage, setInboundUsage] = useState(500);
  const [outboundUsage, setOutboundUsage] = useState(300);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("onboarding-estimate");
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
              <span className="text-sm text-muted-foreground">Step 2 of 3</span>
              <span className="text-sm font-medium text-primary">66%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: "33%" }}
                animate={{ width: "66%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Estimate your usage</h1>
            <p className="text-muted-foreground">Help us recommend the right plan for you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <Label htmlFor="inbound">Monthly inbound contacts</Label>
                <Input
                  id="inbound-input"
                  type="number"
                  value={inboundUsage}
                  onChange={(e) => setInboundUsage(parseInt(e.target.value) || 0)}
                  className="w-20 h-8 text-right px-2 border-border bg-input-background"
                  min={0}
                  max={10000}
                />
              </div>
              <Slider
                id="inbound"
                value={[inboundUsage]}
                onValueChange={(value) => setInboundUsage(value[0])}
                max={10000}
                step={50}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Expected number of incoming calls, messages, and chats per month
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <Label htmlFor="outbound">Monthly outbound contacts</Label>
                <Input
                  id="outbound-input"
                  type="number"
                  value={outboundUsage}
                  onChange={(e) => setOutboundUsage(parseInt(e.target.value) || 0)}
                  className="w-20 h-8 text-right px-2 border-border bg-input-background"
                  min={0}
                  max={10000}
                />
              </div>
              <Slider
                id="outbound"
                value={[outboundUsage]}
                onValueChange={(value) => setOutboundUsage(value[0])}
                max={10000}
                step={50}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Expected number of outgoing calls, messages, and campaigns per month
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="relative bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-br from-accent to-primary rounded-lg">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">AI Recommendation</p>
                  <p className="text-xs text-muted-foreground">
                    This helps us estimate your monthly credits and suggest the best plan
                  </p>
                </div>
              </div>
              
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-2 -right-2 bg-accent text-white text-xs px-3 py-1 rounded-full shadow-lg"
                >
                  AI-powered insights
                </motion.div>
              )}
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-4">
              <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90">
                Get AI estimate
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
