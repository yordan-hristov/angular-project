import { IUser } from "./user";

export interface ICar {
    location: string,
    _id: string,
    brand: string,
    model: string,
    year: number,
    transmission: string,
    doors: number,
    seats: number,
    fuel: string,
    price: number,
    imageUrl: string,
    hp: number,
    rentedBy: string[],
    savedBy: string[]
}