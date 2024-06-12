
// Get the modal Container
var modalContainer = document.getElementById("myModalContainer");

//Get the modal
var modal = document.getElementById("myModal");

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
}

function decrementResults(result){
    let val = parseInt(document.getElementById(result).value);
    if(val > 0){ //prevent the system from ordering negative tickets
        
        val -= 1;
    }
    document.getElementById(result).value = val;
}

function incrementTickets(txt_amt, TicketAmt){
    let val = parseInt(document.getElementById(TicketAmt).value);
    if(val < 99){ //can only support up to 9 tickets
        val ++;
        document.getElementById(TicketAmt).value = val;
        let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) + 1;
        document.getElementById('itemsInCart').innerHTML = itemsInCart;
    }
    updateTicketAmt(txt_amt, val);
}

function decrementTickets(txt_amt, TicketAmt){
    let val = parseInt(document.getElementById(TicketAmt).value);
    let removeTicket = txt_amt.substr(2, txt_amt.length)
    if(val > 1){ //can only support up to 9 tickets
        val --;
        document.getElementById(TicketAmt).value = val;
        let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) - 1;
        document.getElementById('itemsInCart').innerHTML = itemsInCart;
    } else{
        RemoveTicket(TicketAmt, removeTicket)
    }
    updateTicketAmt(txt_amt, val);
}

function RemoveTicket(resultAmt, Ticket){
    let val = parseInt(document.getElementById(resultAmt).value);
    let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) - val;
    document.getElementById('itemsInCart').innerHTML = itemsInCart;
    document.getElementById(Ticket).style.display = "none";
    document.getElementById(resultAmt).value = 0;
}

function updateTicketAmt(txt_amt, amount){
    document.getElementById(txt_amt).innerText = "You Currently Have "+amount+" Tickets";
}

function bookNow(result, Item){
    let val = parseInt(document.getElementById(result).value);
    let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) + val;
    let cartAmt = parseInt(document.getElementById('c_'+result).value);
    cartAmt += val;
    document.getElementById('itemsInCart').innerHTML = itemsInCart;
    document.getElementById('c_'+result).value = cartAmt;
    updateTicketAmt('c_'+Item, cartAmt);

    if(val > 0){
        document.getElementById(Item).style.display = "block";
    }
} 

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modalContainer.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalContainer.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalContainer.style.display = "none";
  }
}