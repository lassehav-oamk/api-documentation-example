# api-documentation-example
Example of OpenAPI2 documentation generation with [ReDoc tool](https://github.com/Rebilly/ReDoc).

Project contains an express web server to serve the documentation for the OpenAPI spec. The served static html file is located in the static-files/ directory. The OpenAPI spec files are in the same directory.

## Installation

Node.js environment is required. Created and tested with Node 8.11.2.

```
npm install
```

## Running

Start the local web server with npm command below.
```
npm run start
```

The program will try to open a http port to 3000. Use your web browser to open http://localhost:3000/.
