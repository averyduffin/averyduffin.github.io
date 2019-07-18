---
layout: post
title:  "Javascript for vs forEach vs for…in loop"
date:   2019-07-17 23:06:57 -0600
categories: javascript react begginner
background: '/img/posts/loop.jpg'
---

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@tine999?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Tine Ivanič"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Tine Ivanič</span></a>

Javascript has many features that make it nice to work with. Iterating over objects is one of those features. Classically in programming we use a for loop to iterate over a list of items or objects.

The traditional for loops looks as follows:

{% highlight javascript %}
for (i = 0; i < 10; i++) {\
  // do something\
}
{% endhighlight %}

This is nice but now you have to worry about indices. This can get a bit hairy and if your like me and hate looking at tons of variables then id use this as a last resort.

Javascript has created two alternatives forEach and for...in

forEach()
=========

If you have an array. Such as the following:

{% highlight javascript %}
const newArr =  [ 12, 34, 56, 43 ]
{% endhighlight %}

In javascript all arrays have the functional property forEach. You use it by specifying a function that takes a parameter. Everytime your function is called its being called with each item in the array.


{% highlight javascript %}
const newArr =  [ 12, 34, 56, 43 ]newArr.forEach( (item) => {\
  console.log(item)\
});// prints\
// 12\
// 34\
// 56\
// 43
{% endhighlight %}

If you don't have a need to break early while iterating over an array this is a great function to use.

for...in
======

A for in loop can be very useful. Use a for...in loop to iterate over any object thats enumerable. Meaning an array or object or strings. If you are using a for...in loop over an object it will give you the value to each key in the object.

{% highlight javascript %}
const obj = {\
  foo: 1,\
  blah: 2,\
  car: 3,\
  dog: 4\
}

for (let elem in obj) {\
  console.log( obj[elem] )\
}// Returns\
// 1\
// 2\
// 3\
// 4
{% endhighlight %}

For...in loops do not have a specific order for execution. Therefore you shouldn't use it if you are expecting a specific order.

If you need to guarantee order on an object. I recommend specifying either an index in your objects or put your keys in an array.

Conclusion
==========

Javascript has made functions that are easier to iterate over enumerable objects on. While we can use these there may be a few cases when we will still want to rely on the plain old for loop.

Happy coding!

follow me on twitter