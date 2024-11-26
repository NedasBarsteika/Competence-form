'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import logo from "./images/skillit.png";
import Image from 'next/image';

interface SurveyQuestionProps {
  questionNumber: number
  totalQuestions: number
  selectedAnswer: string
  onNext: () => void
  onPrevious: () => void
  onComplete: () => void
  onQuestionSelectorOpen: () => void
  onAnswered: (answer: string | null) => void
  onBegin: () => void
}

export default function SurveyQuestion({
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onNext,
  onPrevious,
  onComplete,
  onQuestionSelectorOpen,
  onAnswered,
  onBegin

}: SurveyQuestionProps) {
  const [progress, setProgress] = useState((questionNumber - 1) / (totalQuestions - 1))
  const [showExitModal, setShowExitModal] = useState(false)

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

  // Will have to updated
  const handleDiscard = () => {
    onBegin()
  }

  // Will have to updated
  const handleSaveDraft = () => {
    onBegin()
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 relative max-w-md mx-auto">
      {/* Exit Modal */}
      <AnimatePresence>
        {showExitModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
              {/* Title */}
              <h3 className="text-lg font-medium text-center text-black mb-4">
                Do you want to discard or save your progress?
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-4">
                <Button
                  className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors"
                  onClick={() => {
                    setShowExitModal(false);
                    handleDiscard();
                  }}
                >
                  Discard
                </Button>
                <Button
                  className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors"
                  onClick={() => {
                    setShowExitModal(false);
                    handleSaveDraft();
                  }}
                >
                  Save Draft
                </Button>
                <Button
                  variant="ghost"
                  className="py-3 text-center text-black hover:text-gray-600 transition-colors"
                  onClick={() => setShowExitModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Top Bar */}
      <div className="flex items-center justify-between md:mt-0 mt-8 mb-8">
        <button
          className="p-2"
          onClick={() => setShowExitModal(true)}
        >
          <X className="w-6 h-6" />
        </button>
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
        className="sm:space-y-4 space-y-3"
      >
        {['Never', 'Rarely', 'Sometimes', 'Often', 'Everyday'].map((option) => (
          <motion.div
            key={option}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={`flex items-center justify-between rounded-full lg:p-4 p-3 px-6 cursor-pointer ${selectedAnswer === option ? 'bg-green-500 text-white' : 'bg-white text-black'
              }`}
            onClick={() => handleValueChange(option)}
          >
            {/* Option Text */}
            <span className="text-lg font-medium">{option}</span>

            {/* Radix Radio Item */}
            <RadioGroupItem
              value={option}
              id={option}
              className="h-4 w-4"
            />
          </motion.div>
        ))}
      </RadioGroup>

      {/* Buttons */}
      <div className="mt-8 mb-8 space-y-4">
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
        <Image
          src={logo}
          alt="Skillit Logo"
          className="h-15 w-20 max-w-lg mx-auto transition-all"
        />
      </div>

      {/* Decorative Curves */}
      <div className="fixed left-0 bottom-0 w-32 h-64 border-r border-green-600/20 rounded-full opacity-20" />
      <div className="fixed right-0 bottom-0 w-32 h-64 border-l border-green-600/20 rounded-full opacity-20" />
    </div>
  )
}

