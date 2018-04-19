---
layout: project
theme: nps
slug: nps-medicinewise
title: NPS Medicinewise
tagline: A reliable online resource for drug and health information
description: Making Australia more medicine wise, through digital health and data insights, health professional education and reliable health information for consumers.
project_url: https://www.nps.org.au/
client: NPS Medicinewise
technologies: Ruby on Rails, Scrivito
project_date: 2015-17
images:
  -
    filename: nps-medicinewise-1.jpg
  -
    filename: nps-medicinewise-2.jpg
  -
    filename: nps-medicinewise-3.jpg
  -
    filename: nps-medicinewise-4.jpg
---

#### Project Description

NPS Medicinewise is an Australian Government funded web site, which seeks to provide reliable health information to consumers, as well as digital and data insights to health professionals.

The upgrade of the web site was part of a wider Digital transformation project. They have two key audiences: 

- health professionals, and 
- consumers. 

To communicate with health professionals, one of their main channels was the Australian Prescriber journal, which is a peer reviewed medical journal. There was also an online component, but it was proving challenging to maintain and keep synchronised.

To communicate with consumers, they needed to have a large amount of useful and relevant information, as well as tools and lists of medical data. They also had some specific requirements around accessibility.

The first part of the project was to move the [Australian Prescriber to be fully digital](https://www.nps.org.au/australian-prescriber). This would be a huge cost saving by replacing the paper versions. We optimised the workflow, and also used the Scrivito Rails CMS to provide a very good editing experience:

![Scrivito editing CMS]({{ site.data.webpack['scrivito-1.gif'] }})

<div style="padding:20px;background:#eee;">
	
<h4> Hang on - what is this Scrivito CMS? What is Rails?</h4>

Don't worry- this can be confusing. Often when people are faced with a requirement: 
_"I have/want a web site with lots of content that my team can edit"_
they start looking for the best CMS. Google that and you'll get a billion options and opinions. Some are free, while others are eye-watering-ly expensive. What about Wordpress, what about Adobe, what about SiteCore? Move past the hype, and they are all remarkably similar- you edit some content, click save, and it appears on a page. 

One key distinction is how they connect to other code. Wordpress, Sitecore and Adobe EM are all examples of __CMS platforms__ - they are intended to be the primary technology. They suit sites where most of the pages are stuff you're editing. If you want to add functionality to say your WPress site, you need to code that functionality so that it follows WPress formats. Which is fine for simple things, but becomes exponentially more difficult as complexity increases. 

There is another type of CMS, sometimes called <i>Headless CMS</i>. Examples being <a href="https://scrivito.com/features">Scrivito</a> and <a href="https://www.contentful.com/">Contentful</a>. These are a bit more flexible (and we are big fans). You develop your code to do whatever it needs to do, and then sprinkle some CMS on pages or blocks of content as required.

Pick your CMS by first understanding your total requirements, then determine if you need a platform or headless CMS. If anyone uses buzz words like "personalisation" as a reason for a particular CMS (I'm looking at you, Adobe and Sitecore), stop and think about exactly what is the problem you're trying to solve. Perhaps <a href="/portfolio/12wbt-dynamic-video/">dynamic content for each user</a> is what you're actually after.

 </div>

Anyway, back to the NPS project. The next phase of the project was to update the rest of quite a large site to also be using Scrivito. This meant designing and building new templates, as well as the content team updating literally thousands of pages of content. One of the nice features was an ability to create working copies. This means anyone on a team can start working on a version of the site, and then merge their changes when they are done. This avoids the problem in many rigid publishing workflows, and follows the very efficient workflow popularised by Git for developers.


![Scrivito working copies]({{ site.data.webpack['scrivito-working-copy.gif'] }})

Apart from the pages of content, there were also large areas of the site that rely on feeds of information. One of these is the [Medicine Finder](https://www.nps.org.au/medical-info/medicine-finder/), which pulls in MIMS drug data. We needed to develop a process to pull this information in, index and contextualise, and then have it appear as [search result pages like this one](https://www.nps.org.au/medical-info/medicine-finder/panadol-cold-flu-relief-original-formula-tablets).

Finally, all of this needed to get set up in a resilient manner. Part of the site relied on automated feeds, so we needed to make sure if there was an error in the feed, it would get automatically healed (in the case of a missing image or tag) or reported to a human. We used Automated Tests to make sure the code was working correctly, and finally deployed to a Kubernetes cluster on Amazon AWS.

