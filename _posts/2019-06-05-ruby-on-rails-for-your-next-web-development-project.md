---
layout: post
permalink: "/software-development/ruby-on-rails-for-your-web-development"
type: news
categories:
- software-development
author: Ben Still
tags: []
time: 15 Mins Read
title: Why choose Ruby on Rails for your next web development project
description: The no nonsense guide for entrepreneurs, startups, product owners or
  anyone that is a bit baffled about tech stack options.
keywords: ''
image-small: ''
image-large: ''
excerpt-short: The no nonsense guide for entrepreneurs, startups, product owners or
  anyone that is a bit baffled about tech stack options.
excerpt-long: The no nonsense guide for entrepreneurs, startups, product owners or
  anyone that is a bit baffled about tech stack options.
redirect_from: []

---
After reading this guide, you’ll have a better understanding of

* What Ruby on Rails actually is
* What the “open source” bit means
* How Rails stacks up against other development options
* When it makes sense to use Ruby vs another option

**What is Ruby on Rails?**

Ruby on Rails (also referred to as “Rails” or “RoR”) is an open source development framework. The “Ruby” part refers to the Ruby programming language. The “Rails” part is the framework (more on that shortly).

Ruby on Rails helps developers create web applications quickly, much faster and more reliably than if they wrote the code directly in a programming language like Ruby or PHP. This saves time and money, and improves ongoing maintenance.

<div style="border:1px solid #eee">

**Hang on - that sounds just like something else I heard about**

Ruby on Rails has been incredibly successful. It came onto the development scene around 2005, and introduced all these new concepts and ways of working. Things like separating code into data, logic and visual layer (MVC), which radically changed the way we worked.

Many of these ideas have since been applied to other frameworks - from Microsoft dotNet to PHP frameworks. Which can make things a bit fuzzy - there is a huge amount of cross over between different open source frameworks.

</div>

**So what’s Ruby then?**

Ruby is a programming language. First released in 1995, Ruby is ranked among the top 10 on most of the indices that measure the growth and popularity of programming languages worldwide (such as the [TIOBE index](http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html)). Ruby is also [completely free](https://www.ruby-lang.org/en/about/license.txt). Not only free of charge, but also free to use, copy, modify, and distribute.

> _“I wanted a scripting language that was more powerful than Perl, and more object-oriented than Python_[_2_](https://www.ruby-lang.org/en/about/#fn2)_.”_

Ruby creator, [Yukihiro “Matz” Matsumoto](http://www.rubyist.net/\~matz/), blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a new language that balanced functional programming with imperative programming.

**_What are the features that make Ruby attractive to developers?_**

**1 Everything can be an object**

In Ruby, everything is an object. Every bit of information and code can be given their own properties and actions. Object-oriented programming calls properties by the name _instance variables_ and actions are known as _methods_. Ruby’s pure object-oriented approach is most commonly demonstrated by a bit of code which applies an action to a number.

    5.times { print "We love Ruby -- it's outrageous!" }

In many languages, numbers and other primitive types are not objects. Ruby follows the influence of the Smalltalk language by giving methods and instance variables to all of its types. This eases one’s use of Ruby, since rules applying to objects apply to all of Ruby.

**2 Flexibility**

Ruby is seen as a flexible language, since it allows its users to freely alter its parts. Essential parts of Ruby can be removed or redefined, at will. Existing parts can be added upon. Ruby tries not to restrict the coder.

**3 Blocks**

Ruby’s block are also seen as a source of great flexibility. A programmer can attach a closure to any method, describing how that method should act. The closure is called a block and has become one of the most popular features for newcomers to Ruby from other imperative languages like PHP or Visual Basic.

**OK- so what’s the Rails part then?**

“Rails” is the framework that sits on top of Ruby. The intention of Ruby on Rails is to maximise Developer happiness, by providing them with a tool that is both natural to use and incredibly efficient.

One of the ways this is done is something called **“convention over configuration”**. There is a “way” of doing things that is baked into the framework. Say your developer is creating a database of users. If they are using Ruby on Rails, we know the name of the table will be “users”, and the primary key will be “user_id”. This is only a small example, but it’s amazing how much time gets lost procrastinating or arguing about names. You can read more about that here [https://rubyonrails.org/doctrine/#omakase](https://rubyonrails.org/doctrine/#omakase "https://rubyonrails.org/doctrine/#omakase")

Another way is **Gems**, which are code libraries that provide specific functionality. A developer can easily add these in, and - hey presto - it just works. You can get a Gem to do pretty much anything you can imagine (for code anyway) - from secure authentication to adding a REST API.

**Automated testing** is another. Instead of a developer making some functionality and then relying on someone else to test whether it works, an automated test is a script which can test to make sure it does. Every time.

**Scaffolding** is a way of quickly building out functionality. Work out some basic data, and Ruby on Rails is smart enough to automatically build out a “scaffolded” version of your site. This saves a lot of time when you’re sketching out an idea or concept.

**Some backstory - our first Red Ant product and how we got to Rails**  
Back around 2002, we were building a lot of websites that required some form of content management. There were options available, but they were expensive and pretty inflexible. This was a dark time in the history of web development, where Flash was still the “Go To”.

We decided to package up the content management system that we’d been creating into a re-usable tool. It had some features that we thought were pretty cool - such as generating a static version of a site, xml data stores and a handy templating system.

Looking back, it’s clear we had no idea. We’d used the Microsoft ASP language, which was slow even then. We’d created a library system, but we never properly considered dependency. Each module relied on others, so it was like going to a book library and having to check out the entire library if you wanted to read one of the books. Our XML system ground to a halt once a certain size limit was reached.

To make things worse, for each customer we made customisations. So each version was slightly different, and each developer had started to use different conventions. As we made updates, the task to update each got bigger. Some of our changes weren’t backwards compatible. Our team started having long squabbles over variable naming. One developer ran out crying when another renamed his code to be all lowercase.Our CMS was a great example of an immature platform - it looked great, but under the hood was based on a slow tech stack that was poorly thought out. Nothing was scaling, and things only kept working if no one touched them.

At about this time, we discovered Rails. It was quite the epiphany - an opinionated framework that set clear conventions. It was fast, and was a pleasure to work in. Automated testing baked in. Clear separation of logic, data and presentation views. Minds were blown.

**Methodology for picking the right technology stack**

> _Pro tip: look for a mature, stable core team, and an engaged community_

Like in many other areas, trends come and go in web development technologies. We’re at the forefront of an endless drive for innovation, and it’s accelerating. And like all innovation, there are bumps along the way. Sometimes it works and sometimes it ends in a dead end.

The challenge for you as an entrepreneur / product owner / developer is how to avoid picking a technology where you spend a ton of time, money and effort and then find out it was the wrong choice. Then you’re faced with either shutting down your product, limping along with no change, or a hefty re-write.

Some people face this challenge by picking the new, shiny technology. The thing they read that blog post about. Like a car, if I pick the newest model it will stay operational for longer. But that analogy doesn’t apply that well - the car model you pick may end up needing fuel you can’t buy and a type of road that no longer exists. And the doors no longer open.

Other people face this by choosing an “enterprise” solution - typically something from an Adobe, a Microsoft or an IBM. This certainly offers stability, but it comes at a steep price. Not just in money you need to pay them, but also in the glacial pace of corporate innovation when compared with Open Source.

There is a middle ground here. Picking Open Source makes a lot of sense- the rate of innovation and reliability is far better than a closed source approach. But it pays to look at the core development team, and how well they are working together. Do they have a solid record of releasing reliable updates? How engaged is the developer community? Are they helping the core team find and address issues, or is there a lot of inane squabbling and flame wars?

**A short history of some recent technology dead ends**

**Mambo**

* Released in 2001 - became a very popular open source CMS using PHP.
* Various awards such as best open source software, best CMS
* Hit with IP infringement lawsuits and security issues
* Internal squabble and Mambo splits into “Jango” and then “Joomla”. They start the same but begin to diverge.
* If your project was on Mambo, you’d need to get significant parts updated or rebuilt to keep up with all the changes.
* Mambo fizzles out in 2008, Jango in 2011 and Joomla is still going.

**Angular**

* Released in 2010, Angular was a very popular technology that helped developers create “front end” apps. These used asynchronous javascript to make changes happen in the browser incredibly quickly. This made user interfaces very responsive and fast.
* There were several similar projects, but Angular had the support of Google so it seemed like a solid technology.
* Version 2 came out in 2016 with all these cool new features, but with one drawback. No backward compatibility. So anything you had before had to be completely redone. Sticking on the old version means you’ll eventually fail security audits and have grumpy devs that don’t want to work on “old tech”.
* Angular skipped v3 (because) and went to v4, and then v5, which also failed to support much of an upgrade path.

**Ember**

* First released in 2011, Ember is a javascript framework ideally suited to building single page applications that scale well.
* For the first few years, Ember was quite popular and used on a lot of different apps from Groupon to Linkedin. However the core development team seemed to have lost focus, and became slow in releasing updates.
* Open Source can be a fickle thing - and this one seems to have become like a party where everyone is thinking about going home. The community wasn’t particularly driven in one direction, and as a result not much changed. Developers stopped using it.
* In some ways Ember has the reverse of Angular’s problem - it has a stable code base but with no innovation. The rate of change has fallen well behind other similar javascript projects. If you’re the owner of an Ember project, you’re probably facing a complete rewrite in React or similar.

**Ruby on Rails release history**

The core Ruby on Rails team is remarkably stable, both in makeup and their release schedule. Since v1 in 2005 they have kept to a reliable schedule of significant version updates around every 2-3 years, releasing smaller “dot point” upgrades along the way.

[https://en.wikipedia.org/wiki/Ruby_on_Rails#History](https://en.wikipedia.org/wiki/Ruby_on_Rails#History "https://en.wikipedia.org/wiki/Ruby_on_Rails#History")

1. 2005
2. 2007
3. 2010
4. 2013
5. 2016
6. 2019

**Support for older versions**

A lot of effort and planning goes into providing backward compatibility and support for older versions. The code base is remarkably stable, and the various changes between each version are clearly explained and reasoned. This is in contrast to some open source projects where a small, immature core team decided to “flip the table” and do radical change.