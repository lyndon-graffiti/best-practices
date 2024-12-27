export const logAndReturnErrorObj = (error) => {
  console.error(`记录错误并返回错误对象:`, error);
  return {
    error: "发生错误，请稍后重试",
  };
};
