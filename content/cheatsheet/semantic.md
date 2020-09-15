---
title: Semantic elements
description: Semantic elements cheatsheet
---

# Semantic HTML elements
## What is a semantic element?
It's an element that describes it's own meaning. Elements like
``` markup
  <section />
  <aside />
  <footer />
```
are example of this kind of elements.

## Why do I need a semantic element?
When coding HTML documents, we look to wrap our content with elements that make it to look good. When I started my journey on Frontend Development, I used tags like the headings `<h1 />` to show the text bigger, because the default style of this elements make it that way. I thought the principal purpose of this kind of elements was the styling only. But as MDN suggest, we should (or must) code our HTML to show it's purpose and not it's style. The style is managed by the CSS.

### "So... again, why should I use semantic elements?"
* Accesibility: The screen readers can use this elements to help impaired users to navigate through the page.
* SEO: When the crawlers search for pages that match certain search criteria, they try to find the elements wrapped by this semantic elements, and decides if it's related to what the users is looking for.
* Coding: As a developer, you don't what to see a structure made by good looking divs. The semantic markup helps to express the meaning of your document.

## Semantic sectioning elements
### `<main>`
This element represents the main content area of the document.
Here can be put the main functionality of the app, or content that is directly related to main purpose of the document.
``` markup
  <main>
    <h1>Starring tonight! The following content</h1>
    ...
  </main>

  <!-- Example with a Nuxt layout -->
  <main>
    <Nuxt />
  </main>
```

### `<h1/> - <h6/>`
This element represents the headings for the sections.
The number represents a rank, beign the `<h1>` the highest and `h6` the lowest.
* Use the rank to create the document outline.
*Note*: Don't use h1-h6 to markup subheading, subtitles, alternative titles unless intended to be the heading of a subsection, or new section.
* Don't want to use subtitle in the table of content.
* Doesn't start a new section

``` markup
<h1>Title</h1>
<p>Subtitle</p>
```

### `<article>`
This element represents a self-contained composition in a document. Or, as I like to see it, if we take out the content of this element from the flow of the document, it doesn't loose meaning. Some examples of this element are:
* blog entries
* media post
* essays.

This elements should be identified by a heading tag. (`<h1/> - <h2/>`).

##### Examples
``` markup
<article>
  <header>
    <h1>How to unlock your superbranin</h1>
  </header>
  <p>As Jim Kwik says ...</p>
</article>
```

### `<section>`
This element represents a generic section of a document or application. We can see it as a thematic grouping of content.
* Should be identified by a heading (`<h1 /> - <h6 />`) as child.
* It's not a generic container element. For styling or scripting purposes use `<div>` instead.

``` markup
<article>
  <h1>A basketball game</h1>

  <section>
    <h2>The team</h2>
    <p>The team is comformed by 12 players</p>
  </section>

  <section>
    <h2>The score</h2>
    <p>There are three points shots, 2 points and 1 point from line.</p>
  </section>
</article>
```

### `<header>`
This element represent a introductory content.
When header is direct child of sectioning root element `<body>`, is scoped to the `<body>` element, meaning the introductory content is for the whole page.
* Can contain heading elements but it's not required.
* Can wrap section's table of content, search form or relevant logos.

``` markup
<body>
  <header>
    <h1>Scoped for the document</h1>
  </header>
  <article>
    <h2>Some cool article</h1>
    <p>...</p>
  </article>
</body>
```

``` markup
...
<article>
  <header>
    <h2>How to be more productive</h2>
    <p>The definitive guide</p>
  </header>
  <p>This guide is for be the ultimate productive weapon.</p>
</article>
```

### `<aside>`
This elements represents content that is indirectly related to the main content of the parenting sectioning content. Some examples of this type of content are:
* Quotes
* Sidebars
* Advertising

``` markup
<article>
  <h2>The article title</h2>
  <p>The article content</p>
  <aside>
    <h2>How I was raised</h2>
    <p>Raised too</p>
  </aside>
</article>
```


### `<nav>`
This elements represents a section of a page that links to other pages or parts within the page.
* When the content represents a list of items, use list markup.
* In a document, can exist more than one `<nav />` element. Usually only one is needed.
* Not only a list of items can be in `<nav />`. It can contain a paragraph with links.

``` markup
<nav>
  <li>
    <ul><a href="#home">Home</ul>
    <ul><a href="#about">About Us</ul>
    <ul><a href="#contact">Contact</ul>
  </li>
</nav>
```

``` markup
<nav>
  This is a little story about <a href="/aboutme">me</a>.
  When I was 5 years old, I was playing <a href="/basketball">basketball</a>
</nav>
```

### `<footer>`
This element represents a footer for the nearest main ancestor, sectioning content or sectioning root. Contains info as author info, links to related content, copyright data.
If footer is direct child of body and not descendant of main, sectioning content and sectioning root, the footer represents a footer for the whole page.
* Contact information of author belongs in an `<address>` elements.
* Can be used in `<article>` to specify publication date.

Thr footer don't neccesarily has to be at the end of the document, thoug they usually do.