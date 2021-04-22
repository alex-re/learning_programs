def decorator_function(original_function):
    def wrapper_function(*args, **kwargs):
        # `*args, **kwargs` if your original_function gets arguments or keywords. (better to always set it)
        print('wrapper executed this defore' + original_function.__name__)
        return original_function(*args, **kwargs)
    return wrapper_function


# @decorator_function  # shorthand for:  display = decorator_function(display)
# def display_info(name, age):
    # print(f'display function ran with args: {name}, {age}')


# display_info('ali', 17)


#=========================CLASSES AS DECORATORS==========================
class decorator_class(object):

    def __init__(self, original_function):
        self.original_function = original_function

    def __call__(self, *args, **kwargs):
        print('call method executed this defore' + self.original_function.__name__)
        return self.original_function(*args, **kwargs)

@decorator_class
def display_fullname(first, last):
    print(f'display function ran with args: {first}, {last}')


# display_fullname('gholi', 'gholi zade')
#========================================================================


#=============================PRACTICAL EXAMPLE==========================
from functools import wraps
''' for get rid of __name__ bug ''' 


def my_logger(orig_func):
    import logging
    logging.basicConfig(filename=f'{orig_func.__name__}.log', level=logging.INFO)

    @wraps(orig_func)
    def wrapper(*args, **kwargs):
        logging.info(f'Ran with args:  {args}, and kwargs:  {kwargs}')
        return orig_func(*args, **kwargs)

    return wrapper


def my_timer(orig_func):
    import time

    @wraps(orig_func)
    def wrapper(*args, **kwargs):
        t1 = time.time()
        result = orig_func(*args, **kwargs)
        t2 = time.time() - t1
        print(f'{orig_func.__name__} ran in {t2} sec')
        return result
    
    return wrapper


@my_logger
@my_timer
# display_info = my_logger(my_timer(display_info))
def display_info(name, age):
    print(f'display function ran with args: {name}, {age}')


display_info('gholi', 36)
#========================================================================