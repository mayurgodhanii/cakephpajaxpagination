/* 
 ----------------------------------
 Ajax Pagination In CakePHP
 ----------------------------------
 # Version: 1.0.0
 # Author: Mayur Godhani
 # Docs: https://github.com/mayurgodhanii
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var n,t,a=window.CakephpPagination||{};a=function(){function n(n,a){t=a,e("#pagination-div").on("click","a",function(n){i(e(this),n)})}return n}();var i=function(a,i){i.preventDefault();var o=a.attr("href").trim();return""!=o&&(window.history.pushState("","",o),e(".paginator-load").show(),e.ajax({url:o}).done(function(a){var i=e(n+" tbody",a);if("undefined"!=typeof t.paginateDivId&&null!==t.paginateDivId){var o=e("#"+t.paginateDivId,a);e("#"+t.paginateDivId).html(o)}else r("Error: Parameter missing - paginateDivId");var i=e(n+" tbody",a);e(n+" tbody").remove(),e(n).append(i),"undefined"!=typeof t.afterSuccess&&null!==t.afterSuccess&&t.afterSuccess(),e(".paginator-load").hide()})),!1},r=function(e){return console.log(e),!1};e.fn.cakephpPagination=function(){var t,i,r=this,o=arguments[0],p=Array.prototype.slice.call(arguments,1),u=r.length;for(t=0;u>t;t++)if("object"==typeof o||"undefined"==typeof o?(n=this.selector,e(n).after('<div class="paginator-load"><span></span></div>'),r[t].cakephpPagination=new a(r[t],o)):i=r[t].cakephpPagination[o].apply(r[t].cakephpPagination,p),"undefined"!=typeof i)return i;return r}});