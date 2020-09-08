---
title: Semantic elements
description: Semantic elements cheatsheet
---

# Semantic HTML elements
## What is a semantic element?
It's an element that describes it's own meaning. Elements like
``` HTML
  <section />
  <aside />
  <footer />
```
are example of this elements.

## Why do I need a semantic element?
When coding HTML documents, we look to wrap our content with elements that make it to look good. When I started my journey on Frontend Development, I used tags like the headings `<h1 />` to show the text bigger, because the default style of this elements make it that way. I thought the principal purpose of this kind of elements was the styling only. But as MDN suggest, we should (or must) code our HTML to show it's purpose and not it's style. The style is managed by the CSS.

### "So... again, why should I use semantic elements?"
* Accesibility: The screen readers can use this elements to help impaired users to navigate through the page.
* SEO: When the crawlers search for pages that match certain search criteria, they try to find the elements wrapped by this semantic elements, and decides if it's related to what the users is looking for.
* Coding: As a developer, you don't what to see a structure made by good looking divs. The semantic markup helps to express the meaning of your document.

# Elements
### <main>
This tag represents the main content area of your document. It must exist only one.
``` HTML
  <main>
    <h1>Starring tonight! The following content</h1>
    ...
  </main>
```