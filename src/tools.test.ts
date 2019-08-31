import {all, any} from './tools';

describe("all", () => {
  test("that all iterables are even numbers", () => {
    expect(all([2,4,6,8], (x: number) => x % 2 == 0)).toEqual(true);
  })

  test("that are not all iterables are even numbers", () => {
    expect(all([2,4,6,8,9], (x: number) => x % 2 == 0)).toEqual(false);
  })
})


describe("any", () => {
  test("that any iterables are odd numbers", () => {
    expect(all([2,4,7,8], (x: number) => x % 2 == 1)).toEqual(true);
  })

  test("that an6t iterables are even numbers", () => {
    expect(all([2,4,7,8], (x: number) => x % 2 == 1)).toEqual(false);
  })
})