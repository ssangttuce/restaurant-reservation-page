function genHour(openHour) {
  let list = document.getElementsByClassName('hour');
  list[0].appendChild(document.createElement('option'));
  for (let j = 0; j < openHour; j++) {
    let h = document.createElement('option');
    h.value = j;
    h.innerText = j;
    list[0].appendChild(h);
  }
}

function genMinutes(minuteOption) {
  let list = document.getElementsByClassName('minute');
  list[0].appendChild(document.createElement('option'));
  for (let opt of minuteOption) {
    genMinute(opt);
  }

  function genMinute(min) {
    // 입장 시간, 퇴장 시간 있을까봐 이렇게 만듦

    for (let i = 0; i < list.length; i++) {
      let m = document.createElement('option');
      m.value = min;
      m.innerText = min;
      list[0].appendChild(m);
    }
  }
}

genHour(24);
genMinutes([00, 30]);
