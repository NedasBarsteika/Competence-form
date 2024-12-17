import { Button } from "@/components/ui/button"
import logo from "./images/skillit.png";
import steps from "./images/steps.png";
import Image from 'next/image';

export default function ThankYouPage({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-between p-8">
      <Image
          src={steps}
          alt="Competence Form"
          className="h-30 w-60 mt-10 max-w-lg transition-all"
      />
      
      <h2 className="text-xl text-center font-bold max-w-md mx-8 tracking-wide">
        Thank you! Your feedback will be sent to your manager.
      </h2>
      
      <div className="space-y-10 mb-5">
        <Button
          onClick={onFinish}
          className="w-full py-4 px-6 bg-green-500 rounded-full text-black font-medium hover:bg-green-400 transition-colors"
        >
          OK
        </Button>
        <Image
          src={logo}
          alt="Skillit Logo"
          className="h-15 w-20 max-w-lg mx-auto transition-all"
        />
      </div>
    </div>
  )
}

