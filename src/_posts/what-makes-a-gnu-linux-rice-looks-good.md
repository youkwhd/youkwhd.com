---
title: "What makes a GNU/Linux rice looks good"
date: "2022-01-14T18:03:14.265Z"
tags:
  - gnu/linux
  - window managers
excerpt: "I remembered my first time ricing my Ubuntu using vanilla i3 and eventually switched to i3-gaps that makes things a little bit spicy. but still, my GNU/Linux still feels plain. nothing fancy about it, not even compareable to r/unixporn posts"
sidenote: ""
---

I remembered my first time ricing my Ubuntu using vanilla i3 and eventually switched to i3-gaps that makes things a little bit spicy. but still, my GNU/Linux still feels plain. nothing fancy about it, not even compareable to r/unixporn posts.

## Table of contents

## Window Managers doesn't affect anything

Well, i like suckless softwares; dwm, dmenu, st, etc. It suck less, non bloated, then the way it's configured, the patches that is available, and it is widely customizable. What about other Window Managers? they all the same, it's just the programming language that's differ from others, the way it's configured, the maintainer, functionality. But really, when it comes to ricing, it does not matter. 

take a look at [my recent gnu/linux rice](https://raw.githubusercontent.com/youkwhd/dotfiles/master/screenshots/wm__screenshot-04.png).

the color scheme matched the wallpaper in the background, st has transparency, then there's big gaps in between. Also, the font matched with the environment.

> here are my [dotfiles](https://github.com/youkwhd/dotfiles) configs.

the fact is that i can make the same layout using i3, i mean the **exact same** as the screenshot above. Now we know that any Window Managers are viable. Use the one that you comfort to use with.


## Things that really makes it perfect

After months of ricing GNU/Linux, now i can share the things i think really makes the difference. These are my thoughts on why some GNU/Linux rice looks bad.

take a look at [my first rice](https://raw.githubusercontent.com/youkwhd/dotfiles/master/screenshots/wm__screenshot-08.png), i was using vanilla i3 at that time.

what do you see? Gruvbox. Nothing but a fullscreen terminal with i3status on top, no gaps, nothing. Straight plain.

what about the color scheme, isn't Gruvbox a good color scheme? yes indeed. I personally like it. But i wouldn't ever again staring at a fullscreen terminal, it just doesn't feel good. 

then i switched to i3-gaps, it looks far more better, it is an ok environment. But i don't have any wallpaper installed. As you can guess, there is nothing but a blank black wallpaper and a non-transparent terminal. The result is still as bad.

Note that the font is an ok option in this case. Take a look at the i3status, one icon, then all the number stuff? what does the GiB section even mean? is it how much memory left? what is that? it confuses you. Plus the size of the i3status doesn't fit with the i3-gaps font base.

at that time, i thought i've made my rice to be as perfect as i want. But as time flies, i realize that this is beyond perfect, nothing special.

## Add some gaps even if it's small

you will feel better if you add gaps. Just, trust me. It's the UI/UX thing. even a little bit of gaps can change the feel, just maybe 5 pixels for each window. I promise your WM will look better and fresh.

take a look at [my i3 config](https://raw.githubusercontent.com/youkwhd/dotfiles/master/screenshots/wm__screenshot-09.png) as if it has some gaps:

you've made some progress, and you've successfully made your window manager better.

## Use colorized or plain wallpapers

what you will regularly actually see is the background. Really tho, use one that looks super cool and the one that matches your style preferences. In case if you don't like to use wallpapers, you can use any plain wallpaper as an alternative. if you did used a plain wallpaper, you might want to match the terminal background color.

for an example; if i use a plain black wallpaper, then the terminal background saturation should be a little bit higher, still black but has more saturation on it.

## Determine your terminal transparency and prompt

you can have a non-transparent terminal but under a certain conditions, e.g the terminal background color must be pure black, then add paddings inside the terminal so it'll look more minimalist, or even add a border radius, and you can also put a very standing border color like pure white. Also, consider the prompt (PS1) to be minimal as well. for example: 

```bash
export PS1="\W > \[$(tput sgr0)\]"
```

thus will render out:

```bash
~ > echo "youkwhd.github.io" 
~ > yay -S icecat vim
``` 

here is one of an [example](https://i.redd.it/kfbpylqmga701.png).

the way to configure transparency, shadow, etc. Is to install a compositor for X, e.g. picom, Xcompmgr, Unagi.

in case if you were using cool and cozy wallpapers, then you can do something like a really long prompt, for example:

```bash
export PS1="[\u@\h \W]\$ "
```

the following prompt would be:

```bash
[youkwhd@severus ~]$ echo "youkwhd.github.io"
[youkwhd@severus ~]$ yay -S icecat vim
```

if you chose to use the long-prompt-like one, then i wouldn't have to consider paddings, but it depens on your preferences. Keep experimenting and you'll eventually like it.

## X Bar status

your window manager bar (i3bar, dwmblocks, etc) are one of the aspect of making a good rice. A messy, gray colored font for X bar will sometimes resulting in a bad X bar, and could even make it worse to read. What you can do is to add some life into it, an example of it is to use emojis as an advantage for you to make your X bar pretty. Or you can even use font-awesome as an alternative.


## Rounded terminal, shadow and outline

as mentioned above, adding these can result a nice feel, and make your terminal stands out. Tho it's only an additional option, add what's needed and what suits your style. don't over tweak things.

you can take a reference with these rices:

- [stand out border](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lNVwZzB4na-ibX9MWj-r8gHaEw%26pid%3DApi&f=1)
- [minimal with outline](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ly6Ymz12V-1QgC4_NVgdmgHaEK%26pid%3DApi&f=1)
- [rounded](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CwzNbqzfJV_55eRv-B-wEQHaEK%26pid%3DApi&f=1)


## Keep the theme on fit

You can easily generate dynamic color schemes using pywal, any other premade themes like gruvbox, dracula, etc. Is a valid option especially if you are just getting started and wanted a stable color scheme. I don't recommend you to make your own theme / color scheme as a beginner, but rather if you are good at UI/UX or designing things, then go for it.

## Conclusion

here comes the conclusion, don't be afraid to change things up, especially for your own good. If you are too afraid to make a mistake, configure a virtual machine, then use it as an experiment GNU/Linux rice, tho you might have more issues with virtual machines, it's still a good alternative way to ricing.

keep your attention to small details like spaces in between windows. When it comes to customizing your GNU/Linux, if you ever feel like it's wonky, re-check if anything doesn't make sense, e.g; your theme doesn't match, or if it's too bright.

happy hacking!

