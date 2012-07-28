/**
 * sample class JsDuckテスト用
 * Guideからの引用(フォルダ掘って一段下げてみた)
 */
Ext.define("Hoge.AbstructSample", {
    mixins: {
        observe: 'Ext.util.Observable',
        fly: 'Fliable'
    },

    singleton: true,

    /**
     * Returns a unique ID for use in HTML id attribute.
     * @param {String/Number} nr A name or number of the ID.
     * @param {String} [prefix="id-"] The prefix for the ID.
     * @return {String} the new ID
     */
    createId: function(nr, prefix){
    },

    /**
     * Creates new Duck from proper duck egg.
     * @param {DuckEgg} egg  Egg with DNA configuration for new duck.
     */
    constructor: function(egg) {
    },

    /**
     * @event
     * Triggered after component gets hidden.
     * @param {Ext.Component}
     */
    "hide",

    /**
     * @cfg {Object} size Size of the item.
     * @cfg {Number} [size.width=0]
     * @cfg {Number} [size.height=0]
     */
    size: {width: 0, height: 0},

    /**
     * @cfg
     * CSS class names to apply for root element.
     */
    cls: ["x-component", "x-item"],

    /**
     * @property {Boolean} [readOnly=false]
     * True when component is in read-only state.
     */
    readOnly: false

}

