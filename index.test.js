import suma from "./index.js";
import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";

Deno.test("Testing sum", () => {
  assertEquals(suma(1, 2), 3);
});
