import React, { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Phone, Mail, MessageCircle, Search, Users } from "lucide-react";

interface OnboardingUsageScreenProps {
  onNavigate: (screen: string) => void;
}

export function OnboardingUsageScreen({ onNavigate }: OnboardingUsageScreenProps) {
  const [contacts, setContacts] = useState(1000);
  const [dailyPhonePercentage, setDailyPhonePercentage] = useState(25);
  const [dailyEmails, setDailyEmails] = useState(50);
  const [dailyMessages, setDailyMessages] = useState(30);
  const [marketResearchUsage, setMarketResearchUsage] = useState(5);

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
                initial={{ width: 0 }}
                animate={{ width: "66%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Tell us about your usage</h1>
            <p className="text-muted-foreground">Help us understand how you'll use Lulu CRM</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Number of Contacts */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <Label htmlFor="contacts">Number of Contacts</Label>
              </div>
              <div className="px-2">
                <Slider
                  id="contacts"
                  min={0}
                  max={10000}
                  step={100}
                  value={[contacts]}
                  onValueChange={(value) => setContacts(value[0])}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-primary">{contacts.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground ml-2"> contacts</span>
              </div>
            </div>

            {/* Daily Phone Connection Percentage */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <Label htmlFor="phonePercentage">
                  % of contacts to connect daily over phone
                </Label>
              </div>
              <div className="px-2">
                <Slider
                  id="phonePercentage"
                  min={0}
                  max={100}
                  step={5}
                  value={[dailyPhonePercentage]}
                  onValueChange={(value) => setDailyPhonePercentage(value[0])}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-primary">{dailyPhonePercentage}%</span>
                <span className="text-sm text-muted-foreground ml-2"> daily</span>
              </div>
            </div>

            {/* Daily Automated Emails */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <Label htmlFor="dailyEmails">Number of emails to automate daily</Label>
              </div>
              <div className="px-2">
                <Slider
                  id="dailyEmails"
                  min={0}
                  max={500}
                  step={10}
                  value={[dailyEmails]}
                  onValueChange={(value) => setDailyEmails(value[0])}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-primary">{dailyEmails}</span>
                <span className="text-sm text-muted-foreground ml-2"> emails/day</span>
              </div>
            </div>

            {/* Daily Automated Messages */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <Label htmlFor="dailyMessages">Number of messages to automate daily</Label>
              </div>
              <div className="px-2">
                <Slider
                  id="dailyMessages"
                  min={0}
                  max={300}
                  step={5}
                  value={[dailyMessages]}
                  onValueChange={(value) => setDailyMessages(value[0])}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-primary">{dailyMessages}</span>
                <span className="text-sm text-muted-foreground ml-2"> messages/day</span>
              </div>
            </div>

            {/* Market Research Usage */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-primary" />
                <Label htmlFor="marketResearch">Lulu market research usage per week</Label>
              </div>
              <div className="px-2">
                <Slider
                  id="marketResearch"
                  min={0}
                  max={20}
                  step={1}
                  value={[marketResearchUsage]}
                  onValueChange={(value) => setMarketResearchUsage(value[0])}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-primary">{marketResearchUsage}</span>
                <span className="text-sm text-muted-foreground ml-2"> times/week</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-4">
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90"
              >
                Calculate My Usage
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}