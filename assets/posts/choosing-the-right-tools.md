---
title: "choosing the right tools"
date: "2022-03-19T09:22:24.234Z"
tags:
  - software development 
  - web development
excerpt: "Sometimes, the tool that you are going to use is not the best solution for the current project that you're building. It is okay to reproduce other people's projects with your preferenced tools, such as the programming language itself. Here are some examples of choosing the right tools."
---

sometimes, the tool that you are going to use is not the best solution for the current project that you're building. it is okay to reproduce other people's projects with your preferenced tools, such as the programming language itself. it's a good way to learn, that makes you more comfortable with your current knowledge, but still, always learn the fundamentals, not the tool you're using.

## table of contents

## an example of two different softwares

before i wrote this article, i was looking for a software that plays a certain sound after you click a key on your keyboard, so then i can make my keyboard sounds like a mechanical keyboard. i found two softwares that's capable of doing it, those are [mechvibes](https://github.com/hainguyents13/mechvibes) and [bucklespring](https://github.com/zevv/bucklespring), between those two, mechvibes is the most popular one in general, i guess it's because the software is easy to install on windows. but bucklespring has a higher rate of stars on github. 

### the tools each software uses

mechvibes however uses javascript as the main programming language. and it's an electron app, wow. the performance is.. not quite good. i even have some issues when using mechvibes, it sometimes delays after idling away from your keyboard. and just like other electron apps, it ate a lot of my cpu. 

> electron bundles chromium, for displaying ui

on the other side, bucklespring uses c as the main programming language. and it's a good choice knowing that this kind of software needs to communicate to your keyboard, or atleast listening for keyboard presses. the result is, it doesn't burn my cpu usage, and between these two, bucklespring has the tiniest size, around 5.4 mb, while mechvibes's size is sitting at around 60 - 80mb (executeables), this should be electron's problem. but still, it's around 11 times bigger than the size of bucklespring.

## another example when developing websites

webassembly is fast, now i'm free from javascript!! go is faster than typescript, bye node.js! well, not quite. why not use go as the backend language and typescript for the frontend? everything has their own drawbacks and advantages.. bla, bla, bla, i know you've heard that shit over and over.

as i said before, in my opinion, it is okay to build your projects with the tech stacks that you prefer. especially when you're just getting started. it's best to just keep things simple, one programming language while learning the fundamentals, build up your problem solving skills, not for remembering syntaxes, not the programming language, that's that. go has concurrency: goroutines, channels, mutex, etc. and it is the go-to language for making the backend and can perform faster than typescript. i do agree if someone recommends go over typescript.

when making a small scale applications, you can use typescript on both frontend and backend (as if you're solo). it can boost your development environment. and it's community is wide. the ecosystem on typescript is also greater than go's.

## conclusion

bucklespring is more efficient than mechvibes, go is better for the backend part. but that doesn't force you to only create applications with certain tool. therefore, those are some examples of choosing the right tool for the right job. use the one that suits your situation.

happy hacking.
