export type TApiResponse<T = any> = {
	ok: boolean;
	message: T | string;
	status: number;
};
