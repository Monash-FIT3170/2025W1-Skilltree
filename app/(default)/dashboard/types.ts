export type APIResponse<T> = {
  ok: boolean;
  message: T | string;
  status: number;
};
