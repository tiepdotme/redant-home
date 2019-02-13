---
layout: post
title: What makes property management so hard?
type: news
permalink: "/software-development/what-makes-property-management-so-hard"
categories:
- software-development
author: Ben Still
description: From the outside looking in, the property management business looks pretty
  simple.
keywords: property management, payments
date: 2019-02-12 02:31:36 +0000
image-small: "/assets/uploads/2019/managed.png"
image-large: "/assets/uploads/2019/managed.png"
excerpt-short: From the outside looking in, the property management business looks
  pretty simple.
excerpt-long: From the outside looking in, the property management business looks
  pretty simple. Turns out there are quite a few things that make it trickier than
  you might expect.
tags:
- software-development
time: 
redirect_from: 

---
Like a few industries we’ve worked in, from the outside looking in, the property management business looks pretty simple.

Here’s how I thought it worked: A tenant signs a lease, and then sets up regular rent payments. These payments go to the owner’s bank account. The property manager gets paid a fee, and everything is pretty simple and sweet.

It’s once you take a look under the hood that you see how messy and hard things can be. In no particular order:

**Problem 1: Trust accounts**

Turns out the money doesn’t just go to the owner. It first goes into a Trust account, which is a special type of bank account the agency must have. This Trust costs the Agency - they need to employ people to manage and audit the account - while at the same time the law prevents them from earning any interest on funds held.

**Problem 2: Fraud**

So you’ve got this big pool of money, and lots of money going in and out. Guess what happens? Obviously this is only in a small percentage of cases, but there are two types of fraud.

The first is money coming in for PropertyA, which is used to pay for a cost on PropertyB. PropertyB’s rent hasn’t yet come in, but the cost needs to get paid. Sure, it will probably all even out, but it does mean the owner of PropertyA won’t get paid straight away.

Very hard to detect, and this might occur deliberately or by accident.

The second type is more straight up fraud:

* NSW real estate agent [Daniel Nicholson](http://www.realestatebusiness.com.au/breaking-news/11202-agent-jailed-over-trust-account-fraud) was prosecuted after he failed to lodge almost $93,000 in trust funds
* [One agent who fraudulently used the funds](https://www.smh.com.au/business/consumer-affairs/millions-in-nsw-real-estate-fraud-prompts-raft-of-new-regulations-20161124-gsx3gf.html) to purchase illegal drugs used by his wife.
* Another [whose father reported her to Fair Trading](https://www.illawarramercury.com.au/story/1982022/warilla-agent-feeds-101m-into-pokies/) after she stole more than $1.5 million from her real estate agency to use on poker machines.
* Gambling addiction is identified as a common motivator for trust account fraud, as was the case for one agent who bet $77,000 of trust funds in one day.

**Problem 3: Margins and outsourcing**

Managing a portfolio of rental properties can be very time consuming, and the wage cost might not always align with revenue. This is in contrast to the Sales side of an agency, where new sales align with commissions paid to agents.

This drives a desire to keep costs down, and so some agencies explore outsourcing options such as using staff in offshore centres to manage trust funds. The regulator (eg: Office of Fair Trading in NSW) doesn’t look kindly on this, and processing data in this way would make it difficult to meet the tougher new Data and Privacy obligations.

**Problem 4: Speed of payments**

There is a general user expectation that payments happen in the blink of an eye. And they can - except when they don't. It's all to do with the method (or the "rails" if you want to use fancy FinTech talk). 

A credit card is easy - as the vendor I can even check your account to make sure you have enough money before the transaction occurs. The transaction itself happens pretty much straight away.

But other methods like Direct Debit or BPay are much slower, and confusingly there are faster and slower flavours of each. At it's slowest, a DD takes 3 days to go from a tenant's account to the platform (eg: Managed). And then another 3 days to go from Managed to the owner. Oh, and if on that first day you did it after the 2pm cutoff, then you need to wait another day. Computer says no. So that means it can be up to 7 business days.

So there is tension here: the consumer expectation is that it happens straight away, and the reality is that sometimes it does ("see - it works!") and other times takes ages ("this is broken! I want my money back"). It's tough to explain.

The good news is that there has been significant innovation, with NPP and OpenBanking. Our banks are finally moving out of the Mainframe age to a Cloud one, where automation is used to drive down time and improve flexibility. 

**Problem 5: Complexity of payments**

The payment workflow itself is relatively complex. You'd think its simple - tenant is due to pay rent on a certain day, the owner gets the rent. All done.

Let's take timing of payments - from the Tenant's point of view, as soon as they've hit the "pay" button, their rent is paid. But maybe there was insufficient funds, maybe it takes a few days. From the Property Manager's point of view they haven't paid rent and they are overdue. From the owners point of view, that rent is only paid once it has arrived in his/her account - which could be another few days after that.

The payment amounts can change - the rent amount isn't always the same. A lease might be varied, a tenant might need to get reimbursed or pay more. The rental amount might need to get split up to cover costs or outstanding bills. The tenant might want to change frequency from weekly to fortnightly, but only starting from the week after next - and so on.

Have a look at the [Managed App project here](/portfolio/managed/)