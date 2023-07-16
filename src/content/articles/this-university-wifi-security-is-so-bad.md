---
title: "This university's Wi-Fi security is so bad"
description: "test"
---

To be honest, I didn't put any great expectation on how good the quality of this university's Wi-Fi would be, because of an obvious specific reason which can only be spotted within the perspective of citizens in my country.

I would not be writing this if they didn't make another mistake, but this is too bad to tolerate. I can't stress enough if someone who discovers this vulnerability would do something extreme.


## Table of contents

## Stores plain text password as a cookie

I have heard that lenovo did this too with their website, but it was way long ago. Can you believe it? this is 2023 and the web is now modern, also the growth of AI is now sky rocketing and yet they still make the same mistake. A mistake this big entity has, it's a university with loads of students, staffs also they have an organization focusing on cyber security; no eye has been able to spot.

This vuln might seem not so severe, but the problem is that, this Wi-Fi requires the user to use the official university account. Lecturers, staffs, people that has authorities are also capable of using this Wi-Fi, which means I can hack into my lecturer's university account and do whatever I want. I can change my score, anything.

## I tried to help, this is so funny

You know, the obvious answer to this is to hash out the password, and thus I gave out an advice for them to do so, but oh did they do it, they did encrypted the password but then there's this auto fill feature that fills in the encrypted password that got stored in the cookie onto the password input element in html. Basically you can use the encrypted password as a bypass, in other hand, they didn't decrypt the encrypted password and just checks it as is. Can you believe it? this is how bad the situation was, I laughed so hard when I discover this.

For instance, your password is `mypassword`, and the encrypted (base64) password is `bXlwYXNzd29yZA==`, even if you pass down the encrypted password onto the input field, the Wi-Fi would still let you log in.

Judging by how the password is treated, this might be a fairly similiar algorithm they use:

```typescript
const verify_password = (password: string): boolean => {
    const stored_password: string = get_password_cookie()
    return password === stored_password || encrypt(password) === stored_password
}
```

The line where `password === stored_password` is where the problem lies, they also might not decrypt the `stored_password` and just blindly compares it like I said before.

## Writing a script; automating the process

[https://github.com/youkwhd/TUNE-CWE-315](https://github.com/youkwhd/TUNE-CWE-315), I made this as a web extension to make it hard to set up, also on top of that I used [CoffeeScript](https://coffeescript.org/) as the main language for more abstraction. I do this because I want to prevent script-kiddies from using it.

I made this to demonstrate that someone could have been targeting a specific person to hack. While also counting as an exercise for me, since this is a real-world problem. You could also sniff out cookies, there's tools like [Wireshark](https://www.wireshark.org/) and such.
