import requests
import time


def download_file(url):
    print(f'Start downloading{url}')
    response = requests.get(url)
    print(f'Finished downloading {url}')
    return response.content


def write_file(n, content):
    filename = f'htmls/sync_{n}.html'
    with open(filename, 'wb')as f:
        print(f'Started writing {filename}')
        f.write(content)
        print(f'Finished writing {filename}')


if __name__ == "__main__":
    t1 = time.perf_counter()  # returns time until the shell started Better than `time.time()`
    for n, url in enumerate(open('urls.txt').readlines()):  # enumerate will the return number of objects in the readlines list too!
        content = download_file(url)
        write_file(n, content)
    t2 = time.perf_counter() - t1
    print(f'Total time taken: {t2:0.2f} seconds')  # `:0.2f` means just print two decimal numbers.
