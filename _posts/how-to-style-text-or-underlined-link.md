---
title: A Guide to Style Text or Underlined Links
date: "2021-09-27"
tags:
  - html
  - css
excerpt: here is a way to style text or underlined links with pure css (understanding pseudo elements)
---

designing underlined text is hard, but when it comes to styling it, it should be very easy right? yes. indeed if you know a good amount of knowledge in css, in this case, i will be using the [css pseudo elements](https://www.w3schools.com/css/css_pseudo_elements.asp) and a built-in box shadow method to execute the design.

the underlined text should look like this:  
an example of the <a href="#" class="underlined-text">underlined text</a> is here!

## Using pseudo elements
we should have a paragraph or an anchor tag to style with. to start off, i'm gonna make a simple html code here:

```html
<a href="">hello world</a>
```

now you have made a simple link, then we can start styling it using the pseudo elements, css style should look like this:

```css
a {
    position: relative;
    text-decoration: none;
}
```

take a look at the styling, we are going to make an underlined link, but why did i remove the `text-decoration` property? to answer the question, we will not gonna style it based off the text decoration but with 'psuedo' technique.

now, you should write up the following css code:

```css
a::after {
    content: "";
    background-color: #df8888;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 32%;
}
```

if you are new to css, you might not know this `content` property. so what does it do? as the name speaks for itself, the property will be a content for the ::after or ::before content, which will display texts. in this case i will keep it as an empty string so the link won't break, but you can play with it as you wish.

if you still have some problem with the content property, you should [read this article](https://www.w3schools.com/CSSref/pr_gen_content.asp) from w3schools.com

with `position: absolute` being casted, we can visually see and determine the position of the underline. so it will stick to the bottom by adding the `bottom: 0` and `left: 0` to the code. but the problem here is that, the line will cover up your link, so what's the solution?

using `z-index` will make a specific 'layer' to be on top or on the bottom. in this case, we need the line to be on the bottom of the link, so we are going to make it minus in order to make it stick to the bottom.

so whether you've read how to make it or not, here is the final code to copy paste:

```css
a {
    position: relative;
    text-decoration: none;
}

a::after {
    content: "";
    background-color: #df8888;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 32%;
}
```

## Using box shadow
you can also use `box-shadow` to accomplish the effect, this method is far more the **better solution**.

```css
a {
    box-shadow: inset 0 -8px 0 0 rgba(233, 136, 136 , .1);
}
```

## Why it is recommended to use box shadow instead of pseudo elements
when you're using pseudo elements, all of the sudden it looks like it's working at first. But then the text is resized, and apparently, the underline doesn't adapt with the current size. You can compare it yourself by resizing your browser size.


## Conclusion
there is a lot of way when it comes to styling in web development. pick a good and efficient way to make the css globally reuseable. Any solution would work if you put effort into it. i hope this article helps you to understand the use of [css pseudo elements](https://www.w3schools.com/css/css_pseudo_elements.asp)

however, `box-shadow` is the better way to implement the underlined text, happi hacking.
