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
Basically, what I'm trying to convey is that the backend and the front-end are married to each other...


### Decoupled architecture

"Decoupled architecture is a type of computing architecture that enables computing components or layers to execute independently while still interfacing with each other." (*Techopedia, https://bit.ly/2UNK4WU*)

Note:
Decoupled architecture is another concept that I thought it would be nice to lay out here before we start comparing traditional vs decoupled CMS architecture.
[read term]
In our context, decoupled or headless Drupal basically means using Drupal as a content repository or, put another way, as a backend content management. Then we will have a front-end developed using a separate technology stack. For example: Vue.js, Angular, or React.


<!-- .element: data-background-color="#fff" -->
### Technologies
![Technologies](images/technologies.jpeg)


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
As you can see there is no view component. The content is served by the API to whatever application we have designed for it: Mobile, Website, SPA, Native app, IoT, you name it. The CMS becomes a content repository. The front-end is no longer tied to the back-end.


### Drupal's decouple approaches
COUPLED <!-- .element: class="fragment" -->

PROGRESSIVELY DECOUPLED <!-- .element: class="fragment" -->

FULLY DECOUPLED STATIC SITE <!-- .element: class="fragment" -->

FULLY DECOUPLED APP <!-- .element: class="fragment" -->

Note:
- **Coupled**. This is the Drupal you know. Fully coupled... backend and frontend married to each other (and as a content repository for other consumers).
- **Progressively decoupled**. This is where Drupal is used for initial rendering with JavaScript on top (and as a content repository for other consumers).
- **Fully decoupled static site**. Use Drupal as a data source for a static site generator and, if needed, deploy to a JAMstack hosting platform. If you've heard of Gatsby, that's probably the most popular example of this approach. Gatsby is a static site generator that uses React and GraphQL, and it has a plugin to use Drupal as its content repository.
- **Fully decoupled app**. This is where Drupal is used as a content repository accessed by other consumers. This is where the backend and the frontend get a divorce, but it's an amicable one and they still talk and care for each other.


### Decoupled CMS options


#### Drupal distros
![Other distros](images/other-cms.png)
- Reservoir
- Contenta
- Tide

Note:
So, aside from grabbing a vanilla Drupal distribution and decoupling it for our project, I just wanted to mention that these days there are many many options out there that allow us to separate concerns. Both Drupal and non-Drupal options, and the non-Drupal ones are popping up so rapidly that it's becoming hard to keep up.
Here are some examples:
**Drupal distros**
- Reservoir: 
  - is a Drupal-based content repository with all the necessary web service APIs needed to build decoupled front-end applications. 
  - Developed by Acquia. 
  - API-first distributions like Reservoir keep Drupal's workflows and editorial UI intact but emphasize Drupal's web service APIs to return control to your developers.
- Contenta
- Tide


#### Non-Drupal headless CMS
![Other CMS](images/other-cms-2.png)
- Contentful
- Prismic
- GraphCMS
- Sanity

Note:
**Non-Drupal headless CMS**
- Contentful
- Prismic
- GraphCMS
- Sanity
