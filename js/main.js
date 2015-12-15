(function() {

  var elements = document.querySelectorAll(".counter");
  for (var i = 0; i < elements.length; i++) {
    initNumberField(elements[i]);
  }
  function initNumberField(parent) {
    var input = parent.querySelector("input");
    var minus = parent.querySelector(".counter__btn--minus");
    var plus = parent.querySelector(".counter__btn--plus");
    minus.addEventListener("click", function() {
      changeNumber(false);
    });
    plus.addEventListener("click", function() {
      changeNumber(true);
    });
    value-n
    function changeNumber(operation) {
      var value = Number(input.value);
      if (isNaN(value)) {
      value = 0;
    }
      if (operation) {
      input.value = value + 1;
    } else {
      input.value = value - 1;
      }
    }
  }
})();
