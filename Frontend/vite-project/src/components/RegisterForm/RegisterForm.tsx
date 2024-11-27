
import React, { useState } from 'react';
import './registerForm.css';
import { RegisterFormData, RegisterFormProps, Errors } from "../../types/interfaceReg";

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    // State för att hålla formulärdata
    const [formData, setFormData] = useState<RegisterFormData>({
        username: '',
        password: '',
        repeatPassword: '',
        address: '',
        email: '',
        role: 'user',  // Default role
    });

    // State for form errors
    const [errors, setErrors] = useState<Errors>({
        username: '',
        password: '',
        repeatPassword: '',
        email: '',
        address: '',
    });

    // Form validation function
    const validateForm = () => {
        const errors: Errors = {
            username: '',
            password: '',
            repeatPassword: '',
            email: '',
            address: '',
        };

        const emailRegex = /\S+@\S+\.\S+/;

        if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long.';
            console.log('Password validation failed:', formData.password);
        }

        if (formData.password !== formData.repeatPassword) {
            errors.repeatPassword = 'Passwords do not match!';
            console.log('Password mismatch:', formData.password, formData.repeatPassword);
        }

        if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address.';
            console.log('Invalid email address:', formData.email);
        }

        if (formData.address.trim() === '') {
            errors.address = 'Address is required.';
            console.log('Address is missing:', formData.address);
        }

        setErrors(errors);

        return Object.keys(errors).every((key) => errors[key as keyof Errors] === '');
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
            console.error('Form has errors:', errors);
            return;
        }

        console.log("Data being submitted to backend:", formData);
        console.log('Form is valid, submitting:', formData);
        onSubmit(formData);
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
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
            {errors.address && <div className="error-message">{errors.address}</div>}

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;



// Förfatare Katerina