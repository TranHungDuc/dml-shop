import re
import os

def process_file(file_path):
    # Read the content of the file
    with open(file_path, 'r') as file:
        content = file.readlines()
    
    # List to store the modified content
    new_content = []
    # Set to keep track of added imports to avoid duplicates
    imports = set()

    # Regular expression to match the specified src pattern with optional leading slash and hyphen support
    pattern = re.compile(r'src="\/?images/([\w-]+)\.(png|svg|jpg)"')
    
    for line in content:
        # Find all matches in the line
        matches = pattern.findall(line)
        for match in matches:
            name, ext = match
            # Remove hyphens from the name to create the variable name
            var_name = name.replace('-', '')
            # Add the import statement to the set
            import_statement = f"import {var_name} from '../images/{name}.{ext}';"
            imports.add(import_statement)
            # Replace the src attribute in the line with {var_name}
            line = pattern.sub(f'src={{ {var_name} }}', line)
        
        # Append the modified or unmodified line to new content
        new_content.append(line)
    
    # Convert the set of imports to a list and sort (optional, for consistency)
    imports = sorted(list(imports))

    # Write the new content back to the file with imports at the top
    with open(file_path, 'w') as file:
        # Write the import statements
        for import_statement in imports:
            file.write(import_statement + '\n')
        # Write a newline to separate imports from the rest of the file
        file.write('\n')
        # Write the rest of the content
        for line in new_content:
            file.write(line)

# Example usage:
def process_all_files_in_folders(folders):
    for folder in folders:
        for root, _, files in os.walk(folder):
            for file in files:
                if file.endswith(('.js', '.jsx')):
                    file_path = os.path.join(root, file)
                    process_file(file_path)

# Example usage:
folders_to_process = ['dml-userend/src/pages', 'dml-userend/src/components']
process_all_files_in_folders(folders_to_process)