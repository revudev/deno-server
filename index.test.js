import { suma } from "./index.js";
import { assertEquals } from "./deps.js";

Deno.test("Testing sum", () => {
  assertEquals(suma(1, 2), 3);
});
