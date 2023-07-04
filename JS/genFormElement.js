function genTableNum(maxTableCount) {
  // get table count from sever and show user which table is available
  let table = document.getElementsByClassName('table-num');

  table.appendChild(document.createElement('option'));
  for (let i = 1; i < maxTableCount; i++) {
    let numOption = document.createElement('option');
    numOption.value = i;
    numOption.innerText = i;
    table.appendChild(numOption);
  }
}
