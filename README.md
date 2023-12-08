
# Stegonographer
Hide text in images!  

## Demo
[https://hyundotio.github.io/stegonagrapher](https://hyundotio.github.io/stegonagrapher)

## Usage

#### Import
Browser: `<script src="./Stegonographer"></script>`

TypeScript: `import { decode, encode } from 'stegonagrapher'`

#### Embed text in an image
 `Steg.encode(imageURL, 'string')`
 `encode(imageURL, 'string')`
 outputs string containing internal client URL of the image


#### Extract text from an image
`Steg.decode(imageURL)`
`decode(imageURL)`
 outputs string containing message

  ---

#### To build from source:

```

npm run build

```

  

or

  

```

yarn build

```

  