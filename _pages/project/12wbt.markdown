---
layout: project
permalink: /project/12wbt/
theme: 12wbt
slug: 12wbt
title: 12WBT
tagline: A health and fitness product
description: 12WBT is an extremely successful online health and fitness platform
project_url: https://www.12wbt.com
client: Michelle Bridges 12WBT
project_date: 2011-2017
images:
  - desktop-12wbt-dynamic-video-hero.png
  - 12wbt-gallery-1.jpg
  - mobile-12wbt-dynamic-video-hero.png
---


[12WBT.com]({{ page.project_url }}) - an extremely successful online health and fitness platform.

Unless live in a cave, or (like me) you have very few friends, you probably know someone that has done 12WBT. Or perhaps you've done it yourself. 12WBT is Australia's most successful health and fitness platform, with a large number of members coming back again and again.

Here's how it works:
It's all digital - no physical meals, meetings, DVDs etc. You join for $199, then set up your goals (eg: "I'd like to lose 5kg for my wedding in March"). Based on who you are and what you're trying to achieve, you can then pick from a menu of programs - weight loss, running, strength and so on. Everyone starts with 4 weeks of Pre-Season, which is all about getting prepared. Then you go into 12 successive weeks of training and nutrition. Everyone starts together at the same time, and progresses through at the same pace.

We started on this way back in 2011. Back then there was a basic MVP built with a CMS, that was having some pretty significant growing pains. Which isn't unusual - a big part of MVP is working out what you don't know. We rebuilt the tech stack in Ruby on Rails over about 10 weeks, including a new payment system and a more evolved management system.

One of the interesting things about working on this project is that they have a very large group of highly engaged members, each of which is on a quite personal journey. There are a lot of them, they seem to use it pretty much all the time, and they are highly passionate and involved with the product.

All of which means we get pretty immediate feedback. And if you're going to ask for feedback, you'd better be prepared to do something about it. I won't bore you with details, but one morning we pushed a new feature. It became quickly apparent that while they liked some parts, other bits (that we'd de-prioritised) were in fact required. We scrambled and got two teams (front end and back end) working on an update, which we pushed out later that afternoon. I'm glossing over a few things here, like the reason that we were able to build and release a significant update quickly was partly due to all the foundation work before - the boring stuff like an automated test suite, continuous integration, and seamless "no downtime" deploy flow.

Anyway - back to the actual product. Probably the best way to check it out is to (sign up yourself)[https://12wbt.com]. You never know - you might really enjoy yourself! I actually was talking to a someone the other day who had signed up as a way of evaluating our work, and he ended up doing 3 rounds.


You [can read a bit more about](https://news.redant.com.au/michelle-bridges-12wbt-build-cace557b7f2d)  the 12WBT project on this post, and [about localisation for USA version](https://news.redant.com.au/what-weve-been-working-on-developing-12wbt-for-the-usa-e55efad40ba1) here. If you're really interested, or just bored at work and trying to fill in some time, check out the (12wbt dynamic videos project)[/project/12wbt-dynamic-video/] summary.




#### Project Detail

* __Paid membership site__ - members join and buy a subscription for a 3 month “round” &#8211; either up front or recurring weekly payments with high bursts of traffic when all members need to access the site at the same time.
* __Content system__ - members sign up and get content &amp; tools each week. As the program progresses through the 12 weeks, different features appear.
* __Event system__ - members can create events, RSVP to them, write reviews of events, and book tickets for paid events.
* __Forum &amp; private messaging system__ - tightly integrated with the rest of the site.
* __Help & FAQ__ - tightly integrated with 3rd party <span class="caps">SAAS</span> help system.
* __My Stats__ - an interactive tool which allows members to record their weight and key measurements, plus track progress over time.
