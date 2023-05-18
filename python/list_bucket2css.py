import boto3
import os

# Set up AWS S3 client
s3 = boto3.client('s3')
action_folder = '/Users/nandolutgerink/code/react/react-image-gallery/python/'
bucket_name = '00009999000088889999'
folder_path = 'single_folders/'
start_with = 'https://00009999000088889999.s3.eu-west-1.amazonaws.com/'


with open('/Users/nandolutgerink/code/react/REACT-slider2/html/html-vlie-head.txt') as header_file:
    header = header_file.read()
with open('/Users/nandolutgerink/code/react/REACT-slider2/html/html-vlie-medio.txt') as medio_file:
    medio = medio_file.read()
with open('/Users/nandolutgerink/code/react/REACT-slider2/html/html-vlie-tail.txt') as tail_file:
    tail = tail_file.read()
with open('/Users/nandolutgerink/code/react/REACT-slider2/html/css-head.txt') as css_header_file:
    css_header = css_header_file.read()
with open('/Users/nandolutgerink/code/react/REACT-slider2/html/css-tail.txt') as css_tail_file:
    css_tail = css_tail_file.read()
# Retrieve list of objects in the folder
response = s3.list_objects_v2(Bucket=bucket_name, Prefix=folder_path)

# Create the output directory if it doesn't exist
output_dir = '/Users/nandolutgerink/code/react/REACT-slider2/html'
# output_dir = os.path.join(action_folder, 'output')
os.makedirs(output_dir, exist_ok=True)

# Group filenames by folder
folder_files = {}
for obj in response['Contents']:
    key = obj['Key']
    if len(key) > len(folder_path):
        folder = key[len(folder_path):].split('/')[0]
        if folder not in folder_files:
            folder_files[folder] = []
        folder_files[folder].append(key)

# Write the filenames to separate output files for each folder
for folder, filenames in folder_files.items():
    folder = "".join(folder.split())
    output_css_file = os.path.join(output_dir+'/css', f'{folder}.css')
    with open(output_css_file, 'w') as file:
        slide_nr = 0
        file.write(css_header+'\n')
        for filename in filenames:
            if len(filename) > len(folder_path):
                filename = filename.replace(folder_path, '').replace(' ', '+')
            # file.write(start_with + folder_path+filename + '\n')
            pic_url = start_with + folder_path+filename
            slide_nr = slide_nr+1
            line_2_write = '.slide' + \
                str(slide_nr) + \
                ' {\n\tbackground-image: url("'+pic_url + \
                '");\n\tbackground-color: darkslategrey;\n}\n'
            file.write(line_2_write)
            # file.write('\t<div class="row">\n\t\t<div class="col-12">\n\t\t\t<div class="image-container">\n\t\t\t\t<img src="'+pic_url+'" alt="">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n')
        file.write(css_tail)
        output_html_file = os.path.join(output_dir, f'{folder}.html')
        with open(output_html_file, 'w') as html_file:
            html_file.write(header+'./css/' + folder+'.css')
            html_file.write(medio)
            items = [i for i in range(1, slide_nr + 1)]
            for item in items:
                html_file.write(
                    f'<div class="slide slide{item}">\n<div class="slide-content">\n<span></span>\n</div>\n</div>\n')
            html_file.write(tail)
        print(f'File list for folder {folder} saved to {output_css_file}')

# /Users/nandolutgerink/code/react/react-image-gallery/
# '\t<div class="row">\n\t\t<div class="col-12">\n\t\t\t<div class="image-container">\n\t\t\t\t<img src="'+pic_url+'" alt="">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n'
