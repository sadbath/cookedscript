# Remove "Cooked" Posts from r/OntarioGrade12s (Everywhere)

A simple userscript that hides any post from **r/OntarioGrade12s** if the post title contains the word `"cooked"`, even when those posts are displayed **outside the subreddit** (e.g., on Reddit's front page, user profiles, search results, etc.).

## 🔍 What It Does

This script automatically:

- Detects posts from the `r/OntarioGrade12s` subreddit.
- Hides any post where the title includes the word `"cooked"` (case-insensitive).
- Works on both initial page load **and** dynamically loaded content (infinite scroll, etc.).

## ⚙️ Installation

1. Install a userscript manager like:
   - [Tampermonkey (Chrome, Edge)](https://www.tampermonkey.net/)
   - [Violentmonkey (Firefox, Chrome)](https://violentmonkey.github.io/)
   - [Greasemonkey (Firefox)](https://addons.mozilla.org/firefox/addon/greasemonkey/)

2. [Click here to install the script](https://github.com/sadbath/cookedscript/blob/main/cooked.user.js) 

3. Visit Reddit — the script will run automatically on any page that includes posts from `r/OntarioGrade12s`.

## 💡 Use Case

The term "cooked" may be overused, spammy, or simply unwanted for some users. This script provides a quick personal filter without needing to block users or use Reddit’s built-in content filters.

## 🧪 Technical Details

- Matches: `https://www.reddit.com/r/OntarioGrade12s/*`
- Selects posts using the `shreddit-post` tag.
- Checks `subreddit-name` and `post-title` attributes.
- Uses a `MutationObserver` to handle dynamically loaded posts.

## 🧑‍💻 Author

**SadBath**  
License: [MIT](LICENSE)

---

*Created on 2025-08-20.*
