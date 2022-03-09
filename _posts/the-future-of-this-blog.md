---
title: "The future of this blog"
date: "2022-03-09T04:11:27.630Z"
tags:
  - web development 
excerpt: "I wanted to change up the technologies that i've used on this blog. Something just doesn't feel as rewarding if i myself didn't build this site from scratch, i might just consider making a new one from scratch and make use of bash scripting or make my own simple static site generator using the holy C that supports markdown."
---

This very site was first made with [Gatsby](https://www.gatsbyjs.com), and now it's build on top of [Next.js](https://nextjs.org) — pure static HTML + CSS page, no javascript included. I wanted to change up the technologies that i've used on this blog. Something just doesn't feel as rewarding if i myself didn't build this site from scratch, i might just consider making a new one from scratch and make use of bash scripting or make my own simple static site generator using the holy C that supports markdown, including all the third party packages. Or this "plan" will be my side project. Considering i need more knowledge on Typescript for web development, more preferably Javascript itself.

## Table of contents

## Over engineering things 

I was on the state of not knowing what to do, these are the days i was living on dormitory, then some days passed when i realize Arch Wiki's site was a good reference to my blog. It has neat features, some of them are table of contents, categories, etc. I as a bored person, not knowing what to do next, was fired up to implement these features onto my site. And it was a good experience personally, but rather became a bad practice.

### Working with posts tags

If you haven't noticed, every posts has it's own tags, you can [check it](/blog/tags) by clicking the link. I personally happy that i can accomplish this feature, it was a first good feature to implement on this kind of site, a blog. But then, as time flies, now i know that it's just not a good feature to implement if you don't have a specific article to write, like, only writing web development related content. It's always is a pain in the ass to just specify the "name" of a variable in programming, i also has felt it on making these tags. This feature might get deleted soon as i learn from mistakes, to not over engineer something.

### The newest feature, table of contents

There we go, now i can rest back to being a bored person, lmao. I've made this blog like it's a big ass site that's content change overtime. As i mentioned before, this was one of the good feature that i can implement on a blog. For this one, i might just keep it. Cause i'm overall somewhat happy for it, there's one stupid bug that the library remark-toc or remark-html made, it generates `<p></p>` tag in between lists on a certain condition, if the list were nested, that makes the table of contents unconsistent. It actually has some helpful features. But it's optional, no one might not use it, cause again, this site is not a wiki or a big ass company site, who knows. Or am i just overthinking?

## No javascript shall be included

Even tho this site is built using Typescript, it shouldn't bundle Javascript on build / production version. I don't hate Javascript, i just wanted to reduce the size of this site. Next.js or React itself has some downside on including and excluding Javascript, there should be Javascript or no Javascript at all. You can not have hybrid pages, as far as i know. This one feature has already been implemented using the SSG from Next.js, as i said before, i might build up my own simple SSG using C.

## Images and it's size

I've tried optimizing this site's size, after doing some inspection, turns out that images are one of the factor that bloats this site. I probably will gonna remove images for upcoming updates. Might just use pure text and referring images as links.

