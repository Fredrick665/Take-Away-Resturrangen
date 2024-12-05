import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";
import React, { useState } from "react";
import "./registerForm.css";
import {
  RegisterFormData,
  RegisterFormProps,
  Errors,
} from "../../types/interfaceReg";

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  // State för att hålla formulärdata
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    password: "",
    repeatPassword: "",
    address: "",
    email: "",
    role: "user", // Default role
  });

  // State for form errors
  const [errors, setErrors] = useState<Errors>({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
    address: "",
  });

  // Form validation function
  const validateForm = () => {
    const errors: Errors = {
      username: "",
      password: "",
      repeatPassword: "",
      email: "",
      address: "",
    };

    const emailRegex = /\S+@\S+\.\S+/;

    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
      console.log("Password validation failed:", formData.password);
    }

    if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = "Passwords do not match!";
      console.log(
        "Password mismatch:",
        formData.password,
        formData.repeatPassword
      );
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      console.log("Invalid email address:", formData.email);
    }

    if (formData.address.trim() === "") {
      errors.address = "Address is required.";
      console.log("Address is missing:", formData.address);
    }

    setErrors(errors);

    return Object.keys(errors).every(
      (key) => errors[key as keyof Errors] === ""
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validating the form before sending
    if (!validateForm()) {
      console.error("Form has errors:", errors);
      return;
    }

    console.log("Data being submitted to backend:", formData);
    console.log("Form is valid, submitting:", formData);
    onSubmit(formData);
  };
  const { fadeInUp, buttonHover } = useAnimationStore();
  return (
    <motion.form
      className="register-form"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
    >
      <motion.input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Full Name"
        required
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      <motion.input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      {errors.password && (
        <div className="error-message">{errors.password}</div>
      )}

      <motion.input
        type="password"
        name="repeatPassword"
        value={formData.repeatPassword}
        onChange={handleChange}
        placeholder="Repeat Password"
        required
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      {errors.repeatPassword && (
        <div className="error-message">{errors.repeatPassword}</div>
      )}

      <motion.input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        required
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
      {errors.address && <div className="error-message">{errors.address}</div>}

      <motion.input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      {errors.email && <div className="error-message">{errors.email}</div>}

      <motion.button
        type="submit"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        {...buttonHover}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Register
      </motion.button>
    </motion.form>
  );
};

export default RegisterForm;

// Författare Katerina
// Ändring av Fredrick. Animation Animation och åter Animation
