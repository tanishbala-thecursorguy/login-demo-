import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Sparkles, TrendingUp } from "lucide-react";

interface OnboardingEstimateScreenProps {
  onNavigate: (screen: string) => void;
}

export function OnboardingEstimateScreen({ onNavigate }: OnboardingEstimateScreenProps) {
  const estimatedCredits = 12500;
  const estimatedCost = 149;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
              <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent" />
            </div>
          </div>

          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mb-4 relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary blur-xl"
              />
              <Sparkles className="h-10 w-10 text-white relative z-10" />
            </motion.div>
            <h1 className="text-2xl font-semibold mb-2">Your AI Estimate</h1>
            <p className="text-muted-foreground">
              Based on your usage, here's what we recommend
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-6"
          >
            <div className="text-center mb-6">
              <div className="text-sm text-muted-foreground mb-2">Estimated monthly usage</div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
              >
                {estimatedCredits.toLocaleString()}
              </motion.div>
              <div className="text-sm text-muted-foreground">credits per month</div>
            </div>

            <div className="border-t border-border/50 pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Recommended plan</span>
                <span className="text-sm font-medium">Professional</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Estimated monthly cost</span>
                <span className="text-xl font-semibold text-primary">${estimatedCost}/mo</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-muted/50 rounded-xl p-4 mb-6 flex items-start gap-3"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Smart recommendation</p>
              <p className="text-xs text-muted-foreground">
                This plan includes all features you need plus 20% buffer for growth
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={() => onNavigate("onboarding-features")}
              className="w-full h-11 bg-primary hover:bg-primary/90"
            >
              Continue setup
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
