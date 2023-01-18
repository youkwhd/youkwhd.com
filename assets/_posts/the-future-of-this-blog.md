---
title: "the future of this blog"
date: "2022-03-09T04:11:27.630Z"
tags:
  - web development 
excerpt: "i wanted to change up the technologies that i've used on this blog. something just doesn't feel as rewarding if i myself didn't build this site from scratch, i might just consider making a new one from scratch and make use of bash scripting or make my own simple static site generator using the holy c that supports markdown."
---

this very site was first made with [gatsby](https://www.gatsbyjs.com), and now it's build on top of [next.js](https://nextjs.org) — pure static html + css page, no javascript included. i wanted to change up the technologies that i've used on this blog. something just doesn't feel as rewarding if i myself didn't build this site from scratch, i might just consider making a new one from scratch and make use of bash scripting or make my own simple static site generator using the holy c that supports markdown, including all the third party packages. or this "plan" will be my side project. considering i need more knowledge on typescript for web development, more preferably javascript itself.

## table of contents

## over engineering things 

i was on the state of not knowing what to do, these are the days i was living on dormitory, then some days passed when i realize arch wiki's site was a good reference to my blog. it has neat features, some of them are table of contents, categories, etc. i as a bored person, not knowing what to do next, was fired up to implement these features onto my site. and it was a good experience personally, but rather became a bad practice.

### working with posts tags

if you haven't noticed, every posts has it's own tags, you can [check it](/posts/tags) by clicking the link. i personally happy that i can accomplish this feature, it was a first good feature to implement on this kind of site, a blog. but then, as time flies, now i know that it's just not a good feature to implement if you don't have a specific article to write, like, only writing web development related content. it's always is a pain in the ass to just specify the "name" of a variable in programming, i also has felt it on making these tags. this feature might get deleted soon as i learn from mistakes, to not over engineer something.

### the newest feature, table of contents

there we go, now i can rest back to being a bored person, lmao. i've made this blog like it's a big ass site that's content change overtime. as i mentioned before, this was one of the good feature that i can implement on a blog. for this one, i might just keep it. cause i'm overall somewhat happy for it, there's one bug that the library remark-toc or remark-html made, it generates `<p></p>` tag in between lists on a certain condition, if the list were nested, that makes the table of contents unconsistent. it actually has some helpful features. but it's optional, no one might not use it, cause again, this site is not a wiki or a big ass company site, who knows. or am i just overthinking?

## no javascript shall be included

even tho this site is built using typescript, it shouldn't bundle javascript on build / production version. i don't hate javascript, i just wanted to reduce the size of this site. next.js or react itself has some downside on including and excluding javascript, there should be javascript or no javascript at all. you can not have hybrid pages, as far as i know. this one feature has already been implemented using the ssg from next.js, as i said before, i might build up my own simple ssg using c.

## images and it's size

i've tried optimizing this site's size, after doing some inspection, turns out that images are one of the factor that bloats this site. i probably will gonna remove images for upcoming updates. might just use pure text and referring images as links.

