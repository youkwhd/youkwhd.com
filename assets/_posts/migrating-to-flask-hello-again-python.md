---
title: "migrating to flask, hello again to python"
date: "2022-05-10T19:39:42.733Z"
tags:
  - software development 
  - web development
excerpt: "migrating to flask, hello again python."
---

my first language was python, that's why i chose python. it's just a bit easier to migrate to. also learnt more python things like decorators, virtualenv, packages layout & probably `__name__` and `__main__` variables. you probably already know why i'm using flask rather than django if you are a python developer yourself. long story short, flask is just easier to work with and lightweight, blazingly python-fast.

## table of contents

## choosing between perl, rust & c.

i actually wanted to migrate my blog to perl using mojolicious and if not probably will do wasm with rust using yew. but it didn't happen, i stopped in the middle of the road with both rust and perl realizing that i'm still on a journey learning c, lol this is why u shouldn't hop languages. but you know, learning c opens up a bunch of keywords, i learnt heaps, pointers, buffers, addresses, `free()`, `malloc()`, segfaults, and a lot more frustrating things, i've been reading the ncurses lib manual.

as i said before on the [previous blog post](https://youkwhd.vercel.app/posts/the-future-of-this-blog), i wanted to make my own static site generator that can be deployed to github pages or netlify, and other similiar providers. well yeah that is still on the list. it's just that i don't wanna stick with next.js any longer, i'm not aiming to be a soydev.

rust, i love it, i don't want to switch to a scripting language again. perl, is it me doing something wrong or the tests are taking so long, also love it, just takes time. also, disclaimer; what i'm doing is really bad if you are programming for a job, don't hop between languages or even frameworks itself, just stick with your leetcode problems.

## features like table of contents

i will attempt to make table of contents by parsing either the markdown or html. i also need to implement things like auto new tab for external link, code highlightling, etc. also, a remainder to myself, try to ditch flask-flatpages, instead directly use a markdown parser, this will give you a lot of freedom to your project.

## styling this flask app

not much is going to change from the default style, i will keep it simple. no dark backgounds for now, there will also be no banners. tho i will work to display it, just not for now. maybe i'm the one that somehow doesn't like fancy personal websites with a lot of animation on, or perhaps just the aesthetics. that's why a lot of my personal webpages are plain, old and lifeless. with that in mind, this app will remain raw.

