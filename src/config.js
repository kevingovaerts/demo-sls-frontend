const config = {
  apiGateway: {
    NAME: "sls-todo-api",
    REGION: "eu-west-1",
    URL: "https://jsonplaceholder.typicode.com",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_PrhRvSPy7",
    APP_CLIENT_ID: "33qeiar79vusibfn4eikpn0hmr",
    IDENTITY_POOL_ID: "eu-west-1:3208f362-e99e-426a-9d11-ba55781e30a8",
  }
};

export default config;
