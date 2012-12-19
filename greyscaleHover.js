/*
 *  jQuery $.greyscaleHover Plugin v0.2
 *  Written by Celina Uemura
 *  Based in $.greyScale by Andrew Pryde (www.pryde-design.co.uk)
 *  Date: Wed 19 Dec 2012
 *  Licence: MIT Licence
 *
 *  Copyright (c) 2012 Celina Uemura
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this 
 *  software and associated documentation files (the "Software"), to deal in the Software
 *  without restriction, including without limitation the rights to use, copy, modify, merge,
 *  publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons 
 *  to whom the Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all copies or 
 *  substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 *  BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
 *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 *  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($){
$.fn.greyscaleHover = function(args) {
    $options = $.extend({
      fadeTime: $.fx.speeds._default,
      reverse: false
    }, args);

    if ($.browser.msie) {
      // IE doesn't support Canvas so use it's horrible filter syntax instead
        this.each(function(){
            var greyscale = $options.reverse ? 0 : 1;
            $(this).css({
              'filter': 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=' + greyscale + ')',
              'zoom': '1'
            });
            $(this).hover(function() {
              var greyscale = $options.reverse ? 1 : 0;
              $(this).css({
                'filter': 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=' + greyscale + ')'
              });
            }, function() {
              var greyscale = $options.reverse ? 0 : 1;
              $(this).css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=' + greyscale + ')');
            });
        });
    } else if ($.browser.webkit){
        this.each(function(){
            var greyscale = $options.reverse ? 0 : 1;
            $(this).css({
              '-webkit-filter': 'grayscale(' + greyscale + ')'
            });
            $(this).hover(function() {
              var greyscale = $options.reverse ? 1 : 0;
              $(this).css({
                '-webkit-filter': 'grayscale(' + greyscale + ')'
              });
            }, function() {
              var greyscale = $options.reverse ? 0 : 1;
              $(this).css('-webkit-filter', 'grayscale(' + greyscale + ')');
            });
        });
    } else {
        this.each(function(){
            var greyscale = $options.reverse ? 0 : 1;
            var filter = greyscale ? 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")' : 'none';
            $(this).css({
              'filter': filter
            });
            $(this).hover(function() {
              var greyscale = $options.reverse ? 1 : 0;
              var filter = greyscale ? 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")' : 'none';
              $(this).css({
                'filter': filter
              });
            }, function() {
              var greyscale = $options.reverse ? 0 : 1;
              var filter = greyscale ? 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")' : 'none';
              $(this).css('filter', filter);
            });
        });
    }
}
})(jQuery);