<!-- .element: data-background-image="images/headless-horseman.png" data-background-opacity="0.4" -->
## Decoupled CMS


### Coupling

"In software engineering, coupling is the degree of interdependence between software modules; a measure of how closely connected two routines or modules are; the strength of the relationships between modules." (*Wikipedia, https://bit.ly/2m07ZOj*)

Note:
There is so much that can be said about this topic, and we are certainly not going to go there in this talk, or we may lose half our audience. I just thought it would be nice to keep this concept in mind. 
Let's just focus on content management systems. Let's think about Drupal or WordPress as examples of popular CMS. They both consist of core software, which dictates the basic functionality of the system. Things like: how you create an article, how you upload a picture, how you delete or update content, how you style your content; and they also have a huge ecosystem of modules or plugins that extend their functionality; it can be anything like search, themes, calendars, forms, comments, voting, email, etc. 
Viewed as whole they conform a monolithic entity where there is an interdependency of backend and frontend.


<!-- .element: data-background-color="#fff" -->
### BACKEND + FRONTEND
### married to each other
![Married](images/lego-married.jpg) <!-- .element: class="fragment" data-fragment-index="1" -->

Note:
Kind of... 


### Decoupled architecture

"Decoupled architecture is a type of computing architecture that enables computing components or layers to execute independently while still interfacing with each other." (*Techopedia, https://bit.ly/2UNK4WU*)

Note:
Decoupled architecture is another concept that I thought it would be nice to lay out here before we start comparing traditional vs decoupled CMS architecture.
[read term]


### Traditional vs Decoupled CMS
![CMS](images/regular-headless-cms.png)
(1)

Note:
A few years ago Chris Coyier published an article in CSS tricks, where he succintly explained what a headless CMS is.
I thought the article was great, specially this graphic, so I borrowed it.
Basically, what we see here, highlevel, are the components of a regular CMS, and the components of a headless CMS. This could be Drupal, WordPress, or any other.
On a regular CMS we see:
- A way to store data
- A CRUD user interface. For those unfamiliar, CRUD denotes a system for creating, reading, updating or deleting data.
- A view component that allows us to display data.
On a headless CMS we see:
- A way to store data
- A CRUD user interface
- A robust and flexible API
As you can see there is no view component. The content is served by the API to whatever application we have designed for it: Mobile, Website, SPA, Native app, IoT, etc. The CMS becomes a content repository. The front-end is no longer tied to the back-end.


### Drupal's new flavors
COUPLED <!-- .element: class="fragment" -->

PROGRESSIVELY DECOUPLED <!-- .element: class="fragment" -->

FULLY DECOUPLED STATIC SITE <!-- .element: class="fragment" -->

FULLY DECOUPLED APP <!-- .element: class="fragment" -->

Note:
- **Coupled**. Use Drupal as is without additional JavaScript (and as a content repository for other consumers).
- **Progressively decoupled**. Use Drupal for initial rendering with JavaScript on top (and as a content repository for other consumers).
- **Fully decoupled static site**. Use Drupal as a data source for a static site generator and, if needed, deploy to a JAMstack hosting platform.
- **Fully decoupled app**. Use Drupal as a content repository accessed by other consumers (if JavaScript, use Node.js for server-side rendering).


### Decoupled CMS options


#### Drupal distros
- Reservoir
- Contenta
- Tide


#### Non-Drupal headless CMS
- Contentful
- Prismic
- GraphCMS
- Sanity

Note:
So, aside from grabbing a vanilla Drupal distribution and decoupling it for our project, I just wanted to mention that these days there are many many options out there that allow us to separate concerns. Both Drupal and non-Drupal options, and the non-Drupal ones are popping up so rapidly that it's becoming hard to keep up.
Here are some examples:
**Drupal distros**
- Reservoir
- Contenta
**Non-Drupal headless CMS**
- Contentful
- Prismic
- GraphCMS
- Sanity
