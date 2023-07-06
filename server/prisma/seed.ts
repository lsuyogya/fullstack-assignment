import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const users = [
    { username: 'Test User1', password: 'test123' },
    { username: 'Test User2', password: 'test123' },
  ];
  const carts = [
    { userId: 1, books: {} },
    { userId: 2, books: {} },
  ];
  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  for (const cart of carts) {
    await prisma.cart.create({ data: cart });
  }

  const books = [
    {
      title: 'License To Die',
      author: 'Haris Orkin',
      thumbnailUrl:
        'https://pics.cdn.librarything.com//picsizes/49/d2/49d2dd170d85e1c596c5a453441444941414141_v5.jpg',
      price: 5499,
      isbn: '12345432',
      availableQty: 50,
      synopsis:
        "Hornitos State Mental Hospital houses the worst of the worst. Those convicted of violent criminal behavior and judged not guilty by reason of insanity. Mass murderers, serial killers, mad bombers, arsonists, terrorists, and now…James Flynn. Still convinced he's an international superspy, Flynn finds himself in the most dangerous predicament of his life.",
    },
    {
      title: 'Pet Sematary',
      author: 'Stephen King',
      thumbnailUrl:
        'https://images-na.ssl-images-amazon.com/images/P/0743412273.01._SX180_SCLZZZZZZZ_.jpg',
      price: 2499,
      isbn: '13384952',
      availableQty: 5,
      synopsis:
        "When Dr. Louis Creed takes a new job and moves his family to the idyllic rural town of Ludlow, Maine, this new beginning seems too good to be true. Despite Ludlow's tranquility, an undercurrent of danger exists here. Those trucks on the road outside the Creed's beautiful old home travel by just a little too quickly, for one thing...as is evidenced by the makeshift graveyard in the nearby woods where generations of children have buried their beloved pets.",
    },
    {
      title: 'The Vampire Lestat',
      author: 'Anne Rice',
      thumbnailUrl:
        'https://images-na.ssl-images-amazon.com/images/P/0345313860.01._SX180_SCLZZZZZZZ_.jpg',
      price: 32599,
      isbn: '15987456',
      availableQty: 7,
      synopsis: `Surrender to fiction's greatest creature of the night - Book II of the Vampire Chronicles The vampire hero of Anne Rice's enthralling novel is a creature of the darkest and richest imagination. Once an aristocrat in the heady days of pre-revolutionary France, now a rock star in the demonic, shimmering 1980s, he rushes through the centuries in search of others like him, seeking answers to the mystery of his eternal, terrifying exsitence. His is a mesmerizing story--passionate, complex, and thrilling. Praise for The Vampire Lestat   "Frightening, sensual . . . Anne Rice will live on through the ages of literature.`,
    },
    {
      title: 'The Queen Of The Damned',
      author: 'Anne Rice',
      thumbnailUrl:
        'https://pics.cdn.librarything.com/picsizes/69/70/697095ca3bacbd65979502f5451433041414141_v5.jpg',
      price: 3999,
      isbn: '12985647',
      availableQty: 3,
      synopsis: `Intertwines the stories of rock star and vampire Lestat, beautiful twins haunted by a gruesome tragedy, and Akasha, mother of all vampires, who dreams of godhood.`,
    },
    {
      title: 'Skeleton Crew',
      author: 'Stephen King',
      thumbnailUrl:
        'https://images-na.ssl-images-amazon.com/images/P/0451168615.01._SX180_SCLZZZZZZZ_.jpg',
      price: 1999,
      isbn: '14789632',
      availableQty: 11,
    },
  ];

  books.forEach(async (book) => {
    await prisma.book.create({ data: book });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
