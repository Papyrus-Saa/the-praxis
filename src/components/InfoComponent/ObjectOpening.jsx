

const openingHours = {
  Montag: {
    regular: [{ time: '8.00 - 12.30 Uhr' }, { time: '15.00 - 18.30 Uhr' }],
    withoutAppointment: [
      {
        time: '8.00 - 11.00 Uhr',
        bookingDeadline: 'bei telefonischer Anmeldung bis 10.00 Uhr',
      },
      {
        time: '15.00 - 17.00 Uhr',
        bookingDeadline: 'bei telefonischer Anmeldung bis 16.30 Uhr',
      },
    ],
  },
  Dienstag: {
    regular: [{ time: '8.00 - 12.30 Uhr' }],
    withoutAppointment: [
      {
        time: '8.00 - 11.00 Uhr',
        bookingDeadline: 'bei telefonischer Anmeldung bis 10.00 Uhr',
      },
    ],
  },
  Mittwoch: {
    regular: [{ time: '8.00 - 12.30 Uhr' }],
    withoutAppointment: [
      {
        time: '8.00 - 11.00 Uhr',
        bookingDeadline: 'bei telefonischer Anmeldung bis 10.00 Uhr',
      },
    ],
  },
  Donnerstag: {
    regular: [{ time: '8.00 - 12.30 Uhr' }],
    withoutAppointment: [
      {
        time: '8.00 - 11.00 Uhr',
        bookingDeadline: 'bei telefonischer Anmeldung bis 10.00 Uhr',
      },
    ],
  },
  Freitag: {
    regular: [{ time: '8.00 - 12.30 Uhr' }],
    withoutAppointment: [
      {
        time: '8.00 - 11.00 Uhr',
        bookingDeadline: 'bei telefonischer Anmeldung bis 10.00 Uhr',
      },
    ],
  },
  Blutenahme: {
    timeWithAppointment: 'nur mit Termin zwischen 8.00 und 10.30 Uhr',
  },
};

export default openingHours;