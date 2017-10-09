import gameview from './game-view.html';
import EnterDetails from '../enter-details/enter-details.js';
import HumanPlayer from '../player/humanPlayer';
import PCPlayer from '../player/pcPlayer';
import Move from '../move/move';

import './game-view.scss';

export default class GameView {
    constructor () {
        
    }

    initialise () {
        let viewplay = document.getElementById('gameview');

        viewplay.innerHTML = gameview;   

        let usrvsusr = document.getElementById('inner-gameview').querySelector('#usrvsusr'),
            usrvpc = document.getElementById('inner-gameview').querySelector('#usrvpc'),
            pcvspc = document.getElementById('inner-gameview').querySelector('#pcvspc');

        usrvsusr.addEventListener('click', () => {
            let enterDetails = new EnterDetails(),
                player1,
                player2,
                move1,
                move2;
                      
            enterDetails.getUsersName("Player 1")
            .then((name) => {
               player1 = new HumanPlayer(name);
                
                enterDetails.getUsersName("Player 2")
                .then((name) => {
                    player2 = new HumanPlayer(name);
                    
                    player1.getMove()
                    .then((move) =>  {
                       move1 = new Move(player1, move);

                        player2.getMove() 
                        .then((move) => {
                            move2 = new Move(player2, move);
                            move1.compareMove(move2);
                        });

                    });
                })
                
            })
        });

        usrvpc.addEventListener('click', () => {
            new EnterDetails().getUsersName("Player 1")
                .then((name) => {
                let player1 = new HumanPlayer(name),
                    player2 = new PCPlayer();

                player1.getMove()
                .then((move) => {
                    let move1 = new Move(player1, move);
                    let move2 = new Move(player2, player2.getMove());
                    move2.compareMove(move1);
                })
            })
        });

        pcvspc.addEventListener('click', () => {
            let player1 = new PCPlayer(),
                player2 = new PCPlayer(),
                move1,
                move2;

                move1 = new Move(player1, player1.getMove());
                move2 = new Move(player2, player2.getMove());

                move1.compareMove(move2);
        });
    }
}