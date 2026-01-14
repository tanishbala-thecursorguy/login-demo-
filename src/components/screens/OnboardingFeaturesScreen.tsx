import { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import {
  Phone,
  MessageSquare,
  MessageCircle,
  Headphones,
  BarChart3,
  Workflow,
  Check,
} from "lucide-react";

interface OnboardingFeaturesScreenProps {
  onNavigate: (screen: string) => void;
}

interface Feature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  credits: number;
}

const features: Feature[] = [
  {
    id: "voice",
    name: "AI Voice Agent",
    description: "Automated voice calls with natural AI",
    icon: Phone,
    credits: 2000,
  },
  {
    id: "sms",
    name: "SMS Automation",
    description: "Send and manage text messages",
    icon: MessageSquare,
    credits: 1500,
  },
  {
    id: "whatsapp",
    name: "WhatsApp Automation",
    description: "Connect with customers on WhatsApp",
    icon: MessageCircle,
    credits: 1800,
  },
  {
    id: "receptionist",
    name: "AI Receptionist",
    description: "24/7 virtual receptionist service",
    icon: Headphones,
    credits: 2500,
  },
  {
    id: "crm",
    name: "CRM & Pipelines",
    description: "Manage deals and customer relationships",
    icon: Workflow,
    credits: 1000,
  },
  {
    id: "analytics",
    name: "Analytics & Reports",
    description: "Detailed insights and performance metrics",
    icon: BarChart3,
    credits: 800,
  },
];

export function OnboardingFeaturesScreen({ onNavigate }: OnboardingFeaturesScreenProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "voice",
    "crm",
    "analytics",
  ]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const totalCredits = features
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.credits, 0);

  const handleSubmit = () => {
    onNavigate("dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Step 3 of 3</span>
              <span className="text-sm font-medium text-primary">100%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: "66%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Choose your features</h1>
            <p className="text-muted-foreground">
              Select the features you want to activate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => {
              const isSelected = selectedFeatures.includes(feature.id);
              const Icon = feature.icon;

              return (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => toggleFeature(feature.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? "bg-gradient-to-br from-primary to-accent"
                          : "bg-muted"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isSelected ? "text-white" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{feature.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        ~{feature.credits.toLocaleString()} credits/mo
                      </p>
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                      >
                        <Check className="h-4 w-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-4 mb-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Total estimated usage
                </p>
                <p className="text-2xl font-semibold">
                  {totalCredits.toLocaleString()} <span className="text-sm text-muted-foreground">credits/mo</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">
                  Estimated cost
                </p>
                <p className="text-2xl font-semibold text-primary">
                  ${Math.round(totalCredits / 100)}/mo
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Button
              onClick={handleSubmit}
              className="w-full h-11 bg-primary hover:bg-primary/90"
              disabled={selectedFeatures.length === 0}
            >
              Confirm & continue
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
