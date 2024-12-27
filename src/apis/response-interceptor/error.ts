export const errorResponseInterceptor = (error) => {
  // 对响应错误做些什么
  if (error.response.status === 401) {
    // 例如，处理未授权情况，跳转到登录页面
    window.location.href = "/login";
  }
  return Promise.reject(error);
};
