import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class CommonService {
	UPLOAD_DIR = join(__dirname, '..', '..', 'uploads');

	constructor() {
		fs.mkdirSync(this.UPLOAD_DIR, { recursive: true });
	}

	handleFileUpload(filename: string, newFileName: string): string {
		fs.renameSync(
			join(this.UPLOAD_DIR, filename),
			join(this.UPLOAD_DIR, newFileName),
		);

		return newFileName;
	}

	removeFile(filename: string): void {
		const filePath = join(this.UPLOAD_DIR, filename);
		try {
			fs.rmSync(filePath);
			console.log(`File ${filename} deleted successfully.`);
		} catch (error) {
			console.error(error);
			throw new Error(`Failed to delete file: ${filename}`);
		}
	}
}
