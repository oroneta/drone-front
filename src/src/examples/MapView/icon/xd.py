from rembg import remove
import PIL

input_path = 'droneIcon.jpg'
output_path = 'droneIconNoBg.jpg'

with open(input_path, 'rb') as i:
    with open(output_path, 'wb') as o:
        input = i.read()
        output = remove(input)
        o.write(output)