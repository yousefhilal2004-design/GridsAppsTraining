# CSS Specificity Debugging Challenge — Day 03

## What I tested
I wanted to see why one CSS rule can win over another rule.

## Example of the problem
The CSS below makes the paragraph blue, even though the second rule says red:

```css
.notice { color: blue; }
p { color: red; }
```

If the HTML is `<p class="notice">Hello</p>`, the text is blue because a class selector is more specific than an element selector.

## My fix
If I want the text to be red, I can update the class rule:

```css
.notice { color: red; }
```

## Another issue I checked
If two rules have the same specificity, the one written later usually wins:

```css
.notice { color: blue; }
.notice { color: green; }
```

Here the text is green.

## What I learned
A selector with higher specificity normally wins. If the specificity is equal, the later declaration wins. I should check the selector and the order of my CSS rules before adding more CSS.

These are practice examples. In my actual website I checked that the navigation and button styles work as expected.
