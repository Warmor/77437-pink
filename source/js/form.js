(function() {
  var doc = document;

  var minus = doc.querySelector('.counter__btn--minus');
  var plus = doc.querySelector('.counter__btn--plus');
  var input = doc.querySelector('.counter__input');
  var minus_p = doc.querySelector('.counter--people .counter__btn--minus');
  var plus_p = doc.querySelector('.counter--people .counter__btn--plus');
  var input_p = doc.querySelector('.counter--people .counter__input');
  var companions = doc.querySelector('.companions');
  var del = doc.querySelectorAll('.companions .delete');
  var form = doc.querySelector('.main-form');
  

  minus.addEventListener('click', function() {
    changeInput(-1);
  });
  plus.addEventListener('click', function() {
    changeInput(1);
  });

  function changeInput(a) {
    if ((parseInt(input.value) + a >= 1) && (parseInt(input.value) + a <= 30)) {
      input.value = parseInt(input.value) + parseInt(a) + ' дней';
    };
  };

  minus_p.addEventListener('click', function() {
    changePInput(-1);
    delP();
  });
  plus_p.addEventListener('click', function() {
    if (parseInt(input_p.value) < 20) {
      changePInput(1);
      addP();
      var del = doc.querySelectorAll('.companions .delete');
      for (var i = 0; i < del.length; i++) {
        del[i].addEventListener('click', delButton);
      };
    }; 
    
  });


  function changePInput(a) {
    if ((parseInt(input_p.value) + a >= 0) && (parseInt(input_p.value) + a <= 20)) {
      input_p.value = parseInt(input_p.value) + parseInt(a) + ' чел.';
    };
  };

  function addP() {
    companions.innerHTML = companions.innerHTML + '<div class="companion-quantity"> \
      <div class="left-column"> \
        <p class="left-column__neader">№</p> \
        <span class="left-column__number">' + parseInt(input_p.value) + '</span> \
      </div> \
      <div class="right-column"> \
        <div class="right-column__item"> \
          <label class="right-column__label">ИМЯ: *</label> \
          <input class="right-column__input" type="text" name="companion-name" placeholder="Введите ваше имя" required> \
        </div> \
        <div class="right-column__item"> \
          <label class="right-column__label">ПРОЗВИЩЕ:</label> \
          <input class="right-column__input" type="text" name="companion-nick" placeholder="Ну как же без этого!"> \
        </div> \
      </div> \
      <div class="delete-column hidden-xs"><button class="delete" type="button">УДАЛИТЬ</button> \
      </div>\
    </div>';
  };
  function delP() {
    var companionArray = doc.querySelectorAll('.companion-quantity');
    var i = companionArray.length;
    companionArray[i-1].parentNode.removeChild(companionArray[i-1]);
  };
  for (var i = 0; i < del.length; i++) {
    del[i].addEventListener('click', delButton);
  };
  function delButton() {
    changePInput(-1);
    var del = this.parentNode.parentNode;
    del.parentNode.removeChild(del);
    var PNumber = doc.querySelectorAll('.left-column__number');
    for (var i = 0; i < PNumber.length; i++) {
      PNumber[i].textContent = i+1;
     };
  };
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = new FormData(form);
    request(data, function(response) {
      console.log(response);
    });
  });
  
  function request(data, fn) { 
    var xhr = new XMLHttpRequest();
    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + (new Date()).getTime());
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });
    xhr.send(data); 
  }


})();

