let reservationList = [
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 6,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 6,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 6,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 6,
  },
];

let tRcnt = totalReservation.length;

function searchTableByName() {
  let userName = document.querySelector('#search-name').value;
  if (userName == null) return;

  let searchResult = document.querySelector('#reservation-list');
  searchResult.innerHTML = '';

  let inquiredIndex = 0;
  for (let tR of reservationList) {
    if (tR.name === userName) {
      let requiredReservation = tR;

      let reservationInfo = '';
      reservationInfo += `<td>` + `${requiredReservation.arrivalDateTime}` + `</td>`;
      reservationInfo += `<td>` + `${requiredReservation.bookingDateTime}` + `</td>`;
      reservationInfo += `<td>` + `${requiredReservation.tableNumber}` + `</td>`;
      reservationInfo += `<td>` + `${requiredReservation.covers}` + `</td>`;

      let reservationRow = document.createElement('tr');
      reservationRow.setAttribute('class', 'reservation-information');
      reservationRow.innerHTML = reservationInfo + `<td></td>`;

      for (let cc of ccButton(inquiredIndex)) {
        reservationRow.lastElementChild.appendChild(cc);

        const cancelbuttons = document.querySelectorAll('[id ^= "cancelItem-"]');
        for (let cancelbutton of cancelbuttons) {
          cancelbutton.onclick = () => {
            const cancelReservation = document.createElement('tr');
            cancelReservation.innerHTML = reservationInfo;
            document.querySelector('#cancel-reservation').appendChild(cancelReservation);
          };
        }
      }
      inquiredIndex++;

      searchResult.appendChild(reservationRow);
    }
  }

  function ccButton(cancelNum) {
    let c1 = document.createElement('button');
    c1.innerText = '변경';
    c1.setAttribute('class', 'hoverEffect');
    c1.onclick = () => {
      location.href = '../html/changeReservation.html';
    };

    let c2 = document.createElement('input');
    c2.setAttribute('type', 'checkbox');
    c2.setAttribute('id', `cancelItem-${cancelNum}`);
    c2.setAttribute('name', 'cancel-reservation');
    c2.onclick = () => {
      let cancelModal = document.querySelector('#cancel-check-modal');
      cancelModal.style.visibility = 'visible';

      let cancelBtn = document.querySelectorAll(`[id *= 'cancelItem-']`);
      for (let button of cancelBtn) button.setAttribute('disabled', true);
    };

    let c2Label = document.createElement('label');
    c2Label.innerText = '취소';
    c2Label.setAttribute(`for`, `cancelItem-${cancelNum}`);
    c2Label.setAttribute('class', 'hoverEffect');
    return [c1, c2, c2Label];
  }
}
