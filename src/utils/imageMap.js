// Public path image mapping - Vite serves from public/ folder as /
const getImageUrl = (path) => {
  // Encode spaces and special characters in the path
  const encodedPath = path.split('/').map(part => encodeURIComponent(part)).join('/');
  return `/assets/${encodedPath}`;
};

export const projectImages = {
  1: [
    getImageUrl('Elite Grand/Screenshot 2026-04-07 123609.png'),
    getImageUrl('Elite Grand/Screenshot 2026-04-07 123614.png'),
    getImageUrl('Elite Grand/Screenshot 2026-04-07 123624.png'),
  ],
  2: [
    getImageUrl('Regalia/Screenshot 2026-04-07 123845.png'),
    getImageUrl('Regalia/Screenshot 2026-04-07 123852.png'),
    getImageUrl('Regalia/Screenshot 2026-04-07 123900.png'),
  ],
  3: [
    getImageUrl('Growvix CRM/Screenshot 2026-04-07 124037.png'),
    getImageUrl('Growvix CRM/Screenshot 2026-04-07 124045.png'),
    getImageUrl('Growvix CRM/Screenshot 2026-04-07 124052.png'),
  ],
  4: [
    getImageUrl('Pyramid inventory/Screenshot 2026-04-07 124202.png'),
    getImageUrl('Pyramid inventory/Screenshot 2026-04-07 124208.png'),
  ],
  5: [],
  6: [
    getImageUrl('Growvix CRM Mobile/a111.jpeg'),
    getImageUrl('Growvix CRM Mobile/e.jpeg'),
    getImageUrl('Growvix CRM Mobile/Screenshot 2026-03-30 102339.png'),
  ],
};
