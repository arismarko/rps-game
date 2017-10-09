import userdetailsform from './enter-details.html';

export default class EnterDetails {
    
    getUsersName(user) {
        return new Promise(function(resolve, reject) {
            let viewplay = document.getElementById('gameview');

            viewplay.innerHTML = userdetailsform.replace('{{user}}', user);
      
            document.getElementById('get-details').querySelector('#sumbitname').addEventListener('click', () => {
                let formElement =  document.getElementById('get-details').querySelector('#name');
                if (formElement.value) {
                    resolve(formElement.value)
                } else {
                    reject(Error("it broke"));
                }
            });
        });
    }
}
