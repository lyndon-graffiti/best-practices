export const errorRequestInterceptor = (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
};
