function searchTableByName(userName) {
  //  user search booked table
  let table = document.getElementById('table-num');
  table.innerText = '1';
}

function genTableNum() {
  // get table count from sever and show user which table is available
  let table = document.getElementById('table-num');
  table.appendChild(document.createElement('option'));
  for (let i = 1; i < 17; i++) {
    let numOption = document.createElement('option');
    numOption.value = i;
    numOption.innerText = i;
    table.appendChild(numOption);
  }
}

function ccButton() {
  // cc: cancel and change
  let c1 = document.createElement('button');
  let c2 = document.createElement('button');
  c1.innerText = '변경';
  c2.innerText = '취소';
  c1.className = 'change-button';
  c2.className = 'cancel-button';
  // c1.onclick = "location.href = '../html/shiftTable.html'";
  c1.onclick = () => {
    location.href = '../html/shiftTable.html';
  };
  c2.onclick = () => {
    location.href = '../html/cancelTable.html';
  };
  return [c1, c2];
}

function searchReservationByName() {
  // 예약자의 모든 예약을 server에서 받음
  let searchResult = document.getElementById('reservation-list');
  for (let list of getDummyReservation(20)) {
    let res = document.createElement('tr');
    res.innerHTML += `<td>` + `${list.a}` + `</td>`;
    res.innerHTML += `<td>` + `${list.b}` + `</td>`;
    res.innerHTML += `<td>` + `${list.c}` + `</td>`;
    res.innerHTML += `<td>` + `${list.d}` + `</td>`;
    res.innerHTML += `<td></td>`;

    for (let cc of ccButton()) {
      res.lastElementChild.appendChild(cc);
    }
    searchResult.appendChild(res);
  }
}

function getDummyReservation(cnt) {
  let dummy = [];

  for (let i = 0; i < cnt; i++) {
    let reservation = { a: `a+${i}`, b: `b+${i}`, c: `c+${i}`, d: `d+${i}` };
    dummy.push(reservation);
  }
  return dummy;
}
searchReservationByName();
genTableNum();
