import { Application } from "./deps.js";
import { qrcode } from "./deps.js";
import print from "./library.js"; // <- poner URL para que se instale la dependencia luego ------> deno cache --lock=lock.json --lock-write index.js

const app = new Application();

app
  .get("/hello", (c) => {
    return "Hello, Abc!";
  })
  .start({ port: 8080 });

const imgSrc = await qrcode(Deno.args[0]);
Deno.writeTextFile("qrcode.html", `<img src='${imgSrc}' />`);
print("gola");

export default function suma(a, b) {
  return a + b;
}
