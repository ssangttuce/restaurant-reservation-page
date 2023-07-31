let reservationList = [
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-30',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-31',
    hour: '11',
    minute: '30',
    personnel: 4,
    tablenumber: 10,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-31',
    hour: '13',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-30',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-31',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-30',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-30',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-30',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
  {
    name: '',
    phone: '010-1234-5678',
    date: '2023-07-30',
    hour: '10',
    minute: '30',
    personnel: 4,
    tablenumber: 6,
  },
];

const formNameList = ['name', 'phone', 'date', 'hour', 'minute', 'personnel', 'tablenumber'];

const tableCount = 16;
const open = 10;
const close = 20;

const openningHours = () => {
  let array = [];
  for (let time = open; time < close; time++) {
    array.push(time);
  }
  return array;
};

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
}

function searchByDate() {
  const date = document.querySelector('[name = "search-date"]').value;
  const reserved = [];
  for (let reservation of reservationList) {
    if (reservation.date == date) {
      reserved.push(reservation);
    }
  }
  return reserved;
}

export { reservationList, setReservation, searchByDate, openningHours, tableCount };
