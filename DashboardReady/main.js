// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jiradg.atlassian.net/jira/dashboards/25522
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// ==/UserScript==

const categorySelector = document.querySelector('a[href="https://jiradg.atlassian.net/issues/?jql=issuetype+%3D+%22Product+Data+Integration%22+AND+%28labels+is+EMPTY+OR+labels+not+in+%28template%2C+test%29%29+AND+status+not+in+%28Planning%2C+Closed%2C+%22Data+Preparation%22%2C+Monitoring%2C+Integration%29+AND+%22CM-Team%5BDropdown%5D%22+%3D+Mobiles+AND+status+%3D+Ready"]')
//    const categorySelector1 = document.querySelector('a[href="https://jiradg.atlassian.net/issues/?jql=issuetype+%3D+%22Product+Data+Integration%22+AND+%28labels+is+EMPTY+OR+labels+not+in+%28template%2C+test%29%29+AND+status+not+in+%28Planning%2C+Closed%2C+%22Data+Preparation%22%2C+Monitoring%2C+Integration%29+AND+%22CM-Team%5BDropdown%5D%22+%3D+Mobiles+AND+status+%3D+Ready"]')
if(categorySelector){

    window.addEventListener("load", e => {
        'use strict'
        //    console.log(categorySelector)

        categorySelector.style.fontSize = "x-large"
        categorySelector.style.color = "red"

        //Hoverovanje preko tabele, da bi radio refresh button samog dashboarda
        window.addEventListener("mouseover", e => {
            'use strict'

            if(categorySelector.style.color === "red" && categorySelector.style.fontSize === "x-large"){
                return
            }

            categorySelector.style.fontSize = "x-large"
            categorySelector.style.color = "red"
        });
    });
}

