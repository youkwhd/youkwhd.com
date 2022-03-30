---
title: "A journey of fixing screen tearing with hybrid graphic cards using a compositor"
date: "2022-03-30T16:35:53.875Z"
tags:
    - gnu/linux
excerpt: "I have two graphic cards on my current laptop, Intel and NVIDIA. After starting an X session, i noticed a strange behaviour on my screen, it tears or sliced apart. Here's my journey on fixing the screen tearing problem."
---

I have two graphic cards on my current laptop, Intel Xeon E3-1200 v6/7th Gen Core Processor and NVIDIA GeForce MX230. After starting an X session, i noticed a strange behaviour on my screen, it tears or sliced apart. Here's my journey on fixing the screen tearing problem.

## Table of contents

## The first compositor i use

I used [xcompmgr](https://gitlab.freedesktop.org/xorg/app/xcompmgr/) in the past, it works out-of-the-box (tested on dwm and i3), no tweaks needed. Sadly, there is a problem i have that i mentioned previously, screen tearing. At that moment, i didn't know what should be done and what should be replaced.

## Configuring the intel driver

On arch wiki, there is a setting you have to configure manually, which was to edit the file `/etc/X11/xorg.conf.d/20-intel.conf` and add the following line:

```text
Section "Device"
  Identifier "Intel Graphics"
  Driver "intel"
  Option "TearFree" "true" #this one specifically
EndSection
```

But the screen tearing is still present, i also have tried to pass the option `Options "AccelMethod" "uxa"`

> SNA was used by default

I even tried to switch from DRI3 to DRI2, but this doesn't seem to have a connection with "TearFree".

One more thing i tried is to add the option "TripleBuffer" according to the arch wiki:

> For Intel UHD 620 or 630 you will need to add `Option "TripleBuffer" "true"` in order for TearFree to work.

Neither works.

## Surfing on the internet, searching for a solution

I know that the compositor `picom` was one of the possible solution for me after watching a video from [The Linux Cast](https://thelinuxcast.org/) which was [I Used Gentoo for a Week - Should You Try Gentoo?](https://www.youtube.com/watch?v=Lx1MyJtKTw8), on that video, he seems to have the same problem with me. But he mentioned that `picom` was one of the solution to this, well, he states that it's just to get rid of the top 90% of the screen tearing? ..

He also mentioned that he have used the "trick" that everyone suggests, which was to configure the [20-intel.conf](#configuring-the-intel-driver) file, that also resolves into nothing for him.

## NVIDIA DRM

Moving on with NVIDIA, i tried to enable the Direct Rendering Manager. Configuring it with adding the `nvidia-drm.modeset=1` kernel parameter using GRUB.

To do this, edit the file `/etc/default/grub` and edit the line `GRUB_CMDLINE_LINUX_DEFAULT` and add the `nvidia-drm.modeset=1` parameter:

```text
GRUB_DEFAULT=0
GRUB_TIMEOUT=0
GRUB_DISTRIBUTOR="Arch"
GRUB_CMDLINE_LINUX_DEFAULT="nvidia-drm.modeset=1 loglevel=3 splash" 
GRUB_CMDLINE_LINUX=""
```


After doing so, now you can generate the `grub.cfg` file using `grub-mkconfig`:

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Reboot, then NVIDIA DRM should be enabled.

## Picom and the experimental backends

When i started to use picom, i have tried the flag --backend glx and --vsync, tho this doesn't help that much. There is still some tearing going on, but noticeably more reduced. The solution was to use the flag --experimental-backends. 

Now i can take my windows fly with me without seeing it's part tearing, this was a pain in the ass to configure with. But it was a great journey, i learned a lot of what's actually happening with my GPUs and CPUs, here is a helpful video explaining screen tearing [Screen Tearing and DWM](https://www.youtube.com/watch?v=Lx1MyJtKTw8). Wow, it's this is a great achievement / experience i got. I hope this helps you if you are encountering the same problem as i did, happy hacking.
