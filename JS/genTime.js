function genHour() {
  let list = document.getElementsByClassName('hour');
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < 24; j++) {
      let h = document.createElement('option');
      h.value = j;
      h.innerText = j;
      list[i].appendChild(h);
    }
  }
}

function genMinute(min) {
  let list = document.getElementsByClassName('minute');
  for (let i = 0; i < list.length; i++) {
    let m = document.createElement('option');
    m.value = min;
    m.innerText = min;
    list[i].appendChild(m);
  }
}
genHour();
genMinute(00);
genMinute(30);
