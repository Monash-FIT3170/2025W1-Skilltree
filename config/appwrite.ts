import { Account, Client, Databases, ID } from "appwrite";

const appwrite = new Client();

export const appwriteConfig = {
	projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
	databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
	todosCollId: process.env.NEXT_PUBLIC_APPWRITE_TODOS_COLLECTION_ID!,
	storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID!,
};

appwrite
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
	.setProject(appwriteConfig.projectId);

export const account = new Account(appwrite);
export const database = new Databases(appwrite);
export { ID };
