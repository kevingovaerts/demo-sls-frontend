# Demo project for Serverless Workshop

To get started, clone this repo onto your local system.   
Afterwards run `npm install` to get all dependencies.  

Run `ng serve` to get this project up and running on `localhost:4200`.

## Placeholder URL
The todo application is pointing to a JsonPlaceholder url, which gives us some demo todo objects to start with our demo.  

## Create a backend with Serverless
After creating our backend with serverless we can replace the URL in the `config.js` file, with our new API, so we query our own backend on AWS.  
The api defined in `config.js` should point to an address like `https://testurl1234.execute-api.eu-west-1.amazonaws.com/dev`.  
Our resource we want to access on this specific URL should be defined in the `todo-amplify.service.ts` like this :
``` javascript
  readonly apiName = 'sls-todo-api';
  readonly path = '/todo';
```

