import { Hero } from '../models/hero';
import * as faker from 'faker';

export function createHero(): Hero {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    details: {
      age: faker.random.number(),
      country: faker.address.country()
    }
  };
}

export function getNewHeroName(): string {
  return faker.name.findName();
}

export function getNewHeroAge(): number {
  return faker.random.number();
}
