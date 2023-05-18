import os
import mimetypes
import boto3

s3 = boto3.client('s3')

# Get current working directory full path
cwd_full_path = os.getcwd()

# Get the base name
cwd_name = os.path.basename(os.getcwd())+'/'

print(cwd_name)  # output: the name of the current working directory


# Usage example
bucket_name = 'demo.amazoninstructor.info'
local_directory = './build/'
remote_path = 'react-image-gallery/'

#upload_files_to_s3(bucket_name, local_directory, remote_path)
