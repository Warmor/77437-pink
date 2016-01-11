(function() {
  var reviewArrowPrev = document.querySelector('.review__arrow--prev');
  var reviewArrowNext = document.querySelector('.review__arrow--next');
  var reviewInnerWrapper = document.querySelector('.review__inner-wrapper');
  var sliderCounter = 1;
  var radio1 = document.querySelector('.radio-1');
  var radio2 = document.querySelector('.radio-2');
  var radio3 = document.querySelector('.radio-3');


  function next() {
    if (sliderCounter == 1) {
      reviewInnerWrapper.classList.remove('post1');
      reviewInnerWrapper.classList.add('post2');
      sliderCounter = 2;
    } else {
      sliderCounter = 3;
      reviewInnerWrapper.classList.remove('post2');
      reviewInnerWrapper.classList.add('post3');
    };
    
  };
  function prev() {
    if (sliderCounter == 3) {
      reviewInnerWrapper.classList.remove('post3');
      reviewInnerWrapper.classList.add('post2');
      sliderCounter = 2;
    } else {
      sliderCounter = 1;
      reviewInnerWrapper.classList.remove('post2');
      reviewInnerWrapper.classList.add('post1');
    };
  };
  function selectRadio1() {
    sliderCounter = 1;
    reviewInnerWrapper.classList.remove('post3');
    reviewInnerWrapper.classList.remove('post2');
    reviewInnerWrapper.classList.add('post1');
    radio2.classList.remove('radio-checked');
    radio3.classList.remove('radio-checked');
    radio1.classList.add('radio-checked');
  };
  function selectRadio2() {
    sliderCounter = 2;
    reviewInnerWrapper.classList.remove('post1');
    reviewInnerWrapper.classList.remove('post3');
    reviewInnerWrapper.classList.add('post2');
    radio1.classList.remove('radio-checked');
    radio3.classList.remove('radio-checked');
    radio2.classList.add('radio-checked');
  };
  function selectRadio3() {
    sliderCounter = 3;
    reviewInnerWrapper.classList.remove('post1');
    reviewInnerWrapper.classList.remove('post2');
    reviewInnerWrapper.classList.add('post3');
    radio1.classList.remove('radio-checked');
    radio2.classList.remove('radio-checked');
    radio3.classList.add('radio-checked');
  };
  
  reviewArrowNext.addEventListener('click', next);
  reviewArrowPrev.addEventListener('click', prev);

  radio1.addEventListener('click', selectRadio1);
  radio2.addEventListener('click', selectRadio2);
  radio3.addEventListener('click', selectRadio3);

  
})();
