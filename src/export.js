Hammer.EventEmitter = EventEmitter;
Hammer.Manager = Manager;
Hammer.Input = Input;
Hammer.TouchAction = TouchAction;

Hammer.Recognizer = Recognizer;
Hammer.AttrRecognizer = AttrRecognizer;
Hammer.Tap = TapRecognizer;
Hammer.Pan = PanRecognizer;
Hammer.Swipe = SwipeRecognizer;
Hammer.Pinch = PinchRecognizer;
Hammer.Rotation = RotationRecognizer;
Hammer.Hold = HoldRecognizer;

// constants
Hammer.INPUT_START = INPUT_START;
Hammer.INPUT_MOVE = INPUT_MOVE;
Hammer.INPUT_END = INPUT_END;
Hammer.INPUT_CANCEL = INPUT_CANCEL;

Hammer.DIRECTION_NONE = DIRECTION_NONE;
Hammer.DIRECTION_LEFT = DIRECTION_LEFT;
Hammer.DIRECTION_RIGHT = DIRECTION_RIGHT;
Hammer.DIRECTION_UP = DIRECTION_UP;
Hammer.DIRECTION_DOWN = DIRECTION_DOWN;

Hammer.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
Hammer.DIRECTION_VERTICAL = DIRECTION_VERTICAL;

// expose some useful/over-writable methods
Hammer.on = addEventListeners;
Hammer.off = removeEventListeners;
Hammer.each = each;
Hammer.merge = merge;
Hammer.extend = extend;
Hammer.inherit = inherit;
Hammer.bindFn = bindFn;
Hammer.prefixed = prefixed;

// export to amd/module/window
if(typeof define == TYPE_FUNCTION && define.amd) {
    define(function() {
        return Hammer;
    });
} else if(typeof module != TYPE_UNDEFINED && module.exports) {
    module.exports = Hammer;
} else {
    window.Hammer = Hammer;
}
