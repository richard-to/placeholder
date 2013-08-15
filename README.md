# jQuery Placeholder Plugin for IE8-10

I tried a few other placeholder plugins, but I had some issues with them. Specifically the following:

- Placeholder text is the same as normal text instead of a lighter color
- jQuery validate would sometimes validate those values as true
- If I used auto focus, the text would be cleared out.
- IE10's placeholder behavior was unwanted (auto focus issue) and I wanted to override it to behave more like Chrome.

The plugin is not too robust since I wrote it for my specific use case. Specifically the following:

- Needed Chrome-like placeholder functionality for IE8-10
- Fixed width inputs and textareas. So no fluid width. It may work for this case, but I have not tried it.
- Gradient background support
- Works with jQuery validate

I didn't want to create extra DOM elements, but I didn't see any other viable options. The plugin will create
a span around the input and append a label that contains the placeholder text. That could interfere with existing styles.

Browsers that support the placeholder attribute will use native behavior unless specified in the plugin options.

## Plugin Options

__fontColor__

Default color for the placeholder text is `#A9A9A9`.

__bgColor (optional)__

This option sets the background color of the placeholder label. If no `bgColor` or `cssClass` is used, then the color
of the input or textarea will be used. The default behavior should work if you aren't using a gradient
background or image background.

__cssClass (optional)__

If you have a gradient background or an image background, you best option is to apply a specific class with just the
background styles you want.

___override__

Default override value is `false`. A function can also be passed in that returns true or false.
Right now it is kind of pointless since it will be evaluated once before the placeholders are added
to the inputs/textareas.

## Usage Examples

Basic usage:

    $('input').placeholder();

Usage with options usage:

    $('input, textarea').placeholder({
    	fontColor: '#000',
    	cssClass: 'input-bg-gradient',
    	override: true
    });

Usage with IE10 only override function (granted this example doesn't make much sense):

    $('input, textarea').placeholder({
    	fontColor: '#000',
    	cssClass: 'input-bg-gradient',
    	override: function() {
            if (navigator.appVersion.indexOf("MSIE 10") != -1) {
                return true;
            } else {
                return false;
            }
        }
    });