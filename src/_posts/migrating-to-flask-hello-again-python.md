---
title: "Migrating to Flask, hello again to python"
date: "2022-05-10T19:39:42.733Z"
tags:
  - software development 
  - web development
excerpt: "Migrating to Flask, hello again python."
sidenote: ""
---

My first language was python, that's why i chose python. It's just a bit easier to migrate to. Also learnt more python things like decorators, virtualenv, packages layout & probably `__name__` and `__main__` variables. You probably already know why i'm using Flask rather than Django if you are a python developer yourself. Long story short, Flask is just easier to work with and lightweight, blazingly python-fast.

## Table of contents

## Choosing between Perl, Rust & C.

I actually wanted to migrate my blog to Perl using mojolicious and if not probably will do WASM with Rust using Yew. But it didn't happen, i stopped in the middle of the road with both Rust and Perl realizing that i'm still on a journey learning C, lol this is why u shouldn't hop languages. But you know, learning C opens up a bunch of keywords, I learnt heaps, pointers, buffers, addresses, `free()`, `malloc()`, segfaults, and a lot more frustrating things, i've been reading the ncurses lib manual.

As i said before on the [previous blog post](https://youkwhd.vercel.app/posts/the-future-of-this-blog), i wanted to make my own static site generator that can be deployed to github pages or netlify, and other similiar providers. Well yeah that is still on the list. It's just that i don't wanna stick with Next.js any longer, i'm not aiming to be a soydev.

Rust, i love it, i don't want to switch to a scripting language again. Perl, is it me doing something wrong or the tests are taking so long, also love it, just takes time. Also, disclaimer; what i'm doing is really bad if you are programming for a job, don't hop between languages or even frameworks itself, just stick with your leetcode problems.

## Features like table of contents

I will attempt to make table of contents by parsing either the markdown or html. I also need to implement things like auto new tab for external link, code highlightling, etc. Also, a remainder to myself, try to ditch Flask-Flatpages, instead directly use a markdown parser, this will give you a lot of freedom to your project.

## Styling this Flask app

Not much is going to change from the default style, i will keep it simple. No dark backgounds for now, there will also be no banners. Tho i will work to display it, just not for now. Maybe i'm the one that somehow doesn't like fancy personal websites with a lot of animation on, or perhaps just the aesthetics. That's why a lot of my personal webpages are plain, old and lifeless. With that in mind, this app will remain raw.

