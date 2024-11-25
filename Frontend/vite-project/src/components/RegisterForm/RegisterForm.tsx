import React, { useState, useEffect } from 'react';
import './registerForm.css';
import { RegisterFormData, RegisterFormProps } from "../../types/interfaceReg";

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<RegisterFormData>({
        fullName: '',
        password: '',
        repeatPassword: '',
        address: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        password: '',
        repeatPassword: '',
    });

    // lösenordsvalidering
    useEffect(() => {
        const validatePasswords = () => {
            let passwordError = '';
            let repeatPasswordError = '';

            if (formData.password && formData.password.length < 8) {
                passwordError = 'Password must be at least 8 characters long.';
            }

            if (formData.password && formData.repeatPassword && formData.password !== formData.repeatPassword) {
                repeatPasswordError = 'Passwords do not match!';
            }

            setErrors({
                password: passwordError,
                repeatPassword: repeatPasswordError,
            });
        };

        validatePasswords();
    }, [formData.password, formData.repeatPassword]);

    // Stöd för ändringar i formulärfält
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Stöd för att skicka formulär
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Om något fel stopar att skicka
        if (errors.password || errors.repeatPassword) {
            console.error('Form has errors:', errors);
            return;
        }


        onSubmit(formData);
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
            {errors.password && <div className="error-message">{errors.password}</div>}

            <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat Password"
                required
            />
            {errors.repeatPassword && <div className="error-message">{errors.repeatPassword}</div>}

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



// Förtfatare Katerina
