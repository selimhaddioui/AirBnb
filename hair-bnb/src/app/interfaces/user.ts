export interface User {
    id: string;
    token: string | undefined;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isLessor: boolean;
}