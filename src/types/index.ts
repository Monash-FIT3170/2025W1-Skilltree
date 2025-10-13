export type TApiResponse<T = any> = {
	ok: boolean;
	message?: T;
	error?: string;
	status: number;
};
