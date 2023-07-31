import { searchByDate, openningHours, tableCount } from './reservationStorage.js';

const todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

let searchDate = document.querySelector('input[type = "date"]');
searchDate.setAttribute('value', todayDate);
searchDate.addEventListener('change', showMainTable);

initialSetting();
showMainTable();

function initialSetting() {
  function genTimeline() {
    const timeline = document.querySelector('.reservation-table-head tr');
    for (let i of openningHours()) {
      let th00 = document.createElement('th');
      th00.setAttribute('class', 'reservation-table-header');
      th00.innerText = `${i}:00`;
      timeline.appendChild(th00);

      let th30 = document.createElement('th');
      th30.setAttribute('class', 'reservation-table-header');
      th30.innerText = `${i}:30`;
      timeline.appendChild(th30);
    }
  }

  genTimeline();
}

function showMainTable() {
  function addTable() {
    searchByDate();
    const res = document.querySelector('.reservation-table-instance');
    res.innerHTML = '';

    for (let i = 1; i <= tableCount; i++) {
      let table = document.createElement('tr');
      table.setAttribute('class', 'table-row');
      table.innerHTML = `<td id="table-${i}">` + `T${i}` + '</td>';
      res.appendChild(table);
      getRBlocks(i, table);
    }

    function getRBlocks(tableNum, table) {
      for (let i of openningHours()) {
        let td00 = document.createElement('td');
        let td30 = document.createElement('td');
        td00.setAttribute('class', 'available');
        td30.setAttribute('class', 'available');

        for (let reservation of searchByDate()) {
          if (tableNum === reservation.tablenumber) {
            if (`${reservation.hour}` == `${i}`) {
              reservation.minute === '00'
                ? td00.setAttribute('class', 'unavailable')
                : td30.setAttribute('class', 'unavailable');
            }
          }
        }
        table.appendChild(td00);
        table.appendChild(td30);
      }
    }
  }
  addTable();
}
