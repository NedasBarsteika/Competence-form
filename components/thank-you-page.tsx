import { Button } from "@/components/ui/button"

export default function ThankYouPage({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-8">
      <h1 className="text-5xl font-bold mt-16">skillit</h1>
      
      <p className="text-xl text-center max-w-md mx-8">
        Thank you! Your feedback will be sent to your manager.
      </p>
      
      <div className="space-y-4 mb-16">
        <Button
          onClick={onFinish}
          className="w-full py-4 px-6 bg-green-500 rounded-full text-black font-medium hover:bg-green-400 transition-colors"
        >
          OK
        </Button>
        <p className="text-center text-sm">skillit</p>
      </div>
    </div>
  )
}

