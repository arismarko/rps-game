import EnterDetails from '../src/js/components/enter-details/enter-details';

describe('Enter Details', () => {
     beforeEach(function() {
            var fixture = '<div id="gameview">test</div>';
            document.body.insertAdjacentHTML(
            'afterbegin', 
            fixture);
    });

	it('It should take user details and send them back', () => {
        let enterDetails = new EnterDetails();
        let promise = enterDetails.getUsersName("Player 1"); 
        
        document.getElementById('name').value = 'Aris';
        document.getElementById('sumbitname').click();

        return promise.then((name) => {
          expect(name).to.equal("Aris"); 
        });
	});

});
