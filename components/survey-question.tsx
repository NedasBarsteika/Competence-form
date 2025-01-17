"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "./images/skillit.png";
import Image from "next/image";

interface AnswerOption {
  answerId: string;
  answer: string;
  description: string;
}

interface Competence {
  competenceId: string;
  question: string;
  answerOptions: AnswerOption[];
}

interface SurveyQuestionProps {
  question: Competence;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
  onQuestionSelectorOpen: () => void;
  onAnswered: (answer: string | null) => void;
  onDiscardDraft: () => Promise<void>;
  onBegin: () => void;
}

export default function SurveyQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onNext,
  onPrevious,
  onComplete,
  onQuestionSelectorOpen,
  onAnswered,
  onDiscardDraft,
  onBegin,
}: SurveyQuestionProps) {
  const [progress, setProgress] = useState(
    (questionNumber - 1) / (totalQuestions - 1)
  );
  const [showExitModal, setShowExitModal] = useState(false);
  const [expandedOption, setExpandedOption] = useState<string | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    const newProgress = (questionNumber - 1) / (totalQuestions - 1);
    setProgress(newProgress);
    setExpandedOption(null);
  }, [questionNumber, totalQuestions]);

  const handleValueChange = (answerId: string) => {
    if (answerId === selectedAnswer) {
      onAnswered(null);
    } else {
      onAnswered(answerId);
    }
  };

  const toggleDropdown = (option: string) => {
    setExpandedOption((prev) => (prev === option ? null : option));
  };

  const handleSaveDraft = () => {
    onBegin();
  };

  const onSubmitModal = () => {
    setShowSubmitModal(true);
  }

  const handleModalConfirm = () => {
    setShowSubmitModal(false);
    onComplete();
  };

  const handleModalCancel = () => {
    setShowSubmitModal(false);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-6 relative max-w-md mx-auto">
      {/* Exit Modal */}
      <AnimatePresence>
        {showExitModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1e1e] bg-opacity-50"
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
                    onDiscardDraft();
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
                  className="py-3 bg-gray-400 text-center text-black hover:bg-gray-300 transition-colors"
                  onClick={() => setShowExitModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSubmitModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
              <h3 className="text-lg font-medium text-center text-black mb-4">
                Are you sure you want to submit?
              </h3>
              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-green-500 text-white hover:bg-green-600"
                  onClick={handleModalConfirm}
                >
                  Confirm
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-white text-black hover:bg-gray-200"
                  onClick={handleModalCancel}
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
        <button className="p-2" onClick={() => setShowExitModal(true)}>
          <X className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-4 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-600 rounded-full"
            initial={{
              width: `${((questionNumber - 1) / (totalQuestions - 1)) * 100}%`,
            }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.33 }}
          />
        </div>
        <Button
          variant="ghost"
          className="p-2 bg-green-700 rounded-full hover:bg-green-600"
          onClick={onQuestionSelectorOpen}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-medium mb-8 text-center">
        {questionNumber}. {question.question}
      </h2>

      {/* Radio Options */}
      <div className="space-y-4">
        {question.answerOptions.map((option) => (
          <motion.div
            key={option.answerId}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col rounded-[20px] p-2 px-6 cursor-pointer ${selectedAnswer === option.answerId
                ? "bg-green-500 text-white"
                : "bg-white text-black"
              }`}
            onClick={() => handleValueChange(option.answerId)}
          >
            <div className="flex items-center justify-between">
              {/* Left: Radio Button */}
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="option"
                  value={option.answerId}
                  checked={selectedAnswer === option.answerId}
                  onChange={() => handleValueChange(option.answerId)}
                  className="cursor-pointer w-5 h-5"
                />
                <span className="text-lg font-medium">{option.answer}</span>
              </div>

              {/* Right: Toggle Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent interfering with the answer selection
                  toggleDropdown(option.answerId);
                }}
                className="flex items-center justify-center text-white bg-green-700 rounded-full w-10 h-10 hover:bg-green-600 relative z-10"
              >
                {expandedOption === option.answerId ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </button>
            </div>

            {/* Expanded Description */}
            <AnimatePresence>
              {expandedOption === option.answerId && (
                <motion.div
                  key="extra-info"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-2 bg-green-600/80 text-white p-4 rounded-[5px] text-sm"
                >
                  {option.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 mb-8 space-y-4">
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1 rounded-full bg-white text-black hover:bg-white/90 z-10"
            onClick={onPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            className="flex-1 rounded-full bg-green-500 text-black hover:bg-green-400 z-10"
            onClick={questionNumber === totalQuestions ? onSubmitModal : onNext}
          >
            {questionNumber === totalQuestions ? "Complete" : "Next"}
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
  );
}
