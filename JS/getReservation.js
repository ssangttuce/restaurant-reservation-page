function getTable() {
  let table = document.getElementById('table-num');
  table.innerText = '1';
}

function genTable() {
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
  const cc = document.createElement('button');
  console.log(typeof cc);
}

function getReservation() {
  let row = '<tr><td></td><td></td><td></td><td></td><td></td></tr>';
  let searchTable = document.getElementsByTagName('tbody');
  for (let i = 0; i < 20; i++) {
    searchTable[0].innerHTML += row;
    //마지막 td에 cc추가하기
  }
}

// genTable();
