import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import steps from "./images/steps.png";
import logo from "./images/skillit.png";

export default function LoginPage({ onLogin, onRegister }: { onLogin: (username: string, password: string) => void; onRegister: () => void }) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-between p-8">
      {/* Steps Image */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10"
      >
        <Image
          src={steps}
          alt="Steps Image"
          className="h-auto w-60 max-w-lg transition-all"
          priority
        />
      </motion.div>

      {/* Log In Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 text-center"
      >
        <h2 className="text-xl">Log In</h2>
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            placeholder="Username"
            className="w-full p-3 rounded-md text-black bg-gray-100 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full p-3 rounded-md text-black bg-gray-100 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full py-3 bg-green-500 rounded-md text-black font-medium hover:bg-green-300 transition-colors"
        >
          Log in
        </Button>

        <h2 className="text-xl">Don't have an account?</h2>

        <Button
          type="button"
          onClick={onRegister}
          className="w-full py-3 bg-green-500 rounded-md text-black font-medium hover:bg-green-300 transition-colors"
        >
          Sign Up
        </Button>
      </motion.form>

      {/* Logo */}
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
