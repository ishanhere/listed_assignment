import Axios from "axios";

export function getRequest(data) {
  return Axios.get(data.url, {
    headers: data.headers,
    params: data.params,
  });
}
