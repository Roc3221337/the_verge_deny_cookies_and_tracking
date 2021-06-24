// ==UserScript==
// @name        "Deny" cookies and tracking - theverge.com
// @namespace   https://greasyfork.org/en/users/787028
// @match       https://www.theverge.com/*
// @grant       none
// @version     1.0
// @author      Roc3221337
// @license      MIT
// @description "Deny" cookies and tracking by simply deleting the modal that ask you to accept it.
// @homepageURL https://github.com/Roc3221337/the_verge_deny_cookies_and_tracking#readme
// @supportURL https://github.com/Roc3221337/the_verge_deny_cookies_and_tracking/issues

// ==/UserScript==


var privacyAgreement = document.querySelector('.m-privacy-consent')
privacyAgreement.remove()
