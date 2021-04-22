import asyncio
import time
import aiohttp


async def download_file(url):
    print(f'Start downloading{url}')
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            content = await resp.read()
            print(f'Finished downloading {url}')
            return content


async def write_file(n, content):
    filename = f'htmls/async_{n}.html'
    with open(filename, 'wb') as f:
        print(f'Started writing {filename}')
        f.write(content)
        print(f'Finished writing {filename}')


async def scrape_task(n, url):
    content = await download_file(url)
    await write_file(n, content)


async def main():
    tasks = []
    for n, url in enumerate(open('urls.txt').readlines()):
        tasks.append(scrape_task(n, url))
    await asyncio.wait(tasks)


if __name__ == "__main__":
    t1 = time.perf_counter()
    asyncio.run(main())
    t2 = time.perf_counter() - t1
    print(f'Total time taken: {t2:0.2f} seconds')
