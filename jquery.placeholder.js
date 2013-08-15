(function($) {
    $.fn.placeholder = function(options) {
        var settings = $.extend({
            fontColor: '#A9A9A9',
            bgColor: '',
            cssClass: '',
            override: false
        }, options);

        if (typeof(settings.override) === 'function') {
            settings.override = settings.override();
        }

        return this.each(function() {
            if (!('placeholder' in this) || settings.override) {

                var placeholderValue = $(this).attr('placeholder') || $(this).attr('data-placeholder');
                if (placeholderValue !== undefined) {
                    if (settings.override) {
                        $(this).removeAttr('placeholder');
                        $(this).attr('data-placeholder', placeholderValue);
                    }

                    var $el = $(this);
                    $el.wrap('<span style="position:relative"></span>');

                    var px = 'px';

                    var width = $el.width();
                    var height = $el.height();
                    var x = $el.position().left;
                    var y = $el.position().top;

                    var $placeholder = $('<label></label>');
                    $placeholder.attr('for', this.name)
                        .css('color', settings.fontColor)
                        .css('width',  $el.css('width'))
                        .css('height', $el.css('height'))
                        .css('lineHeight', $el.css('lineHeight'))
                        .css('left', x + px)
                        .css('top', y + px)
                        .css('position', 'absolute')
                        .css('border', 'none')
                        .css('fontSize', $el.css('fontSize'))
                        .css('paddingTop', $el.css('paddingTop'))
                        .css('paddingBottom', $el.css('paddingBottom'))
                        .css('paddingLeft', $el.css('paddingLeft'))
                        .css('paddingRight', $el.css('paddingRight'))
                        .css('marginTop', $el.css('marginTop'))
                        .css('marginBottom', $el.css('marginBottom'))
                        .css('marginLeft', $el.css('marginLeft'))
                        .css('marginRight', $el.css('marginRight'));

                    if (settings.bgColor) {
                        $placeholder.css('backgroundColor', settings.bgColor);
                    }

                    if (settings.cssClass) {
                        $placeholder.addClass(settings.cssClass);
                    }

                    if (!settings.bgColor || !settings.cssClass) {
                        $placeholder.css('backgroundColor', $el.css('backgroundColor'));
                    }

                    $el.css('position', 'relative')
                        .css('background', 'none')
                        .css('filter', 'None');

                    $el.parent().prepend($placeholder);

                    $el.blur(checkPlaceholderState);

                    $el.keyup(checkPlaceholderState);

                    checkPlaceholderState();

                    function checkPlaceholderState() {
                        if ($el.val() !== '') {
                            $placeholder.text('');
                        } else {
                            $placeholder.text(placeholderValue);
                        }
                    }
                }
            }
        });
    };
}(jQuery));