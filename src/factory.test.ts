import { expect, test } from "vitest";
import { factory } from "./factory";

test("creates a count function", function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test("for increment count value with negative start value", function () {
  const count: () => number = factory(-10, 5);
  expect(count()).toBe(-5);
  expect(count()).toBe(0);
});

test("defaults to start 0, step 1 when no arguments is passed", function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test("for large step value", function () {
  const count: () => number = factory(0, 1000);
  expect(count()).toBe(1000);
  expect(count()).toBe(2000);
});

test("for negative test scenario", function () {
  const count: () => number = factory(-15, -2);
  expect(count()).toBe(-17);
  expect(count()).toBe(-19);
});

test("for floating test cases", function () {
  const count: () => number = factory(0.25, 0.25);
  expect(count()).toBe(0.5);
  expect(count()).toBe(0.75);
});

test("for decrement count test cases", function () {
  const count: () => number = factory(10, -5);
  expect(count()).toBe(5);
  expect(count()).toBe(0);
});
