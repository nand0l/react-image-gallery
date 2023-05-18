import boto3
import os

# Set up AWS S3 client
s3 = boto3.client('s3')
pwd = os.path.dirname(__file__)
action_folder = os.path.dirname(__file__)
bucket_name = '00009999000088889999'
remote_folder_path= 'single_folders/'
start_with = f'https://{bucket_name}.s3.eu-west-1.amazonaws.com/'

#read app.js header and tail
with open(action_folder+'/App-head.txt') as header_file:
    header = header_file.read()
with open(action_folder+'/App-tail.txt') as tail_file:
    tail = tail_file.read()

# Create the output directory if it doesn't exist
# all js files will be written to this directory
output_dir = action_folder[:-6]+'src/js'
os.makedirs(output_dir, exist_ok=True)

# Group filenames by folder
folder_files = {}

# Pagination to handle buckets with more than 1000 objects
paginator = s3.get_paginator('list_objects_v2')
page_iterator = paginator.paginate(Bucket=bucket_name, Prefix=remote_folder_path)

for page in page_iterator:
    for obj in page['Contents']:
        key = obj['Key']
        if len(key) > len(remote_folder_path):
            folder = key[len(remote_folder_path):].split('/')[0]
            if folder not in folder_files:
                folder_files[folder] = []
            folder_files[folder].append(key)

# Write the filenames to separate output files for each folder
for folder, filenames in folder_files.items():
    folder = "".join(folder.split())
    output_json_file = os.path.join(output_dir, f'{folder}.js')
    with open(output_json_file, 'w') as file:
        file.write(header)
        file.write("[\n")
        # Filter out the filenames that do not contain ".txt" or "ContactSheet"
        valid_filenames = [f for f in filenames if ".txt" not in f and "ContactSheet" not in f]
        last_index = len(valid_filenames) - 1
        for i, filename in enumerate(valid_filenames):
            filename = filename.replace(remote_folder_path, '').replace(' ', '+')
            pic_url = start_with + remote_folder_path+filename
            line_2_write ='{\n\t"original":"'+pic_url+'",\n\t"thumbnail":"'+pic_url+'"\n}'
            # If not the last element, add a comma at the end
            if i != last_index:
                line_2_write += ','
            line_2_write += '\n'
            file.write(line_2_write)
        file.write(']\n')
        file.write(tail)
        print(f'File list for folder {folder} saved to {output_json_file}')
