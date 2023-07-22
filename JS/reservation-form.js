import { setReservation } from './reservationStorage.js';

function optionTagGenerator(target, objectSet) {
  for (let i = 0; i < objectSet.length; i++) {
    let option = document.createElement('option');
    option.value = objectSet[i];
    option.innerText = objectSet[i];
    target.appendChild(option);
  }
}
//해당하는 object의 결번이나 불가 개체를 확인하여 반영해야 함
function genHour(openHour) {
  let list = document.querySelector('.hour');
  optionTagGenerator(list, openHour);
}

function genMinutes(minuteOption) {
  let list = document.querySelector('.minute');
  optionTagGenerator(list, minuteOption);
}

function genTableNum(maxTableCount) {
  let table = document.querySelector('.table-num');
  optionTagGenerator(table, maxTableCount);
}

genHour([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
genMinutes(['00', '30']);
genTableNum([1, 2, 3, 4, 5, 6]);

let asdasd = document.querySelector('form');
asdasd.addEventListener('submit', setReservation);
