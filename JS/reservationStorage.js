let reservationList = [
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-22',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
];

const formNameList = ['name', 'phone', 'date', 'hour', 'minute', 'personnel', 'tablenumber'];

function setReservation(event) {
  event.preventDefault();
  let newReservation = {
    name: '',
    phone: '',
    date: '',
    hour: '',
    minute: '',
    personnel: +'',
    tablenumber: +'',
  };

  for (let formName of formNameList) {
    newReservation[`${formName}`] = document.querySelector(`[name = "${formName}"]`).value;
  }
  reservationList.push(newReservation);
}

export { reservationList, setReservation };
