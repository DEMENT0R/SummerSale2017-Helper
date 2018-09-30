// ==UserScript==
// @name         Summer Sale 2018 Clicker
// @namespace    SSC
// @description  Simple button Clicker
// @version      0.05
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/SteamSaleHelper/raw/master/SSH.user.js
// @updateURL    https://github.com/DEMENT0R/SteamSaleHelper/raw/master/SSH.user.js
// @license      GNU v3
// @noframes
// @match        http://store.steampowered.com/*
// @match        https://store.steampowered.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        document.querySelector('.next_in_queue_content').click();
    }, 1);
})();
