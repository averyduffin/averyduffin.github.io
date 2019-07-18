---
layout: post
title:  "Easiest way to get and create url search params: Javascript"
date:   2019-07-17 23:06:57 -0600
categories: javascript react begginner
background: '/img/posts/loop.jpg'
---

Look there are probably a lot of ways you can get url parameters. Maybe your programming in react and use some library. I've found with modern browsers api's make it really simple.

I'll show you a few tools that you can use to get those URL params.

Get URL
=======

First thing we need to do is get the URL. Pretty simple really. All browsers support the url on the window with `window.location`.

```const url = window.location```

That was easy.

Get URL Parameters
==================

Now to get the URL parameters we are going to use an api made for modern browsers called `URL`. Here's a list of supported browsers if you want to make sure before you use it.

![](https://miro.medium.com/max/600/1*k8Js4UI1zshZkrCom67JXA.png)

[https://developer.mozilla.org/en-US/docs/Web/API/URL/URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL?source=post_page---------------------------)

First thing we want to do is make a new URL object. Then we can use a function on the URL object to get the parameters we want.

Heres the code:

```const url = window.location; // [http://google.com](http://google.com/?source=post_page---------------------------)?id=test\
const urlObject = new URL(url);\
const id = urlObject.searchParams.get('id')\
console.log(id)\
// prints\
// test```

If `id` doesn't exist then id will be null.

Create URL with parameters
==========================

To create a url with parameters it's really simple also. Once again we use a browser api tool `URLSearchParams()`.

Here's the compatibility of this function.

![](https://miro.medium.com/max/600/1*FW3hPS3WSC9xR7ASS0BydQ.png)

[https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams?source=post_page---------------------------)

`URLSearchParams()` is a really great function and can take a variety of options.

Here's a list of the example options the constructor can take.

```const url = new URL('https://example.com?foo=1&bar=2');

// Retrieve params via url.search\
// url.search ?foo=1&bar=2\
const params = new URLSearchParams(url.search);

// Pass in a sequence\
const params3 = new URLSearchParams([["foo", 1],["bar", 2]]);

// Pass in a record\
const params4 = new URLSearchParams({"foo" : 1 , "bar" : 2});```

So you can decide how you want to pass in these search parameters but here's what I do.

```const params = { id: 'blahdy' }\
const paramString = new URLSearchParams(params)\
console.log(`http://google.com?${paramString.toString()}`)```

Conclusion
==========

You can build parameter search strings in only a couple lines of code. This is easiest way you can get and construct these strings. If you have any better ways of doing the same thing make a comment and let me know.

Also if you want to see another cool way to use URLSearchParams check out my post about [Cool ES2019 features this year!](https://medium.com/@averyduffin/cool-es2019-features-this-year-d2ec0008d52d?source=post_page---------------------------) . Here I explain a new cool feature that you can use with URLSearchParams.

Happy Coding!

Follow me on twitter!
