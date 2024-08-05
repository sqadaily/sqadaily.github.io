from datetime import datetime

def gen_filename(dir):
    filename = dir + "demo.html"
    format = "%H-%M-%S_%d-%m-%Y"
    # format = '%Y-%m-%d %I:%M:%S %p'
    today = datetime.now()
    # filename = filename.replace("demo", datetime.strftime(today,format))
    filename = filename.replace("demo","12-00-00_05-08-2024")
    return filename

def create_file(filename):
    with open(filename,"w") as file:
        file.write("")

def append_skip_last_line(file_path, content):

    with open(file_path, 'r') as file:
        lines = file.readlines()
        lines = "".join(lines)
    
    lines = lines[:-1]
    lines += ",\n'"+ content +"'"
    lines += "]"

    with open(file_path, 'w') as file:
        file.writelines(lines)

dir = "../blog/pages/"
js_filepath = "../blog/assets/js/pages.js"

filename = gen_filename(dir)
create_file(filename)
filename = "/".join(filename.split("/")[2:])
append_skip_last_line(js_filepath,filename)
