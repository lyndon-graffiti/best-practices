import axios from "axios";

// 创建第 1 个 axios实例
export const instance1 = axios.create({
  baseURL: "https://api1.example.com",
  timeout: 5000,
  withCredentials: true,
});

// 创建第 2 个 axios实例
export const instance2 = axios.create({
  baseURL: "https://api2.example.com",
  timeout: 3000,
  withCredentials: false,
});
