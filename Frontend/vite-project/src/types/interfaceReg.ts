// Definierar gränssnittet för registerformulärets data
export interface RegisterFormData {
    fullName: string;
    password: string;
    repeatPassword: string;
    address: string;
    email: string;
}

// Definierar gränssnittet för RegisterForm-komponenten
export interface RegisterFormProps {
    onSubmit: (formData: RegisterFormData) => void;   // Funktion som skickar in formulärdata vid registrering
}