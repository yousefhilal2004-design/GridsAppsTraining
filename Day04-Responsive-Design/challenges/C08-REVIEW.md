# Challenge C08 — Repair Horizontal Overflow

## The problem
The broken example has a fixed 900px card and a 1100px image. On a small phone, the content goes outside the screen.

## How I fixed the example
- I used `box-sizing: border-box` to include padding inside the width.
- I used `width: 100%` and `max-width` instead of a large fixed width.
- I set images to `max-width: 100%` and `height: auto`.
- I tested both examples at mobile width.

## Files
- `C08-overflow-broken.html` — intentionally broken practice page.
- `C08-overflow-fixed.html` — corrected page.

