
// Интерфейсы для данных с бэкенда
export interface Meta {
    currentPage: number;
    perPage: number;
    totalPages: number;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    address: string;
} 

export interface ServerResponse {
    meta: Meta;
    items: IUser[];
}



