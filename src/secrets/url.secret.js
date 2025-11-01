const urlSecrets = {
  serverUrl: import.meta.env.PROD ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL_DEV,
  ngrokTestServerUrl: import.meta.env.VITE_NGROK_TEST_SERVER_URL
}

export default urlSecrets;