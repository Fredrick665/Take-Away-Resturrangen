// Definierar gränssnittet för registerformulärets data
export interface RegisterFormData {
    username: string;
    password: string;
    repeatPassword: string;
    address: string;
    email: string;
    role: string;
}

// Definierar gränssnittet för RegisterForm-komponenten
export interface RegisterFormProps {
    onSubmit: (formData: RegisterFormData) => void;   // Funktion som skickar in formulärdata vid registrering
}


// Definierar typen för registreringsformulärfel
export type Errors = {
    password: string;
    repeatPassword: string;
    email: string;
};