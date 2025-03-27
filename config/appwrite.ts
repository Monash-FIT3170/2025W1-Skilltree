import { Client, Account } from "appwrite";

const appwrite = new Client();
const conf = {
	projectId: "67e4a1b600216c92061b",
	databaseId: "67e4a24f0020c7c392a0",
	todosCollId: "67e4a2b500187aad4e3a",
	usersCollId: "67e4a2a1002372754cf5",
	storageId: "67e4a26f001d120cd54c",
};

appwrite.setEndpoint("https://cloud.appwrite.io/v1").setProject(conf.projectId);

export { Account, conf, appwrite };
