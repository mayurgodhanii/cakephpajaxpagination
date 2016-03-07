/* 
 ----------------------------------
 Ajax Pagination In CakePHP
 ----------------------------------
 # Version: 2.0.0
 # Author: Mayur Godhani
 # Docs: https://github.com/mayurgodhanii/cakephpajaxpagination
 */


(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function ($) {
    'use strict';

    var CakephpPagination = window.CakephpPagination || {};

    CakephpPagination = (function () {
        function CakephpPagination(element, settings, this_selecter) {
            var dataSettings = settings;
            if (typeof (dataSettings.paginateDivId) == "undefined") {
                errorFound("Error: Parameter missing - paginateDivId");
            }
            $(this_selecter).after('<div id="' + dataSettings.paginateDivId + '_load" class="paginator-load"><span></span></div>');
            $('#' + dataSettings.paginateDivId).on('click', 'a', function (e) {
                loadData($(this), e, dataSettings, this_selecter);
            });
        }
        return CakephpPagination;
    }());

    var loadData = function (el, e, dataSettings, this_selecter) {
        e.preventDefault();
        var url = el.attr('href').trim();
        if (url != "") {
            if (typeof (dataSettings.changeUrl) == "undefined" || dataSettings.changeUrl == true) {
                window.history.pushState('', '', url);
            }

            $('#' + dataSettings.paginateDivId + "_load").show();
            $.ajax({
                url: url
            }).done(function (data) {
                if (typeof (dataSettings.paginateDivId) != "undefined" && dataSettings.paginateDivId !== null) {
                    var paginateDivHtml = $("#" + dataSettings.paginateDivId, data);
                    $("#" + dataSettings.paginateDivId).html(paginateDivHtml);
                } else {
                    errorFound("Error: Parameter missing - paginateDivId");
                }

                if (typeof (dataSettings.paginateBase) != "undefined" && dataSettings.paginateBase == "div") {
                    var found = $(this_selecter, data);
                    $(this_selecter).html(found);
                } else if (typeof (dataSettings.paginateBase) != "undefined" && dataSettings.paginateBase == "ul") {
                    var found = $(this_selecter, data);
                    $(this_selecter).html(found);
                } else {
                    var found = $(this_selecter + ' tbody', data);
                    $(this_selecter + ' tbody').remove();
                    $(this_selecter).append(found);
                }
                if (typeof (dataSettings.afterSuccess) != "undefined" && dataSettings.afterSuccess !== null) {
                    dataSettings.afterSuccess();
                }
                $('#' + dataSettings.paginateDivId + "_load").hide();
            });
        }
        return false;
    }

    var errorFound = function (error) {
        console.log(error);
        return false;
    }

    $.fn.cakephpPagination = function () {
        var _ = this,
                opt = arguments[0],
                args = Array.prototype.slice.call(arguments, 1),
                l = _.length,
                i,
                ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') {
                _[i].cakephpPagination = new CakephpPagination(_[i], opt, this.selector);
            }
            else
                ret = _[i].cakephpPagination[opt].apply(_[i].cakephpPagination, args);
            if (typeof ret != 'undefined')
                return ret;
        }
        return _;
    };
}));
