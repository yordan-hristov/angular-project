import { ICar } from "./car";

export interface IUser {
    username: string;
    email: string;
    id: string;
    number: string;
    role: string
    savedCars?: [ICar];
    rentedCars?: [ICar];
}