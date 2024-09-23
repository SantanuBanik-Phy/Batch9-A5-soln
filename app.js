


//target 
const selectedSeatEL = document.getElementById('selected-seat');
const totalBookedSeat = document.getElementById('total-booked');
const availableSeat = document.getElementById('available-seat');

const totalPriceEl = document.getElementById('total-price');

const couponInput = document.getElementById('coupon-field');
const applyCouponBtn = document.getElementById('coupon-btn');

const grandPriceValue = document.getElementById('grand-total');
const phoneNumber = document.getElementById('phone-number');
const nextButton = document.getElementById('next-button');
const noSeatBook = document.getElementById('default-text');

// const continueButton = document.getElementById('btn-continue');


let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event) {
const value = event.innerText;
if(selectedSeat.includes(value)){
    return alert('Seat already added');

}
else if (selectedSeat.length < 4){

    event.classList.add('bg-primary');
event.classList.add('text-white');
selectedSeat.push(event.innerText);
totalBookedSeat.innerText = selectedSeat.length;
// availableSeat.innerText = 40 - selectedSeat.length;
const availableSeatValue = parseFloat(availableSeat.innerText);
availableSeat.innerText = availableSeatValue - 1;

//remove no seat text
noSeatBook.classList.add("hidden");




selectedSeatEL.innerHTML += `
<li class="text-base font normal flex justify-between">
<span>${event.innerText}</span>
<span>Economic</span>
<span>550</span>
</li>
`
//update price 
totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    //active next button
    // const value2 = selectedSeatEL;
    const value3 = totalPriceEl.innerText;
    if ( value3 !== "" && !isNaN(value3)) 
     {
        document.getElementById('email-id').removeAttribute('disabled');
        document.getElementById('passenger').removeAttribute('disabled');
        phoneNumber.removeAttribute('disabled');
    }
    else{
        document.getElementById('email-id').setAttribute('disabled', 'true');
        document.getElementById('passenger').setAttribute('disabled', 'true');
        phoneNumber.setAttribute('disabled', 'true');
    }

    //active coupon button 
  if(selectedSeat.length > 3){
    couponInput.removeAttribute('disabled');
    applyCouponBtn.removeAttribute('disabled');
  }

}
else{
    return alert('Maximum seats reached');
}


//coupon button function
document.getElementById('coupon-btn').addEventListener('click',function(event){
    event.preventDefault();
    const couponCode = couponInput.value;
    if(couponCode === 'NEW50' ){
        totalPriceUpdated = totalPrice * 0.15;
        const grandTotalPrice = totalPrice - totalPriceUpdated;
        grandPriceValue.innerText = grandTotalPrice.toFixed(2);
        
    }
    else if(couponCode === 'Couple 20' ){
        totalPriceUpdated = totalPrice * 0.20;
        const grandTotalPrice = totalPrice - totalPriceUpdated;
        grandPriceValue.innerText = grandTotalPrice.toFixed(2);
      
    }
    else{
        return alert('Invalid coupon code');
    }

    //clear coupon input field
    const showCouponPriceEl = document.getElementById('show-coupon-price')
    showCouponPriceEl.innerHTML = `
     <p>Discount</p>
    <p>
    <span>-BDT: </span> 
    <span>${totalPriceUpdated.toFixed(2)}</span>
    </p>
    `

})

phoneNumber.addEventListener('input', function(event){
    const inputValue = event.target.value;
    if(inputValue.length == 11){
        nextButton.removeAttribute('disabled');
    }else{
        nextButton.setAttribute('disabled', true);
    }

})
document.getElementById('btn-continue').addEventListener('click', function(){
    window.location.reload();
})


}



