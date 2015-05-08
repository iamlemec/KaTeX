/**
 * This file contains information about the options that the Parser carries
 * around with it while parsing. Data is held in an `Options` object, and when
 * recursing, a new `Options` object can be created with the `.with*` and
 * `.reset` functions.
 */

/**
 * This is the main options class. It contains the style, size, color, and font
 * of the current parse level. It also contains the style and size of the parent
 * parse level, so size changes can be handled efficiently.
 *
 * Each of the `.with*` and `.reset` functions passes its current style and size
 * as the parentStyle and parentSize of the new options class, so parent
 * handling is taken care of automatically.
 */
function Options(data) {
    this.style = data.style;
    this.color = data.color;
    this.size = data.size;
    this.phantom = data.phantom;

    if (data.parentStyle === undefined) {
        this.parentStyle = data.style;
    } else {
        this.parentStyle = data.parentStyle;
    }

    if (data.parentSize === undefined) {
        this.parentSize = data.size;
    } else {
        this.parentSize = data.parentSize;
    }
}

/**
 * Returns a new options object with the same properties as "this".  Properties
 * from "extension" will be copied to the new options object.
 */
Options.prototype.extend = function(extension) {
    var data = {
        style: this.style,
        size: this.size,
        color: this.color,
        parentStyle: this.style,
        parentSize: this.size,
        phantom: this.phantom
    };

    for (var key in extension) {
        if (extension.hasOwnProperty(key)) {
            data[key] = extension[key];
        }
    }

    return new Options(data);
};

/**
 * Create a new options object with the given style.
 */
Options.prototype.withStyle = function(style) {
<<<<<<< HEAD
    return new Options(
        style, this.size, this.color, this.style, this.size, this.font);
=======
    return this.extend({
        style: style
    });
>>>>>>> 86914863924d9c814e1e0fb5d750fab819a504a1
};

/**
 * Create a new options object with the given size.
 */
Options.prototype.withSize = function(size) {
<<<<<<< HEAD
    return new Options(
        this.style, size, this.color, this.style, this.size, this.font);
=======
    return this.extend({
        size: size
    });
>>>>>>> 86914863924d9c814e1e0fb5d750fab819a504a1
};

/**
 * Create a new options object with the given color.
 */
Options.prototype.withColor = function(color) {
<<<<<<< HEAD
    return new Options(
        this.style, this.size, color, this.style, this.size, this.font);
};

/**
 * Create a new options objects with the give font.
 */
Options.prototype.withFont = function(font) {
    return new Options(
        this.style, this.size, this.color, this.style, this.size, font);
=======
    return this.extend({
        color: color
    });
};

/**
 * Create a new options object with "phantom" set to true.
 */
Options.prototype.withPhantom = function() {
    return this.extend({
        phantom: true
    });
>>>>>>> 86914863924d9c814e1e0fb5d750fab819a504a1
};

/**
 * Create a new options object with the same style, size, and color. This is
 * used so that parent style and size changes are handled correctly.
 */
Options.prototype.reset = function() {
<<<<<<< HEAD
    return new Options(
        this.style, this.size, this.color, this.style, this.size, this.font);
=======
    return this.extend({});
>>>>>>> 86914863924d9c814e1e0fb5d750fab819a504a1
};

/**
 * A map of color names to CSS colors.
 * TODO(emily): Remove this when we have real macros
 */
var colorMap = {
    "katex-blue": "#6495ed",
    "katex-orange": "#ffa500",
    "katex-pink": "#ff00af",
    "katex-red": "#df0030",
    "katex-green": "#28ae7b",
    "katex-gray": "gray",
    "katex-purple": "#9d38bd"
};

/**
 * Gets the CSS color of the current options object, accounting for the
 * `colorMap`.
 */
Options.prototype.getColor = function() {
    if (this.phantom) {
        return "transparent";
    } else {
        return colorMap[this.color] || this.color;
    }
};

module.exports = Options;
