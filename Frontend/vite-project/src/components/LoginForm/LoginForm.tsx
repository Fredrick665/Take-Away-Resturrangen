
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

    return (
        <form className="login-form" onSubmit={handleSubmit}>


            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {/* Om det finns ett fel, visa det */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <button type="submit">Log in</button>

        </form>
    );
}

export default LoginForm;



// Förfatare Katerina