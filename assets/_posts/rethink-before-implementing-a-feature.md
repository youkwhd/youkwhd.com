---
title: "rethink before implementing a feature"
date: "2022-03-21t03:21:43.867z"
tags:
  - software development 
  - web development
excerpt: "a bad habit i have is that i always rush when developing my projects. i felt like time is ticking faster when i do my works, thus that makes make me uncautious to small things to consider."
---

a bad habit i have is that i always rush when developing my projects. i felt like time is ticking faster when i do my works, thus that makes make me uncautious to small things to consider.

## table of contents

## the pull request i made on github

at first glance, i intended to fix an error on the site [glfmn.io](https://glfmn.io), glad it was on github, the problem was with it's http 404 not found page, for more information, you can find the [pull request](https://github.com/glfmn/glfmn.io/pull/4) archive here. then an idea came into my mind, it was to add a new feature, a vim-like bindings, simply because the site was using gruvbox as a color scheme, plus it's design looks like a terminal, am i right? 🧐

it might be **bad** for the ecosystem. what i mean by that is, there's web browser extensions for such feature, like: [vivium](https://vimium.github.io/) & [vim vixen](https://ueokande.github.io/vim-vixen/), and i myself is using it right now. with that known, the bindings should be the same, as they the extensions are also following vim bindings, thus could make things feel a bit clunky, bindings are being overwritten either by the extension or the site.

well, it's bad right? or is it? only if the bindings aren't getting overwritten.

## don't think twice, just go for it.

while there is some bad affection, not all applications will get affected by independent feature. taken an example of vim-bindings, some applications have those integrated. because it is a standalone app, it shouldn't make any problem, e.g. [vim-live-latex-preview](https://github.com/goballooning/vim-live-latex-preview), [zathura](https://en.wikipedia.org/wiki/zathura_(document_viewer)), [litemdview](https://www.notabug.org/g0tsu/litemdview), etc.
