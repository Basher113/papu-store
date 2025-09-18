const urlSecrets = {
  serverUrl: import.meta.env.PROD ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL_DEV,
}

export default urlSecrets;