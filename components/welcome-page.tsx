import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function WelcomePage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-8">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-16 h-16 bg-green-500 rounded-full mt-16"
      />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold mb-4">skillit</h1>
        <h2 className="text-xl">COMPETENCE ASSESSMENT FORM</h2>
      </motion.div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md space-y-4 mb-16"
      >
        <Button
          onClick={onStart}
          className="w-full py-4 px-6 bg-green-500 rounded-full text-black font-medium flex items-center justify-center gap-2 hover:bg-green-400 transition-colors"
        >
          SSO
          <span className="text-xl">→</span>
        </Button>
      </motion.div>
    </div>
  )
}

