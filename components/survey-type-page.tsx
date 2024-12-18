import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "./images/skillit.png";
import steps from "./images/steps.png";
import Image from 'next/image';

export default function SurveyTypePage({ onTestMode, onSelfEvaluationMode }: { onTestMode: () => void; onSelfEvaluationMode: () => void }) {  
return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-between p-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10"
      >
        <Image
          src={steps}
          alt="Competence Form"
          className="h-30 w-60 max-w-lg transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <h2 className="text-4xl mb-6">Please Select Your Preferred Survey Mode</h2>

        <div className="flex justify-center gap-4">
          <Button
            onClick={onTestMode}
            className="w-1/4 py-4 px-6 bg-green-500 rounded-full text-black font-medium flex items-center justify-center gap-2 hover:bg-green-400 transition-colors"
          >
            Test Mode
          </Button>

          <Button
            onClick={onSelfEvaluationMode}
            className="w-1/4 py-4 px-6 bg-green-500 rounded-full text-black font-medium flex items-center justify-center gap-2 hover:bg-green-400 transition-colors"
          >
            Self Evaluation Mode
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <Image
          src={logo}
          alt="Skillit Logo"
          className="h-auto w-48 max-w-lg mx-auto transition-all"
          priority
        />
      </motion.div>
    </div>
  );
}
