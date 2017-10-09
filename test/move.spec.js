import Move from '../src/js/components/move/move';
import HumanPlayer from '../src/js/components/player/humanPlayer';

describe('Move', () => {
        beforeEach(function() {
                var fixture = '<div id="gameview">test</div>';
                document.body.insertAdjacentHTML(
                'afterbegin', 
                fixture);
        });

	it('User Selects a move and correct move is picked up', () => {
            let humanPlayer  = new HumanPlayer("Aris"),
                promise1;

            promise1 = humanPlayer.getMove();
            document.getElementById('rock').click();

           return  promise1.then((move) => {
                expect(move).to.equal('ROCK');
           });
    });
        
    it('Correct winner is chosen when one user selects ROCK and the other selects PAPER', () => {
        let humanPlayer1 = new HumanPlayer("Aris"),
            humanPlayer2 = new HumanPlayer("Peter"),
            move1,
            move2,
            resultValue;
       
        move1 = new Move(humanPlayer1, "ROCK");
        move2 = new Move(humanPlayer2, "PAPER");

        move1.compareMove(move2);    

        resultValue = document.getElementById('result').innerHTML;

        expect(resultValue).to.equal('Peter is the winner!');
    });

    it('Correct winner is chosen when one user selects PAPER and the other ROCK', () => {
        let humanPlayer1 = new HumanPlayer("Aris"),
            humanPlayer2 = new HumanPlayer("Peter"),
            move1,
            move2,
            resultValue;
       
        move1 = new Move(humanPlayer1, "PAPER");
        move2 = new Move(humanPlayer2, "ROCK");

        move1.compareMove(move2);    

        resultValue = document.getElementById('result').innerHTML;

        expect(resultValue).to.equal('Aris is the winner!');
    });

    it('Correct winner is chosen when one user selects SCISSOR and other selects PAPER', () => {
        let humanPlayer1 = new HumanPlayer("Aris"),
            humanPlayer2 = new HumanPlayer("Peter"),
            move1,
            move2,
            resultValue;
       
        move1 = new Move(humanPlayer1, "SCISSOR");
        move2 = new Move(humanPlayer2, "PAPER");

        move1.compareMove(move2);    

        resultValue = document.getElementById('result').innerHTML;

        expect(resultValue).to.equal('Aris is the winner!');
    });

    it('Correct winner is chosen when one user selects PAPER and the other selects SCISSOR', () => {
        let humanPlayer1 = new HumanPlayer("Aris"),
            humanPlayer2 = new HumanPlayer("Peter"),
            move1,
            move2,
            resultValue;
       
        move1 = new Move(humanPlayer1, "PAPER");
        move2 = new Move(humanPlayer2, "SCISSOR");

        move1.compareMove(move2);    

        resultValue = document.getElementById('result').innerHTML;

        expect(resultValue).to.equal('Peter is the winner!');
    });

    it('When one user picks PAPER and the other PAPER then it is tie', () => {
        let humanPlayer1 = new HumanPlayer("Aris"),
            humanPlayer2 = new HumanPlayer("Peter"),
            move1,
            move2,
            resultValue;
       
        move1 = new Move(humanPlayer1, "PAPER");
        move2 = new Move(humanPlayer2, "PAPER");

        move1.compareMove(move2);    

        resultValue = document.getElementById('result').innerHTML;

        expect(resultValue).to.equal('It is a tie');
    });
});
