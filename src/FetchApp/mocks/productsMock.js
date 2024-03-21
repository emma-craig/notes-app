import { faker } from "@faker-js/faker";

const productsMock = [
    {
      alt: faker.lorem.words(),
      avg_color: faker.color.human(),
      height: faker.number.int(),
      id: faker.number.int(),
      liked: faker.datatype.boolean(),
      photographer: faker.person.fullName(),
      photographer_id: faker.number.int(),
      photographer_url: faker.internet.url(),
      src: {
        original: faker.internet.url(),
        large2x: faker.internet.url(),
        large: faker.internet.url(),
        medium: faker.internet.url(),
        small: faker.internet.url(),
      },
      url: faker.internet.url(),
      width: faker.number.int(),
    },
    {
      alt: faker.lorem.words(),
      avg_color: faker.color.human(),
      height: faker.number.int(),
      id: faker.number.int(),
      liked: faker.datatype.boolean(),
      photographer: faker.person.fullName(),
      photographer_id: faker.number.int(),
      photographer_url: faker.internet.url(),
      src: {
        original: faker.internet.url(),
        large2x: faker.internet.url(),
        large: faker.internet.url(),
        medium: faker.internet.url(),
        small: faker.internet.url(),
      },
      url: faker.internet.url(),
      width: faker.number.int(),
    },
    {
      alt: faker.lorem.words(),
      avg_color: faker.color.human(),
      height: faker.number.int(),
      id: faker.number.int(),
      liked: faker.datatype.boolean(),
      photographer: faker.person.fullName(),
      photographer_id: faker.number.int(),
      photographer_url: faker.internet.url(),
      src: {
        original: faker.internet.url(),
        large2x: faker.internet.url(),
        large: faker.internet.url(),
        medium: faker.internet.url(),
        small: faker.internet.url(),
      },
      url: faker.internet.url(),
      width: faker.number.int(),
    },
    
  ];

  export default productsMock