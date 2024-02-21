const totalCard = document.querySelectorAll(".add-btn")
// console.log(totalCard);
for (const perCard of totalCard) {
    // console.log(perCard);
    perCard.addEventListener("click", function(event){
        
        
        const playerName =event.target.parentNode.childNodes[1].innerText;
        const PlayerPrice =event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const playerCatagory =event.target.parentNode.childNodes[5].childNodes[1].innerText
        const playerContainer = document.getElementById('selected-players-container')
        
        
 
        const firstCount = convertedToInt('cart');
        const firstLeft = convertedToInt('left')
        if (firstCount+1 > 6 || firstLeft <= 0) {
            alert('limit finish')
            return
        }
        event.target.setAttribute('disabled',false);
        event.target.parentNode.style.backgroundColor ="gray"


        
        




        const myBudget =convertedToInt('budget');
        const innerBudget = myBudget - parseInt(PlayerPrice);
        document.getElementById('budget').innerText=innerBudget


        const myCart = convertedToInt('cart');
        const innerCart = myCart +1 ;
        document.getElementById('cart').innerHTML=innerCart;


        const myLeft = convertedToInt('left');
        const innerLeft  = myLeft - 1;
        document.getElementById('left').innerHTML=innerLeft;



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
    document.getElementById('coupon-code').style.visibility = 'hidden';
}else {
    alert('invalid coupon code')
}
discountCost.target.setAttribute('disabled',false);

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
