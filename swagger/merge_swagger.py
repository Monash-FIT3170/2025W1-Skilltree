#!/usr/bin/env python3

import json
import os
from typing import Dict, Any, List
import sys

def merge_swagger_files(directory: str, output_file: str) -> None:
    """
    Merge all swagger JSON files in the given directory into a single swagger.json file.
    
    Args:
        directory: Directory containing individual swagger JSON files
        output_file: Path to the output swagger.json file
    """
    # Initialize the merged swagger object with base structure
    merged_swagger = {
        "openapi": "3.0.0",
        "info": {
            "title": "Skilltree API",
            "description": "API documentation for the Skilltree application",
            "version": "1.0.0"
        },
        "paths": {},
        "components": {
            "schemas": {},
            "securitySchemes": {
                "bearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormat": "JWT",
                    "description": "Enter JWT Bearer token"
                }
            }
        }
    }
    
    # List of files to be merged
    swagger_files = []
    for file in os.listdir(directory):
        if file.endswith('.swagger.json'):
            swagger_files.append(os.path.join(directory, file))
    
    if not swagger_files:
        print(f"No swagger files found in {directory}")
        sys.exit(1)
    
    print(f"Found {len(swagger_files)} swagger files to merge:")
    for file in swagger_files:
        print(f"  - {file}")
    
    # Process each swagger file
    for file_path in swagger_files:
        try:
            with open(file_path, 'r') as f:
                swagger_data = json.load(f)
            
            # Merge paths
            if "paths" in swagger_data:
                for path, methods in swagger_data["paths"].items():
                    if path not in merged_swagger["paths"]:
                        merged_swagger["paths"][path] = {}
                    
                    for method, details in methods.items():
                        merged_swagger["paths"][path][method] = details
            
            # Merge schemas
            if "components" in swagger_data and "schemas" in swagger_data["components"]:
                for schema_name, schema in swagger_data["components"]["schemas"].items():
                    if schema_name not in merged_swagger["components"]["schemas"]:
                        merged_swagger["components"]["schemas"][schema_name] = schema
            
            print(f"Merged {file_path}")
        except Exception as e:
            print(f"Error processing file {file_path}: {e}")
    
    # Remove duplicate schemas that might have different definitions across files
    schema_names = list(merged_swagger["components"]["schemas"].keys())
    for schema_name in schema_names:
        duplicates = [s for s in schema_names if s != schema_name and s.lower() == schema_name.lower()]
        for dup in duplicates:
            if dup in merged_swagger["components"]["schemas"]:
                print(f"Removing duplicate schema: {dup}")
                del merged_swagger["components"]["schemas"][dup]
    
    # Save the merged swagger file
    with open(output_file, 'w') as f:
        json.dump(merged_swagger, f, indent=2)
    
    print(f"Successfully merged swagger files to {output_file}")

if __name__ == "__main__":
    # Get directory containing swagger files and output file path
    swagger_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(os.path.dirname(swagger_dir), "swagger.json")
    
    # Merge swagger files
    merge_swagger_files(swagger_dir, output_file)