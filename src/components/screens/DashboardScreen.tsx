import { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import {
  CheckCircle2,
  Circle,
  Phone,
  Users,
  Settings,
  Sparkles,
} from "lucide-react";

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: "1",
      title: "Complete your profile",
      description: "Add your photo and preferences",
      completed: false,
    },
    {
      id: "2",
      title: "Connect your first channel",
      description: "Set up phone, SMS, or WhatsApp",
      completed: false,
    },
    {
      id: "3",
      title: "Invite team members",
      description: "Collaborate with your team",
      completed: false,
    },
    {
      id: "4",
      title: "Import your contacts",
      description: "Upload or sync your customer data",
      completed: false,
    },
  ]);

  const [showConfetti, setShowConfetti] = useState(false);

  const toggleItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = checklist.filter((item) => item.completed).length;
  const progress = (completedCount / checklist.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border-b border-border sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-8 text-white">
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Welcome aboard!</span>
              </motion.div>
              <h1 className="text-4xl font-bold mb-2">Welcome to Lulu CRM</h1>
              <p className="text-white/90 text-lg">
                Let's get you set up and ready to transform your customer relationships
              </p>
            </div>
            
            {/* Animated background effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Setup Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Get started</h2>
                  <p className="text-sm text-muted-foreground">
                    Complete these steps to unlock the full potential
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {completedCount}/{checklist.length}
                  </div>
                  <div className="text-xs text-muted-foreground">completed</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => toggleItem(item.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      item.completed
                        ? "border-primary/30 bg-primary/5"
                        : "border-border bg-card hover:border-primary/20"
                    }`}
                  >
                    <div className="pt-0.5">
                      {item.completed ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                        >
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </motion.div>
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium mb-1 ${item.completed ? "line-through text-muted-foreground" : ""}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">Quick actions</h2>
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full justify-start h-12 bg-primary hover:bg-primary/90">
                    <Phone className="h-4 w-4 mr-3" />
                    Connect channels
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full justify-start h-12">
                    <Users className="h-4 w-4 mr-3" />
                    Add team members
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-accent to-primary rounded-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized help and recommendations
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Ask AI
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Success Confetti Effect */}
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50"
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: 0,
              }}
              animate={{
                y: window.innerHeight + 20,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                delay: Math.random() * 0.5,
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: [
                  "#4338ca",
                  "#8b5cf6",
                  "#ec4899",
                  "#f59e0b",
                ][Math.floor(Math.random() * 4)],
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
