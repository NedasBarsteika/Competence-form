import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface QuestionSelectorProps {
  currentQuestion: number
  totalQuestions: number
  answeredQuestions: number[]
  onSelect: (questionNumber: number) => void
  onClose: () => void
}

export default function QuestionSelector({ 
  currentQuestion,
  totalQuestions,
  answeredQuestions,
  onSelect,
  onClose
}: QuestionSelectorProps) {
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 15, duration: 0.33 }}
        className="bg-green-800 rounded-3xl p-6 w-full max-w-md relative"
      >
        <Button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:opacity-70"
          variant="ghost"
        >
          <X className="w-6 h-6" />
        </Button>
        
        <div className="grid grid-cols-4 gap-4 mt-8">
          {questions.map((number) => (
            <Button
              key={number}
              onClick={() => onSelect(number)}
              className={`
                aspect-square rounded-xl flex items-center justify-center text-xl font-medium
                ${number === currentQuestion 
                  ? 'bg-gray-300 text-green-800' 
                  : answeredQuestions.includes(number)
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-black hover:bg-gray-100'}
              `}
            >
              {number}
            </Button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

