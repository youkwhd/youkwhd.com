---
title: "My first C library, kind of."
date: "2022-08-20T11:55:34.255Z"
tags:
  - software development 
  - gnu/linux
excerpt: "The making of libtmdb."
---

It has been ~5 months since the first mention of me wanting to make my own static site generator, yet it's never been developed, actually did, right before i made libtmdb, i was hacking libmd4c to inject header IDs, tho it will not gonna be continued.

I instead made a library to call TMDb v3 API trough help of libcurl for network calls.

## Table of Contents

## Designing the library API

By default, the library will create a global curl handler when the user called `tmdb_init()`, and freed until the user calls `tmdb_cleanup()`, but i was thinking that user might also have seperate curl handler in case they're using it to make other network calls using curl.

With that in mind, i can make a function to assign the curl handler by user, which means, the user is the one who initializes the curl handler themselves, thus libtmdb will use the user generated handler to make network calls.

On each tmdb_get*, tmdb_post*, tmdb_delete* function, a memory allocation is occured. This will be a memory buffer to hold data from curl.

## Documentation

There is no hustle writing the documentation since all you need as a user is to go to the official TMDb website to peek their required API queries / paths, because as all tmdb_get*, tmdb_post*, tmdb_delete* functions reflect those as parameters.

## Waiting for answers

I contacted TMDb via this [https://www.themoviedb.org/about/staying-in-touch](https://www.themoviedb.org/about/staying-in-touch) to put my library on [https://www.themoviedb.org/documentation/api/wrappers-libraries](https://www.themoviedb.org/documentation/api/wrappers-libraries) so it can be actually used. As they stated that _"All of the libraries listed below are user contributed"_. I hope mine can be there soon 🙂 even tho it's developed in 2022 😭.
