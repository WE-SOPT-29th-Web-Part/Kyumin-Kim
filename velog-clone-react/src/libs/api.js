import axios from "axios";

//다회 통신 하는 법!!!!!!
export const client = axios.create({
  baseURL: "http://localhost:5005/api",
  headers: {
    "Content-Type": "application/json",
    // json-server 데이터 타입. 꼭 넣어줘야 함.
  },
});

export const imageClient = axios.create({
  baseURL: "http://localhost:5005/api/image",
  headers: {
    "Content-Type": "multiport/form-data",
  },
});
