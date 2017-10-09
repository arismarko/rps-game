import winner from './winner.html';
import tie from './tie.html';

export default class Move {
    constructor(player, move){
        this.player = player; 
        this.move = move;
    }

    compareMove(other){
        let _this = this,
            viewplay = document.getElementById('gameview'),
            winnerPlayer = '';

            if (_this.move === other.move) {
                viewplay.innerHTML = tie
                                    .replace("{{user1}}", _this.player.name)
                                    .replace("{{move1}}", _this.move)
                                    .replace("{{user2}}", other.player.name)
                                    .replace("{{move2}}", other.move);
            } else {
                switch (_this.move)
                {
                    case "ROCK":
                        winnerPlayer = (other.move == "SCISSOR") ? _this.player.name : other.player.name;
                        viewplay.innerHTML = winner
                            .replace("{{Player}}", winnerPlayer)
                            .replace("{{user1}}", _this.player.name)
                            .replace("{{move1}}", _this.move)
                            .replace("{{user2}}", other.player.name)
                            .replace("{{move2}}", other.move);
                        break;
                    case "PAPER":
                        winnerPlayer = (other.move == "ROCK") ? _this.player.name : other.player.name;
                        viewplay.innerHTML = winner
                            .replace("{{Player}}", winnerPlayer)
                            .replace("{{user1}}", _this.player.name)
                            .replace("{{move1}}", _this.move)
                            .replace("{{user2}}", other.player.name)
                            .replace("{{move2}}", other.move);
                        break;
                    case "SCISSOR":
                        winnerPlayer = (other.move == "PAPER") ? _this.player.name : other.player.name;
                        viewplay.innerHTML = winner
                            .replace("{{Player}}", winnerPlayer)
                            .replace("{{user1}}", _this.player.name)
                            .replace("{{move1}}", _this.move)
                            .replace("{{user2}}", other.player.name)
                            .replace("{{move2}}", other.move);
                        break;
                }
            }
    }
}