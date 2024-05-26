// All test questions come here
/*1. Reverse a string ('apple' to 'elppa')
Algorithm

*/


    /*
    1. from str to array(split)
    2. reverse the array(reverse)
    3. array to str (join) 
    
    Function in a function
    Callback
    
    
    */  

    const revString = (str)=>{
        let arr = str.split('');
        arr.reverse();
        let newString = arr.join('');
        console.log(newString);
    }
revString('chigozie');

let warning = document.getElementById('subscribe')

function submit(){
    if(warning.checked){
        console.log('You are subscribed');
    }else{

        console.log('You are NOT subscribed');
    }
}









