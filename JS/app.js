function genTimeline() {
  const timeline = document.getElementById('reservation-table').firstElementChild.firstElementChild;
  for (let i = 0; i < 48; i++) {
    let th = document.createElement('th');
    th.className = 'reservation-table-header';
    th.innerText = `${parseInt(i / 2)}:${i % 2 === 0 ? '00' : '30'}`;
    timeline.appendChild(th);
  }
}

function addTable(tableCount) {
  //서버에서 받아오기
  const res = document.getElementById('reservation-block');
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

genTimeline();
addTable(20);
