---
title: "What Most Software Miss When Documenting"
description: "The forgotten documentation in most projects"
date: "05-21-24"
---

Documentation is not always required in every software. You can leave a blank README, and it would still be fine, simply because no one cares.

People only care if it installs or not, `sudo apt install` and voila. So what comes?

## Forced to Know Certain Language's Ecosystem

<div class="image-floatr">
    <img src="/images/software/memq.jpeg" height="180" width="135" />
    <br />
    <small>Confused persian cat</small>
</div>

When it came to those who is interested to the source code trying to get it built and running, just to find themselves not being able to build / run the software.

This sure feel _**sucks**_ if you don't already know how to work under the ecosystem of the assosiated language. You would then try to surf the web just to get the software up and running, ended up wasting time.

A good saying when making softwares is:

> _"Always check for edge / corner cases."_

It makes you better, by writing _`assert`_ions, checking for unreachable cases, etc. I am sure you'd be glad doing these small details, because it helps you debug much better in the long run.

Now, hear me out. It also applies to the **audience** of your product. Always check the edge case. In this occasion, the 'edge' case is how to build the software itself.

### Take Example of a Popular Language, Python

<img src="/images/software/py.jpeg" class="image-floatl" height="105" width="158" />

You can't expect everyone to know how to run a python script despite python's popularity. Which file is the entry point? what dependencies do I need to make this script runnable? do I need to manually setup config files? bla bla bla, yada yada.

Something might come up to your mind: "Well, python has requirements.txt file for listing dependencies". Sure, but how should I as the audience know? I have no prior knowlegde of what the file does.

## Simple Solution

Just write instructions for building the software. It's that easy. Let me write a simple example (in [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText)):

```text
Running
-------

Install the required dependencies by invoking:

    pip install -r requirements.txt

Run software:

    python software.py

See the man page (or -h) for additional details.
```

Let me try running `wc`:

<img src="/images/software/pepeok.gif" class="image-floatr" height="120" width="120" />

` 12  25 202`

Would you look at that! **_25_ words** in total. Certainly not a hard thing to do, by doing this you also give eveyone the knowledge of how to write better software by showing what should be done.

Thus that's why a simple 'What to do' in a README sure helps. even if you just put up the simplest, most obvious form of compiling using make: "To compile: invoke `make`".

## At Last, Everyone is Happy.

Thank you for writing good crisp documentation. You make your software more cool, I can save my time, and learn by just following what you have written.

Continue to craft more stuff that make our life easier.
