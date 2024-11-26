'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoginPage from '@/components/login-page'
import WelcomePage from '@/components/welcome-page'
import SurveyQuestion from '@/components/survey-question'
import ThankYouPage from '@/components/thank-you-page'
import QuestionSelector from '@/components/question-selector'

export default function SurveyApp() {
  const [currentScreen, setCurrentScreen] = useState('login')
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showQuestionSelector, setShowQuestionSelector] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])
  const [answers, setAnswers] = useState<Record<number, string>>({})
  
  const handleLogin = (username: string, password: string) => {
    if (username && password) {
      setCurrentScreen('welcome')
    } else {
      alert('Please enter a valid username and password')
    }
  }

  const handleStartSurvey = () => {
    setCurrentScreen('survey')
  }

  const handleComplete = () => {
    setCurrentScreen('thank-you')
  }

  const handleQuestionSelect = (questionNumber: number) => {
    setCurrentQuestion(questionNumber)
    setShowQuestionSelector(false)
  }

  const handleAnswerQuestion = (questionNumber: number, answer: string | null) => {
    if (answer) {
      setAnswers(prev => ({ ...prev, [questionNumber]: answer }))
      if (!answeredQuestions.includes(questionNumber)) {
        setAnsweredQuestions(prev => [...prev, questionNumber])
      }
    } else {
      setAnswers(prev => {
        const newAnswers = { ...prev }
        delete newAnswers[questionNumber]
        return newAnswers
      })
      setAnsweredQuestions(prev => prev.filter(q => q !== questionNumber))
    }
  }

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <LoginPage onLogin={handleLogin} />
          </motion.div>
        )}

        {currentScreen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <WelcomePage onStart={handleStartSurvey} />
          </motion.div>
        )}
        
        {currentScreen === 'survey' && (
          <motion.div
            key="survey"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.33 }}
          >
            <SurveyQuestion 
              questionNumber={currentQuestion}
              totalQuestions={5}
              selectedAnswer={answers[currentQuestion] || ''}
              onNext={() => setCurrentQuestion(prev => Math.min(prev + 1, 5))}
              onPrevious={() => setCurrentQuestion(prev => Math.max(prev - 1, 1))}
              onComplete={handleComplete}
              onQuestionSelectorOpen={() => setShowQuestionSelector(true)}
              onAnswered={(answer) => handleAnswerQuestion(currentQuestion, answer)}
            />
          </motion.div>
        )}
        
        {currentScreen === 'thank-you' && (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
          >
            <ThankYouPage onFinish={() => setCurrentScreen('welcome')} />
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
  )
}

