---
layout: project
theme: 12wbt
slug: 12wbt-dynamic-video
title: 12WBT Dynamic Video
tagline: A health and fitness product
description: Find a pocket personal trainer
project_url: https://www.12wbt.com
client: 12WBT
project_date: 2015
technologies: Ruby, Brightcove
images:
  -
    filename: desktop-12wbtdynamicworkout-1.jpg
    title: Exercise Plan (Desktop)
  -
    filename: mobile-12wbtdynamicworkout-1.jpg
    title: Exercise Plan (Mobile)
  -
    filename: desktop-12wbtdynamicworkout-2.jpg
    title: Workout Video Player (Desktop)
  -
    filename: mobile-12wbtdynamicworkout-2.jpg
    title: Workout Video Player (mobile)
---

#### Project Description

People often talk about scaling things - scaling ideas, technology, processes etc. In a nutshell, keeping things smooth while something grows bigger. But what about content?

Sure- if you’re Facebook or YouTube, your content scales up as you get more users. You can add more tools or features, and your users will generate more content. But this only applies to a minority of businesses. Not everyone is Facebook. What if you need to create the content that your users consume?

On the 12WBT project, we faced this issue. The platform grew from a few hundred users to a few thousand, then a few hundred thousand. What started as a single product quickly split into multiple streams (weight-loss, running etc). And the whole reason for signing up and coming to the site was content.

We scaled some content early on. Take recipes:
<ul>
 	<li>many recipe sites treat a recipe as a block of content. Think of it almost like a Word doc. A title, and image, a description that contains ingredients and method.</li>
 	<li>our first iteration changed ingredients from a block of text into a list that came out of a database. That meant we could generate a shopping list of ingredients, so the members could easily buy what they needed for the week. The devil is very much in the detail here. It needed to be smart enough to know that if you had 3 recipes with half a lime, you need to buy 2 limes. Or that eggs come in a dozen and in different weights. Or that “a slice of toast” comes in loaves of bread. Or that a spoon of honey is something we should assume you probably already have (both the spoon and the honey).</li>
 	<li>then we made the process of building a recipe easier. Improving the UI for the editor, and helping speed up the various tasks.</li>
 	<li>The next iteration was to connect this list of ingredients to a nutrition database. This meant that for each recipe, we could automatically (and accurately) generate a description of fibre, calories, etc. So rather than have someone spend time working that out and then typing it all in, it would just magically appear.</li>
 	<li>Then we added personalisation: as you build a recipe, you could create variations to suit different types of users. So a pregnant person would not get the soft cheese in that recipe, while a guy on a strength program might be trying to hit 2,200 calories and needs that plus some extra protein.</li>
</ul>
End result: we started off with not many recipes. We made them easier and faster to generate, with more accurate information. We got to a few hundred recipes. Then we made them dynamic, personalised to different user types. This got us to a few thousand recipes.

The next content scaling issue was video. Video is really really popular on 12WBT. It makes sense – people want to watch a workout and do it at the same time. But as the member base grew, we needed a way of doing kind of what we had already done with recipes, but for video.

To explain a bit more, the super popular videos are 45 minute workouts. This is where you have several trainers going through a workout routine. They take a while to make - you need to get lots of people involved, everyone needs to rehearse, a dedicated set, and several cameras. Then once it is shot it still needs to get edited and uploaded.

So they’re really popular, but they take a while to make. They don’t scale particularly well.

To make things scale, we took a different approach. From a users point of view, they still get a stream of video on their phone or browser. But there are now HEAPS of different videos available to chose from.

Instead of shooting everything as one continuous narrative, each exercise is shot separately. Say the workout starts with a push up, the talent is shot doing a single pushup. This is carefully edited so that it can loop seamlessly. We do this for each exercise.

Then when it comes time for the fitness expert to “build” a new workout, they pick out a pushup, and add in repeats.

![Regular Workout Videos]({{ site.data.webpack['12wbt-video-diagram-1.jpg'] }})
![Dynamic Workout Videos]({{ site.data.webpack['12wbt-video-diagram-2.jpg'] }})

When the user gets to the page, what they are actually seeing is an array of HTML5 videos. Each exercise is looped for the correct number of reps. Just like recipes, this can be customised to the user profile: so you might get 6 pushups, but because I am just so totally buff I will get 16. If normal pushups are too hard, it can be swapped to an easier variation (knee push up).

The end result looks like a normal video, but is actually dynamically assembled.

Taking this approach, the video content becomes scalable. Rather than just a few long videos, we can create literally millions of different workouts.