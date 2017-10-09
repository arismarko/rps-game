import Player from './player';

export default class PCPlayer extends Player {
    constructor() {
        super("PC");
    }

    getMove(){
        let moves = ["ROCK", "PAPER", "SCISSOR"];
        return moves[Math.floor(Math.random()*moves.length)];
    }
}