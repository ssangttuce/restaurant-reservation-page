import { reservationList, setReservation } from './reservationStorage.js';

let inquiredList = [];

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', searchTableByName);

function searchTableByName() {
  let userName = document.querySelector('#search-name').value;
  if (userName == null) return;

  let searchResult = document.querySelector('#reservation-list');
  searchResult.innerHTML = '';

  let inquiredIndex = 0;
  for (let reservation of reservationList) {
    if (reservation.name === userName) {
      let reservationInfo = '';
      reservationInfo += `<td class="reservation-table-header">` + `${reservation.date}` + `</td>`;
      reservationInfo +=
        `<td class="reservation-table-header">` + `${reservation.hour}` + ':' + `${reservation.minute}` + `</td>`;
      reservationInfo += `<td class="reservation-table-header">` + `${reservation.tablenumber}` + `</td>`;
      reservationInfo += `<td class="reservation-table-header">` + `${reservation.personnel}` + `</td>`;
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
