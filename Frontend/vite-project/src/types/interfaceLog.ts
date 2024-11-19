// Detta är ett gränssnitt för LoginForm-komponenten
export interface LoginFormProps {
    onSubmit: (
        username: string,    // Användarnamn som användaren skriver in
        password: string     // Lösenord som användaren skriver in
    ) => void;   // Funktionens resultat är void, vilket betyder att den inte returnerar något
};