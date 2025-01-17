import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "./images/skillit.png";
import steps from "./images/steps.png";
import Image from 'next/image';

export default function WelcomePage({ onStart, onSignOut }: { onStart: () => void; onSignOut: () => void }) {
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
        className="text-center space-y-4"
      >
        <Image
          src={logo}
          alt="Skillit Logo"
          className="h-30 w-40 max-w-lg mx-auto transition-all"
        />
        <h2 className="text-xl">COMPETENCE ASSESSMENT FORM</h2>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md space-y-4 mb-16"
      >
        <h2 className="text-xl text-center mb-5">Ready to fill in?</h2>
        {/* Buttons Row */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={onSignOut}
            className="w-1/2 py-4 px-6 bg-gray-400 rounded-full text-black font-medium flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors"
          >
            Sign Out
          </Button>

          <Button
            onClick={onStart}
            className="w-1/2 py-4 px-6 bg-green-500 rounded-full text-black font-medium flex items-center justify-center gap-2 hover:bg-green-400 transition-colors"
          >
            Start
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
