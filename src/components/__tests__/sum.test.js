// we need to weite a function "test", which takes 2 parameters :
// 1st - description of the test , 2nd - callback function that holds the actual implementation.

import { sum } from "../Sum";

test("Sum function calculates the sum of two numbers", () => {
  const result = sum(3, 4);

  // Assertion - most of the time. But not necessary.
  expect(result).toBe(7);
});
