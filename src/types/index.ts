export type ApiResponseType<T> = {
	message: T | undefined | null | string;
	status: number;
	ok: boolean;
};
