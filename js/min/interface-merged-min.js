function activateScrollToLinks(){$("[class^=scroll-to-]").each(function(){$(this).click(function(){$("body,html").stop(!0,!0).animate({scrollTop:$("input[name="+$(this).attr("class").substr(10)+"]").offset().top-$("header").height()},"500","swing"),$("input[name="+$(this).attr("class").substr(10)+"]").focus()})})}function activateCloseTabLinks(){$(".close-tab").each(function(){$(this).click(function(){confirm("Close tab? You will return to the parameter settings page. Alternatively, to preserve your results and re-run the model with a different set of parameters, click Cancel, switch to the parameter settings tab, update your inputs, and re-submit the form. Your updated results will open in a new tab.")&&close()})})}function addThousandsComma(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function checkHash(){var e=window.location.hash?window.location.hash:!1;e&&$("body,html").stop(!0,!0).animate({scrollTop:$(e).offset().top},"1000","swing")}function currencyFormat(e){var a;return e>0?a="$"+addThousandsComma(e):0>e?a="-$"+addThousandsComma(parseInt(-1*e)):0==e&&(a="0"),a}function focusCustomParameters(){$(".param-row").each(function(){$(this).click(function(){$(this).find("input").focus()})}),$(".param-row input").each(function(){$(this).focus(function(){$(this).select(),$(this).parents(".param-row").addClass("focused")}),$(this).focusout(function(){$(this).val($(this).val().replace(/[^0-9.]/g,"")),$(this).parents(".param-row").removeClass("focused")})})}function goBack(e){return e&&(e.preventDefault&&e.preventDefault(),e.preventPropagation&&e.preventPropagation()),!1;console.log("trying to go back");var a="http://maxnorton.github.io/figure",t=window.location.hash;history.back();var s=window.location.hash;s!==t||"string"==typeof document.referrer&&""!==document.referrer||window.setTimeout(function(){window.location.href=a},1e3)}function hideSpecialLinks(){$(".glossary-icon").add(".glossary-link").add(".swipebox").each(function(){$(this).empty()})}function mobileSubstitutions(){$(window).width()<1023&&($(".efficacy-info .table-style").html('<a href="img/efficacy-table01.png" class="swipebox"><i class="fa fa-table" aria-hidden="true"></i> Open reference table'),$(".variable-definitions table:nth-of-type(3)").html('<a href="img/variable-table03.png" class="swipebox"><i class="fa fa-table" aria-hidden="true"></i> Open reference table').css("border","0 none"),$(".hide-for-tablets").css("display","none").removeClass("swipebox")),$(window).width()<768&&($(".variable-definitions table:nth-of-type(1)").html('<a href="img/variable-table01.png" class="swipebox"><i class="fa fa-table" aria-hidden="true"></i> Open reference table').css("border","0 none"),$(".variable-definitions table:nth-of-type(2)").html('<a href="img/variable-table02.png" class="swipebox"><i class="fa fa-table" aria-hidden="true"></i> Open reference table').css("border","0 none"),$(".custom-instructions table:nth-of-type(1)").html('<a href="img/custom-instructions-table01.png" class="swipebox"><i class="fa fa-table" aria-hidden="true"></i> Open reference table').css("border","0 none"),$(".custom-instructions table:nth-of-type(2)").html('<a href="img/custom-instructions-table02.png" class="swipebox"><i class="fa fa-table" aria-hidden="true"></i> Open reference table').css("border","0 none"),$(".hide-for-phones").css("display","none").removeClass("swipebox"))}function openFrame(e,a){if(e&&(e.preventDefault&&e.preventDefault(),e.preventPropagation&&e.preventPropagation()),0!==$("iframe").size()&&$("iframe").attr("src")===a.attr("href"))$(".content-wrap").animate({opacity:1},"200"),$("iframe").fadeToggle("200").delay("200",document.getElementById("iframe0").remove()),$("#closingX").remove(),$(".flyout-wrap").css("width","0");else{0!==$("iframe").size()&&($("iframe").fadeToggle("200").delay("200",document.getElementById("iframe0").remove()),$("#closingX").remove()),$("body, html").stop(!0,!0);var t='<iframe id="iframe0" src="'+a.attr("href")+'"></iframe>';$(".flyout-wrap").prepend(t),$(".flyout-wrap").css("width","850px"),$("iframe").fadeToggle("200"),$(".content-wrap").animate({opacity:0},"200"),$("iframe").height(parseInt(window.innerHeight-300)),a.append('<span id="closingX">&nbsp;&nbsp;&nbsp;&times;</span>')}}function scrollToHash(){if(window.location.hash){var e=window.location.hash;$("body,html").stop(!0,!0).animate({scrollTop:$(e).offset().top-$("header").height()},"500","swing")}}function styleGlossaryLinks(){$(".glossary-icon").each(function(){$(this).empty()}),$(".glossary-link").prepend('<span class="glossary-icon"><i class="fa fa-question-circle"></i></span>'),$(".glossary-link-family").prepend('<span class="glossary-icon"><i class="fa fa-question-circle"></i></span>'),$(".glossary-link-inline-child").click(function(e){e.preventDefault(),$(this).stop().find(".glossary-inline").toggle("fast")}),$(".glossary-link-inline-sibling").click(function(e){e.preventDefault(),$(this).stop().parents(".glossary-link-family").find(".glossary-inline").toggle("fast")})}function toggleFormOptions(){"yield"===$("input[name=figuredisplay]:checked").val()&&($(".disable-on-yield-alert").slideDown("fast"),$("input[name=pc]").add("input[name^=cost]").add("input[name=price]").add("input[name=discount]").each(function(){$(this).prop("disabled",!0),$(this).parents("tr").css("background-color","#ffffff")}),$(".disable-on-yield").add(".disable-on-yield a").add(".disable-on-yield i").add("label[for=pc]").add("input[name=pc]").add("label[for^=cost]").add("input[name^=cost]").add("label[for=price]").add("input[name=price]").add("label[for=discount]").add("input[name=discount]").add(".subselect.discount a").add(".subselect.pc a").add(".subselect.pc .glossary-inline").add(".subselect.pc .glossary-link-family").add(".subselect.discount i").add(".subselect.pc i").add(".subselect.discount .param-deadcell").add(".subselect.pc .param-deadcell").css("color","#999999"),$(".subselect.pc select").prop("disabled",!0)),$("input[name=figuredisplay]").change(function(){"yield"===$("input[name=figuredisplay]:checked").val()?($(".disable-on-yield-alert").slideDown("fast"),$("input[name=pc]").add("input[name^=cost]").add("input[name=price]").add("input[name=discount]").each(function(){$(this).prop("disabled",!0),$(this).parents("tr").css("background-color","#ffffff")}),$(".disable-on-yield").add(".disable-on-yield a").add(".disable-on-yield i").add("label[for=pc]").add("input[name=pc]").add("label[for^=cost]").add("input[name^=cost]").add("label[for=price]").add("input[name=price]").add("label[for=discount]").add("input[name=discount]").add(".subselect.discount a").add(".subselect.pc a").add(".subselect.pc .glossary-inline").add(".subselect.pc .glossary-link-family").add(".subselect.discount i").add(".subselect.pc i").add(".subselect.discount .param-deadcell").add(".subselect.pc .param-deadcell").css("color","#999999"),$(".subselect.pc select").prop("disabled",!0)):($(".disable-on-yield-alert").slideUp("fast"),$("input[name=pc]").add("input[name^=cost]").add("input[name=price]").add("input[name=discount]").each(function(){$(this).prop("disabled",!1),$(this).parents("tr").css("background-color","auto")}),$(".disable-on-yield").add(".disable-on-yield a").add(".disable-on-yield i").add("label[for=pc]").add("input[name=pc]").add("label[for^=cost]").add("input[name^=cost]").add("label[for=price]").add("input[name=price]").add("label[for=discount]").add("input[name=discount]").add(".subselect.discount a").add(".subselect.pc a").add(".subselect.pc .glossary-inline").add(".subselect.pc .glossary-link-family").add(".subselect.discount i").add(".subselect.pc i").add(".subselect.discount .param-deadcell").add(".subselect.pc .param-deadcell").css("color",""),$(".subselect.pc select").prop("disabled",!1))})}function setPracticeCost(e,a){d3.tsv("regional-assumptions.tsv",function(t){if("dp"===a)$("input[name=pc]").val("0");else if("hp"===a||"dbp"===a){var s;switch(e){case"napa":s=0;break;case"nsj":s=1;break;case"cc":s=2;break;case"lake":s=3;break;case"sonoma":s=4}$("input[name=pc]").val(t[s]["pc"+a])}})}function setPracticeSelect(e,a){0==a?$("select[name=practice]").val("dp"):d3.tsv("regional-assumptions.tsv",function(t){var s;switch(e){case"napa":s=0;break;case"nsj":s=1;break;case"cc":s=2;break;case"lake":s=3;break;case"sonoma":s=4}a==t[s].pchp?$("select[name=practice]").val("hp"):a==t[s].pcdbp?$("select[name=practice]").val("dbp"):$("select[name=practice]").val("custom")})}function checkRegionDisplay(e,a,t,s,i,n,c,o,l,d,r,p,u,f){d3.tsv("regional-assumptions.tsv",function(e){for(var m="custom",b=0;5>b;b++)a!=e[b].discount||t!=e[b].cost0||s!=e[b].cost1||i!=e[b].cost2||n!=e[b].cost3||c!=e[b].pchp&&c!=e[b].pcdbp&&0!=c||o!=e[b].price||l!=e[b].yield0||d!=e[b].yield1||r!=e[b].yield2||p!=e[b].yield3||u!=e[b].yield4||f!=e[b].yield5||(m=e[b].region);setRegionDisplay(m)})}function valueSwitch(e){var a;switch(e){case"price":a="price per ton";break;case"discount":a="discount rate";break;case"pc":a="preventative practice cost";break;case"cost0":a="year 0 cultural cost";break;case"cost1":a="year 1 cultural cost";break;case"cost2":a="year 2 cultural cost";break;case"cost3":a="year 3 cultural cost";break;case"yield0":a="year 0 yield";break;case"yield1":a="year 1 yield";break;case"yield2":a="year 2 yield";break;case"yield3":a="year 3 yield";break;case"yield4":a="year 4 yield";break;case"yield5":a="year 5+ yield"}return a}function regionSwitch(e,a){var t,s;switch(e){case"napa":s="Napa",t=0;break;case"nsj":s="Northern San Joaquin",t=1;break;case"cc":s="Central Coast",t=2;break;case"lake":s="Lake",t=3;break;case"sonoma":s="Sonoma",t=4;break;case"custom":s="Custom",t=1}return"friendly"===a?s:"index"===a?t:void 0}function setRegionDisplay(e){var a="custom"===e?"custom values.":'<span class="regionName">'+regionSwitch(e,"friendly")+"</span> default values.";$(".currentRegion").html(a+'<input type="hidden" id="region-basis" name="region-basis" value="'+e+'">')}function setRegionalDefaults(e){d3.tsv("regional-assumptions.tsv",function(a){var t=$("select[name=practice]").val(),s=regionSwitch(e,"index");$("input[name=price]").val(a[s].price),$("input[name=discount]").val(a[s].discount),$("input[name=cost0]").val(a[s].cost0),$("input[name=cost1]").val(a[s].cost1),$("input[name=cost2]").val(a[s].cost2),$("input[name=cost3]").val(a[s].cost3),$("input[name=yield0]").val(a[s].yield0),$("input[name=yield1]").val(a[s].yield1),$("input[name=yield2]").val(a[s].yield2),$("input[name=yield3]").val(a[s].yield3),$("input[name=yield4]").val(a[s].yield4),$("input[name=yield5]").val(a[s].yield5),"hp"!==t&&"dbp"!==t||$("input[name=pc]").val(a[s]["pc"+t]),setRegionDisplay(e)})}function zoomDisable(){$("head meta[name=viewport]").remove(),$("head").prepend('<meta name="viewport" content="user-scalable=0" />')}function zoomEnable(){$("head meta[name=viewport]").remove(),$("head").prepend('<meta name="viewport" content="user-scalable=1" />')}