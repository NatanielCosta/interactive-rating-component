const 
  btnsRate = document.querySelectorAll('.card_ratingState_rateContainer-rate'),
  btnSubmit = document.querySelector('.card_ratingState-btnSubmit'),
  cardRatingState = document.querySelector('.card_ratingState'),
  cardThanksState = document.querySelector('.card_thanksState')
  ;
  
  let 
  rating = document.querySelector('.card_thanksState_ratingContainer-rating'),
  rateValue
;

function handleRate(event) {
  btnsRate.forEach((item) => item.classList.remove('rateSelect'));
  rateValue = event.target.innerHTML
  event.target.classList.add('rateSelect');
}

btnsRate.forEach((item) => item.addEventListener('click', handleRate));

function handleSubmit() {
  if (rateValue != undefined) {
    rating.innerHTML = rateValue;
    cardRatingState.style.display = 'none';
    cardThanksState.style.display = 'grid';
  }
}

btnSubmit.addEventListener('click', handleSubmit);