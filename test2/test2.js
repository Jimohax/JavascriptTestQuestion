

const verve = document.getElementById('verve');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');


function submit(){
    if(verve.checked){
        console.log('You are paying with Verve');
    }else if (visa.checked){
        console.log('You are paying with Visa');
    }else if(mastercard.checked){
        console.log('You are paying with Mastercard');
    }else {

        console.log('You must select a payment method');
    }
}