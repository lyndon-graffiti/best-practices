export const timeRequestInterceptor = (config) => {
  // 拦截器2：记录请求开始时间
  config.startTime = new Date().getTime();
  return config;
};
