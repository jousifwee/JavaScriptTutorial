const { getName, mergeObjects } = require('./deconstruction');

test('getName returns the name property', () => {
  expect(getName({ name: 'Nico', age: 30 })).toBe('Nico');
});

test('getName throws if no name', () => {
  expect(() => getName({})).toThrow('name property missing');
});

test('mergeObjects merges two objects', () => {
  expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

test('mergeObjects overwrites properties from obj1 with obj2', () => {
  expect(mergeObjects({ a: 1 }, { a: 2, b: 3 })).toEqual({ a: 2, b: 3 });
});
