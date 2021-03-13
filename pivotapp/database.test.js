const db = require("./database");
beforeAll(async () => {
  await db.sequelize.sync();
});

test("create customer", async () => {
  expect.assertions(1);
  const customer = await db.Customer.create({
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@mail.com",
    item: "Barang1",
    quantity: 2,
    totalPrice: 100000,
  });
  expect(customer.id).toEqual(1);
});

test("get customer", async () => {
  expect.assertions(2);
  const person = await db.Customer.findByPk(1);
  expect(person.firstName).toEqual("John");
  expect(person.lastName).toEqual("Doe");
});

test("delete customer", async () => {
  expect.assertions(1);
  await db.Customer.destroy({
    where: {
      id: 1,
    },
  });
  const customer = await db.Customer.findByPk(1);
  expect(customer).toBeNull();
});

afterAll(async () => {
  await db.sequelize.close();
});
