
# Stegonographer
Hide text in images!  

## Usage

#### Import
Browser: `<script src="./Stegonographer"></script>`
TypeScript: `import { encode, decode } from Stegonographer`

#### Embed text in an image
 `Steg.encode(imageURL, 'string')`
 outputs string containing internal client URL of the image


#### Extract text from an image
`Steg.decode(imageURL)`
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

  