import { expect, test } from "vitest";
import { factory } from "./factory";

test("creates a count function", function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test("increments count with negative start value", function () {
  const count = factory(-10, 5);
  expect(count()).toBe(-5);
  expect(count()).toBe(0);
});

test("defaults to start 0, step 1 when no arguments are passed", function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test("handles large step value", function () {
  const count = factory(0, 1000);
  expect(count()).toBe(1000);
  expect(count()).toBe(2000);
});

test("decrements count with negative step value", function () {
  const count = factory(-15, -2);
  expect(count()).toBe(-17);
  expect(count()).toBe(-19);
});

test("handles floating point step values", function () {
  const count = factory(0.25, 0.25);
  expect(count()).toBe(0.5);
  expect(count()).toBe(0.75);
});

test("decrements count with negative step value", function () {
  const count = factory(10, -5);
  expect(count()).toBe(5);
  expect(count()).toBe(0);
});
