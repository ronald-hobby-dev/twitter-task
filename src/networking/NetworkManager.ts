import {baseURL} from './Environment';
export const AUTHORIZE = 'AUTHORIZE';
export const NETWORK_ERROR = 'NETWORK ERROR';
export const EXPIRED_STATE = 3000204;

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

var defaultHeaders: any = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const callApi = async (
  endPoint: string,
  method: string,
  data: string,
  isBearer: boolean,
  multipart: Boolean,
) => {
  var url = baseURL + endPoint;

  if (isBearer) {
    defaultHeaders['Token'] =
      'qweasdf345sdfgh67h-fdfghj8trrhudyjehd8dkdiy9d-opplshmhfs5jd8-dkjfyirn';
  } else {
    delete defaultHeaders.Authorization;
  }
  if (multipart) {
    defaultHeaders['Content-Type'] = 'multipart/form-data';
  } else {
    defaultHeaders['Content-Type'] = 'application/json';
  }
  try {
    let response = await fetch(url, {
      method: method,
      headers: defaultHeaders,
      body: method == 'GET' ? null : multipart ? data : JSON.stringify(data),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log('error:', error); 
  }
};

export const fetchData = async (
  uri: string,
  method = Method.GET,
  data = null,
  isBearer = true,
  multipart = false,
) => {
  const resData = await callApi(uri, method, data, isBearer, multipart);
  return resData;
};
