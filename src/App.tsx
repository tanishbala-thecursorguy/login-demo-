import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { LoginScreen } from "./components/screens/LoginScreen";
import { SignupScreen } from "./components/screens/SignupScreen";
import { OTPScreen } from "./components/screens/OTPScreen";
import { OnboardingDetailsScreen } from "./components/screens/OnboardingDetailsScreen";
import { OnboardingUsageScreen } from "./components/screens/OnboardingUsageScreen";
import { OnboardingEstimateScreen } from "./components/screens/OnboardingEstimateScreen";
import { OnboardingFeaturesScreen } from "./components/screens/OnboardingFeaturesScreen";
import { DashboardScreen } from "./components/screens/DashboardScreen";
import { ForgotPasswordScreen } from "./components/screens/ForgotPasswordScreen";
import { ForgotPasswordOTPScreen } from "./components/screens/ForgotPasswordOTPScreen";
import { ResetPasswordScreen } from "./components/screens/ResetPasswordScreen";

type Screen =
  | "login"
  | "signup"
  | "otp"
  | "onboarding-details"
  | "onboarding-usage"
  | "onboarding-estimate"
  | "onboarding-features"
  | "dashboard"
  | "forgot-password"
  | "forgot-password-otp"
  | "reset-password";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [isNewUser, setIsNewUser] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const handleNavigate = (screen: string, newUser?: boolean, email?: string) => {
    if (newUser !== undefined) {
      setIsNewUser(newUser);
    }
    if (email) {
      setForgotPasswordEmail(email);
    }
    setCurrentScreen(screen as Screen);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentScreen === "login" && (
          <LoginScreen key="login" onNavigate={handleNavigate} />
        )}
        {currentScreen === "signup" && (
          <SignupScreen key="signup" onNavigate={handleNavigate} />
        )}
        {currentScreen === "otp" && (
          <OTPScreen key="otp" onNavigate={handleNavigate} isNewUser={isNewUser} />
        )}
        {currentScreen === "onboarding-details" && (
          <OnboardingDetailsScreen
            key="onboarding-details"
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === "onboarding-usage" && (
          <OnboardingUsageScreen
            key="onboarding-usage"
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === "onboarding-estimate" && (
          <OnboardingEstimateScreen
            key="onboarding-estimate"
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === "onboarding-features" && (
          <OnboardingFeaturesScreen
            key="onboarding-features"
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === "dashboard" && (
          <DashboardScreen key="dashboard" onNavigate={handleNavigate} />
        )}
        {currentScreen === "forgot-password" && (
          <ForgotPasswordScreen 
            key="forgot-password" 
            onNavigate={(screen, email) => handleNavigate(screen, undefined, email)} 
          />
        )}
        {currentScreen === "forgot-password-otp" && (
          <ForgotPasswordOTPScreen 
            key="forgot-password-otp" 
            onNavigate={handleNavigate} 
            email={forgotPasswordEmail}
          />
        )}
        {currentScreen === "reset-password" && (
          <ResetPasswordScreen key="reset-password" onNavigate={handleNavigate} />
        )}
      </AnimatePresence>
    </div>
  );
}