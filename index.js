const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');

decreaseBtn.addEventListener('click', function () {
  const text = document.getElementById('inner-text');
  let textValue = parseInt(text.innerText);
  textValue = textValue - 1;
  text.innerText = textValue;
  console.log(textValue);
});
increaseBtn.addEventListener('click', function () {
  const text = document.getElementById('inner-text');
  let textValue = parseInt(text.innerText);
  textValue = textValue + 1;
  text.innerText = textValue;
  console.log(textValue);
});
