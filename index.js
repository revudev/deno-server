import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";

const app = new Application();

app
  .get("/hello", (c) => {
    return "Hello, Abc!";
  })
  .start({ port: 8080 });

const imgSrc = await qrcode(Deno.args[0]);
Deno.writeTextFile("qrcode.html", `<img src='${imgSrc}' />`);
