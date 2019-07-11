---
layout: project
theme: 12wbt
project_url: https://www.12wbt.com
project_date: '2013 - '
team_size: 0 people
slug: 12wbt-recipes
title: 12WBT Recipes
tagline: Restructuring the recipe data
description: ''
client: 12WBT
project_type: ''
lines_of_code: ''
technologies: []
images:
- "/assets/uploads/2019/12wbt-recipes-hero.jpg"
published: false

---
**Many recipe sites use this format**

![](/assets/uploads/2019/tasty.jpg)

1. **Ingredients**  
   A single block of content, with measures (eg: 2 teaspoons) as part of the content. Also includes preparation instructins (eg: thinly sliced avocado).
2. **Instructions**  
   Also a single block of content, with an image as part of the page layout. Often ingredient sizes are intermixed with this content, making them hard to separate. eg: add 1 cup of rice.

**The problems with this are**

![](/assets/uploads/2019/recipe-1.png)

**Splitting up recipe data**

![](/assets/uploads/2019/12wbt.jpg)

**Ingredients**  
Each ingredient is a separate piece of data

![](/assets/uploads/2019/database.png)

1. **Ingredient database**  
   One central source for all ingredients
2. **Meta data**  
   Preparation time  
   Is this a quick and easy?  
   Type of meal  
   Can it be frozen?  
   Will it work as a leftover?
3. **Method**  
   The method describes how to make the recipe. It refers to ingredients without describing sizes. The name of each ingredient can be localised if required.
4. **Similar content**  
   The vegetarian version  
   The gluten free version  
   The quick & easy version

**Live shopping integration**  
Each ingredient can also be sent through to a shop API.

**Which then allows**

![](/assets/uploads/2019/recipe-2.png)