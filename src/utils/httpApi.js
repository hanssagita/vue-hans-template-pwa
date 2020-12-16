import axios from 'axios'

const dataAdapter = fn => {
  return res => {
    const response = res.response || res
    fn &&
    fn({
      status: response.status,
      statusText: response.status,
      body: response.data,
      headers: response.headers || (res.config && res.config.headers) || {},
      originalResponse: res
    })
  }
}

const getDataViaApi = (url, callBack, errorHandler) => {
  axios.get(url).then(dataAdapter(callBack)).catch(dataAdapter(errorHandler))
}

const postDataViaApi = (url, callBack, errorHandler, data) => {
  axios.post(url, data).then(dataAdapter(callBack)).catch(dataAdapter(errorHandler))
}

const putDataViaApi = (url, callBack, errorHandler, data) => {
  axios.put(url, data).then(dataAdapter(callBack)).catch(dataAdapter(errorHandler))
}

const deleteDataViaApi = (url, callBack, errorHandler) => {
  axios.get(url).then(dataAdapter(callBack)).catch(dataAdapter(errorHandler))
}

export {
  getDataViaApi,
  postDataViaApi,
  putDataViaApi,
  deleteDataViaApi
}
