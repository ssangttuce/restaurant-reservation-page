const todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

function initialSetting() {
  function genTimeline(openTime) {
    const timeline = document.querySelector('.reservation-table-head tr');
    console.log(timeline);
    for (let i = 0; i < openTime; i++) {
      let th = document.createElement('th');
      th.className = 'reservation-table-header';
      th.innerText = `${parseInt(i / 2)}:${i % 2 === 0 ? '00' : '30'}`;
      timeline.appendChild(th);
    }
  }

  function addTable(tableCount) {
    //서버에서 받아오기
    const res = document.querySelector('.reservation-table-instance');
    for (let i = 1; i <= tableCount; i++) {
      let table = document.createElement('tr');
      table.className = 'table-row';
      table.innerHTML = `<td id="table-${i}">` + `T${i}` + '</td>';
      res.appendChild(table);
      getRBlocks(table);
    }
  }

  function getRBlocks(table) {
    for (let i = 0; i < 48; i++) {
      let td = document.createElement('td');
      td.className = parseInt(Math.random() * 2 + 1) === 1 ? 'available' : 'unavailable';
      // server에서 조회한 값으로 대체할 예정
      table.appendChild(td);
    }
  }
  genTimeline(48);
  addTable(20);
}
