// import './loginForm.css';
// import { LoginFormProps } from "../../types/interfaceLog";

// function LoginForm({ onSubmit }: LoginFormProps) {
//     // Denna funktion hindrar sidan från att laddas om vid formulärinlämning
//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         const formData = new FormData(event.target as HTMLFormElement);
//         const username = formData.get("username") as string;
//         const password = formData.get("password") as string;
//         onSubmit(username, password);
//     };

//     return (
//         <form className="login-form" onSubmit={handleSubmit}>
//             <input type="text" name="username" placeholder="Username" required />
//             <input type="password" name="password" placeholder="Password" required />
//             <button type="submit">Log in</button>
//         </form>
//     );
// }

// export default LoginForm;



import React, { useState } from "react";
import "./loginForm.css";
import { LoginFormProps } from "../../types/interfaceLog";

function LoginForm({ onSubmit }: LoginFormProps) {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        setErrorMessage(null);
        onSubmit(username, password);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <div className="error-message">{errorMessage}</div>
            <button type="submit">Log in</button>
        </form>
    );
}

export default LoginForm;
