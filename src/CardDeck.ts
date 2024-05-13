import { Card } from "./Card";

export interface CardDeck{
    id:number;
    userId:number;
    nameOfDeck: String;
    Cards:Card[];
}