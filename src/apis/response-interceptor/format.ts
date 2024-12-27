export const formatResponseInterceptor = (response) => {
  // 拦截器2：对响应数据进行统一格式化
  if (response.data && typeof response.data === "object") {
    return {
      ...response.data,
      formatted: "数据已格式化",
    };
  }
  return response;
};
