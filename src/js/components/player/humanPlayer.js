import Player from './player';
import chooseMove from './choose-move.html';

export default class HumanPlayer extends Player {
    constructor(name) {
        super(name);
    }

    getMove() {
        let _this = this;

        return new Promise(function(resolve) {
            let viewplay = document.getElementById('gameview');
             viewplay.innerHTML = chooseMove.replace("{{name}}", _this.name);

            let rock = document.getElementById('choose-move').querySelector('#rock'),
                scissor = document.getElementById('choose-move').querySelector('#scissor'),
                paper = document.getElementById('choose-move').querySelector('#paper');

            rock.addEventListener('click', () => {
                resolve("ROCK");
            });

            scissor.addEventListener('click', () => {
                resolve("SCISSOR");
            });

            paper.addEventListener('click', () => {
                resolve("PAPER");
            });
       });
    }
}