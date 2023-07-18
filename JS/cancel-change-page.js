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
  {
    arrivalDateTime: 'a',
    bookingDateTime: '오늘',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 16,
  },
];

let tRcnt = totalReservation.length;

function searchTableByName() {
  let userName = document.querySelector('#search-name').value;
  if (userName == null) return;

  let searchResult = document.querySelector('#reservation-list');
  searchResult.setAttribute('innerHTML', '');

  for (let i = 0; i < tR.length; i++) {
    if (tR[i].name === userName) {
      let requiredReservation = tR[i];

      let reservationInfo = '';
      reservationInfo += `<td>` + `${requiredReservation.bookingDateTime}` + `</td>`;
      reservationInfo += `<td>` + `${requiredReservation.bookingDateTime}` + `</td>`;
      reservationInfo += `<td>` + `${requiredReservation.tableNumber}` + `</td>`;
      reservationInfo += `<td>` + `${requiredReservation.covers}` + `</td>`;

      let reservationRow = document.createElement('tr');
      reservationRow.setAttribute('innerHTML', reservationInfo + `<td></td>`);

      for (let cc of ccButton(i)) {
        reservationRow.appendChild(cc);
      }
      reservationRow.lastElementChild.onclick = () => {
        const cancelReservation = document.createElement('tr');
        cancelReservation.setAttribute('innerHTML', reservationInfo);
        document.querySelector('#cancel-reservation').appendChild(cancelReservation);
        //삭제 버튼을 누르면 해당 행의 예약 정보를 취소 페이지에 넘겨주어야 함
      };

      searchResult.appendChild(reservationRow);
    }
  }

  function ccButton(cancelNum) {
    let c1 = document.createElement('button');
    c1.setAttribute('innerText', '변경');
    c1.setAttribute('class', 'change-button');
    c1.onclick = () => {
      location.href = '../html/changeReservation.html';
    };

    let c2 = document.createElement('input');
    c2.setAttribute('type', 'checkbox');
    c2.setAttribute('id', `cancel-${cancelNum}`);
    c2.setAttribute('name', 'cancel-reservation');
    c2.onclick = () => {
      let cancelModal = document.querySelector('#cancel-check-modal');
      cancelModal.style.visibility = 'visible';

      for (let i = 0; ; i++) {
        let cancelBtn = document.querySelector(`#cancel-${i}`);
        if (cancelBtn == null) break;
        cancelBtn.setAttribute('disabled', true);
      }
    };

    let c2Label = document.createElement('label');
    c2Label.setAttribute(`for`, `cancel-${cancelNum}`);
    c2Label.setAttribute('innerText', '취소');

    return [c1, c2, c2Label];
  }
}
