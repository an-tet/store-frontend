const { faker } = require('@faker-js/faker');
const createRandomCostumer = () => {
  return {
    id: faker.string.uuid(),
    documentType: faker.helpers.arrayElement([
      'DNI',
      'NIE',
      'TIE',
      'PEP',
      'CE',
      'RC',
      'CC',
      'TI',
      'SC',
    ]),
    dni: faker.number.int(100000, 10000000000),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    birthday: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
  };
};

const createRandomUser = () => {
  return {
    id: faker.string.uuid(),
    documentType: faker.helpers.arrayElement([
      'DNI',
      'NIE',
      'TIE',
      'PEP',
      'CE',
      'RC',
      'CC',
      'TI',
      'SC',
    ]),
    dni: faker.number.int(100000, 10000000000),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    password: faker.internet.password(),
    birthday: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
    shirtSize: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
    status: faker.datatype.boolean(),
  };
};

const createRandomProductAndSupplier = () => {
  const supplierId = faker.string.uuid();
  const supplier = {
    id: supplierId,
    name: faker.company.name(),
    phone: faker.phone.number(),
  };

  const product = {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    detail: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    stock: faker.number.int(1, 100),
    status: faker.datatype.boolean(),
    supplierId: supplierId,
  };
  return { product, supplier };
};

for (let i = 0; i < 10; i++) {
  console.log(JSON.stringify(createRandomProductAndSupplier()));
}
