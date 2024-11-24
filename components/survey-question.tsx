'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface SurveyQuestionProps {
  questionNumber: number
  totalQuestions: number
  selectedAnswer: string
  onNext: () => void
  onPrevious: () => void
  onComplete: () => void
  onQuestionSelectorOpen: () => void
  onAnswered: (answer: string | null) => void
}

export default function SurveyQuestion({
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onNext,
  onPrevious,
  onComplete,
  onQuestionSelectorOpen,
  onAnswered
}: SurveyQuestionProps) {
  const [progress, setProgress] = useState((questionNumber - 1) / (totalQuestions - 1))

  useEffect(() => {
    const newProgress = (questionNumber - 1) / (totalQuestions - 1)
    setProgress(newProgress)
  }, [questionNumber, totalQuestions])

  const handleValueChange = (value: string) => {
    if (value === selectedAnswer) {
      onAnswered(null)
    } else {
      onAnswered(value)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 relative max-w-md mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <X className="w-6 h-6" />
        <div className="flex-1 mx-4 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-green-600 rounded-full"
            initial={{ width: `${((questionNumber - 1) / (totalQuestions - 1)) * 100}%` }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.33 }}
          />
        </div>
        <Button variant="ghost" className="p-2" onClick={onQuestionSelectorOpen}>
          <ChevronLeft className="w-6 h-6 text-green-600" />
        </Button>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-medium mb-8 text-center">
        {questionNumber}. Question? Question? Question?
      </h2>

      {/* Radio Options */}
      <RadioGroup
        value={selectedAnswer}
        onValueChange={handleValueChange}
        className="space-y-4"
      >
        {['Never', 'Rarely', 'Sometimes', 'Often', 'Everyday'].map((option) => (
          <motion.div
            key={option}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={`flex items-center justify-between rounded-full p-4 px-6 cursor-pointer ${
              selectedAnswer === option ? 'bg-green-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => handleValueChange(option)}
          >
            <Label
              htmlFor={option}
              className="text-lg font-medium cursor-pointer flex-1"
            >
              {option}
            </Label>
            <RadioGroupItem
              value={option}
              id={option}
              className={selectedAnswer === option ? 'text-white' : 'text-green-600'}
            />
          </motion.div>
        ))}
      </RadioGroup>

      {/* Buttons */}
      <div className="mt-8 space-y-4">
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1 rounded-full bg-white text-black hover:bg-white/90"
            onClick={onPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            className="flex-1 rounded-full bg-green-500 text-black hover:bg-green-400"
            onClick={questionNumber === totalQuestions ? onComplete : onNext}
          >
            {questionNumber === totalQuestions ? 'Complete' : 'Next'}
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span className="font-bold text-xl">skillit</span>
      </div>

      {/* Decorative Curves */}
      <div className="fixed left-0 bottom-0 w-32 h-64 border-r border-green-600/20 rounded-full opacity-20" />
      <div className="fixed right-0 bottom-0 w-32 h-64 border-l border-green-600/20 rounded-full opacity-20" />
    </div>
  )
}

