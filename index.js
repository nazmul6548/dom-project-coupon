const totalCard = document.querySelectorAll(".add-btn")
// console.log(totalCard);
for (const perCard of totalCard) {
    // console.log(perCard);
    perCard.addEventListener("click", function(event){
        
        
        const playerName =event.target.parentNode.childNodes[1].innerText;
        const PlayerPrice =event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const playerCatagory =event.target.parentNode.childNodes[5].childNodes[1].innerText
        const playerContainer = document.getElementById('selected-players-container')
        const div =document.createElement('div');
        div.classList.add('selected-players')
        const p =document.createElement('p');
        const p1 =document.createElement('p');
        const p2 =document.createElement('p');

        p.innerText=playerName;
        p1.innerText=PlayerPrice;
        p2.innerText=playerCatagory;
        
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);

        playerContainer.appendChild(div);


      
        updateTotalCost(PlayerPrice)
        updateGradTotal()
       
      });
}

function updateGradTotal(status) {
    const totalCost=convertedToInt('total-cost');
  if (status == undefined) {
    document.getElementById('grand-total').innerText =totalCost;
  }else {
const discountCost = document.getElementById('coupon-code').value;
if (discountCost == "love420") {
    const couponDis = totalCost * 0.2;
    document.getElementById('grand-total').innerText =totalCost-couponDis;
}else {
    alert('invalid coupon code')
}

  }
}

function updateTotalCost(value) {
    const totalCost=convertedToInt('total-cost');
        const totalPrice = parseInt(value) + totalCost
        // console.log(totalPrice);
        document.getElementById('total-cost').innerText = totalPrice
}

function convertedToInt(id) {
    const converted = document.getElementById(id);
    const value = converted.innerText;
    const finalInt = parseInt(value);
    return finalInt;
    // console.log(finalInt);
}
