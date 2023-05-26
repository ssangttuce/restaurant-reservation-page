function searchTableByName(userName) {
  //  user search booked table
  let table = document.getElementById('table-num');
  table.innerText = '1';
}

function genTableNum() {
  // get table count from sever and show user which table is available
  let table = document.getElementsByClassName('table-num');
  for (let tableItem of table) {
    tableItem.appendChild(document.createElement('option'));
    for (let i = 1; i < 17; i++) {
      let numOption = document.createElement('option');
      numOption.value = i;
      numOption.innerText = i;
      tableItem.appendChild(numOption);
    }
  }
}

function ccButton(cancelNum) {
  // cc: cancel and change
  let c1 = document.createElement('button');
  let c2 = document.createElement('input');
  c1.innerText = '변경';
  c1.className = 'change-button';
  c2.setAttribute('type', 'checkbox');
  c2.id = `cancel-${cancelNum}`;
  let c2Label = document.createElement('label');
  c2Label.setAttribute(`for`, `cancel-${cancelNum}`);
  c2Label.innerText = '취소';

  c1.onclick = () => {
    location.href = '../html/changeReservation.html';
  };
  c2.onclick = () => {
    let cancelModal = document.getElementById('cancel-check-modal');
    cancelModal.style.visibility = 'visible';

    for (let i = 0; ; i++) {
      let cancelBtn = document.getElementById(`cancel-${i}`);
      if (cancelBtn == null) break;
      cancelBtn.disabled = true;
    }
  };

  return [c1, c2, c2Label];
}

function searchReservationByName() {
  // 예약자의 모든 예약을 server에서 받음
  let searchResult = document.getElementById('reservation-list');
  if (searchResult === null) {
    return;
  }
  let i = 0;
  for (let list of getDummyReservation(20)) {
    let res = document.createElement('tr');
    let resHtml = `<td>` + `${list.a}` + `</td>`;
    resHtml += `<td>` + `${list.b}` + `</td>`;
    resHtml += `<td>` + `${list.c}` + `</td>`;
    resHtml += `<td>` + `${list.d}` + `</td>`;
    res.innerHTML = resHtml + `<td></td>`;
    for (let cc of ccButton(i)) {
      res.lastElementChild.appendChild(cc);
    }
    i++;
    searchResult.appendChild(res);

    res.lastElementChild.lastElementChild.onclick = () => {
      let cancelReservation = document.createElement('tr');
      cancelReservation.innerHTML = resHtml;
      document.getElementById('cancel-reservation').appendChild(cancelReservation);
    };
  }

  function getDummyReservation(cnt) {
    let dummy = [];

    for (let i = 0; i < cnt; i++) {
      let reservation = { a: `a+${i}`, b: `b+${i}`, c: `c+${i}`, d: `d+${i}` };
      dummy.push(reservation);
    }
    return dummy;
  }
}

searchReservationByName();
genTableNum();
