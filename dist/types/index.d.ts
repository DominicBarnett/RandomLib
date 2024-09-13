declare function random(): number;
declare function randomN(n: number): number;
declare function randomNtoO(n: number, o: number): number;
declare function die(x: number): number;
declare function shuffle<T>(arr: T[]): T[];
declare function flip(t?: number): boolean;
declare function dieRoll(desc: string): number;
export { random, randomN, randomNtoO, die, shuffle, flip, dieRoll };
