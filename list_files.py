import os

def list_files(directory, output_file):
    with open(output_file, 'w') as f:
        f.write(f"Contents of directory: {directory}\n")
        for root, dirs, files in os.walk(directory):
            # Exclude "node_modules" directory
            if "node_modules" in dirs:
                dirs.remove("node_modules")

            # Exclude ".git" directory
            if ".git" in dirs:
                dirs.remove(".git")

            level = root.replace(directory, '').count(os.sep)
            indent = ' ' * 4 * (level)
            f.write(f"{indent}{os.path.basename(root)}/\n")
            sub_indent = ' ' * 4 * (level + 1)
            for file in files:
                f.write(f"{sub_indent}{file}\n")

if __name__ == "__main__":
    current_directory = os.getcwd()
    output_file = "file_structure.txt"
    list_files(current_directory, output_file)
    print(f"File structure saved to {output_file}")