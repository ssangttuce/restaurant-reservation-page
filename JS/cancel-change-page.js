let reservationList = [
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 1,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 2,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 3,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 4,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 1,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 2,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 3,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 4,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 1,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 2,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 3,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 4,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 1,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 2,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 3,
  },
  {
    arrivalDateTime: '오늘',
    bookingDateTime: '지금',
    bookingStatus: 'c',
    covers: 4,
    id: 0,
    name: '',
    phoneNumber: '01053413270',
    tableNumber: 4,
  },
];

let inquiredList = [];

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
      reservationInfo += `<td class="reservation-table-header">` + `${requiredReservation.arrivalDateTime}` + `</td>`;
      reservationInfo += `<td class="reservation-table-header">` + `${requiredReservation.bookingDateTime}` + `</td>`;
      reservationInfo += `<td class="reservation-table-header">` + `${requiredReservation.tableNumber}` + `</td>`;
      reservationInfo += `<td class="reservation-table-header">` + `${requiredReservation.covers}` + `</td>`;
      inquiredList.push(reservationInfo);

      let reservationRow = document.createElement('tr');
      reservationRow.setAttribute('class', 'reservation-information');
      reservationRow.innerHTML = reservationInfo + `<td></td>`;

      for (let cc of ccButton(inquiredIndex)) {
        reservationRow.lastElementChild.appendChild(cc);
      }
      inquiredIndex++;

      searchResult.appendChild(reservationRow);
    }
  }

  const cancelbuttons = document.querySelectorAll('[id ^= "cancelItem-"]');
  for (let i = 0; i < cancelbuttons.length; i++) {
    cancelbuttons[i].addEventListener('click', () => {
      const cancelReservation = document.createElement('tr');
      cancelReservation.setAttribute('class', 'reservation-table-head');
      cancelReservation.innerHTML = inquiredList[i];
      document.querySelector('#cancel-reservation').appendChild(cancelReservation);
    });
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
    };

    let c2Label = document.createElement('label');
    c2Label.innerText = '취소';
    c2Label.setAttribute(`for`, `cancelItem-${cancelNum}`);
    c2Label.setAttribute('class', 'hoverEffect');
    return [c1, c2, c2Label];
  }
}
