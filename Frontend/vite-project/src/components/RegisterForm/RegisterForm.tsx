import React, { useState } from 'react';
import './registerForm.css';
import { RegisterFormProps } from "../../types/interfaceReg";

// RegisterForm-komponent som tar emot onSubmit-funktionen som prop
const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        password: '',
        repeatPassword: '',
        address: '',
        email: ''
    });

    // Funktion som uppdaterar state för varje fält i formuläret
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;  // Extrahera name och value från input-fältet
        setFormData((prevData) => ({
            ...prevData,        // Bevara gamla värden
            [name]: value     // Uppdatera det specifika fältet
        }));
    };

    // Funktion som körs när formuläret skickas
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            alert('Passwords do not match!');
            return;
        }
        onSubmit(formData);   // Anropa onSubmit med formulärdata
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat Password"
                required
            />
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
