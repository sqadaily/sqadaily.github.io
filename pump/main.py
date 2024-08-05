from datetime import datetime

dir = "../blog/pages/"
filename = dir + "demo.html"
format = "%Y-%d-%m_%H-%M-%S"
# format = '%Y-%m-%d %I:%M:%S %p'

today = datetime.now()
filename = filename.replace("demo", datetime.strftime(today,format))

with open(filename,"w") as file:
    file.write("")

print(filename)