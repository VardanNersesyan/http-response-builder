# http-response-builder

This package provides ability to build http response from server side.
It allows you to return response according to one pattern when you work in a team.

No dependencies.

## Installation

```console
npm install http-response-builder --save
```

## Usage

```javascript
const ResponseBuilder = require('http-response-builder');

const response = new ResponseBuilder();

response.addItem() // add in response item property
response.addItems() // add in response items property
response.success() // for change status boolean default true
response.addProperty() // add in response property with custom name and assign value for it
response.message() // add in response message
response.get() // return response data
response.getJson() // return response data in json string
```