export const headerRequestInterceptor = (config) => {
  // 拦截器1：添加通用请求头
  config.headers["Content - Type"] = "application/json";
  return config;
};
