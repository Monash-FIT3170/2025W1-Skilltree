import chalk from "chalk";

class Logger {
	constructor(type = "info") {
		this.type = type;
	}

	info(message) {
		console.log(chalk.blue(`\n[INFO]    ${message}\n`));
	}

	warn(message) {
		console.log(chalk.yellow(`\n[WARN]    ${message}\n`));
	}

	error(message) {
		console.log(chalk.red(`\n[ERROR]   ${message}\n`));
	}

	success(message) {
		console.log(chalk.green(`\n[SUCCESS] ${message}\n`));
	}
}

const logger = new Logger();

export default logger;
