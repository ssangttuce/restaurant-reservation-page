function getTable() {
  let table = document.getElementById('table-num');
  table.innerText = '1';
}

function ccButton() {
  const cc = document.createElement('button');
  console.log(typeof cc);
}

function getReservation(userName) {
  let row = "<tr><td></td><td></td><td></td><td></td><td class='ccButton'>  </td></tr>";
  let searchTable = document.getElementsByTagName('tbody');
  for (let i = 0; i < 20; i++) {
    searchTable[0].innerHTML += row;
    //마지막 td에 cc추가하기
  }
}
