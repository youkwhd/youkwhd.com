---
title: "my first c library, kind of."
date: "2022-08-20t11:55:34.255z"
tags:
  - software development 
  - gnu/linux
excerpt: "the making of libtmdb."
---

it has been ~5 months since the first mention of me wanting to make my own static site generator, yet it's never been developed, actually did, right before i made libtmdb, i was hacking libmd4c to inject header ids, tho it will not gonna be continued.

i instead made a library to call tmdb v3 api trough help of libcurl for network calls.

## table of contents

## designing the library api

by default, the library will create a global curl handler when the user called `tmdb_init()`, and freed until the user calls `tmdb_cleanup()`, but i was thinking that user might also have seperate curl handler in case they're using it to make other network calls using curl.

with that in mind, i can make a function to assign the curl handler by user, which means, the user is the one who initializes the curl handler themselves, thus libtmdb will use the user generated handler to make network calls.

on each tmdb_get*, tmdb_post*, tmdb_delete* function, a memory allocation is occured. this will be a memory buffer to hold data from curl.

## documentation

there is no hustle writing the documentation since all you need as a user is to go to the official tmdb website to peek their required api queries / paths, because as all tmdb_get*, tmdb_post*, tmdb_delete* functions reflect those as parameters.

## waiting for answers

> 20/11/2022; it is now live at [https://www.themoviedb.org/documentation/api/wrappers-libraries](https://www.themoviedb.org/documentation/api/wrappers-libraries) :d

i contacted tmdb via this [https://www.themoviedb.org/about/staying-in-touch](https://www.themoviedb.org/about/staying-in-touch) to put my library on [https://www.themoviedb.org/documentation/api/wrappers-libraries](https://www.themoviedb.org/documentation/api/wrappers-libraries) so it can be actually used. as they stated that _"all of the libraries listed below are user contributed"_. i hope mine can be there soon 🙂 even tho it's developed in 2022 😭.
