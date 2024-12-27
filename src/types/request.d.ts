import { Method } from "axios";

interface RequestConfig {
  url: string;
  method: Method;
  data?: Record<string, any> | null;
}
