
export interface Hamster {
    map(arg0: (hamster: Hamster) => JSX.Element): import("react").ReactNode;
    id: string;
    name: string;
    age: number;
    wins: number;
    defeats: number;
    favFood: string;
    games: number;
    loves: string;
    imgName: string;
}