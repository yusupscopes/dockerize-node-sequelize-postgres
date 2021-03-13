const db = require("../database");

const seed = async () => {
  await db.sequelize.sync();

  const customers = await db.Customer.bulkCreate([
    {
      id: 1,
      firstName: "Tommy",
      lastName: "Bejo",
      email: "tommy@mail.com",
      item: "Barang1",
      quantity: 2,
      totalPrice: 100000,
    },
    {
      id: 2,
      firstName: "Joko",
      lastName: "Widodo",
      email: "joko@mail.com",
      item: "Barang2",
      quantity: 1,
      totalPrice: 50000,
    },
    {
      id: 3,
      firstName: "Jusuf",
      lastName: "Kalla",
      email: "jusuf@mail.com",
      item: "Barang3",
      quantity: 3,
      totalPrice: 150000,
    },
    {
      id: 4,
      firstName: "Tommy",
      lastName: "Bejo",
      email: "tommy@mail.com",
      item: "Barang2",
      quantity: 2,
      totalPrice: 100000,
    },
    {
      id: 5,
      firstName: "Robert",
      lastName: "Garcia",
      email: "robert@mail.com",
      item: "Barang4",
      quantity: 3,
      totalPrice: 150000,
    },
    {
      id: 6,
      firstName: "Olivier",
      lastName: "Giroud",
      email: "giroud@mail.com",
      item: "Barang4",
      quantity: 2,
      totalPrice: 100000,
    },
    {
      id: 7,
      firstName: "Mesut",
      lastName: "Oziil",
      email: "oziil@mail.com",
      item: "Barang5",
      quantity: 2,
      totalPrice: 100000,
    },
    {
      id: 8,
      firstName: "Andre",
      lastName: "Arshavin",
      email: "arshavin@mail.com",
      item: "Barang6",
      quantity: 3,
      totalPrice: 150000,
    },
    {
      id: 9,
      firstName: "Hector",
      lastName: "Bellerin",
      email: "bellerin@mail.com",
      item: "Barang7",
      quantity: 4,
      totalPrice: 200000,
    },
    {
      id: 10,
      firstName: "Theo",
      lastName: "Walcott",
      email: "walcott@mail.com",
      item: "Barang7",
      quantity: 2,
      totalPrice: 100000,
    },
  ]);

  await db.sequelize.close();

  console.log("Seed success!");
};

seed();
