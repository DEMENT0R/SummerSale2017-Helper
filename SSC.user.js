// ==UserScript==
// @name         Summer Sale 2017 Clicker
// @namespace    SSC
// @description Simple button Clicker
// @version 0.01
// @author DEMENT0R
// @downloadURL https://github.com/DEMENT0R/SummerSale2017-Helper/raw/master/SSC.user.js
// @updateURL https://github.com/DEMENT0R/SummerSale2017-Helper/raw/master/SSC.user.js
// @license GNU v3
// @noframes
// @match        http://store.steampowered.com/*
// @match        https://store.steampowered.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('.next_in_queue_content').click();
})();
