/* 
 ----------------------------------
 Ajax Pagination In CakePHP
 ----------------------------------
 # Version: 1.0.0
 # Author: Mayur Godhani
 # Docs: https://github.com/mayurgodhanii
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
    var this_selecter;
    var dataSettings;

    CakephpPagination = (function () {
        function CakephpPagination(element, settings) {
            dataSettings = settings;
            $('#pagination-div').on('click', 'a', function (e) {
                loadData($(this), e);
            });
        }
        return CakephpPagination;
    }());

    var loadData = function (el, e) {
        e.preventDefault();
        var url = el.attr('href').trim();
        if (url != "") {
            window.history.pushState('', '', url);
            $.ajax({
                url: url
            }).done(function (data) {
                var found = $(this_selecter + ' tbody', data);
                if (typeof (dataSettings.paginateDivId) != "undefined" && dataSettings.paginateDivId !== null) {
                    var paginateDivHtml = $("#" + dataSettings.paginateDivId, data);
                    $("#" + dataSettings.paginateDivId).html(paginateDivHtml);
                } else {
                    errorFound("Error: Parameter missing - paginateDivId");
                }

                var found = $(this_selecter + ' tbody', data);
                $(this_selecter + ' tbody').remove();
                $(this_selecter).append(found);
                if (typeof (dataSettings.afterSuccess) != "undefined" && dataSettings.afterSuccess !== null) {
                    dataSettings.afterSuccess();
                }
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
                this_selecter = this.selector;
                _[i].cakephpPagination = new CakephpPagination(_[i], opt);
            }
            else
                ret = _[i].cakephpPagination[opt].apply(_[i].cakephpPagination, args);
            if (typeof ret != 'undefined')
                return ret;
        }
        return _;
    };
}));
