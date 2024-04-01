---
title: "Rust dev says that C is complex and hard to write"
description: "Embrace the simplicity of C"
date: "27-09-23"
---

Once on a sunny day, I stumbled upon a video that lies over the internet ready to be watched:

- [Python, Rust and Why You No Longer Need C](https://www.youtube.com/watch?v=YSUYjuMqHpE)

From the video above, the first thing Rust dev said is that C is hard to write. Keep in mind, Rust dev said C, not C++. Rust dev didn't refer C as C/C++, heck Rust dev even shows a glimpse of an icon that looks like a C language logo, I wonder, so it is clear that Rust dev is referring to C and not C++.

## Easy memory management with C

Well, it seems that managing memory by yourself is a hard task when it is not.

I don't quite understand why the majority of developer thinks that manual memory management is super hard.

Was it all about _dangling pointer_? You might free the memory too early. Or maybe was it _buffer overflow_? You can just check if the last element on the array has null pointer or not? If not then just simply add one.

I don't see where the hard part is, you don't even need object-oriented paradigm thing, just use switch case. How about function chaining? Just prefix functions corresponding to the same "struct" with the struct's name.

Take an example:

```c
#define ARRAY_CAPACITY_INITIAL 64

typedef struct array_t {
    int *data;
    int cursor;
    size_t capacity;
} array_t;

array_t *array_init()
{
    array_t *arr = malloc(sizeof *arr);
    arr->data = malloc((sizeof *arr->data) * ARRAY_CAPACITY_INITIAL);
    arr->cursor = -1;
    arr->capacity = ARRAY_CAPACITY_INITIAL;
    return arr;
}

bool array_is_empty(array_t *arr)
{
    return arr->cursor <= -1;
}

void array_cleanup(array_t *arr)
{
    free(arr->data);
    free(arr);
}
```

I didn't test this code, didn't write it with LSP on, I didn't even try to compile it, and I bet this runs just fine. How simple of C could you ever want? Shouldn't this be an example powerful enough showing how easy and simple C could be?

What other excuses do you have? I don't write C all day, yet I know what to expect.

The example above does not have functions to actually write to the array, that is an easy simple task:


```c

void array_grow(array_t *arr)
{
    arr->capacity += ARRAY_CAPACITY_INITIAL;
    arr->data = realloc(arr->data, (sizeof *arr->data) * arr->capacity);
}

void array_push(array_t *arr, int val)
{
    if (++arr->cursor > arr->capacity)
        array_grow(arr);

    arr->data[arr->cursor] = val;
}

int array_pop(array_t *arr)
{
    /* do whatever you want
     */
    if (array_is_empty(arr))
        exit(1);

    return arr->data[arr->cursor--];
}
```

So, where is the hard part? All you have to do is check every edge case. I didn't check if `realloc()` would fail, I also didn't check if `malloc()` would fail, why? Simply just because I want the software to exit out, crash? I don't care, you as the developer could create an if guard to prevent things like that from happening.

Was C hard to write because it does not have built-in data types like Linked List, Array, Stack, Hash Table, etc?

I'd agree if one says that C++ is hard. It's ironic because C++ already have shit ton of built-in data types, although the real reason is because of classes.

## C is not comparable to Rust

C is at another level, Rust is nowhere near C. However, you can compare Rust with C++. Because Rust is identical to C++ and not C. It is Sept 2023, and I have yet seen a language that could compete with C's simplicity.

Getting back to the video, there might be a confusion here, it seems that Rust dev isn't actually Rust dev, but a Python dev. No one has ever compared Rust with Python. If you have, you should become web dev instead.
