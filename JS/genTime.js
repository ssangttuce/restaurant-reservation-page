function genHour(openHour) {
  let list = document.querySelector('.hour');
  optionTagGenerator(list, openHour);
}

function genMinutes(minuteOption) {
  let list = document.querySelector('.minute');
  optionTagGenerator(list, minuteOption);
}

function optionTagGenerator(target, objectSet) {
  for (let i = 0; i < objectSet.length; i++) {
    let option = document.createElement('option');
    option.value = objectSet[i];
    option.innerText = objectSet[i];
    target.appendChild(option);
  }
}
genHour([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
genMinutes(['00', '30']);
