// import { totalReservation as tR } from './getReservation.js';
let tR = [
  {
    arrivalDateTime: 'a',
    bookingDateTime: '오늘',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '김상후',
    phoneNumber: '01053413270',
    tableNumber: 16,
  },
];

let tRcnt = totalReservation.length;

function searchTableByName() {
  let userName = document.getElementById('search-name').value;
  if (userName == null) return;
  let searchResult = document.getElementById('reservation-list');
  searchResult.innerHTML = '';

  for (let i = 0; i < tR.length; i++) {
    if (tR[i].name === userName) {
      let inquiredReservation = tR[i];
      let reservationRow = document.createElement('tr');

      let reservationInfo = `<td>` + `${inquiredReservation.bookingDateTime}` + `</td>`;
      reservationInfo += `<td>` + `${inquiredReservation.bookingDateTime}` + `</td>`;
      reservationInfo += `<td>` + `${inquiredReservation.tableNumber}` + `</td>`;
      reservationInfo += `<td>` + `${inquiredReservation.covers}` + `</td>`;
      reservationRow.innerHTML = reservationInfo + `<td></td>`;

      for (let cc of ccButton(i)) {
        reservationRow.lastElementChild.appendChild(cc);
      }
      i++;

      reservationRow.lastElementChild.lastElementChild.onclick = () => {
        const cancelReservation = document.createElement('tr');
        cancelReservation.innerHTML = reservationInfo;
        document.getElementById('cancel-reservation').appendChild(cancelReservation);
      };

      searchResult.appendChild(reservationRow);
    }
  }

  function ccButton(cancelNum) {
    // cc: cancel and change
    let c1 = document.createElement('button');
    let c2 = document.createElement('input');
    c1.innerText = '변경';
    // c1.value = '변경';
    c1.className = 'change-button';
    c2.setAttribute('type', 'checkbox');
    c2.id = `cancel-${cancelNum}`;
    c2.name = 'cancel-reservation';
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
}
