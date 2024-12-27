import { Method } from "axios";
import { RequestConfig } from "../types/request";
import { instance1, instance2 } from "./instance";
// request interceptor
import { headerRequestInterceptor } from "./request-interceptor/header";
import { timeRequestInterceptor } from "./request-interceptor/time";
import { errorRequestInterceptor } from "./request-interceptor/error";
// response interceptor
import { timeResponseInterceptor } from "./response-interceptor/time";
import { formatResponseInterceptor } from "./response-interceptor/format";
import { errorResponseInterceptor } from "./response-interceptor/error";
// error handler
import { defaultErrorHandler } from "./error-handler/default";
import { logAndReturnErrorObj } from "./error-handler/log-return-error";

// 通用错误处理模版
const handlers = {
  default: defaultErrorHandler,
  logAndReturnError: logAndReturnErrorObj,
};

// 工厂模式 - apiFactory 生成函数
const createApiFactory = (
  instance,
  requestInterceptors,
  responseInterceptors
) => {
  // 传递 apiPath 生成具体请求
  return (apiPath, method: Method = "get", data = null, errorHandler) => {
    requestInterceptors.forEach((interceptor) => {
      instance.interceptors.request.use(interceptor);
    });
    responseInterceptors.forEach((interceptor) => {
      instance.interceptors.response.use(interceptor);
    });
    const requestConfig: RequestConfig = {
      url: apiPath,
      method,
    };
    if (["post", "put", "patch"].includes(method)) {
      requestConfig.data = data;
    }
    return instance(requestConfig)
      .then((response) => response.data)
      .catch((error) => {
        if (typeof errorHandler === "function") {
          return errorHandler?.(error);
        }
        if (typeof errorHandler === "string" && handlers[errorHandler]) {
          return handlers[errorHandler](error);
        }
        return handlers.default(error);
      });
  };
};

// instance1 拦截器
const requestInterceptors1 = [
  headerRequestInterceptor,
  timeRequestInterceptor,
  errorRequestInterceptor,
];
const responseInterceptors1 = [
  timeResponseInterceptor,
  formatResponseInterceptor,
  errorResponseInterceptor,
];

export const apiFactory1 = createApiFactory(
  instance1,
  requestInterceptors1,
  responseInterceptors1
);

// instance2 拦截器
const requestInterceptors2 = [];
const responseInterceptors2 = [errorResponseInterceptor];

export const apiFactory2 = createApiFactory(
  instance2,
  requestInterceptors2,
  responseInterceptors2
);
