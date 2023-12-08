# Stegonagrapher v1.05
Stegonagrapher is a JavaScript/TypeScript library used to encode secret messages inside images and to decode them again. The original project is from [https://github.com/petereigenschink/steganography.js](https://github.com/petereigenschink/steganography.js) by [Peter Eigenschink](https://github.com/petereigenschink) - Stegonagrapher removed unused code, adds some quality of life improvements, and allows this to be used easily as a module in JavaScript or TypeScript projects.

## Demo
[https://hyundotio.github.io/stegonagrapher](https://hyundotio.github.io/stegonagrapher)

## How does it work
Behind the scenes Stegonagrapher uses an algorithm to convert the given message into appropriate binary data which then will be hidden in the alpha channel of the given cover image. A HTML5 canvas element is then used to process the data and the image. To decode a message from a given image, a similiar algorithm is applied on the imagedata.

## How to use it
The use of the library is very simple.
- For plain HTML, download `Stegonagrapher.js` file from the `/dist` folder and add `<script src="./Stegonagrapher.js"></script>` and call `Steg.decode` and `Steg.encode`
- When using it as a module, download Stegonagrapher from npm: `npm i stegonagrapher` and add `import { decode, encode } from 'stegonagrapher'` and plainly call `decode` and `encode` in your project.

- `encode` takes a message as String and a image as `HTMLImageElement` or `string` representing the data-URL of the cover image. Returns the data-URL of the image with the encoded message inside.
- `decode` takes a image as `HTMLImageElement` or `string` representing the data-URL of the image and returns the message which was found in the image.

## To build from source:

```

npm run build

```

  

or

  

```

yarn build

```

### License
MIT

  