import { CardDeck } from "./CardDeck";

export interface User{
    id: number;
    username: String;
    decks:CardDeck[];
}