---
title: "Choosing the right tools"
date: "2022-03-19T09:22:24.234Z"
tags:
  - software development 
  - web development
excerpt: "Sometimes, the tool that you are going to use is not the best solution for the current project that you're building. It is okay to reproduce other people's projects with your preferenced tools, such as the programming language itself. Here are some examples of choosing the right tools."
---

Sometimes, the tool that you are going to use is not the best solution for the current project that you're building. It is okay to reproduce other people's projects with your preferenced tools, such as the programming language itself. It's a good way to learn, that makes you more comfortable with your current knowledge, but still, always learn the fundamentals, not the tool you're using.

## Table of contents

## An example of two different softwares

Before i wrote this article, i was looking for a software that plays a certain sound after you click a key on your keyboard, so then i can make my keyboard sounds like a mechanical keyboard. I found two softwares that's capable of doing it, those are [Mechvibes](https://github.com/hainguyents13/mechvibes) and [Bucklespring](https://github.com/zevv/bucklespring), between those two, Mechvibes is the most popular one in general, i guess it's because the software is easy to install on Windows. But Bucklespring has a higher rate of stars on Github. 

### The tools each software uses

Mechvibes however uses JavaScript as the main programming language. And it's an Electron app, wow. The performance is.. not quite good. I even have some issues when using Mechvibes, it sometimes delays after idling away from your keyboard. And just like other Electron apps, it ate a lot of my CPU. 

> Electron bundles Chromium, for displaying UI

On the other side, Bucklespring uses C as the main programming language. And it's a good choice knowing that this kind of software needs to communicate to your keyboard, or atleast listening for keyboard presses. The result is, it doesn't burn my CPU usage, and between these two, Bucklespring has the tiniest size, around 5.4 MB, while Mechvibes's size is sitting at around 60 - 80MB (executeables), this should be Electron's problem. But still, it's around 11 times bigger than the size of Bucklespring.

## Another example when developing websites

WebAssembly is fast, now i'm free from JavaScript!! Go is faster than TypeScript, bye Node.js! well, not quite. Why not use Go as the backend language and TypeScript for the frontend? everything has their own drawbacks and advantages.. bla, bla, bla, i know you've heard that shit over and over.

As i said before, in my opinion, it is okay to build your projects with the tech stacks that you prefer. Especially when you're just getting started. It's best to just keep things simple, one programming language while learning the fundamentals, build up your problem solving skills, not for remembering syntaxes, not the programming language, that's that. Go has concurrency: goroutines, channels, mutex, etc. And it is the go-to language for making the backend and can perform faster than TypeScript. I do agree if someone recommends Go over TypeScript.

When making a small scale applications, you can use TypeScript on both frontend and backend (as if you're solo). It can boost your development environment. And it's community is wide. The ecosystem on TypeScript is also greater than Go's.

## Conclusion

Therefore, those are some examples of choosing the right tool for the right job. Use the one that suits your situation.

Happy hacking.
