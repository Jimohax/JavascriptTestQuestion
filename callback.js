// Callbacks are functions passed as an arguement to another function

function sumNum(a,b, callback){
   let sum = a + b;   
   callback(sum);
}

function displayConsole(sum){
    console.log(sum);
}


sumNum(5, 9, displayConsole);