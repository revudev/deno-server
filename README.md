# Deno Server

## Descripción

Servidro de Deno en un sistema Linux.

Deno es un entorno de ejecución seguro para JavaScript y TypeScript que utiliza V8 y está construido en Rust.

## Requisitos Previos

```sh
sudo apt update
sudo apt install curl unzip
```

## Instalación

1. Cambia al directorio `/tmp`:

   ```sh
   cd /tmp
   ```

2. Descarga la última versión de Deno utilizando `curl`:

   ```sh
   curl -Lo "deno.zip" "https://github.com/denoland/deno/releases/latest/download/deno-x86_64-unknown-linux-gnu.zip"
   ```

3. Actualiza la lista de paquetes disponibles:

   ```sh
   sudo apt update
   ```

4. Instala `unzip` si no lo tienes ya instalado:

   ```sh
   sudo apt install unzip
   ```

5. Descomprime el archivo descargado en el directorio `/usr/local/bin`:

   ```sh
   sudo unzip -d /usr/local/bin /tmp/deno.zip
   ```

6. Verifica la instalación listando el archivo ejecutable de Deno:
   ```sh
   ls -al /usr/local/bin/deno
   ```
   Debes ver una salida similar a:
   ```sh
   -rwxr-xr-x 1 root root 87007232 Aug 23 21:06 /usr/local/bin/deno
   ```

## Verificación

Para confirmar que Deno se ha instalado correctamente, ejecuta:

```sh
deno --version
```

Deberías ver la versión de Deno instalada en tu sistema.

## Contribuir

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request en el repositorio de GitHub.
