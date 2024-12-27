export const timeResponseInterceptor = (response) => {
  // 拦截器1：记录请求结束时间和耗时
  const endTime = new Date().getTime();
  const startTime = response.config.startTime;
  if (startTime) {
    console.log(`请求 ${response.config.url} 耗时: ${endTime - startTime} ms`);
  }
  return response;
};
