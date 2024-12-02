"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "@/components/login-page";
import RegisterPage from "@/components/register-page";
import WelcomePage from "@/components/welcome-page";
import SurveyQuestion from "@/components/survey-question";
import ThankYouPage from "@/components/thank-you-page";
import QuestionSelector from "@/components/question-selector";

const axios = require("axios");

export default function SurveyApp() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showQuestionSelector, setShowQuestionSelector] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleLogin = (username: string, password: string) => {
    if (!username || !password) {
      alert("Please enter Username and Password");
      return;
    }
    axios
      .post('https://localhost:7278/api/user/login', {
        username: username,
        password: password,
      })
      .then(function (response: any) {
        console.log(response);
        if (response.status === 200) {
          document.cookie = `token=${response.data}; path=/; max-age=3600; Secure; SameSite=Strict`;
          setCurrentScreen("welcome")
        }
      })
      .catch(function (error: any) {
        console.log(error);
        alert("Username or Password was incorrect")
      });
  };

  const handleRegister = (
    username: string,
    password1: string,
    password2: string
  ) => {
    if (!username || !password1 || !password2) {
      alert("Please enter a Username and Password");
      return;
    }
    if (password1 !== password2) {
      alert("Entered passwords do not match");
      return;
    }
    axios
      .post('https://localhost:7278/api/user/register', {
        username: username,
        password: password1,
      })
      .then(function (response: any) {
        console.log(response);
        if (response.status === 200) {
          alert("Account successfully created");
          setCurrentScreen("login");
        }
      })
      .catch(function (error: any) {
        console.log(error);
        alert(error.response.data);
      });
  };

  const handleBegin = () => {
    setCurrentScreen("welcome");
  };

  const handleStartSurvey = () => {
    setCurrentScreen("survey");
    setCurrentQuestion(1);
  };

  const handleComplete = () => {
    setCurrentScreen("thank-you");
  };

  const handleQuestionSelect = (questionNumber: number) => {
    setCurrentQuestion(questionNumber);
    setShowQuestionSelector(false);
  };

  const handleAnswerQuestion = (
    questionNumber: number,
    answer: string | null
  ) => {
    if (answer) {
      setAnswers((prev) => ({ ...prev, [questionNumber]: answer }));
      if (!answeredQuestions.includes(questionNumber)) {
        setAnsweredQuestions((prev) => [...prev, questionNumber]);
      }
    } else {
      setAnswers((prev) => {
        const newAnswers = { ...prev };
        delete newAnswers[questionNumber];
        return newAnswers;
      });
      setAnsweredQuestions((prev) => prev.filter((q) => q !== questionNumber));
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === "login" && (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <LoginPage
              onLogin={handleLogin}
              onRegister={() => setCurrentScreen("register")}
            />
          </motion.div>
        )}

        {currentScreen === "register" && (
          <motion.div
            key="register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <RegisterPage
              onRegister={handleRegister}
              onClose={() => setCurrentScreen("login")}
            />
          </motion.div>
        )}

        {currentScreen === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <WelcomePage
              onSignOut={() => setCurrentScreen("login")}
              onStart={handleStartSurvey}
            />
          </motion.div>
        )}

        {currentScreen === "survey" && (
          <motion.div
            key="survey"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.33 }}
          >
            <SurveyQuestion
              questionNumber={currentQuestion}
              totalQuestions={5}
              selectedAnswer={answers[currentQuestion] || ""}
              onNext={() => setCurrentQuestion((prev) => Math.min(prev + 1, 5))}
              onPrevious={() =>
                setCurrentQuestion((prev) => Math.max(prev - 1, 1))
              }
              onComplete={handleComplete}
              onQuestionSelectorOpen={() => setShowQuestionSelector(true)}
              onAnswered={(answer) =>
                handleAnswerQuestion(currentQuestion, answer)
              }
              onBegin={handleBegin}
            />
          </motion.div>
        )}

        {currentScreen === "thank-you" && (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <ThankYouPage onFinish={() => setCurrentScreen("welcome")} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQuestionSelector && (
          <QuestionSelector
            currentQuestion={currentQuestion}
            totalQuestions={5}
            answeredQuestions={answeredQuestions}
            onSelect={handleQuestionSelect}
            onClose={() => setShowQuestionSelector(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
