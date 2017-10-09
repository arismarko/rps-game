require('./main.scss');

import GameView from './components/game-view/game-view';

document.addEventListener("DOMContentLoaded", function(){
    let gameView;
    
    const newGame = () => {
        gameView = new GameView();
        gameView.initialise();
    };

    document.getElementById('start').addEventListener('click', () => {
        document.getElementById('start-screen').className = "hidden";
        document.getElementById('restart-screen').classList.remove("hidden");
        newGame();
    });


    document.getElementById('restart').addEventListener('click', () => {
        document.getElementById('restart-screen').className = "hidden";
        document.getElementById('gameview').innerHTML = '';
        document.getElementById('start-screen').classList.remove("hidden");
    });


});
