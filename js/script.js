
// Get the modal
var modal = document.getElementById("myModalContainer");

// Get the button that opens the modal
var btn = document.getElementById("basketLogo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//setting up increasing and decreasing functions to add tickets in the flights age
function incrementResults(result){
    let val = parseInt(document.getElementById(result).value);
    if(val < 99){ //can only support up to 9 tickets
        val ++;
    }
    document.getElementById(result).value = val;
    
    console.log(val); //making sure i have the correct values
}

function decrementResults(result){
    let val = parseInt(document.getElementById(result).value);
    if(val > 0){ //prevent the system from ordering negative tickets
        
        val -= 1;
    }
    document.getElementById(result).value = val;
    console.log(val); //making sure i have the correct values again
}

function bookNow(result, Item){
    let val = parseInt(document.getElementById(result).value);
    let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) + val;
    document.getElementById('itemsInCart').innerHTML = itemsInCart;
    document.getElementById('c_'+result).value = val; //updating cart values

    if(val > 0){
        document.getElementById(Item).style.display = "block";
    }
} 

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}