export interface User {
    id: string;
    token: string | undefined;
    firstName: string;
    lastName: string;
    isLessor: boolean;
    email: string;
    password: string;
}

// new interface like user with only optional properties
