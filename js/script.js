
//setting up increasing and decreasing functions to add tickets in the flights age
function incrementResults(){
    if(document.getElementById('result1').value < 10){ //can only support up to 9 tickets
        document.getElementById('result1').value += 1;
    }
    console.log(document.getElementById('result1').value); //making sure i have the correct values
}

function decrementResults(){
    if(document.getElementById('result1').value > 0){ //prevent the system from ordering negative tickets
        document.getElementById('result1').value -= 1;
    }
    
    console.log(document.getElementById('result1').value); //making sure i have the correct values again
}