---
layout: post
title: Feeling a bit stuck on your MVP development?
permalink: "/red-ant-stuff/mvp-software-development-options/"
type: news
categories:
- software-development
author: Ben Still
image:
  small: 
  large: 
meta:
  keywords: 
  description: 
excerpt:
  short: 
  long: 

---
A really common scenario: you've had some code developed, but now you're feeling a bit stuck. Typically:

* your developer doesn't get what you're trying to do
* they are unavailable to do further work
* you need to move faster
* concerns about the work being good enough to commercialise or scale

Don't stress - lots of people are in exactly the same situation. There are a few key decisions you need to work out.

The first is whether you want to keep working with your existing developer or not. There might be reasons you'd like to keep working with them - such as they've already been paid, you think they understand everything and you don't want to lose that etc.

Or not. There might not be any reason to persist. But be clear in your own mind as to why. This helps repeating mistakes going forward.

Now if you want to keep working with your existing team, it would be a Bad Idea™️ to engage a dev team like Red Ant to do the work but at the same time also having your existing developer also committing work. I realise this might seem to make sense, but it rarely works out. 

What can work is if there is a natural segmentation in your project like APIs or delivery formats (eg: native phone app that consumes an API) - so each team can work pretty much independently. And most importantly take responsibility and ownership for delivery. 

Another option is to pad your team with freelancers, but this is not without it's challenges. The first is surprise at how hard it is to find developers. The second is joy when you finally find someone available. And the third is despair when you realise they are way more junior than you need and you're now a bit further behind.

To address delivery timeframe and quality, (in my opinion) you need to increase team size. Looking at what you’re trying to build, it is outside the scope of a single developer. I’d estimate that as a 3-4 person team project. That is not to say that a developer won’t say they can do it all - it is just in my experience the type of developer that would is exactly the type of developer you don’t want. They’ll typically make the early decisions and chose shiny technology that will mire you in technical debt for many years.

To explain - I get to see a lot of train wrecks. Companies at various stages, that have made various decisions. Then at some point they ask us for an estimate, a code review or analysis of options. My motivation is simple: we’d like to work with solid companies that become super successful via the awesome stuff we build, and keep on working with them for many years. A bad fit is bad both ways - so whatever insight or advice I can provide that helps you make a decision benefits us both. I have zero interest in taking on a project that then turns out to be a bad fit a few months in.

So- back to the first decision. If you want to keep on working with your current guy/gal, then I’d recommend finding some freelance developers to bulk up the team. This has its own challenges - you need someone to act as technical lead and manage the team, review code etc. But what I’d recommend that you not do is try to get a team like Red Ant to do some, and your guy/gal to do the rest. This is the fast train to shitsville - it is very hard unless (a) your project is a “commodity” like a wordpress site or (b) you have a conflict fetish.

Another approach is to start building up your own team. Obviously this has advantages, but also drawbacks - for example it can be very hard to evaluate and then onboard developers. We find it takes about 3-6 months before a new dev becomes useful. We've been working with one startup that had a Ruby platform (we built), and then hired a dev who then rebuilt a key part in C#, because as it turned out he didn’t have much experience in Ruby, and they didn't ask the right questions. They didn’t have anyone reviewing code or progress, and ended up with some half finished code that no one wanted to support or integrate.

However there are obviously plenty of companies that do do this successfully. My advice is that you do need to make a clear decision about whether you’re a product company, or a software company that makes a product. If you're hiring devs you need to be a software company.

The next decision (if the above don’t apply) is around the existing code. This isn’t something you can decide now - of course your preference is probably to use what you already have. We’d need to do a review to get a better understanding. It might be good to go- in which case we can build directly on top (Ruby is pretty good like that). There might be some flags, which we’d discuss with you, and it’s then your decision on whether to keep, fix or redo these. Often the compromise can be tricky, and there is typically a few of these. These are very normal - any project typically faces the trade off of quality and time. And there might be some showstoppers - areas that we feel can’t be built on. Again, we’d need to discuss and you’d need to make the call on these. This isn't a simple black and white thing.

Our costs to do this review depends on the size and complexity. Typically this takes about 3-4 days at a cost of $5k. To do this we’d need github repo view access.

Getting a team like us to take over the project is probably has the lowest risk / best return. You’re getting a more stable product and more predictable outcome. However, this all costs money, and might be more money than you have/want to spend. My advice would be to keep in mind that more effort = more code = more/better features. Just like other constraints in an Agile project - you’ve got quality, specific features, budget and delivery date that can all move up and down. If you fix one you might need to compromise on another(s). Also consider things like R&D grants that offset costs, and eventual sale. Working with reputable team like us does make this a lot easier - it is hard to justify good multiple if your underlying tech is wonky

In terms of a rough estimate for the full project, it does depend the existing code question. In my view it would be pretty dumb to just disregard what you already have. However the reverse can also be true- we’re working on a platform (similar situation - existing code that we are supporting and building on) where it has become clear that it would have been much faster to rebuild some areas. But we reviewed and made the call that it made operational sense (at that time) to stick with the existing code base.

If we take a glass half empty view, and assume we need to build from scratch, then our rough estimate is as follows. The caveat being that I’ve only done a quick pass on your wireframes and doc (which are very good btw)