import os
import sys
# Store current working directory
action_folder = os.path.dirname(__file__)
output_dir = action_folder[:-6]+'html'
print(output_dir)
