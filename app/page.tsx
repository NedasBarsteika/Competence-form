"use client";

import { SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "@/components/login-page";
import RegisterPage from "@/components/register-page";
import WelcomePage from "@/components/welcome-page";
import SurveyQuestion from "@/components/survey-question";
import ThankYouPage from "@/components/thank-you-page";
import QuestionSelector from "@/components/question-selector";
import axios from "axios";
import AdminPage from "@/components/admin-page";
import SurveyTypePage from "@/components/survey-type-page";

interface AnswerOption {
  answerId: string;
  answer: string;
  description: string;
}

interface Competence {
  competenceId: string;
  question: string;
  answerOptions: AnswerOption[];
  draftedAnswerId: string;
}

interface CompetenceSet {
  competenceSetId: string;
  competences: Competence[];
}

export default function SurveyApp() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showQuestionSelector, setShowQuestionSelector] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [questions, setQuestions] = useState<Competence[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [token, setToken] = useState<string | null>(null);
  const [competenceSetID1, setCompetenceSetID1] = useState<string>("");

  const handleLogin = async (username: string, password: string) => {
    if (!username || !password) {
      alert("Please enter Username and Password");
      return;
    }
    try {
      const response = await axios.post(
        "https://localhost:7278/api/user/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        const token = response.data;
        setToken(token);
        document.cookie = `token=${token}; path=/; max-age=3600; Secure; SameSite=Strict`;

        try {
          const response = await axios.get(
            "https://localhost:7278/api/admin/surveyResults",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCurrentScreen("admin");
        } catch (error) {
          handleBegin();

          // Fetch questions after login
          await fetchQuestions(token);
        }
      }
    } catch (error) {
      console.error(error);
      alert("Username or Password was incorrect");
    }
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
      .post("https://localhost:7278/api/user/register", {
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

  const fetchQuestions = async (token: string | null) => {
    try {
      const response = await axios.get<CompetenceSet>(
        "https://localhost:7278/api/questions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const conpetenceSet = response.data.competenceSetId;
      setCompetenceSetID1(conpetenceSet);

      // Deserialize questions
      const competences = response.data.competences;

      // Pre-fill answers based on drafts
      const initialAnswers: Record<number, string> = {};
      const answered: SetStateAction<number[]> = [];
      competences.forEach((competence, index) => {
        if (competence.draftedAnswerId) {
          initialAnswers[index + 1] = competence.draftedAnswerId;
          answered.push(index + 1);
        }
      });

      setQuestions(competences);
      setTotalQuestions(competences.length);
      setAnswers(initialAnswers);
      setAnsweredQuestions(answered);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const saveDraft = async (
    questionNumber: number,
    competenceSetId: string,
    competenceId: string,
    answerId: string
  ) => {
    if (!token) {
      console.error("No token found, user not logged in.");
      return;
    }

    try {
      await axios.post(
        "https://localhost:7278/api/questions/SaveAnsweredQuestion",
        {
          competenceSetId,
          competenceId,
          answerId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error saving draft:", error);
    }
  };

  const handleDiscard = async () => {
    if (!token) {
      console.error("No token found, user not logged in.");
      return;
    }

    try {
      // Send a request to delete all drafts
      const response = await axios.post(
        "https://localhost:7278/api/questions/deleteDrafts",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Clear local state
      setAnswers({});
      setAnsweredQuestions([]);
      console.log("All drafts cleared successfully.");
    } catch (error) {
      console.error("Error discarding drafts:", error);
    }
    setCurrentScreen("welcome");
  };

  const finalizeDraft = async () => {
    if (!token) {
      console.error("No token found, user not logged in.");
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7278/api/questions/finalizeDraft",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    }
    catch (error) {
      console.error("Error finalizing drafts:", error);
    }
  }

  const handleBegin = () => {
    setCurrentScreen("welcome");
  };

  const handleStartSurvey = () => {
    setCurrentScreen("survey");
    setCurrentQuestion(1);
  };

  const handleComplete = () => {
    finalizeDraft();
    setCurrentScreen("thank-you");
  };

  const handleQuestionSelect = (questionNumber: number) => {
    setCurrentQuestion(questionNumber);
    setShowQuestionSelector(false);
  };

  const handleAnswerQuestion = (
    questionNumber: number,
    answerId: string | null
  ) => {
    const question = questions[questionNumber - 1];
    if (answerId) {
      setAnswers((prev) => ({ ...prev, [questionNumber]: answerId }));
      if (!answeredQuestions.includes(questionNumber)) {
        setAnsweredQuestions((prev) => [...prev, questionNumber]);
      }

      // Save draft
      saveDraft(
        questionNumber,
        competenceSetID1,
        question.competenceId,
        answerId
      );
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
              onStart={() => setCurrentScreen("survey-type")}
            />
          </motion.div>
        )}

        {currentScreen === "survey-type" && (
          <motion.div
            key="survey-type"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <SurveyTypePage
              onTestMode={handleStartSurvey}
              onSelfEvaluationMode={handleStartSurvey}
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
              question={questions[currentQuestion - 1]}
              questionNumber={currentQuestion}
              totalQuestions={totalQuestions}
              selectedAnswer={answers[currentQuestion] || ""}
              onNext={() => setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions))}
              onPrevious={() =>
                setCurrentQuestion((prev) => Math.max(prev - 1, 1))
              }
              onComplete={handleComplete}
              onQuestionSelectorOpen={() => setShowQuestionSelector(true)}
              onAnswered={(answer) =>
                handleAnswerQuestion(currentQuestion, answer)
              }
              onDiscardDraft={handleDiscard}
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

        {currentScreen === "admin" && token && (
          <motion.div
            key="admin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <AdminPage token={token} onSignOut={() => setCurrentScreen("login")} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQuestionSelector && (
          <QuestionSelector
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            answeredQuestions={answeredQuestions}
            onSelect={handleQuestionSelect}
            onClose={() => setShowQuestionSelector(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
