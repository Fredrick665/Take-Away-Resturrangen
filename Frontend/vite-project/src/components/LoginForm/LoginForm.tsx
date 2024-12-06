import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";
import React, { useState } from "react";
import "./loginForm.css";
import { LoginFormProps } from "../../types/interfaceLog";

function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Ingångsverifiering
    if (!username || !password) {
      setErrorMessage("Both username and password are required.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    setErrorMessage(null);

    console.log("Submitting:", username, password); // Debugging log
    onSubmit(username, password);
  };
  const { fadeInUp } = useAnimationStore();
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <motion.input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
      <div>
        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>

      {/* Om det finns ett fel, visa det */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <motion.button
        type="submit"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Log in
      </motion.button>
    </form>
  );
}

export default LoginForm;

// Författare Katerina
// Ändring av Fredrick. Animation Animation och åter Animation
