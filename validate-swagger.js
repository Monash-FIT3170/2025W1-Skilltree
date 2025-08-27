#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const swaggerPath = path.join(__dirname, 'swagger.json');

try {
	const swaggerContent = fs.readFileSync(swaggerPath, 'utf8');
	const swaggerDoc = JSON.parse(swaggerContent);

	console.log('✅ swagger.json is valid JSON');
	console.log(`📊 API Documentation Stats:`);
	console.log(`   - Title: ${swaggerDoc.info.title}`);
	console.log(`   - Version: ${swaggerDoc.info.version}`);
	console.log(`   - Paths: ${Object.keys(swaggerDoc.paths).length}`);
	console.log(
		`   - Schemas: ${Object.keys(swaggerDoc.components.schemas).length}`,
	);
	console.log(`   - Tags: ${swaggerDoc.tags.length}`);

	console.log('\n📝 Available Endpoints:');
	Object.entries(swaggerDoc.paths).forEach(([path, methods]) => {
		Object.keys(methods).forEach((method) => {
			const endpoint = methods[method];
			console.log(
				`   ${method.toUpperCase().padEnd(6)} ${path.padEnd(40)} - ${endpoint.summary}`,
			);
		});
	});

	console.log('\n🚀 Documentation will be available at:');
	console.log('   - Swagger UI: http://localhost:3000/api');
	console.log('   - Raw JSON:   http://localhost:3000/docs/swagger.json');
} catch (error) {
	console.error('❌ Error validating swagger.json:', error.message);
	process.exit(1);
}
