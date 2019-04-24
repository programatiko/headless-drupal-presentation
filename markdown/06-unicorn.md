<!-- .element: data-background-image="images/ines-pimentel-564023-unsplash.jpg" data-background-opacity="0.4" -->
## Wait, where's my unicorn?
9 Reasons To Not Go Headless


<!-- .element: class="fragments" index="0" -->
### 9 reasons to not go headless 


1. "Considerations" are a deal breaker. <!-- .element: class="fragments" index="1" -->
2. You'll need two development teams. <!-- .element: class="fragment" index="2" -->
3. The vast Drupal out-of-box functionality and module ecosystem is gone. <!-- .element: class="fragment" index="3" -->
4. Your front-end requirements match Drupal's front-end capabilities. <!-- .element: class="fragment" index="4" -->
5. Need to start thinking SOA (Service Oriented Architecture). <!-- .element: class="fragment" index="5" -->
6. Testing 2.0. <!-- .element: class="fragment" index="6" -->
7. Documentation, documentation, documentation. <!-- .element: class="fragment" index="7" -->
8. Increased complexity. <!-- .element: class="fragment" index="8" -->
9. Impaired accessibility and user experience. <!-- .element: class="fragment" index="9" -->

Note:
So, because going headless is not all rainbows and unicorns, let's talk about 9 reasons to not go headless.
1. Before we go any further, remember the things we talked about under "considerations"? We talked about implications on the team, hosting, authentication, URLs, localization... If those implications seem like a deal-breaker then going headless is probably not for you.
2. Although this one is related to the previous one, I think it's important to stress that in order to be successful in a decoupled project you will need two different development teams, specializing in backend and fron-end, collaborating closely to each other to succeed.
3. Remember that ad that use to say: "There's an app for that"? With Drupal, a lot of times you get a business requirement, and guess what, **there's a module for that!** Once you decouple, all that functionality that Drupal gives for free, like web preview, authenticated viewing, UI localization, content translation, input sanitation, etc, it's gone. Gone, gone, gone!!! Bottom line is, if you were using modules like Better Messages, Google Maps, Disqus, etc, you will need to find other solutions or write custom code.
4. This one is a no brainer. If Drupal already does what you need, then... why lose you head, pun intended.
5. Most Drupal sites are a single application with constrained integration points. Once Drupal is decoupled it becomes a "content service" and we need to consider that content will be consumed by many disparate systems. We could be serving a website, and at the same time, we could be serving a mobile app, or a voice assistant like Alexa, or an electronic billboard, and many other things. To do this successfully we need to have a solid API that black-boxes a decoupled Drupal and don't let out internal details that could make future upgrades and redesigns more expensive.
6. With the increasing possibilities that a decoupled architecture presents, there's also an increasing number things that we need to factor in when it comes to testing. Now, we might not only be testing code and browser compatilibilities. Things that we didn't even think about before now become part of the equation. Things we mentioned like voice assistants, mobile apps, even desktop apps, web technologies like Electron, APIs themselves... we will need to add new testing workflows. Also, we will need to implement a brand new system for front-end testing.
7. Of course documentation is important! Not just for decoupled Drupal. But it is vital in decoupled projects. If your team can't keep up with accurate and detailed documentation of APIs, SDKs, examples, best practices... then decoupling can become a recipe for disaster. Documentation should be the go to source for PMs and internal or external PMs, rather than going to a person or team that owns the knowledge.
8. This may sound like an understatement, but we have to emphazise that by taking over the front-end we're no only embarking in an exciting adventure, using new shiny frameworks and technologies, but also we are entering new territory where we need to re-discover functionality and architect new interactions with the backend.
9. This one is related to number 3, but it deserves its own spot. Drupal is known for its efforts on accessibility and user experience where great consideration is given to people with disabilities and users of assistive technologies. This is another functionality we lose when we decouple and we need to re-think how to tackle.