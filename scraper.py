from py3pin.Pinterest import Pinterest
import requests

download_dir = './img/'

img_id = 1

pinterest = Pinterest(email='@gmail.com',
                      password='',
                      username='',
                      cred_root='./img')

# your boards, pick one
boards = pinterest.boards()

# for example the first one
target_board = boards[0]

# get all pins for the board
board_pins = []
pin_batch = pinterest.board_feed(board_id=target_board['id'])


while len(pin_batch) > 0:
    board_pins += pin_batch
    pin_batch = pinterest.board_feed(board_id=target_board['id'])


# this can download images by url
def download_image(url, path):
    r = requests.get(url=url, stream=True)
    if r.status_code == 200:
        with open(path, 'wb') as f:
            for chunk in r.iter_content(1024):
                f.write(chunk)


# download each pin image in the specified directory
for pin in board_pins:
    url = pin['images']['orig']['url']
    indx = str(url).rfind('.')
    extension = str(url)[indx:]
    img_id += 1
    download_image(url, download_dir + str(img_id) + extension)