
// Get the modal Container
var modalContainer = document.getElementById("myModalContainer");

//Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("basketLogo");
var submit = document.getElementById("submitContactForm");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const tickets = [['marsItem', 25000, 0], ['neptuneItem', 45000, 0], ['jupiterItem', 65000, 0], ['saturnItem', 40000, 0], ['uranusItem', 50000, 0], ['moonItem', 15000, 0]];

const ticketUpperLimit = 99;

function updater(result, r_value, priceText){
    let cartAmt = parseInt(document.getElementById(r_value).value);
    if(cartAmt < ticketUpperLimit + 1){
        updateTicketAmt(result, cartAmt, priceText)
        document.getElementById('itemsInCart').innerHTML = cartAmt;
    } else{
        updateTicketAmt(result, ticketUpperLimit, priceText);
        document.getElementById(r_value).value = ticketUpperLimit;
        document.getElementById('itemsInCart').innerHTML = ticketUpperLimit;
    }
}

//setting up increasing and decreasing functions to add tickets in the flights age
function incrementResults(result){
    let val = parseInt(document.getElementById(result).value);
    if(val < ticketUpperLimit){ //can only support up to 9 tickets
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

function incrementTickets(txt_amt, TicketAmt, priceText){
    let val = parseInt(document.getElementById(TicketAmt).value);
    if(val < ticketUpperLimit){ //can only support up to 9 tickets
        val ++;
        document.getElementById(TicketAmt).value = val;
        let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) + 1;
        document.getElementById('itemsInCart').innerHTML = itemsInCart;
    } else{
        if(val > 0){
            document.getElementById(TicketAmt).value = ticketUpperLimit;
            document.getElementById('itemsInCart').innerHTML = ticketUpperLimit;
        }
    }
    updateTicketAmt(txt_amt, val, priceText);
}

function decrementTickets(txt_amt, TicketAmt, priceText){
    let val = parseInt(document.getElementById(TicketAmt).value);
    let removeTicket = txt_amt.substr(2, txt_amt.length) //getting the ticket name after removing the 'c_' prefix
    if(val > 1){ //can only support up to 9 tickets
        val --;
        document.getElementById(TicketAmt).value = val;
        let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) - 1;
        document.getElementById('itemsInCart').innerHTML = itemsInCart;
    } else{
        if(val > 0){
            RemoveTicket(TicketAmt, removeTicket)
        } else{
            document.getElementById(TicketAmt).value = 0;
            RemoveTicket(TicketAmt, removeTicket)
        }
        val = 0;
    }
    updateTicketAmt(txt_amt, val, priceText);
}

function RemoveTicket(resultAmt, Ticket){
    let val = parseInt(document.getElementById(resultAmt).value);
    let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) - val;
    document.getElementById('itemsInCart').innerHTML = itemsInCart;
    document.getElementById(Ticket).style.display = "none";
    document.getElementById(resultAmt).value = 0;
    for (let index = 0; index < tickets.length; index++) {
        var element = tickets[index][0];
        if(element == Ticket){
            tickets[index][2] = 0;
        }
    }
    updateTotalTicketCost();
}

function updateTicketAmt(txt_amt, amount, priceText){
    document.getElementById(txt_amt).innerText = "You Currently Have "+amount+" Tickets";
    let Item = txt_amt.substr(2, txt_amt.length);
    document.getElementById(priceText).innerHTML = "$"+priceChange(amount, Item);
    updateTotalTicketCost()
}

function priceChange(TicketAmt, TicketName){
    let _ticketAmt = TicketAmt;
    let _ticketName = TicketName;
    for (let index = 0; index < tickets.length; index++) {
        const element = tickets[index][0];
        if(element == _ticketName){
            let currentPrice = _ticketAmt * tickets[index][1];
            tickets[index][2] = currentPrice;
            console.log(tickets[index][2]);
            return currentPrice;
        }
    }
}

function updateTotalTicketCost(){
    var totalPrice = parseInt(document.getElementById("totPrice").innerHTML);
    var cost = 0;
    for (let index = 0; index < tickets.length; index++) {
        cost += tickets[index][2];
        totalPrice = cost;
        console.log(cost);
    }
    document.getElementById("totPrice").innerHTML = "$"+totalPrice;
}

function bookNow(result, Item, priceText){
    let val = parseInt(document.getElementById(result).value);
    let itemsInCart = parseInt(document.getElementById('itemsInCart').innerHTML) + val;
    let cartAmt = parseInt(document.getElementById('c_'+result).value);
    cartAmt += val;
    document.getElementById('itemsInCart').innerHTML = itemsInCart;
    document.getElementById('c_'+result).value = cartAmt;
    updateTicketAmt('c_'+Item, cartAmt, priceText);
    SaveCartData(cartAmt, 'c_'+Item);
    if(val > 0){
        document.getElementById(Item).style.display = "block";
    }
}

function SaveCartData(totalItems, cartItem){
    sessionStorage.setItem("cartItem", cartItem);
    sessionStorage.setItem("totalItems", totalItems);
}

function LoadTotalItem(cartAmount){
    let val = parseInt(document.getElementById(cartAmount).innerHTML) + parseInt(sessionStorage.getItem("totalItems"));
    if(val != null){
        document.getElementById(cartAmount).innerHTML = val;
    } else{
        console.log("working");
    }
}

function closeModal(){
    modalContainer.style.display = "none";
}

function openModal(){
    modal.style.display = "block"
}

function modalOpener(modal){
    document.getElementById(modal).style.display = "block";
}

function modalcloser(modal){
    document.getElementById(modal).style.display = "none";
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modalContainer.style.display = "block";
}

submit.onclick = function(){
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