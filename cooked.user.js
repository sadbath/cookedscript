// ==UserScript==
// @name         Remove "Cooked" posts from r/OntarioGrade12s (Everywhere)
// @namespace    removecooked12
// @version      2025.08.20.1
// @description  Hides posts from r/OntarioGrade12s that contain the word "cooked", even when shown outside the subreddit.
// @author       SadBath
// @match        https://www.reddit.com/r/OntarioGrade12s/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    function hideCookedOntarioPosts() {
        const posts = document.querySelectorAll('shreddit-post');

        posts.forEach(post => {
            const subreddit = post.getAttribute('subreddit-name') || "";
            const title = post.getAttribute('post-title') || "";

            if (subreddit.toLowerCase() === "ontariograde12s" && title.toLowerCase().includes("cooked")) {
                post.style.display = "none";
            }
        });
    }

    // Run on initial page load
    hideCookedOntarioPosts();

    // Observe dynamically loaded posts
    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === 1 && node.tagName.toLowerCase() === 'shreddit-post') {
                    const subreddit = node.getAttribute('subreddit-name') || "";
                    const title = node.getAttribute('post-title') || "";

                    if (subreddit.toLowerCase() === "ontariograde12s" && title.toLowerCase().includes("cooked")) {
                        node.style.display = "none";
                    }
                } else if (node.nodeType === 1) {
                    const nestedPosts = node.querySelectorAll?.('shreddit-post');
                    nestedPosts?.forEach(post => {
                        const subreddit = post.getAttribute('subreddit-name') || "";
                        const title = post.getAttribute('post-title') || "";

                        if (subreddit.toLowerCase() === "ontariograde12s" && title.toLowerCase().includes("cooked")) {
                            post.style.display = "none";
                        }
                    });
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
