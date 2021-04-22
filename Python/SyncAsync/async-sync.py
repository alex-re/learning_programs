# shourt hand of functions:
squares = [x*x for x in [1, 2 ,3 , 4 , 5]]
print(squares)
# OutPut: [1, 4, 9, 16, 25]


# shourt hand of generators:
squares = (x*x for x in [1, 2 ,3 , 4 , 5])
print(squares)
# OutPut: <generator object <genexpr> at 0x7f8502d40b30>
for num in squares:
    print(num)
# OutPut:
1
4
9
16
25

print(list(squares))  # DO NOT USE THIS EVER NEVER: LOSE performans in memmory.
# OutPut: [1, 4, 9, 16, 25]


# Make itrable objects
l = [1, 4, 9, 16, 25]
iter_l = iter(l)
next(iter_l)


class MyRange:
    def __init__(self, start, end):
        self.value = start
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.value >= self.end:
            raise StopIteration
        current = self.value
        self.value += 1
        return current

nums = MyRange(1, 10)
print(next(nums))

def my_range(start, end):
    current = start
    while current < end:
        yield current
        current += 1

nums = my_range(1, 10)
print(next(nums))


def myrange(n):
    num = 0
    while num < n:
        yield num
        num -= 1


def finder(s): 
    while True: 
        input_text = yield 
        if s in input_text: 
            print(input_text) 

f = finder('python')
f
# OutPut: <generator object finder at 0x7f8503d30b30>

f.send('some text including python')
# TypeError: can't send non-None value to a just-started generator

f.send(None)
f.send('some text including python')
# OutPut: some text including python

f.send('not that word including')
# OutPut:

f.close()


f.throw(NameError, 'gholiiiiii')
# NameError: gholiiiiii


def yielder(source):
    yield from source

def _yielder(source):
    for _ in source:
        yield _

_ = _yielder([1, 2, 3])

next(_)
# OutPut: 1

next(_)
# OutPut: 2

next(_)
# OutPut: 3

next(_)
# OutPut: StopIteration:


def sayhi(name): 
    return 'Hello ' + name 


async def _sayhi(name): 
    return 'Hello ' + name 


sayhi('gholi')
# OutPut: 'Hello gholi'

_sayhi('gholi')
# OutPut: <coroutine object _sayhi at 0x7f850352e640>


g = _sayhi('gholi ghasem')

g
# OutPut: <coroutine object _sayhi at 0x7f85034b7240>

g.send(None)
# StopIteration: Hello gholi ghasem



def run(coroutine): 
    try:
        coroutine.send(None) 
    except StopIteration as e: 
        return e.value 

run(_sayhi('gholi'))
# OutPut: 'Hello gholi'


async def main():
    '''
    async functions can call another async function but you have to use `await` keyword befor it.
    '''
    print(await _sayhi('gholi'))

run(main())
# OutPut: Hello gholi


async def main():
    names = ['gholi', 'ghasem', 'ahmad'] 
    for name in names: 
        print(await _sayhi(name)) 

run(main())
# OutPut: Hello gholi
# Hello ghasem
# Hello ahmad


# where can you use await?

async def fib(n):
    if n < 2:
        return 1
    else:
        return await fib(n-1) + await fib(n-2)


async def main():
    for n in range(30):
        print(await fib(n))

run(main())
# OutPut:
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
10946
17711
28657
46368
75025
121393
196418
317811
514229
832040


async def main(): 
    print(fib(15)) 


main()
# OutPut: <coroutine object main at 0x7f85036aee40>

run(main())
# OutPut: <coroutine object fib at 0x7f85036f3040>
# <ipython-input-66-29fab1d86084>:2: RuntimeWarning: coroutine 'fib' was never awaited
#   print(fib(15))
# RuntimeWarning: Enable tracemalloc to get the object allocation traceback


async def main():
    print(await fib(15))

run(main())
# OutPut: 987


async def okay(): 
    f = await fib(10) 
    d = {} 
    d[await fib(6)] = await fib(2)
    x = await fib(3) - await fib (1)
    print(f, d, x)

run(okay())
# OutPut: 89 {13: 2} 2


await fib(10)
# OutPut: 89


def synchronous(x): 
    await fib(x)
# SyntaxError: 'await' outside async function


def synchronous():
    return 'string'

await synchronous()
# TypeError: object str can't be used in 'await' expression


# ==========================================================================================================================
import time

def count():
    time.sleep(1)
    print('1')
    time.sleep(1)
    print('2')
    time.sleep(1)
    print('3')

def main():
    for _ in range(3):
        count()

if __name__ == '__main__':
    t = time.perf_counter()
    main()
    t2 = time.perf_counter() - t
    print(f'Total time splited: {t2:0.2f} seconds')

# OutPut:
1
2
3
1
2
3
1
2
3
# Total time splited: 9.00 seconds


# in the async programming we have ONE process and ONE thread
import asyncio

async def count():
    await asyncio.sleep(1)
    print('1')
    await asyncio.sleep(1)
    print('2')
    await asyncio.sleep(1)
    print('3')

async def main():
    await asyncio.gather(count(), count(), count())

if __name__ == '__main__':
    asyncio.run(main())

# OutPut:
1
1
1
2
2
2
3
3
3
# 3 seconds
# as soon as it arrives in the `await asyncio.sleep(1)` python was free to do ather work.

# ============================================================================================================

loop = asyncio.get_event_loop()

async def sayhi(name):
    print('Hi', name, 'you are in coroutine.')

# asyncio.run(sayhi('LP'))

try:
    print('starting coroutine')
    coro = sayhi('LP')
    print('entering event loop')
    loop.run_until_complete(coro)
finally:
    print('closing event loop')
    loop.close()

# ============================================================================================================

async def outer():
    print('in outher')
    print('waiting for result1')
    result1 = await phase1()
    print('waiting for result2')
    result2 = await phase2(result1)
    return result1, result2

async def phase1():
    print('in phase1')
    return 'phase1 result'

async def phase2(arg):
    print('in phase2')
    return 'result2 derived from {}'.format(arg)

asyncio.run(outer())
