const NAMES = [
  'Delaine',
  'Wiley',
  'Garion',
  'Borris',
  'Tristian',
  'Welborne',
  'Bronwen',
  'Jeremias',
  'Elisha',
  'Ernest',
  'Radclyf',
  'Andrew',
  'Cade',
  'Tedmund',
  'Sewell',
  'Raimond',
];

export default function generateMockData() {
  const deliveries = [];
  for (let i = 0; i < 10; i++) {
    const delivery = {
      id: i + '',
      customer: NAMES[Math.random() * NAMES.length],
      from: {
        latitude: 1.3 + Math.random() / 10,
        longitude: 103.7439444 + Math.random() / 10,
        name: '449 Clementi Ave 3, Singapore 120449'},
      to: {
        latitude: 1.3 + Math.random() / 10,
        longitude: 103.7493035 + Math.random() / 10,
        name: '21 Lower Kent Ridge Rd, Singapore 119077'
      }
    };
    deliveries.push(delivery)
  }

  return deliveries;
}