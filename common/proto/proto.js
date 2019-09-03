/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.wl = (function() {

    /**
     * Namespace wl.
     * @exports wl
     * @namespace
     */
    var wl = {};

    wl.Equip = (function() {

        /**
         * Properties of an Equip.
         * @memberof wl
         * @interface IEquip
         * @property {string|null} [id] Equip id
         * @property {number|null} [goodId] Equip goodId
         * @property {boolean|null} [isEquip] Equip isEquip
         * @property {number|null} [durable] Equip durable
         * @property {number|null} [quality] Equip quality
         * @property {Array.<number>|null} [prop] Equip prop
         */

        /**
         * Constructs a new Equip.
         * @memberof wl
         * @classdesc Represents an Equip.
         * @implements IEquip
         * @constructor
         * @param {wl.IEquip=} [properties] Properties to set
         */
        function Equip(properties) {
            this.prop = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Equip id.
         * @member {string} id
         * @memberof wl.Equip
         * @instance
         */
        Equip.prototype.id = "";

        /**
         * Equip goodId.
         * @member {number} goodId
         * @memberof wl.Equip
         * @instance
         */
        Equip.prototype.goodId = 0;

        /**
         * Equip isEquip.
         * @member {boolean} isEquip
         * @memberof wl.Equip
         * @instance
         */
        Equip.prototype.isEquip = false;

        /**
         * Equip durable.
         * @member {number} durable
         * @memberof wl.Equip
         * @instance
         */
        Equip.prototype.durable = 0;

        /**
         * Equip quality.
         * @member {number} quality
         * @memberof wl.Equip
         * @instance
         */
        Equip.prototype.quality = 0;

        /**
         * Equip prop.
         * @member {Array.<number>} prop
         * @memberof wl.Equip
         * @instance
         */
        Equip.prototype.prop = $util.emptyArray;

        /**
         * Creates a new Equip instance using the specified properties.
         * @function create
         * @memberof wl.Equip
         * @static
         * @param {wl.IEquip=} [properties] Properties to set
         * @returns {wl.Equip} Equip instance
         */
        Equip.create = function create(properties) {
            return new Equip(properties);
        };

        /**
         * Encodes the specified Equip message. Does not implicitly {@link wl.Equip.verify|verify} messages.
         * @function encode
         * @memberof wl.Equip
         * @static
         * @param {wl.IEquip} message Equip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Equip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goodId);
            if (message.isEquip != null && message.hasOwnProperty("isEquip"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isEquip);
            if (message.durable != null && message.hasOwnProperty("durable"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.durable);
            if (message.quality != null && message.hasOwnProperty("quality"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.quality);
            if (message.prop != null && message.prop.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.prop.length; ++i)
                    writer.uint32(message.prop[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Equip message, length delimited. Does not implicitly {@link wl.Equip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.Equip
         * @static
         * @param {wl.IEquip} message Equip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Equip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Equip message from the specified reader or buffer.
         * @function decode
         * @memberof wl.Equip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.Equip} Equip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Equip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.Equip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.goodId = reader.uint32();
                    break;
                case 3:
                    message.isEquip = reader.bool();
                    break;
                case 4:
                    message.durable = reader.uint32();
                    break;
                case 5:
                    message.quality = reader.uint32();
                    break;
                case 6:
                    if (!(message.prop && message.prop.length))
                        message.prop = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.prop.push(reader.uint32());
                    } else
                        message.prop.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Equip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.Equip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.Equip} Equip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Equip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Equip message.
         * @function verify
         * @memberof wl.Equip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Equip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                if (!$util.isInteger(message.goodId))
                    return "goodId: integer expected";
            if (message.isEquip != null && message.hasOwnProperty("isEquip"))
                if (typeof message.isEquip !== "boolean")
                    return "isEquip: boolean expected";
            if (message.durable != null && message.hasOwnProperty("durable"))
                if (!$util.isInteger(message.durable))
                    return "durable: integer expected";
            if (message.quality != null && message.hasOwnProperty("quality"))
                if (!$util.isInteger(message.quality))
                    return "quality: integer expected";
            if (message.prop != null && message.hasOwnProperty("prop")) {
                if (!Array.isArray(message.prop))
                    return "prop: array expected";
                for (var i = 0; i < message.prop.length; ++i)
                    if (!$util.isInteger(message.prop[i]))
                        return "prop: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an Equip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.Equip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.Equip} Equip
         */
        Equip.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.Equip)
                return object;
            var message = new $root.wl.Equip();
            if (object.id != null)
                message.id = String(object.id);
            if (object.goodId != null)
                message.goodId = object.goodId >>> 0;
            if (object.isEquip != null)
                message.isEquip = Boolean(object.isEquip);
            if (object.durable != null)
                message.durable = object.durable >>> 0;
            if (object.quality != null)
                message.quality = object.quality >>> 0;
            if (object.prop) {
                if (!Array.isArray(object.prop))
                    throw TypeError(".wl.Equip.prop: array expected");
                message.prop = [];
                for (var i = 0; i < object.prop.length; ++i)
                    message.prop[i] = object.prop[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an Equip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.Equip
         * @static
         * @param {wl.Equip} message Equip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Equip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.prop = [];
            if (options.defaults) {
                object.id = "";
                object.goodId = 0;
                object.isEquip = false;
                object.durable = 0;
                object.quality = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                object.goodId = message.goodId;
            if (message.isEquip != null && message.hasOwnProperty("isEquip"))
                object.isEquip = message.isEquip;
            if (message.durable != null && message.hasOwnProperty("durable"))
                object.durable = message.durable;
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = message.quality;
            if (message.prop && message.prop.length) {
                object.prop = [];
                for (var j = 0; j < message.prop.length; ++j)
                    object.prop[j] = message.prop[j];
            }
            return object;
        };

        /**
         * Converts this Equip to JSON.
         * @function toJSON
         * @memberof wl.Equip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Equip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Equip;
    })();

    wl.Good = (function() {

        /**
         * Properties of a Good.
         * @memberof wl
         * @interface IGood
         * @property {number|null} [goodId] Good goodId
         * @property {number|null} [count] Good count
         */

        /**
         * Constructs a new Good.
         * @memberof wl
         * @classdesc Represents a Good.
         * @implements IGood
         * @constructor
         * @param {wl.IGood=} [properties] Properties to set
         */
        function Good(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Good goodId.
         * @member {number} goodId
         * @memberof wl.Good
         * @instance
         */
        Good.prototype.goodId = 0;

        /**
         * Good count.
         * @member {number} count
         * @memberof wl.Good
         * @instance
         */
        Good.prototype.count = 0;

        /**
         * Creates a new Good instance using the specified properties.
         * @function create
         * @memberof wl.Good
         * @static
         * @param {wl.IGood=} [properties] Properties to set
         * @returns {wl.Good} Good instance
         */
        Good.create = function create(properties) {
            return new Good(properties);
        };

        /**
         * Encodes the specified Good message. Does not implicitly {@link wl.Good.verify|verify} messages.
         * @function encode
         * @memberof wl.Good
         * @static
         * @param {wl.IGood} message Good message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Good.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.goodId);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified Good message, length delimited. Does not implicitly {@link wl.Good.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.Good
         * @static
         * @param {wl.IGood} message Good message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Good.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Good message from the specified reader or buffer.
         * @function decode
         * @memberof wl.Good
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.Good} Good
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Good.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.Good();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.goodId = reader.uint32();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Good message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.Good
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.Good} Good
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Good.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Good message.
         * @function verify
         * @memberof wl.Good
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Good.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                if (!$util.isInteger(message.goodId))
                    return "goodId: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a Good message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.Good
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.Good} Good
         */
        Good.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.Good)
                return object;
            var message = new $root.wl.Good();
            if (object.goodId != null)
                message.goodId = object.goodId >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Good message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.Good
         * @static
         * @param {wl.Good} message Good
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Good.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.goodId = 0;
                object.count = 0;
            }
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                object.goodId = message.goodId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this Good to JSON.
         * @function toJSON
         * @memberof wl.Good
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Good.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Good;
    })();

    wl.Skill = (function() {

        /**
         * Properties of a Skill.
         * @memberof wl
         * @interface ISkill
         * @property {number|null} [id] Skill id
         * @property {number|null} [level] Skill level
         * @property {number|null} [point] Skill point
         */

        /**
         * Constructs a new Skill.
         * @memberof wl
         * @classdesc Represents a Skill.
         * @implements ISkill
         * @constructor
         * @param {wl.ISkill=} [properties] Properties to set
         */
        function Skill(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Skill id.
         * @member {number} id
         * @memberof wl.Skill
         * @instance
         */
        Skill.prototype.id = 0;

        /**
         * Skill level.
         * @member {number} level
         * @memberof wl.Skill
         * @instance
         */
        Skill.prototype.level = 0;

        /**
         * Skill point.
         * @member {number} point
         * @memberof wl.Skill
         * @instance
         */
        Skill.prototype.point = 0;

        /**
         * Creates a new Skill instance using the specified properties.
         * @function create
         * @memberof wl.Skill
         * @static
         * @param {wl.ISkill=} [properties] Properties to set
         * @returns {wl.Skill} Skill instance
         */
        Skill.create = function create(properties) {
            return new Skill(properties);
        };

        /**
         * Encodes the specified Skill message. Does not implicitly {@link wl.Skill.verify|verify} messages.
         * @function encode
         * @memberof wl.Skill
         * @static
         * @param {wl.ISkill} message Skill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Skill.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.level);
            if (message.point != null && message.hasOwnProperty("point"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.point);
            return writer;
        };

        /**
         * Encodes the specified Skill message, length delimited. Does not implicitly {@link wl.Skill.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.Skill
         * @static
         * @param {wl.ISkill} message Skill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Skill.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Skill message from the specified reader or buffer.
         * @function decode
         * @memberof wl.Skill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.Skill} Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Skill.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.Skill();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.level = reader.uint32();
                    break;
                case 3:
                    message.point = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Skill message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.Skill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.Skill} Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Skill.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Skill message.
         * @function verify
         * @memberof wl.Skill
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Skill.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.point != null && message.hasOwnProperty("point"))
                if (!$util.isInteger(message.point))
                    return "point: integer expected";
            return null;
        };

        /**
         * Creates a Skill message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.Skill
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.Skill} Skill
         */
        Skill.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.Skill)
                return object;
            var message = new $root.wl.Skill();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.point != null)
                message.point = object.point >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Skill message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.Skill
         * @static
         * @param {wl.Skill} message Skill
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Skill.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.level = 0;
                object.point = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = message.point;
            return object;
        };

        /**
         * Converts this Skill to JSON.
         * @function toJSON
         * @memberof wl.Skill
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Skill.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Skill;
    })();

    wl.Cityrelation = (function() {

        /**
         * Properties of a Cityrelation.
         * @memberof wl
         * @interface ICityrelation
         * @property {number|null} [cid] Cityrelation cid
         * @property {number|null} [relation] Cityrelation relation
         */

        /**
         * Constructs a new Cityrelation.
         * @memberof wl
         * @classdesc Represents a Cityrelation.
         * @implements ICityrelation
         * @constructor
         * @param {wl.ICityrelation=} [properties] Properties to set
         */
        function Cityrelation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cityrelation cid.
         * @member {number} cid
         * @memberof wl.Cityrelation
         * @instance
         */
        Cityrelation.prototype.cid = 0;

        /**
         * Cityrelation relation.
         * @member {number} relation
         * @memberof wl.Cityrelation
         * @instance
         */
        Cityrelation.prototype.relation = 0;

        /**
         * Creates a new Cityrelation instance using the specified properties.
         * @function create
         * @memberof wl.Cityrelation
         * @static
         * @param {wl.ICityrelation=} [properties] Properties to set
         * @returns {wl.Cityrelation} Cityrelation instance
         */
        Cityrelation.create = function create(properties) {
            return new Cityrelation(properties);
        };

        /**
         * Encodes the specified Cityrelation message. Does not implicitly {@link wl.Cityrelation.verify|verify} messages.
         * @function encode
         * @memberof wl.Cityrelation
         * @static
         * @param {wl.ICityrelation} message Cityrelation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cityrelation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && message.hasOwnProperty("cid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cid);
            if (message.relation != null && message.hasOwnProperty("relation"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.relation);
            return writer;
        };

        /**
         * Encodes the specified Cityrelation message, length delimited. Does not implicitly {@link wl.Cityrelation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.Cityrelation
         * @static
         * @param {wl.ICityrelation} message Cityrelation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cityrelation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cityrelation message from the specified reader or buffer.
         * @function decode
         * @memberof wl.Cityrelation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.Cityrelation} Cityrelation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cityrelation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.Cityrelation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.uint32();
                    break;
                case 2:
                    message.relation = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cityrelation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.Cityrelation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.Cityrelation} Cityrelation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cityrelation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cityrelation message.
         * @function verify
         * @memberof wl.Cityrelation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cityrelation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isInteger(message.cid))
                    return "cid: integer expected";
            if (message.relation != null && message.hasOwnProperty("relation"))
                if (!$util.isInteger(message.relation))
                    return "relation: integer expected";
            return null;
        };

        /**
         * Creates a Cityrelation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.Cityrelation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.Cityrelation} Cityrelation
         */
        Cityrelation.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.Cityrelation)
                return object;
            var message = new $root.wl.Cityrelation();
            if (object.cid != null)
                message.cid = object.cid >>> 0;
            if (object.relation != null)
                message.relation = object.relation >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Cityrelation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.Cityrelation
         * @static
         * @param {wl.Cityrelation} message Cityrelation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cityrelation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cid = 0;
                object.relation = 0;
            }
            if (message.cid != null && message.hasOwnProperty("cid"))
                object.cid = message.cid;
            if (message.relation != null && message.hasOwnProperty("relation"))
                object.relation = message.relation;
            return object;
        };

        /**
         * Converts this Cityrelation to JSON.
         * @function toJSON
         * @memberof wl.Cityrelation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cityrelation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cityrelation;
    })();

    wl.Zone = (function() {

        /**
         * Properties of a Zone.
         * @memberof wl
         * @interface IZone
         * @property {number|null} [stype] Zone stype
         * @property {string|null} [name] Zone name
         * @property {number|null} [state] Zone state
         */

        /**
         * Constructs a new Zone.
         * @memberof wl
         * @classdesc Represents a Zone.
         * @implements IZone
         * @constructor
         * @param {wl.IZone=} [properties] Properties to set
         */
        function Zone(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Zone stype.
         * @member {number} stype
         * @memberof wl.Zone
         * @instance
         */
        Zone.prototype.stype = 0;

        /**
         * Zone name.
         * @member {string} name
         * @memberof wl.Zone
         * @instance
         */
        Zone.prototype.name = "";

        /**
         * Zone state.
         * @member {number} state
         * @memberof wl.Zone
         * @instance
         */
        Zone.prototype.state = 0;

        /**
         * Creates a new Zone instance using the specified properties.
         * @function create
         * @memberof wl.Zone
         * @static
         * @param {wl.IZone=} [properties] Properties to set
         * @returns {wl.Zone} Zone instance
         */
        Zone.create = function create(properties) {
            return new Zone(properties);
        };

        /**
         * Encodes the specified Zone message. Does not implicitly {@link wl.Zone.verify|verify} messages.
         * @function encode
         * @memberof wl.Zone
         * @static
         * @param {wl.IZone} message Zone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Zone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stype != null && message.hasOwnProperty("stype"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.stype);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.state);
            return writer;
        };

        /**
         * Encodes the specified Zone message, length delimited. Does not implicitly {@link wl.Zone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.Zone
         * @static
         * @param {wl.IZone} message Zone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Zone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Zone message from the specified reader or buffer.
         * @function decode
         * @memberof wl.Zone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.Zone} Zone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Zone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.Zone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stype = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.state = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Zone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.Zone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.Zone} Zone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Zone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Zone message.
         * @function verify
         * @memberof wl.Zone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Zone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stype != null && message.hasOwnProperty("stype"))
                if (!$util.isInteger(message.stype))
                    return "stype: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        /**
         * Creates a Zone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.Zone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.Zone} Zone
         */
        Zone.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.Zone)
                return object;
            var message = new $root.wl.Zone();
            if (object.stype != null)
                message.stype = object.stype >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.state != null)
                message.state = object.state >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Zone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.Zone
         * @static
         * @param {wl.Zone} message Zone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Zone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.stype = 0;
                object.name = "";
                object.state = 0;
            }
            if (message.stype != null && message.hasOwnProperty("stype"))
                object.stype = message.stype;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this Zone to JSON.
         * @function toJSON
         * @memberof wl.Zone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Zone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Zone;
    })();

    wl.Pos = (function() {

        /**
         * Properties of a Pos.
         * @memberof wl
         * @interface IPos
         * @property {number|null} [x] Pos x
         * @property {number|null} [y] Pos y
         */

        /**
         * Constructs a new Pos.
         * @memberof wl
         * @classdesc Represents a Pos.
         * @implements IPos
         * @constructor
         * @param {wl.IPos=} [properties] Properties to set
         */
        function Pos(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pos x.
         * @member {number} x
         * @memberof wl.Pos
         * @instance
         */
        Pos.prototype.x = 0;

        /**
         * Pos y.
         * @member {number} y
         * @memberof wl.Pos
         * @instance
         */
        Pos.prototype.y = 0;

        /**
         * Creates a new Pos instance using the specified properties.
         * @function create
         * @memberof wl.Pos
         * @static
         * @param {wl.IPos=} [properties] Properties to set
         * @returns {wl.Pos} Pos instance
         */
        Pos.create = function create(properties) {
            return new Pos(properties);
        };

        /**
         * Encodes the specified Pos message. Does not implicitly {@link wl.Pos.verify|verify} messages.
         * @function encode
         * @memberof wl.Pos
         * @static
         * @param {wl.IPos} message Pos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y);
            return writer;
        };

        /**
         * Encodes the specified Pos message, length delimited. Does not implicitly {@link wl.Pos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.Pos
         * @static
         * @param {wl.IPos} message Pos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pos message from the specified reader or buffer.
         * @function decode
         * @memberof wl.Pos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.Pos} Pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.Pos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.uint32();
                    break;
                case 2:
                    message.y = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.Pos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.Pos} Pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pos message.
         * @function verify
         * @memberof wl.Pos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a Pos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.Pos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.Pos} Pos
         */
        Pos.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.Pos)
                return object;
            var message = new $root.wl.Pos();
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Pos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.Pos
         * @static
         * @param {wl.Pos} message Pos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this Pos to JSON.
         * @function toJSON
         * @memberof wl.Pos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pos;
    })();

    wl.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof wl
         * @interface IPlayer
         * @property {string|null} [rid] Player rid
         * @property {string|null} [nick] Player nick
         * @property {string|null} [createTime] Player createTime
         * @property {number|null} [level] Player level
         * @property {number|null} [exp] Player exp
         * @property {number|null} [standpoint] Player standpoint
         * @property {number|null} [energy] Player energy
         * @property {number|null} [potential] Player potential
         * @property {number|null} [tizhi] Player tizhi
         * @property {number|null} [zhenqi] Player zhenqi
         * @property {number|null} [gengu] Player gengu
         * @property {number|null} [lingmin] Player lingmin
         * @property {number|null} [lidao] Player lidao
         * @property {number|null} [curhp] Player curhp
         * @property {number|null} [hp] Player hp
         * @property {number|null} [curmp] Player curmp
         * @property {number|null} [mp] Player mp
         * @property {number|null} [curatk] Player curatk
         * @property {number|null} [atk] Player atk
         * @property {number|null} [curdef] Player curdef
         * @property {number|null} [def] Player def
         * @property {number|null} [curcrit] Player curcrit
         * @property {number|null} [crit] Player crit
         * @property {number|null} [curspeed] Player curspeed
         * @property {number|null} [speed] Player speed
         * @property {number|null} [curdodge] Player curdodge
         * @property {number|null} [dodge] Player dodge
         * @property {number|null} [curhit] Player curhit
         * @property {number|null} [hit] Player hit
         * @property {Array.<wl.ISkill>|null} [skills] Player skills
         * @property {Array.<number>|null} [achievement] Player achievement
         * @property {Array.<number>|null} [titles] Player titles
         * @property {Array.<wl.ICityrelation>|null} [cityrelations] Player cityrelations
         * @property {Array.<wl.IGood>|null} [bag] Player bag
         * @property {Array.<wl.IEquip>|null} [equipList] Player equipList
         * @property {number|null} [talent] Player talent
         * @property {number|null} [curMap] Player curMap
         * @property {wl.IPos|null} [pos] Player pos
         * @property {number|null} [state] Player state
         * @property {number|null} [element] Player element
         */

        /**
         * Constructs a new Player.
         * @memberof wl
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {wl.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            this.skills = [];
            this.achievement = [];
            this.titles = [];
            this.cityrelations = [];
            this.bag = [];
            this.equipList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player rid.
         * @member {string} rid
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.rid = "";

        /**
         * Player nick.
         * @member {string} nick
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.nick = "";

        /**
         * Player createTime.
         * @member {string} createTime
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.createTime = "";

        /**
         * Player level.
         * @member {number} level
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.level = 0;

        /**
         * Player exp.
         * @member {number} exp
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.exp = 0;

        /**
         * Player standpoint.
         * @member {number} standpoint
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.standpoint = 0;

        /**
         * Player energy.
         * @member {number} energy
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.energy = 0;

        /**
         * Player potential.
         * @member {number} potential
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.potential = 0;

        /**
         * Player tizhi.
         * @member {number} tizhi
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.tizhi = 0;

        /**
         * Player zhenqi.
         * @member {number} zhenqi
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.zhenqi = 0;

        /**
         * Player gengu.
         * @member {number} gengu
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.gengu = 0;

        /**
         * Player lingmin.
         * @member {number} lingmin
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.lingmin = 0;

        /**
         * Player lidao.
         * @member {number} lidao
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.lidao = 0;

        /**
         * Player curhp.
         * @member {number} curhp
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curhp = 0;

        /**
         * Player hp.
         * @member {number} hp
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.hp = 0;

        /**
         * Player curmp.
         * @member {number} curmp
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curmp = 0;

        /**
         * Player mp.
         * @member {number} mp
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.mp = 0;

        /**
         * Player curatk.
         * @member {number} curatk
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curatk = 0;

        /**
         * Player atk.
         * @member {number} atk
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.atk = 0;

        /**
         * Player curdef.
         * @member {number} curdef
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curdef = 0;

        /**
         * Player def.
         * @member {number} def
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.def = 0;

        /**
         * Player curcrit.
         * @member {number} curcrit
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curcrit = 0;

        /**
         * Player crit.
         * @member {number} crit
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.crit = 0;

        /**
         * Player curspeed.
         * @member {number} curspeed
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curspeed = 0;

        /**
         * Player speed.
         * @member {number} speed
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.speed = 0;

        /**
         * Player curdodge.
         * @member {number} curdodge
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curdodge = 0;

        /**
         * Player dodge.
         * @member {number} dodge
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.dodge = 0;

        /**
         * Player curhit.
         * @member {number} curhit
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curhit = 0;

        /**
         * Player hit.
         * @member {number} hit
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.hit = 0;

        /**
         * Player skills.
         * @member {Array.<wl.ISkill>} skills
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.skills = $util.emptyArray;

        /**
         * Player achievement.
         * @member {Array.<number>} achievement
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.achievement = $util.emptyArray;

        /**
         * Player titles.
         * @member {Array.<number>} titles
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.titles = $util.emptyArray;

        /**
         * Player cityrelations.
         * @member {Array.<wl.ICityrelation>} cityrelations
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.cityrelations = $util.emptyArray;

        /**
         * Player bag.
         * @member {Array.<wl.IGood>} bag
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.bag = $util.emptyArray;

        /**
         * Player equipList.
         * @member {Array.<wl.IEquip>} equipList
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.equipList = $util.emptyArray;

        /**
         * Player talent.
         * @member {number} talent
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.talent = 0;

        /**
         * Player curMap.
         * @member {number} curMap
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.curMap = 0;

        /**
         * Player pos.
         * @member {wl.IPos|null|undefined} pos
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.pos = null;

        /**
         * Player state.
         * @member {number} state
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.state = 0;

        /**
         * Player element.
         * @member {number} element
         * @memberof wl.Player
         * @instance
         */
        Player.prototype.element = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof wl.Player
         * @static
         * @param {wl.IPlayer=} [properties] Properties to set
         * @returns {wl.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link wl.Player.verify|verify} messages.
         * @function encode
         * @memberof wl.Player
         * @static
         * @param {wl.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rid);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.createTime);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.exp);
            if (message.standpoint != null && message.hasOwnProperty("standpoint"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.standpoint);
            if (message.energy != null && message.hasOwnProperty("energy"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.energy);
            if (message.potential != null && message.hasOwnProperty("potential"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.potential);
            if (message.tizhi != null && message.hasOwnProperty("tizhi"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.tizhi);
            if (message.zhenqi != null && message.hasOwnProperty("zhenqi"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.zhenqi);
            if (message.gengu != null && message.hasOwnProperty("gengu"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.gengu);
            if (message.lingmin != null && message.hasOwnProperty("lingmin"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.lingmin);
            if (message.lidao != null && message.hasOwnProperty("lidao"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.lidao);
            if (message.curhp != null && message.hasOwnProperty("curhp"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.curhp);
            if (message.hp != null && message.hasOwnProperty("hp"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.hp);
            if (message.curmp != null && message.hasOwnProperty("curmp"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.curmp);
            if (message.mp != null && message.hasOwnProperty("mp"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.mp);
            if (message.curatk != null && message.hasOwnProperty("curatk"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.curatk);
            if (message.atk != null && message.hasOwnProperty("atk"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.atk);
            if (message.curdef != null && message.hasOwnProperty("curdef"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.curdef);
            if (message.def != null && message.hasOwnProperty("def"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.def);
            if (message.curcrit != null && message.hasOwnProperty("curcrit"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.curcrit);
            if (message.crit != null && message.hasOwnProperty("crit"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.crit);
            if (message.curspeed != null && message.hasOwnProperty("curspeed"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.curspeed);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.speed);
            if (message.curdodge != null && message.hasOwnProperty("curdodge"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.curdodge);
            if (message.dodge != null && message.hasOwnProperty("dodge"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.dodge);
            if (message.curhit != null && message.hasOwnProperty("curhit"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.curhit);
            if (message.hit != null && message.hasOwnProperty("hit"))
                writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.hit);
            if (message.skills != null && message.skills.length)
                for (var i = 0; i < message.skills.length; ++i)
                    $root.wl.Skill.encode(message.skills[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.achievement != null && message.achievement.length) {
                writer.uint32(/* id 31, wireType 2 =*/250).fork();
                for (var i = 0; i < message.achievement.length; ++i)
                    writer.uint32(message.achievement[i]);
                writer.ldelim();
            }
            if (message.titles != null && message.titles.length) {
                writer.uint32(/* id 32, wireType 2 =*/258).fork();
                for (var i = 0; i < message.titles.length; ++i)
                    writer.uint32(message.titles[i]);
                writer.ldelim();
            }
            if (message.cityrelations != null && message.cityrelations.length)
                for (var i = 0; i < message.cityrelations.length; ++i)
                    $root.wl.Cityrelation.encode(message.cityrelations[i], writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.bag != null && message.bag.length)
                for (var i = 0; i < message.bag.length; ++i)
                    $root.wl.Good.encode(message.bag[i], writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            if (message.equipList != null && message.equipList.length)
                for (var i = 0; i < message.equipList.length; ++i)
                    $root.wl.Equip.encode(message.equipList[i], writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
            if (message.talent != null && message.hasOwnProperty("talent"))
                writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.talent);
            if (message.curMap != null && message.hasOwnProperty("curMap"))
                writer.uint32(/* id 37, wireType 0 =*/296).uint32(message.curMap);
            if (message.pos != null && message.hasOwnProperty("pos"))
                $root.wl.Pos.encode(message.pos, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 39, wireType 0 =*/312).uint32(message.state);
            if (message.element != null && message.hasOwnProperty("element"))
                writer.uint32(/* id 40, wireType 0 =*/320).uint32(message.element);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link wl.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.Player
         * @static
         * @param {wl.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof wl.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rid = reader.string();
                    break;
                case 2:
                    message.nick = reader.string();
                    break;
                case 3:
                    message.createTime = reader.string();
                    break;
                case 4:
                    message.level = reader.uint32();
                    break;
                case 5:
                    message.exp = reader.uint32();
                    break;
                case 6:
                    message.standpoint = reader.uint32();
                    break;
                case 7:
                    message.energy = reader.uint32();
                    break;
                case 8:
                    message.potential = reader.uint32();
                    break;
                case 9:
                    message.tizhi = reader.uint32();
                    break;
                case 10:
                    message.zhenqi = reader.uint32();
                    break;
                case 11:
                    message.gengu = reader.uint32();
                    break;
                case 12:
                    message.lingmin = reader.uint32();
                    break;
                case 13:
                    message.lidao = reader.uint32();
                    break;
                case 14:
                    message.curhp = reader.uint32();
                    break;
                case 15:
                    message.hp = reader.uint32();
                    break;
                case 16:
                    message.curmp = reader.uint32();
                    break;
                case 17:
                    message.mp = reader.uint32();
                    break;
                case 18:
                    message.curatk = reader.uint32();
                    break;
                case 19:
                    message.atk = reader.uint32();
                    break;
                case 20:
                    message.curdef = reader.uint32();
                    break;
                case 21:
                    message.def = reader.uint32();
                    break;
                case 22:
                    message.curcrit = reader.uint32();
                    break;
                case 23:
                    message.crit = reader.uint32();
                    break;
                case 24:
                    message.curspeed = reader.uint32();
                    break;
                case 25:
                    message.speed = reader.uint32();
                    break;
                case 26:
                    message.curdodge = reader.uint32();
                    break;
                case 27:
                    message.dodge = reader.uint32();
                    break;
                case 28:
                    message.curhit = reader.uint32();
                    break;
                case 29:
                    message.hit = reader.uint32();
                    break;
                case 30:
                    if (!(message.skills && message.skills.length))
                        message.skills = [];
                    message.skills.push($root.wl.Skill.decode(reader, reader.uint32()));
                    break;
                case 31:
                    if (!(message.achievement && message.achievement.length))
                        message.achievement = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.achievement.push(reader.uint32());
                    } else
                        message.achievement.push(reader.uint32());
                    break;
                case 32:
                    if (!(message.titles && message.titles.length))
                        message.titles = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.titles.push(reader.uint32());
                    } else
                        message.titles.push(reader.uint32());
                    break;
                case 33:
                    if (!(message.cityrelations && message.cityrelations.length))
                        message.cityrelations = [];
                    message.cityrelations.push($root.wl.Cityrelation.decode(reader, reader.uint32()));
                    break;
                case 34:
                    if (!(message.bag && message.bag.length))
                        message.bag = [];
                    message.bag.push($root.wl.Good.decode(reader, reader.uint32()));
                    break;
                case 35:
                    if (!(message.equipList && message.equipList.length))
                        message.equipList = [];
                    message.equipList.push($root.wl.Equip.decode(reader, reader.uint32()));
                    break;
                case 36:
                    message.talent = reader.uint32();
                    break;
                case 37:
                    message.curMap = reader.uint32();
                    break;
                case 38:
                    message.pos = $root.wl.Pos.decode(reader, reader.uint32());
                    break;
                case 39:
                    message.state = reader.uint32();
                    break;
                case 40:
                    message.element = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof wl.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isString(message.rid))
                    return "rid: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isString(message.createTime))
                    return "createTime: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
            if (message.standpoint != null && message.hasOwnProperty("standpoint"))
                if (!$util.isInteger(message.standpoint))
                    return "standpoint: integer expected";
            if (message.energy != null && message.hasOwnProperty("energy"))
                if (!$util.isInteger(message.energy))
                    return "energy: integer expected";
            if (message.potential != null && message.hasOwnProperty("potential"))
                if (!$util.isInteger(message.potential))
                    return "potential: integer expected";
            if (message.tizhi != null && message.hasOwnProperty("tizhi"))
                if (!$util.isInteger(message.tizhi))
                    return "tizhi: integer expected";
            if (message.zhenqi != null && message.hasOwnProperty("zhenqi"))
                if (!$util.isInteger(message.zhenqi))
                    return "zhenqi: integer expected";
            if (message.gengu != null && message.hasOwnProperty("gengu"))
                if (!$util.isInteger(message.gengu))
                    return "gengu: integer expected";
            if (message.lingmin != null && message.hasOwnProperty("lingmin"))
                if (!$util.isInteger(message.lingmin))
                    return "lingmin: integer expected";
            if (message.lidao != null && message.hasOwnProperty("lidao"))
                if (!$util.isInteger(message.lidao))
                    return "lidao: integer expected";
            if (message.curhp != null && message.hasOwnProperty("curhp"))
                if (!$util.isInteger(message.curhp))
                    return "curhp: integer expected";
            if (message.hp != null && message.hasOwnProperty("hp"))
                if (!$util.isInteger(message.hp))
                    return "hp: integer expected";
            if (message.curmp != null && message.hasOwnProperty("curmp"))
                if (!$util.isInteger(message.curmp))
                    return "curmp: integer expected";
            if (message.mp != null && message.hasOwnProperty("mp"))
                if (!$util.isInteger(message.mp))
                    return "mp: integer expected";
            if (message.curatk != null && message.hasOwnProperty("curatk"))
                if (!$util.isInteger(message.curatk))
                    return "curatk: integer expected";
            if (message.atk != null && message.hasOwnProperty("atk"))
                if (!$util.isInteger(message.atk))
                    return "atk: integer expected";
            if (message.curdef != null && message.hasOwnProperty("curdef"))
                if (!$util.isInteger(message.curdef))
                    return "curdef: integer expected";
            if (message.def != null && message.hasOwnProperty("def"))
                if (!$util.isInteger(message.def))
                    return "def: integer expected";
            if (message.curcrit != null && message.hasOwnProperty("curcrit"))
                if (!$util.isInteger(message.curcrit))
                    return "curcrit: integer expected";
            if (message.crit != null && message.hasOwnProperty("crit"))
                if (!$util.isInteger(message.crit))
                    return "crit: integer expected";
            if (message.curspeed != null && message.hasOwnProperty("curspeed"))
                if (!$util.isInteger(message.curspeed))
                    return "curspeed: integer expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.curdodge != null && message.hasOwnProperty("curdodge"))
                if (!$util.isInteger(message.curdodge))
                    return "curdodge: integer expected";
            if (message.dodge != null && message.hasOwnProperty("dodge"))
                if (!$util.isInteger(message.dodge))
                    return "dodge: integer expected";
            if (message.curhit != null && message.hasOwnProperty("curhit"))
                if (!$util.isInteger(message.curhit))
                    return "curhit: integer expected";
            if (message.hit != null && message.hasOwnProperty("hit"))
                if (!$util.isInteger(message.hit))
                    return "hit: integer expected";
            if (message.skills != null && message.hasOwnProperty("skills")) {
                if (!Array.isArray(message.skills))
                    return "skills: array expected";
                for (var i = 0; i < message.skills.length; ++i) {
                    var error = $root.wl.Skill.verify(message.skills[i]);
                    if (error)
                        return "skills." + error;
                }
            }
            if (message.achievement != null && message.hasOwnProperty("achievement")) {
                if (!Array.isArray(message.achievement))
                    return "achievement: array expected";
                for (var i = 0; i < message.achievement.length; ++i)
                    if (!$util.isInteger(message.achievement[i]))
                        return "achievement: integer[] expected";
            }
            if (message.titles != null && message.hasOwnProperty("titles")) {
                if (!Array.isArray(message.titles))
                    return "titles: array expected";
                for (var i = 0; i < message.titles.length; ++i)
                    if (!$util.isInteger(message.titles[i]))
                        return "titles: integer[] expected";
            }
            if (message.cityrelations != null && message.hasOwnProperty("cityrelations")) {
                if (!Array.isArray(message.cityrelations))
                    return "cityrelations: array expected";
                for (var i = 0; i < message.cityrelations.length; ++i) {
                    var error = $root.wl.Cityrelation.verify(message.cityrelations[i]);
                    if (error)
                        return "cityrelations." + error;
                }
            }
            if (message.bag != null && message.hasOwnProperty("bag")) {
                if (!Array.isArray(message.bag))
                    return "bag: array expected";
                for (var i = 0; i < message.bag.length; ++i) {
                    var error = $root.wl.Good.verify(message.bag[i]);
                    if (error)
                        return "bag." + error;
                }
            }
            if (message.equipList != null && message.hasOwnProperty("equipList")) {
                if (!Array.isArray(message.equipList))
                    return "equipList: array expected";
                for (var i = 0; i < message.equipList.length; ++i) {
                    var error = $root.wl.Equip.verify(message.equipList[i]);
                    if (error)
                        return "equipList." + error;
                }
            }
            if (message.talent != null && message.hasOwnProperty("talent"))
                if (!$util.isInteger(message.talent))
                    return "talent: integer expected";
            if (message.curMap != null && message.hasOwnProperty("curMap"))
                if (!$util.isInteger(message.curMap))
                    return "curMap: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos")) {
                var error = $root.wl.Pos.verify(message.pos);
                if (error)
                    return "pos." + error;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.element != null && message.hasOwnProperty("element"))
                if (!$util.isInteger(message.element))
                    return "element: integer expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.Player)
                return object;
            var message = new $root.wl.Player();
            if (object.rid != null)
                message.rid = String(object.rid);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.createTime != null)
                message.createTime = String(object.createTime);
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.exp != null)
                message.exp = object.exp >>> 0;
            if (object.standpoint != null)
                message.standpoint = object.standpoint >>> 0;
            if (object.energy != null)
                message.energy = object.energy >>> 0;
            if (object.potential != null)
                message.potential = object.potential >>> 0;
            if (object.tizhi != null)
                message.tizhi = object.tizhi >>> 0;
            if (object.zhenqi != null)
                message.zhenqi = object.zhenqi >>> 0;
            if (object.gengu != null)
                message.gengu = object.gengu >>> 0;
            if (object.lingmin != null)
                message.lingmin = object.lingmin >>> 0;
            if (object.lidao != null)
                message.lidao = object.lidao >>> 0;
            if (object.curhp != null)
                message.curhp = object.curhp >>> 0;
            if (object.hp != null)
                message.hp = object.hp >>> 0;
            if (object.curmp != null)
                message.curmp = object.curmp >>> 0;
            if (object.mp != null)
                message.mp = object.mp >>> 0;
            if (object.curatk != null)
                message.curatk = object.curatk >>> 0;
            if (object.atk != null)
                message.atk = object.atk >>> 0;
            if (object.curdef != null)
                message.curdef = object.curdef >>> 0;
            if (object.def != null)
                message.def = object.def >>> 0;
            if (object.curcrit != null)
                message.curcrit = object.curcrit >>> 0;
            if (object.crit != null)
                message.crit = object.crit >>> 0;
            if (object.curspeed != null)
                message.curspeed = object.curspeed >>> 0;
            if (object.speed != null)
                message.speed = object.speed >>> 0;
            if (object.curdodge != null)
                message.curdodge = object.curdodge >>> 0;
            if (object.dodge != null)
                message.dodge = object.dodge >>> 0;
            if (object.curhit != null)
                message.curhit = object.curhit >>> 0;
            if (object.hit != null)
                message.hit = object.hit >>> 0;
            if (object.skills) {
                if (!Array.isArray(object.skills))
                    throw TypeError(".wl.Player.skills: array expected");
                message.skills = [];
                for (var i = 0; i < object.skills.length; ++i) {
                    if (typeof object.skills[i] !== "object")
                        throw TypeError(".wl.Player.skills: object expected");
                    message.skills[i] = $root.wl.Skill.fromObject(object.skills[i]);
                }
            }
            if (object.achievement) {
                if (!Array.isArray(object.achievement))
                    throw TypeError(".wl.Player.achievement: array expected");
                message.achievement = [];
                for (var i = 0; i < object.achievement.length; ++i)
                    message.achievement[i] = object.achievement[i] >>> 0;
            }
            if (object.titles) {
                if (!Array.isArray(object.titles))
                    throw TypeError(".wl.Player.titles: array expected");
                message.titles = [];
                for (var i = 0; i < object.titles.length; ++i)
                    message.titles[i] = object.titles[i] >>> 0;
            }
            if (object.cityrelations) {
                if (!Array.isArray(object.cityrelations))
                    throw TypeError(".wl.Player.cityrelations: array expected");
                message.cityrelations = [];
                for (var i = 0; i < object.cityrelations.length; ++i) {
                    if (typeof object.cityrelations[i] !== "object")
                        throw TypeError(".wl.Player.cityrelations: object expected");
                    message.cityrelations[i] = $root.wl.Cityrelation.fromObject(object.cityrelations[i]);
                }
            }
            if (object.bag) {
                if (!Array.isArray(object.bag))
                    throw TypeError(".wl.Player.bag: array expected");
                message.bag = [];
                for (var i = 0; i < object.bag.length; ++i) {
                    if (typeof object.bag[i] !== "object")
                        throw TypeError(".wl.Player.bag: object expected");
                    message.bag[i] = $root.wl.Good.fromObject(object.bag[i]);
                }
            }
            if (object.equipList) {
                if (!Array.isArray(object.equipList))
                    throw TypeError(".wl.Player.equipList: array expected");
                message.equipList = [];
                for (var i = 0; i < object.equipList.length; ++i) {
                    if (typeof object.equipList[i] !== "object")
                        throw TypeError(".wl.Player.equipList: object expected");
                    message.equipList[i] = $root.wl.Equip.fromObject(object.equipList[i]);
                }
            }
            if (object.talent != null)
                message.talent = object.talent >>> 0;
            if (object.curMap != null)
                message.curMap = object.curMap >>> 0;
            if (object.pos != null) {
                if (typeof object.pos !== "object")
                    throw TypeError(".wl.Player.pos: object expected");
                message.pos = $root.wl.Pos.fromObject(object.pos);
            }
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.element != null)
                message.element = object.element >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.Player
         * @static
         * @param {wl.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.skills = [];
                object.achievement = [];
                object.titles = [];
                object.cityrelations = [];
                object.bag = [];
                object.equipList = [];
            }
            if (options.defaults) {
                object.rid = "";
                object.nick = "";
                object.createTime = "";
                object.level = 0;
                object.exp = 0;
                object.standpoint = 0;
                object.energy = 0;
                object.potential = 0;
                object.tizhi = 0;
                object.zhenqi = 0;
                object.gengu = 0;
                object.lingmin = 0;
                object.lidao = 0;
                object.curhp = 0;
                object.hp = 0;
                object.curmp = 0;
                object.mp = 0;
                object.curatk = 0;
                object.atk = 0;
                object.curdef = 0;
                object.def = 0;
                object.curcrit = 0;
                object.crit = 0;
                object.curspeed = 0;
                object.speed = 0;
                object.curdodge = 0;
                object.dodge = 0;
                object.curhit = 0;
                object.hit = 0;
                object.talent = 0;
                object.curMap = 0;
                object.pos = null;
                object.state = 0;
                object.element = 0;
            }
            if (message.rid != null && message.hasOwnProperty("rid"))
                object.rid = message.rid;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                object.createTime = message.createTime;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.standpoint != null && message.hasOwnProperty("standpoint"))
                object.standpoint = message.standpoint;
            if (message.energy != null && message.hasOwnProperty("energy"))
                object.energy = message.energy;
            if (message.potential != null && message.hasOwnProperty("potential"))
                object.potential = message.potential;
            if (message.tizhi != null && message.hasOwnProperty("tizhi"))
                object.tizhi = message.tizhi;
            if (message.zhenqi != null && message.hasOwnProperty("zhenqi"))
                object.zhenqi = message.zhenqi;
            if (message.gengu != null && message.hasOwnProperty("gengu"))
                object.gengu = message.gengu;
            if (message.lingmin != null && message.hasOwnProperty("lingmin"))
                object.lingmin = message.lingmin;
            if (message.lidao != null && message.hasOwnProperty("lidao"))
                object.lidao = message.lidao;
            if (message.curhp != null && message.hasOwnProperty("curhp"))
                object.curhp = message.curhp;
            if (message.hp != null && message.hasOwnProperty("hp"))
                object.hp = message.hp;
            if (message.curmp != null && message.hasOwnProperty("curmp"))
                object.curmp = message.curmp;
            if (message.mp != null && message.hasOwnProperty("mp"))
                object.mp = message.mp;
            if (message.curatk != null && message.hasOwnProperty("curatk"))
                object.curatk = message.curatk;
            if (message.atk != null && message.hasOwnProperty("atk"))
                object.atk = message.atk;
            if (message.curdef != null && message.hasOwnProperty("curdef"))
                object.curdef = message.curdef;
            if (message.def != null && message.hasOwnProperty("def"))
                object.def = message.def;
            if (message.curcrit != null && message.hasOwnProperty("curcrit"))
                object.curcrit = message.curcrit;
            if (message.crit != null && message.hasOwnProperty("crit"))
                object.crit = message.crit;
            if (message.curspeed != null && message.hasOwnProperty("curspeed"))
                object.curspeed = message.curspeed;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = message.speed;
            if (message.curdodge != null && message.hasOwnProperty("curdodge"))
                object.curdodge = message.curdodge;
            if (message.dodge != null && message.hasOwnProperty("dodge"))
                object.dodge = message.dodge;
            if (message.curhit != null && message.hasOwnProperty("curhit"))
                object.curhit = message.curhit;
            if (message.hit != null && message.hasOwnProperty("hit"))
                object.hit = message.hit;
            if (message.skills && message.skills.length) {
                object.skills = [];
                for (var j = 0; j < message.skills.length; ++j)
                    object.skills[j] = $root.wl.Skill.toObject(message.skills[j], options);
            }
            if (message.achievement && message.achievement.length) {
                object.achievement = [];
                for (var j = 0; j < message.achievement.length; ++j)
                    object.achievement[j] = message.achievement[j];
            }
            if (message.titles && message.titles.length) {
                object.titles = [];
                for (var j = 0; j < message.titles.length; ++j)
                    object.titles[j] = message.titles[j];
            }
            if (message.cityrelations && message.cityrelations.length) {
                object.cityrelations = [];
                for (var j = 0; j < message.cityrelations.length; ++j)
                    object.cityrelations[j] = $root.wl.Cityrelation.toObject(message.cityrelations[j], options);
            }
            if (message.bag && message.bag.length) {
                object.bag = [];
                for (var j = 0; j < message.bag.length; ++j)
                    object.bag[j] = $root.wl.Good.toObject(message.bag[j], options);
            }
            if (message.equipList && message.equipList.length) {
                object.equipList = [];
                for (var j = 0; j < message.equipList.length; ++j)
                    object.equipList[j] = $root.wl.Equip.toObject(message.equipList[j], options);
            }
            if (message.talent != null && message.hasOwnProperty("talent"))
                object.talent = message.talent;
            if (message.curMap != null && message.hasOwnProperty("curMap"))
                object.curMap = message.curMap;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = $root.wl.Pos.toObject(message.pos, options);
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.element != null && message.hasOwnProperty("element"))
                object.element = message.element;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof wl.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    wl.c2s_login_msg = (function() {

        /**
         * Properties of a c2s_login_msg.
         * @memberof wl
         * @interface Ic2s_login_msg
         * @property {string|null} [name] c2s_login_msg name
         * @property {string|null} [plant] c2s_login_msg plant
         */

        /**
         * Constructs a new c2s_login_msg.
         * @memberof wl
         * @classdesc Represents a c2s_login_msg.
         * @implements Ic2s_login_msg
         * @constructor
         * @param {wl.Ic2s_login_msg=} [properties] Properties to set
         */
        function c2s_login_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_login_msg name.
         * @member {string} name
         * @memberof wl.c2s_login_msg
         * @instance
         */
        c2s_login_msg.prototype.name = "";

        /**
         * c2s_login_msg plant.
         * @member {string} plant
         * @memberof wl.c2s_login_msg
         * @instance
         */
        c2s_login_msg.prototype.plant = "";

        /**
         * Creates a new c2s_login_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_login_msg
         * @static
         * @param {wl.Ic2s_login_msg=} [properties] Properties to set
         * @returns {wl.c2s_login_msg} c2s_login_msg instance
         */
        c2s_login_msg.create = function create(properties) {
            return new c2s_login_msg(properties);
        };

        /**
         * Encodes the specified c2s_login_msg message. Does not implicitly {@link wl.c2s_login_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_login_msg
         * @static
         * @param {wl.Ic2s_login_msg} message c2s_login_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_login_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.plant != null && message.hasOwnProperty("plant"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.plant);
            return writer;
        };

        /**
         * Encodes the specified c2s_login_msg message, length delimited. Does not implicitly {@link wl.c2s_login_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_login_msg
         * @static
         * @param {wl.Ic2s_login_msg} message c2s_login_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_login_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_login_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_login_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_login_msg} c2s_login_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_login_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_login_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.plant = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_login_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_login_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_login_msg} c2s_login_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_login_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_login_msg message.
         * @function verify
         * @memberof wl.c2s_login_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_login_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.plant != null && message.hasOwnProperty("plant"))
                if (!$util.isString(message.plant))
                    return "plant: string expected";
            return null;
        };

        /**
         * Creates a c2s_login_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_login_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_login_msg} c2s_login_msg
         */
        c2s_login_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_login_msg)
                return object;
            var message = new $root.wl.c2s_login_msg();
            if (object.name != null)
                message.name = String(object.name);
            if (object.plant != null)
                message.plant = String(object.plant);
            return message;
        };

        /**
         * Creates a plain object from a c2s_login_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_login_msg
         * @static
         * @param {wl.c2s_login_msg} message c2s_login_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_login_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.plant = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.plant != null && message.hasOwnProperty("plant"))
                object.plant = message.plant;
            return object;
        };

        /**
         * Converts this c2s_login_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_login_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_login_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_login_msg;
    })();

    wl.s2c_login_msg = (function() {

        /**
         * Properties of a s2c_login_msg.
         * @memberof wl
         * @interface Is2c_login_msg
         * @property {number|null} [code] s2c_login_msg code
         * @property {string|null} [loginToken] s2c_login_msg loginToken
         * @property {string|null} [uid] s2c_login_msg uid
         * @property {string|null} [createTime] s2c_login_msg createTime
         */

        /**
         * Constructs a new s2c_login_msg.
         * @memberof wl
         * @classdesc Represents a s2c_login_msg.
         * @implements Is2c_login_msg
         * @constructor
         * @param {wl.Is2c_login_msg=} [properties] Properties to set
         */
        function s2c_login_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_login_msg code.
         * @member {number} code
         * @memberof wl.s2c_login_msg
         * @instance
         */
        s2c_login_msg.prototype.code = 0;

        /**
         * s2c_login_msg loginToken.
         * @member {string} loginToken
         * @memberof wl.s2c_login_msg
         * @instance
         */
        s2c_login_msg.prototype.loginToken = "";

        /**
         * s2c_login_msg uid.
         * @member {string} uid
         * @memberof wl.s2c_login_msg
         * @instance
         */
        s2c_login_msg.prototype.uid = "";

        /**
         * s2c_login_msg createTime.
         * @member {string} createTime
         * @memberof wl.s2c_login_msg
         * @instance
         */
        s2c_login_msg.prototype.createTime = "";

        /**
         * Creates a new s2c_login_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_login_msg
         * @static
         * @param {wl.Is2c_login_msg=} [properties] Properties to set
         * @returns {wl.s2c_login_msg} s2c_login_msg instance
         */
        s2c_login_msg.create = function create(properties) {
            return new s2c_login_msg(properties);
        };

        /**
         * Encodes the specified s2c_login_msg message. Does not implicitly {@link wl.s2c_login_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_login_msg
         * @static
         * @param {wl.Is2c_login_msg} message s2c_login_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_login_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.loginToken != null && message.hasOwnProperty("loginToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.loginToken);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uid);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.createTime);
            return writer;
        };

        /**
         * Encodes the specified s2c_login_msg message, length delimited. Does not implicitly {@link wl.s2c_login_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_login_msg
         * @static
         * @param {wl.Is2c_login_msg} message s2c_login_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_login_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_login_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_login_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_login_msg} s2c_login_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_login_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_login_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.loginToken = reader.string();
                    break;
                case 3:
                    message.uid = reader.string();
                    break;
                case 4:
                    message.createTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_login_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_login_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_login_msg} s2c_login_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_login_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_login_msg message.
         * @function verify
         * @memberof wl.s2c_login_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_login_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.loginToken != null && message.hasOwnProperty("loginToken"))
                if (!$util.isString(message.loginToken))
                    return "loginToken: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isString(message.createTime))
                    return "createTime: string expected";
            return null;
        };

        /**
         * Creates a s2c_login_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_login_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_login_msg} s2c_login_msg
         */
        s2c_login_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_login_msg)
                return object;
            var message = new $root.wl.s2c_login_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.loginToken != null)
                message.loginToken = String(object.loginToken);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.createTime != null)
                message.createTime = String(object.createTime);
            return message;
        };

        /**
         * Creates a plain object from a s2c_login_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_login_msg
         * @static
         * @param {wl.s2c_login_msg} message s2c_login_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_login_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.loginToken = "";
                object.uid = "";
                object.createTime = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.loginToken != null && message.hasOwnProperty("loginToken"))
                object.loginToken = message.loginToken;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                object.createTime = message.createTime;
            return object;
        };

        /**
         * Converts this s2c_login_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_login_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_login_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_login_msg;
    })();

    wl.c2s_zonelist_msg = (function() {

        /**
         * Properties of a c2s_zonelist_msg.
         * @memberof wl
         * @interface Ic2s_zonelist_msg
         */

        /**
         * Constructs a new c2s_zonelist_msg.
         * @memberof wl
         * @classdesc Represents a c2s_zonelist_msg.
         * @implements Ic2s_zonelist_msg
         * @constructor
         * @param {wl.Ic2s_zonelist_msg=} [properties] Properties to set
         */
        function c2s_zonelist_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_zonelist_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {wl.Ic2s_zonelist_msg=} [properties] Properties to set
         * @returns {wl.c2s_zonelist_msg} c2s_zonelist_msg instance
         */
        c2s_zonelist_msg.create = function create(properties) {
            return new c2s_zonelist_msg(properties);
        };

        /**
         * Encodes the specified c2s_zonelist_msg message. Does not implicitly {@link wl.c2s_zonelist_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {wl.Ic2s_zonelist_msg} message c2s_zonelist_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_zonelist_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_zonelist_msg message, length delimited. Does not implicitly {@link wl.c2s_zonelist_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {wl.Ic2s_zonelist_msg} message c2s_zonelist_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_zonelist_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_zonelist_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_zonelist_msg} c2s_zonelist_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_zonelist_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_zonelist_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_zonelist_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_zonelist_msg} c2s_zonelist_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_zonelist_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_zonelist_msg message.
         * @function verify
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_zonelist_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_zonelist_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_zonelist_msg} c2s_zonelist_msg
         */
        c2s_zonelist_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_zonelist_msg)
                return object;
            return new $root.wl.c2s_zonelist_msg();
        };

        /**
         * Creates a plain object from a c2s_zonelist_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_zonelist_msg
         * @static
         * @param {wl.c2s_zonelist_msg} message c2s_zonelist_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_zonelist_msg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_zonelist_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_zonelist_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_zonelist_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_zonelist_msg;
    })();

    wl.s2c_zonelist_msg = (function() {

        /**
         * Properties of a s2c_zonelist_msg.
         * @memberof wl
         * @interface Is2c_zonelist_msg
         * @property {number|null} [code] s2c_zonelist_msg code
         * @property {Array.<wl.IZone>|null} [zone] s2c_zonelist_msg zone
         */

        /**
         * Constructs a new s2c_zonelist_msg.
         * @memberof wl
         * @classdesc Represents a s2c_zonelist_msg.
         * @implements Is2c_zonelist_msg
         * @constructor
         * @param {wl.Is2c_zonelist_msg=} [properties] Properties to set
         */
        function s2c_zonelist_msg(properties) {
            this.zone = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_zonelist_msg code.
         * @member {number} code
         * @memberof wl.s2c_zonelist_msg
         * @instance
         */
        s2c_zonelist_msg.prototype.code = 0;

        /**
         * s2c_zonelist_msg zone.
         * @member {Array.<wl.IZone>} zone
         * @memberof wl.s2c_zonelist_msg
         * @instance
         */
        s2c_zonelist_msg.prototype.zone = $util.emptyArray;

        /**
         * Creates a new s2c_zonelist_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {wl.Is2c_zonelist_msg=} [properties] Properties to set
         * @returns {wl.s2c_zonelist_msg} s2c_zonelist_msg instance
         */
        s2c_zonelist_msg.create = function create(properties) {
            return new s2c_zonelist_msg(properties);
        };

        /**
         * Encodes the specified s2c_zonelist_msg message. Does not implicitly {@link wl.s2c_zonelist_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {wl.Is2c_zonelist_msg} message s2c_zonelist_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_zonelist_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.zone != null && message.zone.length)
                for (var i = 0; i < message.zone.length; ++i)
                    $root.wl.Zone.encode(message.zone[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_zonelist_msg message, length delimited. Does not implicitly {@link wl.s2c_zonelist_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {wl.Is2c_zonelist_msg} message s2c_zonelist_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_zonelist_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_zonelist_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_zonelist_msg} s2c_zonelist_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_zonelist_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_zonelist_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    if (!(message.zone && message.zone.length))
                        message.zone = [];
                    message.zone.push($root.wl.Zone.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_zonelist_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_zonelist_msg} s2c_zonelist_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_zonelist_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_zonelist_msg message.
         * @function verify
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_zonelist_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.zone != null && message.hasOwnProperty("zone")) {
                if (!Array.isArray(message.zone))
                    return "zone: array expected";
                for (var i = 0; i < message.zone.length; ++i) {
                    var error = $root.wl.Zone.verify(message.zone[i]);
                    if (error)
                        return "zone." + error;
                }
            }
            return null;
        };

        /**
         * Creates a s2c_zonelist_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_zonelist_msg} s2c_zonelist_msg
         */
        s2c_zonelist_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_zonelist_msg)
                return object;
            var message = new $root.wl.s2c_zonelist_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.zone) {
                if (!Array.isArray(object.zone))
                    throw TypeError(".wl.s2c_zonelist_msg.zone: array expected");
                message.zone = [];
                for (var i = 0; i < object.zone.length; ++i) {
                    if (typeof object.zone[i] !== "object")
                        throw TypeError(".wl.s2c_zonelist_msg.zone: object expected");
                    message.zone[i] = $root.wl.Zone.fromObject(object.zone[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_zonelist_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_zonelist_msg
         * @static
         * @param {wl.s2c_zonelist_msg} message s2c_zonelist_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_zonelist_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.zone = [];
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.zone && message.zone.length) {
                object.zone = [];
                for (var j = 0; j < message.zone.length; ++j)
                    object.zone[j] = $root.wl.Zone.toObject(message.zone[j], options);
            }
            return object;
        };

        /**
         * Converts this s2c_zonelist_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_zonelist_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_zonelist_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_zonelist_msg;
    })();

    wl.c2s_enter_game_msg = (function() {

        /**
         * Properties of a c2s_enter_game_msg.
         * @memberof wl
         * @interface Ic2s_enter_game_msg
         * @property {string|null} [uid] c2s_enter_game_msg uid
         * @property {number|null} [zid] c2s_enter_game_msg zid
         */

        /**
         * Constructs a new c2s_enter_game_msg.
         * @memberof wl
         * @classdesc Represents a c2s_enter_game_msg.
         * @implements Ic2s_enter_game_msg
         * @constructor
         * @param {wl.Ic2s_enter_game_msg=} [properties] Properties to set
         */
        function c2s_enter_game_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_enter_game_msg uid.
         * @member {string} uid
         * @memberof wl.c2s_enter_game_msg
         * @instance
         */
        c2s_enter_game_msg.prototype.uid = "";

        /**
         * c2s_enter_game_msg zid.
         * @member {number} zid
         * @memberof wl.c2s_enter_game_msg
         * @instance
         */
        c2s_enter_game_msg.prototype.zid = 0;

        /**
         * Creates a new c2s_enter_game_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {wl.Ic2s_enter_game_msg=} [properties] Properties to set
         * @returns {wl.c2s_enter_game_msg} c2s_enter_game_msg instance
         */
        c2s_enter_game_msg.create = function create(properties) {
            return new c2s_enter_game_msg(properties);
        };

        /**
         * Encodes the specified c2s_enter_game_msg message. Does not implicitly {@link wl.c2s_enter_game_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {wl.Ic2s_enter_game_msg} message c2s_enter_game_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_enter_game_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.zid != null && message.hasOwnProperty("zid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.zid);
            return writer;
        };

        /**
         * Encodes the specified c2s_enter_game_msg message, length delimited. Does not implicitly {@link wl.c2s_enter_game_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {wl.Ic2s_enter_game_msg} message c2s_enter_game_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_enter_game_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_enter_game_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_enter_game_msg} c2s_enter_game_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_enter_game_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_enter_game_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.zid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_enter_game_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_enter_game_msg} c2s_enter_game_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_enter_game_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_enter_game_msg message.
         * @function verify
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_enter_game_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.zid != null && message.hasOwnProperty("zid"))
                if (!$util.isInteger(message.zid))
                    return "zid: integer expected";
            return null;
        };

        /**
         * Creates a c2s_enter_game_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_enter_game_msg} c2s_enter_game_msg
         */
        c2s_enter_game_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_enter_game_msg)
                return object;
            var message = new $root.wl.c2s_enter_game_msg();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.zid != null)
                message.zid = object.zid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_enter_game_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_enter_game_msg
         * @static
         * @param {wl.c2s_enter_game_msg} message c2s_enter_game_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_enter_game_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.zid = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.zid != null && message.hasOwnProperty("zid"))
                object.zid = message.zid;
            return object;
        };

        /**
         * Converts this c2s_enter_game_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_enter_game_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_enter_game_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_enter_game_msg;
    })();

    wl.s2c_enter_game_msg = (function() {

        /**
         * Properties of a s2c_enter_game_msg.
         * @memberof wl
         * @interface Is2c_enter_game_msg
         * @property {number|null} [code] s2c_enter_game_msg code
         * @property {wl.IPlayer|null} [player] s2c_enter_game_msg player
         * @property {string|null} [serverTime] s2c_enter_game_msg serverTime
         */

        /**
         * Constructs a new s2c_enter_game_msg.
         * @memberof wl
         * @classdesc Represents a s2c_enter_game_msg.
         * @implements Is2c_enter_game_msg
         * @constructor
         * @param {wl.Is2c_enter_game_msg=} [properties] Properties to set
         */
        function s2c_enter_game_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_enter_game_msg code.
         * @member {number} code
         * @memberof wl.s2c_enter_game_msg
         * @instance
         */
        s2c_enter_game_msg.prototype.code = 0;

        /**
         * s2c_enter_game_msg player.
         * @member {wl.IPlayer|null|undefined} player
         * @memberof wl.s2c_enter_game_msg
         * @instance
         */
        s2c_enter_game_msg.prototype.player = null;

        /**
         * s2c_enter_game_msg serverTime.
         * @member {string} serverTime
         * @memberof wl.s2c_enter_game_msg
         * @instance
         */
        s2c_enter_game_msg.prototype.serverTime = "";

        /**
         * Creates a new s2c_enter_game_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {wl.Is2c_enter_game_msg=} [properties] Properties to set
         * @returns {wl.s2c_enter_game_msg} s2c_enter_game_msg instance
         */
        s2c_enter_game_msg.create = function create(properties) {
            return new s2c_enter_game_msg(properties);
        };

        /**
         * Encodes the specified s2c_enter_game_msg message. Does not implicitly {@link wl.s2c_enter_game_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {wl.Is2c_enter_game_msg} message s2c_enter_game_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_enter_game_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.player != null && message.hasOwnProperty("player"))
                $root.wl.Player.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified s2c_enter_game_msg message, length delimited. Does not implicitly {@link wl.s2c_enter_game_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {wl.Is2c_enter_game_msg} message s2c_enter_game_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_enter_game_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_enter_game_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_enter_game_msg} s2c_enter_game_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_enter_game_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_enter_game_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.player = $root.wl.Player.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.serverTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_enter_game_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_enter_game_msg} s2c_enter_game_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_enter_game_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_enter_game_msg message.
         * @function verify
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_enter_game_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.wl.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isString(message.serverTime))
                    return "serverTime: string expected";
            return null;
        };

        /**
         * Creates a s2c_enter_game_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_enter_game_msg} s2c_enter_game_msg
         */
        s2c_enter_game_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_enter_game_msg)
                return object;
            var message = new $root.wl.s2c_enter_game_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".wl.s2c_enter_game_msg.player: object expected");
                message.player = $root.wl.Player.fromObject(object.player);
            }
            if (object.serverTime != null)
                message.serverTime = String(object.serverTime);
            return message;
        };

        /**
         * Creates a plain object from a s2c_enter_game_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_enter_game_msg
         * @static
         * @param {wl.s2c_enter_game_msg} message s2c_enter_game_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_enter_game_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.player = null;
                object.serverTime = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.wl.Player.toObject(message.player, options);
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                object.serverTime = message.serverTime;
            return object;
        };

        /**
         * Converts this s2c_enter_game_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_enter_game_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_enter_game_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_enter_game_msg;
    })();

    wl.c2s_create_role_msg = (function() {

        /**
         * Properties of a c2s_create_role_msg.
         * @memberof wl
         * @interface Ic2s_create_role_msg
         * @property {string|null} [uid] c2s_create_role_msg uid
         * @property {string|null} [nick] c2s_create_role_msg nick
         */

        /**
         * Constructs a new c2s_create_role_msg.
         * @memberof wl
         * @classdesc Represents a c2s_create_role_msg.
         * @implements Ic2s_create_role_msg
         * @constructor
         * @param {wl.Ic2s_create_role_msg=} [properties] Properties to set
         */
        function c2s_create_role_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_create_role_msg uid.
         * @member {string} uid
         * @memberof wl.c2s_create_role_msg
         * @instance
         */
        c2s_create_role_msg.prototype.uid = "";

        /**
         * c2s_create_role_msg nick.
         * @member {string} nick
         * @memberof wl.c2s_create_role_msg
         * @instance
         */
        c2s_create_role_msg.prototype.nick = "";

        /**
         * Creates a new c2s_create_role_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {wl.Ic2s_create_role_msg=} [properties] Properties to set
         * @returns {wl.c2s_create_role_msg} c2s_create_role_msg instance
         */
        c2s_create_role_msg.create = function create(properties) {
            return new c2s_create_role_msg(properties);
        };

        /**
         * Encodes the specified c2s_create_role_msg message. Does not implicitly {@link wl.c2s_create_role_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {wl.Ic2s_create_role_msg} message c2s_create_role_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_create_role_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
            return writer;
        };

        /**
         * Encodes the specified c2s_create_role_msg message, length delimited. Does not implicitly {@link wl.c2s_create_role_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {wl.Ic2s_create_role_msg} message c2s_create_role_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_create_role_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_create_role_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_create_role_msg} c2s_create_role_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_create_role_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_create_role_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.nick = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_create_role_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_create_role_msg} c2s_create_role_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_create_role_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_create_role_msg message.
         * @function verify
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_create_role_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            return null;
        };

        /**
         * Creates a c2s_create_role_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_create_role_msg} c2s_create_role_msg
         */
        c2s_create_role_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_create_role_msg)
                return object;
            var message = new $root.wl.c2s_create_role_msg();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.nick != null)
                message.nick = String(object.nick);
            return message;
        };

        /**
         * Creates a plain object from a c2s_create_role_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_create_role_msg
         * @static
         * @param {wl.c2s_create_role_msg} message c2s_create_role_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_create_role_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.nick = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            return object;
        };

        /**
         * Converts this c2s_create_role_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_create_role_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_create_role_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_create_role_msg;
    })();

    wl.s2c_create_role_msg = (function() {

        /**
         * Properties of a s2c_create_role_msg.
         * @memberof wl
         * @interface Is2c_create_role_msg
         * @property {number|null} [code] s2c_create_role_msg code
         * @property {wl.IPlayer|null} [player] s2c_create_role_msg player
         */

        /**
         * Constructs a new s2c_create_role_msg.
         * @memberof wl
         * @classdesc Represents a s2c_create_role_msg.
         * @implements Is2c_create_role_msg
         * @constructor
         * @param {wl.Is2c_create_role_msg=} [properties] Properties to set
         */
        function s2c_create_role_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_create_role_msg code.
         * @member {number} code
         * @memberof wl.s2c_create_role_msg
         * @instance
         */
        s2c_create_role_msg.prototype.code = 0;

        /**
         * s2c_create_role_msg player.
         * @member {wl.IPlayer|null|undefined} player
         * @memberof wl.s2c_create_role_msg
         * @instance
         */
        s2c_create_role_msg.prototype.player = null;

        /**
         * Creates a new s2c_create_role_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {wl.Is2c_create_role_msg=} [properties] Properties to set
         * @returns {wl.s2c_create_role_msg} s2c_create_role_msg instance
         */
        s2c_create_role_msg.create = function create(properties) {
            return new s2c_create_role_msg(properties);
        };

        /**
         * Encodes the specified s2c_create_role_msg message. Does not implicitly {@link wl.s2c_create_role_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {wl.Is2c_create_role_msg} message s2c_create_role_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_create_role_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.player != null && message.hasOwnProperty("player"))
                $root.wl.Player.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_create_role_msg message, length delimited. Does not implicitly {@link wl.s2c_create_role_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {wl.Is2c_create_role_msg} message s2c_create_role_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_create_role_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_create_role_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_create_role_msg} s2c_create_role_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_create_role_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_create_role_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.player = $root.wl.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_create_role_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_create_role_msg} s2c_create_role_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_create_role_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_create_role_msg message.
         * @function verify
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_create_role_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.wl.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_create_role_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_create_role_msg} s2c_create_role_msg
         */
        s2c_create_role_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_create_role_msg)
                return object;
            var message = new $root.wl.s2c_create_role_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".wl.s2c_create_role_msg.player: object expected");
                message.player = $root.wl.Player.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_create_role_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_create_role_msg
         * @static
         * @param {wl.s2c_create_role_msg} message s2c_create_role_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_create_role_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.player = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.wl.Player.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this s2c_create_role_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_create_role_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_create_role_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_create_role_msg;
    })();

    wl.c2s_enter_home_box_msg = (function() {

        /**
         * Properties of a c2s_enter_home_box_msg.
         * @memberof wl
         * @interface Ic2s_enter_home_box_msg
         */

        /**
         * Constructs a new c2s_enter_home_box_msg.
         * @memberof wl
         * @classdesc Represents a c2s_enter_home_box_msg.
         * @implements Ic2s_enter_home_box_msg
         * @constructor
         * @param {wl.Ic2s_enter_home_box_msg=} [properties] Properties to set
         */
        function c2s_enter_home_box_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_enter_home_box_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {wl.Ic2s_enter_home_box_msg=} [properties] Properties to set
         * @returns {wl.c2s_enter_home_box_msg} c2s_enter_home_box_msg instance
         */
        c2s_enter_home_box_msg.create = function create(properties) {
            return new c2s_enter_home_box_msg(properties);
        };

        /**
         * Encodes the specified c2s_enter_home_box_msg message. Does not implicitly {@link wl.c2s_enter_home_box_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {wl.Ic2s_enter_home_box_msg} message c2s_enter_home_box_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_enter_home_box_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_enter_home_box_msg message, length delimited. Does not implicitly {@link wl.c2s_enter_home_box_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {wl.Ic2s_enter_home_box_msg} message c2s_enter_home_box_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_enter_home_box_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_enter_home_box_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_enter_home_box_msg} c2s_enter_home_box_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_enter_home_box_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_enter_home_box_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_enter_home_box_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_enter_home_box_msg} c2s_enter_home_box_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_enter_home_box_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_enter_home_box_msg message.
         * @function verify
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_enter_home_box_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_enter_home_box_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_enter_home_box_msg} c2s_enter_home_box_msg
         */
        c2s_enter_home_box_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_enter_home_box_msg)
                return object;
            return new $root.wl.c2s_enter_home_box_msg();
        };

        /**
         * Creates a plain object from a c2s_enter_home_box_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_enter_home_box_msg
         * @static
         * @param {wl.c2s_enter_home_box_msg} message c2s_enter_home_box_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_enter_home_box_msg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_enter_home_box_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_enter_home_box_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_enter_home_box_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_enter_home_box_msg;
    })();

    wl.s2c_enter_home_box_msg = (function() {

        /**
         * Properties of a s2c_enter_home_box_msg.
         * @memberof wl
         * @interface Is2c_enter_home_box_msg
         * @property {number|null} [code] s2c_enter_home_box_msg code
         */

        /**
         * Constructs a new s2c_enter_home_box_msg.
         * @memberof wl
         * @classdesc Represents a s2c_enter_home_box_msg.
         * @implements Is2c_enter_home_box_msg
         * @constructor
         * @param {wl.Is2c_enter_home_box_msg=} [properties] Properties to set
         */
        function s2c_enter_home_box_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_enter_home_box_msg code.
         * @member {number} code
         * @memberof wl.s2c_enter_home_box_msg
         * @instance
         */
        s2c_enter_home_box_msg.prototype.code = 0;

        /**
         * Creates a new s2c_enter_home_box_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {wl.Is2c_enter_home_box_msg=} [properties] Properties to set
         * @returns {wl.s2c_enter_home_box_msg} s2c_enter_home_box_msg instance
         */
        s2c_enter_home_box_msg.create = function create(properties) {
            return new s2c_enter_home_box_msg(properties);
        };

        /**
         * Encodes the specified s2c_enter_home_box_msg message. Does not implicitly {@link wl.s2c_enter_home_box_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {wl.Is2c_enter_home_box_msg} message s2c_enter_home_box_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_enter_home_box_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            return writer;
        };

        /**
         * Encodes the specified s2c_enter_home_box_msg message, length delimited. Does not implicitly {@link wl.s2c_enter_home_box_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {wl.Is2c_enter_home_box_msg} message s2c_enter_home_box_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_enter_home_box_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_enter_home_box_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_enter_home_box_msg} s2c_enter_home_box_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_enter_home_box_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_enter_home_box_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_enter_home_box_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_enter_home_box_msg} s2c_enter_home_box_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_enter_home_box_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_enter_home_box_msg message.
         * @function verify
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_enter_home_box_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a s2c_enter_home_box_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_enter_home_box_msg} s2c_enter_home_box_msg
         */
        s2c_enter_home_box_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_enter_home_box_msg)
                return object;
            var message = new $root.wl.s2c_enter_home_box_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_enter_home_box_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_enter_home_box_msg
         * @static
         * @param {wl.s2c_enter_home_box_msg} message s2c_enter_home_box_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_enter_home_box_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this s2c_enter_home_box_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_enter_home_box_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_enter_home_box_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_enter_home_box_msg;
    })();

    wl.c2s_throw_good_msg = (function() {

        /**
         * Properties of a c2s_throw_good_msg.
         * @memberof wl
         * @interface Ic2s_throw_good_msg
         * @property {string|null} [id] c2s_throw_good_msg id
         * @property {number|null} [count] c2s_throw_good_msg count
         */

        /**
         * Constructs a new c2s_throw_good_msg.
         * @memberof wl
         * @classdesc Represents a c2s_throw_good_msg.
         * @implements Ic2s_throw_good_msg
         * @constructor
         * @param {wl.Ic2s_throw_good_msg=} [properties] Properties to set
         */
        function c2s_throw_good_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_throw_good_msg id.
         * @member {string} id
         * @memberof wl.c2s_throw_good_msg
         * @instance
         */
        c2s_throw_good_msg.prototype.id = "";

        /**
         * c2s_throw_good_msg count.
         * @member {number} count
         * @memberof wl.c2s_throw_good_msg
         * @instance
         */
        c2s_throw_good_msg.prototype.count = 0;

        /**
         * Creates a new c2s_throw_good_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {wl.Ic2s_throw_good_msg=} [properties] Properties to set
         * @returns {wl.c2s_throw_good_msg} c2s_throw_good_msg instance
         */
        c2s_throw_good_msg.create = function create(properties) {
            return new c2s_throw_good_msg(properties);
        };

        /**
         * Encodes the specified c2s_throw_good_msg message. Does not implicitly {@link wl.c2s_throw_good_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {wl.Ic2s_throw_good_msg} message c2s_throw_good_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_throw_good_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified c2s_throw_good_msg message, length delimited. Does not implicitly {@link wl.c2s_throw_good_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {wl.Ic2s_throw_good_msg} message c2s_throw_good_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_throw_good_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_throw_good_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_throw_good_msg} c2s_throw_good_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_throw_good_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_throw_good_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_throw_good_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_throw_good_msg} c2s_throw_good_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_throw_good_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_throw_good_msg message.
         * @function verify
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_throw_good_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a c2s_throw_good_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_throw_good_msg} c2s_throw_good_msg
         */
        c2s_throw_good_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_throw_good_msg)
                return object;
            var message = new $root.wl.c2s_throw_good_msg();
            if (object.id != null)
                message.id = String(object.id);
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_throw_good_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_throw_good_msg
         * @static
         * @param {wl.c2s_throw_good_msg} message c2s_throw_good_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_throw_good_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.count = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this c2s_throw_good_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_throw_good_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_throw_good_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_throw_good_msg;
    })();

    wl.s2c_throw_good_msg = (function() {

        /**
         * Properties of a s2c_throw_good_msg.
         * @memberof wl
         * @interface Is2c_throw_good_msg
         * @property {number|null} [code] s2c_throw_good_msg code
         */

        /**
         * Constructs a new s2c_throw_good_msg.
         * @memberof wl
         * @classdesc Represents a s2c_throw_good_msg.
         * @implements Is2c_throw_good_msg
         * @constructor
         * @param {wl.Is2c_throw_good_msg=} [properties] Properties to set
         */
        function s2c_throw_good_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_throw_good_msg code.
         * @member {number} code
         * @memberof wl.s2c_throw_good_msg
         * @instance
         */
        s2c_throw_good_msg.prototype.code = 0;

        /**
         * Creates a new s2c_throw_good_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {wl.Is2c_throw_good_msg=} [properties] Properties to set
         * @returns {wl.s2c_throw_good_msg} s2c_throw_good_msg instance
         */
        s2c_throw_good_msg.create = function create(properties) {
            return new s2c_throw_good_msg(properties);
        };

        /**
         * Encodes the specified s2c_throw_good_msg message. Does not implicitly {@link wl.s2c_throw_good_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {wl.Is2c_throw_good_msg} message s2c_throw_good_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_throw_good_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            return writer;
        };

        /**
         * Encodes the specified s2c_throw_good_msg message, length delimited. Does not implicitly {@link wl.s2c_throw_good_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {wl.Is2c_throw_good_msg} message s2c_throw_good_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_throw_good_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_throw_good_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_throw_good_msg} s2c_throw_good_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_throw_good_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_throw_good_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_throw_good_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_throw_good_msg} s2c_throw_good_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_throw_good_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_throw_good_msg message.
         * @function verify
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_throw_good_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a s2c_throw_good_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_throw_good_msg} s2c_throw_good_msg
         */
        s2c_throw_good_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_throw_good_msg)
                return object;
            var message = new $root.wl.s2c_throw_good_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_throw_good_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_throw_good_msg
         * @static
         * @param {wl.s2c_throw_good_msg} message s2c_throw_good_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_throw_good_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this s2c_throw_good_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_throw_good_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_throw_good_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_throw_good_msg;
    })();

    wl.c2s_move_pos_msg = (function() {

        /**
         * Properties of a c2s_move_pos_msg.
         * @memberof wl
         * @interface Ic2s_move_pos_msg
         * @property {number|null} [x] c2s_move_pos_msg x
         * @property {number|null} [y] c2s_move_pos_msg y
         */

        /**
         * Constructs a new c2s_move_pos_msg.
         * @memberof wl
         * @classdesc Represents a c2s_move_pos_msg.
         * @implements Ic2s_move_pos_msg
         * @constructor
         * @param {wl.Ic2s_move_pos_msg=} [properties] Properties to set
         */
        function c2s_move_pos_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_move_pos_msg x.
         * @member {number} x
         * @memberof wl.c2s_move_pos_msg
         * @instance
         */
        c2s_move_pos_msg.prototype.x = 0;

        /**
         * c2s_move_pos_msg y.
         * @member {number} y
         * @memberof wl.c2s_move_pos_msg
         * @instance
         */
        c2s_move_pos_msg.prototype.y = 0;

        /**
         * Creates a new c2s_move_pos_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {wl.Ic2s_move_pos_msg=} [properties] Properties to set
         * @returns {wl.c2s_move_pos_msg} c2s_move_pos_msg instance
         */
        c2s_move_pos_msg.create = function create(properties) {
            return new c2s_move_pos_msg(properties);
        };

        /**
         * Encodes the specified c2s_move_pos_msg message. Does not implicitly {@link wl.c2s_move_pos_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {wl.Ic2s_move_pos_msg} message c2s_move_pos_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_move_pos_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y);
            return writer;
        };

        /**
         * Encodes the specified c2s_move_pos_msg message, length delimited. Does not implicitly {@link wl.c2s_move_pos_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {wl.Ic2s_move_pos_msg} message c2s_move_pos_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_move_pos_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_move_pos_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_move_pos_msg} c2s_move_pos_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_move_pos_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_move_pos_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.uint32();
                    break;
                case 2:
                    message.y = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_move_pos_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_move_pos_msg} c2s_move_pos_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_move_pos_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_move_pos_msg message.
         * @function verify
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_move_pos_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a c2s_move_pos_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_move_pos_msg} c2s_move_pos_msg
         */
        c2s_move_pos_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_move_pos_msg)
                return object;
            var message = new $root.wl.c2s_move_pos_msg();
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_move_pos_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_move_pos_msg
         * @static
         * @param {wl.c2s_move_pos_msg} message c2s_move_pos_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_move_pos_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this c2s_move_pos_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_move_pos_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_move_pos_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_move_pos_msg;
    })();

    wl.s2c_move_pos_msg = (function() {

        /**
         * Properties of a s2c_move_pos_msg.
         * @memberof wl
         * @interface Is2c_move_pos_msg
         * @property {number|null} [code] s2c_move_pos_msg code
         */

        /**
         * Constructs a new s2c_move_pos_msg.
         * @memberof wl
         * @classdesc Represents a s2c_move_pos_msg.
         * @implements Is2c_move_pos_msg
         * @constructor
         * @param {wl.Is2c_move_pos_msg=} [properties] Properties to set
         */
        function s2c_move_pos_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_move_pos_msg code.
         * @member {number} code
         * @memberof wl.s2c_move_pos_msg
         * @instance
         */
        s2c_move_pos_msg.prototype.code = 0;

        /**
         * Creates a new s2c_move_pos_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {wl.Is2c_move_pos_msg=} [properties] Properties to set
         * @returns {wl.s2c_move_pos_msg} s2c_move_pos_msg instance
         */
        s2c_move_pos_msg.create = function create(properties) {
            return new s2c_move_pos_msg(properties);
        };

        /**
         * Encodes the specified s2c_move_pos_msg message. Does not implicitly {@link wl.s2c_move_pos_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {wl.Is2c_move_pos_msg} message s2c_move_pos_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_move_pos_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            return writer;
        };

        /**
         * Encodes the specified s2c_move_pos_msg message, length delimited. Does not implicitly {@link wl.s2c_move_pos_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {wl.Is2c_move_pos_msg} message s2c_move_pos_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_move_pos_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_move_pos_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_move_pos_msg} s2c_move_pos_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_move_pos_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_move_pos_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_move_pos_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_move_pos_msg} s2c_move_pos_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_move_pos_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_move_pos_msg message.
         * @function verify
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_move_pos_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a s2c_move_pos_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_move_pos_msg} s2c_move_pos_msg
         */
        s2c_move_pos_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_move_pos_msg)
                return object;
            var message = new $root.wl.s2c_move_pos_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_move_pos_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_move_pos_msg
         * @static
         * @param {wl.s2c_move_pos_msg} message s2c_move_pos_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_move_pos_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this s2c_move_pos_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_move_pos_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_move_pos_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_move_pos_msg;
    })();

    wl.c2s_goto_new_map_msg = (function() {

        /**
         * Properties of a c2s_goto_new_map_msg.
         * @memberof wl
         * @interface Ic2s_goto_new_map_msg
         * @property {number|null} [mapId] c2s_goto_new_map_msg mapId
         */

        /**
         * Constructs a new c2s_goto_new_map_msg.
         * @memberof wl
         * @classdesc Represents a c2s_goto_new_map_msg.
         * @implements Ic2s_goto_new_map_msg
         * @constructor
         * @param {wl.Ic2s_goto_new_map_msg=} [properties] Properties to set
         */
        function c2s_goto_new_map_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_goto_new_map_msg mapId.
         * @member {number} mapId
         * @memberof wl.c2s_goto_new_map_msg
         * @instance
         */
        c2s_goto_new_map_msg.prototype.mapId = 0;

        /**
         * Creates a new c2s_goto_new_map_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {wl.Ic2s_goto_new_map_msg=} [properties] Properties to set
         * @returns {wl.c2s_goto_new_map_msg} c2s_goto_new_map_msg instance
         */
        c2s_goto_new_map_msg.create = function create(properties) {
            return new c2s_goto_new_map_msg(properties);
        };

        /**
         * Encodes the specified c2s_goto_new_map_msg message. Does not implicitly {@link wl.c2s_goto_new_map_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {wl.Ic2s_goto_new_map_msg} message c2s_goto_new_map_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_goto_new_map_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mapId);
            return writer;
        };

        /**
         * Encodes the specified c2s_goto_new_map_msg message, length delimited. Does not implicitly {@link wl.c2s_goto_new_map_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {wl.Ic2s_goto_new_map_msg} message c2s_goto_new_map_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_goto_new_map_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_goto_new_map_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_goto_new_map_msg} c2s_goto_new_map_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_goto_new_map_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_goto_new_map_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mapId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_goto_new_map_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_goto_new_map_msg} c2s_goto_new_map_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_goto_new_map_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_goto_new_map_msg message.
         * @function verify
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_goto_new_map_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                if (!$util.isInteger(message.mapId))
                    return "mapId: integer expected";
            return null;
        };

        /**
         * Creates a c2s_goto_new_map_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_goto_new_map_msg} c2s_goto_new_map_msg
         */
        c2s_goto_new_map_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_goto_new_map_msg)
                return object;
            var message = new $root.wl.c2s_goto_new_map_msg();
            if (object.mapId != null)
                message.mapId = object.mapId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_goto_new_map_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_goto_new_map_msg
         * @static
         * @param {wl.c2s_goto_new_map_msg} message c2s_goto_new_map_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_goto_new_map_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mapId = 0;
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                object.mapId = message.mapId;
            return object;
        };

        /**
         * Converts this c2s_goto_new_map_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_goto_new_map_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_goto_new_map_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_goto_new_map_msg;
    })();

    wl.s2c_goto_new_map_msg = (function() {

        /**
         * Properties of a s2c_goto_new_map_msg.
         * @memberof wl
         * @interface Is2c_goto_new_map_msg
         * @property {number|null} [code] s2c_goto_new_map_msg code
         */

        /**
         * Constructs a new s2c_goto_new_map_msg.
         * @memberof wl
         * @classdesc Represents a s2c_goto_new_map_msg.
         * @implements Is2c_goto_new_map_msg
         * @constructor
         * @param {wl.Is2c_goto_new_map_msg=} [properties] Properties to set
         */
        function s2c_goto_new_map_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_goto_new_map_msg code.
         * @member {number} code
         * @memberof wl.s2c_goto_new_map_msg
         * @instance
         */
        s2c_goto_new_map_msg.prototype.code = 0;

        /**
         * Creates a new s2c_goto_new_map_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {wl.Is2c_goto_new_map_msg=} [properties] Properties to set
         * @returns {wl.s2c_goto_new_map_msg} s2c_goto_new_map_msg instance
         */
        s2c_goto_new_map_msg.create = function create(properties) {
            return new s2c_goto_new_map_msg(properties);
        };

        /**
         * Encodes the specified s2c_goto_new_map_msg message. Does not implicitly {@link wl.s2c_goto_new_map_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {wl.Is2c_goto_new_map_msg} message s2c_goto_new_map_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_goto_new_map_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            return writer;
        };

        /**
         * Encodes the specified s2c_goto_new_map_msg message, length delimited. Does not implicitly {@link wl.s2c_goto_new_map_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {wl.Is2c_goto_new_map_msg} message s2c_goto_new_map_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_goto_new_map_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_goto_new_map_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_goto_new_map_msg} s2c_goto_new_map_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_goto_new_map_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_goto_new_map_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_goto_new_map_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_goto_new_map_msg} s2c_goto_new_map_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_goto_new_map_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_goto_new_map_msg message.
         * @function verify
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_goto_new_map_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a s2c_goto_new_map_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_goto_new_map_msg} s2c_goto_new_map_msg
         */
        s2c_goto_new_map_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_goto_new_map_msg)
                return object;
            var message = new $root.wl.s2c_goto_new_map_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_goto_new_map_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_goto_new_map_msg
         * @static
         * @param {wl.s2c_goto_new_map_msg} message s2c_goto_new_map_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_goto_new_map_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this s2c_goto_new_map_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_goto_new_map_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_goto_new_map_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_goto_new_map_msg;
    })();

    wl.c2s_sell_goods_msg = (function() {

        /**
         * Properties of a c2s_sell_goods_msg.
         * @memberof wl
         * @interface Ic2s_sell_goods_msg
         * @property {number|null} [gold] c2s_sell_goods_msg gold
         * @property {Array.<wl.IGood>|null} [goodList] c2s_sell_goods_msg goodList
         */

        /**
         * Constructs a new c2s_sell_goods_msg.
         * @memberof wl
         * @classdesc Represents a c2s_sell_goods_msg.
         * @implements Ic2s_sell_goods_msg
         * @constructor
         * @param {wl.Ic2s_sell_goods_msg=} [properties] Properties to set
         */
        function c2s_sell_goods_msg(properties) {
            this.goodList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_sell_goods_msg gold.
         * @member {number} gold
         * @memberof wl.c2s_sell_goods_msg
         * @instance
         */
        c2s_sell_goods_msg.prototype.gold = 0;

        /**
         * c2s_sell_goods_msg goodList.
         * @member {Array.<wl.IGood>} goodList
         * @memberof wl.c2s_sell_goods_msg
         * @instance
         */
        c2s_sell_goods_msg.prototype.goodList = $util.emptyArray;

        /**
         * Creates a new c2s_sell_goods_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {wl.Ic2s_sell_goods_msg=} [properties] Properties to set
         * @returns {wl.c2s_sell_goods_msg} c2s_sell_goods_msg instance
         */
        c2s_sell_goods_msg.create = function create(properties) {
            return new c2s_sell_goods_msg(properties);
        };

        /**
         * Encodes the specified c2s_sell_goods_msg message. Does not implicitly {@link wl.c2s_sell_goods_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {wl.Ic2s_sell_goods_msg} message c2s_sell_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_sell_goods_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.gold);
            if (message.goodList != null && message.goodList.length)
                for (var i = 0; i < message.goodList.length; ++i)
                    $root.wl.Good.encode(message.goodList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified c2s_sell_goods_msg message, length delimited. Does not implicitly {@link wl.c2s_sell_goods_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {wl.Ic2s_sell_goods_msg} message c2s_sell_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_sell_goods_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_sell_goods_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_sell_goods_msg} c2s_sell_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_sell_goods_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_sell_goods_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gold = reader.uint32();
                    break;
                case 2:
                    if (!(message.goodList && message.goodList.length))
                        message.goodList = [];
                    message.goodList.push($root.wl.Good.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_sell_goods_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_sell_goods_msg} c2s_sell_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_sell_goods_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_sell_goods_msg message.
         * @function verify
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_sell_goods_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.goodList != null && message.hasOwnProperty("goodList")) {
                if (!Array.isArray(message.goodList))
                    return "goodList: array expected";
                for (var i = 0; i < message.goodList.length; ++i) {
                    var error = $root.wl.Good.verify(message.goodList[i]);
                    if (error)
                        return "goodList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a c2s_sell_goods_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_sell_goods_msg} c2s_sell_goods_msg
         */
        c2s_sell_goods_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_sell_goods_msg)
                return object;
            var message = new $root.wl.c2s_sell_goods_msg();
            if (object.gold != null)
                message.gold = object.gold >>> 0;
            if (object.goodList) {
                if (!Array.isArray(object.goodList))
                    throw TypeError(".wl.c2s_sell_goods_msg.goodList: array expected");
                message.goodList = [];
                for (var i = 0; i < object.goodList.length; ++i) {
                    if (typeof object.goodList[i] !== "object")
                        throw TypeError(".wl.c2s_sell_goods_msg.goodList: object expected");
                    message.goodList[i] = $root.wl.Good.fromObject(object.goodList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a c2s_sell_goods_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_sell_goods_msg
         * @static
         * @param {wl.c2s_sell_goods_msg} message c2s_sell_goods_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_sell_goods_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.goodList = [];
            if (options.defaults)
                object.gold = 0;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.goodList && message.goodList.length) {
                object.goodList = [];
                for (var j = 0; j < message.goodList.length; ++j)
                    object.goodList[j] = $root.wl.Good.toObject(message.goodList[j], options);
            }
            return object;
        };

        /**
         * Converts this c2s_sell_goods_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_sell_goods_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_sell_goods_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_sell_goods_msg;
    })();

    wl.s2c_sell_goods_msg = (function() {

        /**
         * Properties of a s2c_sell_goods_msg.
         * @memberof wl
         * @interface Is2c_sell_goods_msg
         * @property {number|null} [code] s2c_sell_goods_msg code
         * @property {number|null} [gold] s2c_sell_goods_msg gold
         * @property {Array.<wl.IGood>|null} [goodListRemove] s2c_sell_goods_msg goodListRemove
         */

        /**
         * Constructs a new s2c_sell_goods_msg.
         * @memberof wl
         * @classdesc Represents a s2c_sell_goods_msg.
         * @implements Is2c_sell_goods_msg
         * @constructor
         * @param {wl.Is2c_sell_goods_msg=} [properties] Properties to set
         */
        function s2c_sell_goods_msg(properties) {
            this.goodListRemove = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_sell_goods_msg code.
         * @member {number} code
         * @memberof wl.s2c_sell_goods_msg
         * @instance
         */
        s2c_sell_goods_msg.prototype.code = 0;

        /**
         * s2c_sell_goods_msg gold.
         * @member {number} gold
         * @memberof wl.s2c_sell_goods_msg
         * @instance
         */
        s2c_sell_goods_msg.prototype.gold = 0;

        /**
         * s2c_sell_goods_msg goodListRemove.
         * @member {Array.<wl.IGood>} goodListRemove
         * @memberof wl.s2c_sell_goods_msg
         * @instance
         */
        s2c_sell_goods_msg.prototype.goodListRemove = $util.emptyArray;

        /**
         * Creates a new s2c_sell_goods_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {wl.Is2c_sell_goods_msg=} [properties] Properties to set
         * @returns {wl.s2c_sell_goods_msg} s2c_sell_goods_msg instance
         */
        s2c_sell_goods_msg.create = function create(properties) {
            return new s2c_sell_goods_msg(properties);
        };

        /**
         * Encodes the specified s2c_sell_goods_msg message. Does not implicitly {@link wl.s2c_sell_goods_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {wl.Is2c_sell_goods_msg} message s2c_sell_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_sell_goods_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.gold);
            if (message.goodListRemove != null && message.goodListRemove.length)
                for (var i = 0; i < message.goodListRemove.length; ++i)
                    $root.wl.Good.encode(message.goodListRemove[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_sell_goods_msg message, length delimited. Does not implicitly {@link wl.s2c_sell_goods_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {wl.Is2c_sell_goods_msg} message s2c_sell_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_sell_goods_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_sell_goods_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_sell_goods_msg} s2c_sell_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_sell_goods_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_sell_goods_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.gold = reader.uint32();
                    break;
                case 3:
                    if (!(message.goodListRemove && message.goodListRemove.length))
                        message.goodListRemove = [];
                    message.goodListRemove.push($root.wl.Good.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_sell_goods_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_sell_goods_msg} s2c_sell_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_sell_goods_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_sell_goods_msg message.
         * @function verify
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_sell_goods_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.goodListRemove != null && message.hasOwnProperty("goodListRemove")) {
                if (!Array.isArray(message.goodListRemove))
                    return "goodListRemove: array expected";
                for (var i = 0; i < message.goodListRemove.length; ++i) {
                    var error = $root.wl.Good.verify(message.goodListRemove[i]);
                    if (error)
                        return "goodListRemove." + error;
                }
            }
            return null;
        };

        /**
         * Creates a s2c_sell_goods_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_sell_goods_msg} s2c_sell_goods_msg
         */
        s2c_sell_goods_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_sell_goods_msg)
                return object;
            var message = new $root.wl.s2c_sell_goods_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.gold != null)
                message.gold = object.gold >>> 0;
            if (object.goodListRemove) {
                if (!Array.isArray(object.goodListRemove))
                    throw TypeError(".wl.s2c_sell_goods_msg.goodListRemove: array expected");
                message.goodListRemove = [];
                for (var i = 0; i < object.goodListRemove.length; ++i) {
                    if (typeof object.goodListRemove[i] !== "object")
                        throw TypeError(".wl.s2c_sell_goods_msg.goodListRemove: object expected");
                    message.goodListRemove[i] = $root.wl.Good.fromObject(object.goodListRemove[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_sell_goods_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_sell_goods_msg
         * @static
         * @param {wl.s2c_sell_goods_msg} message s2c_sell_goods_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_sell_goods_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.goodListRemove = [];
            if (options.defaults) {
                object.code = 0;
                object.gold = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.goodListRemove && message.goodListRemove.length) {
                object.goodListRemove = [];
                for (var j = 0; j < message.goodListRemove.length; ++j)
                    object.goodListRemove[j] = $root.wl.Good.toObject(message.goodListRemove[j], options);
            }
            return object;
        };

        /**
         * Converts this s2c_sell_goods_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_sell_goods_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_sell_goods_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_sell_goods_msg;
    })();

    wl.c2s_buy_goods_msg = (function() {

        /**
         * Properties of a c2s_buy_goods_msg.
         * @memberof wl
         * @interface Ic2s_buy_goods_msg
         * @property {number|null} [gold] c2s_buy_goods_msg gold
         * @property {number|null} [goodId] c2s_buy_goods_msg goodId
         */

        /**
         * Constructs a new c2s_buy_goods_msg.
         * @memberof wl
         * @classdesc Represents a c2s_buy_goods_msg.
         * @implements Ic2s_buy_goods_msg
         * @constructor
         * @param {wl.Ic2s_buy_goods_msg=} [properties] Properties to set
         */
        function c2s_buy_goods_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_buy_goods_msg gold.
         * @member {number} gold
         * @memberof wl.c2s_buy_goods_msg
         * @instance
         */
        c2s_buy_goods_msg.prototype.gold = 0;

        /**
         * c2s_buy_goods_msg goodId.
         * @member {number} goodId
         * @memberof wl.c2s_buy_goods_msg
         * @instance
         */
        c2s_buy_goods_msg.prototype.goodId = 0;

        /**
         * Creates a new c2s_buy_goods_msg instance using the specified properties.
         * @function create
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {wl.Ic2s_buy_goods_msg=} [properties] Properties to set
         * @returns {wl.c2s_buy_goods_msg} c2s_buy_goods_msg instance
         */
        c2s_buy_goods_msg.create = function create(properties) {
            return new c2s_buy_goods_msg(properties);
        };

        /**
         * Encodes the specified c2s_buy_goods_msg message. Does not implicitly {@link wl.c2s_buy_goods_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {wl.Ic2s_buy_goods_msg} message c2s_buy_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_buy_goods_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.gold);
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goodId);
            return writer;
        };

        /**
         * Encodes the specified c2s_buy_goods_msg message, length delimited. Does not implicitly {@link wl.c2s_buy_goods_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {wl.Ic2s_buy_goods_msg} message c2s_buy_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_buy_goods_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_buy_goods_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.c2s_buy_goods_msg} c2s_buy_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_buy_goods_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.c2s_buy_goods_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gold = reader.uint32();
                    break;
                case 2:
                    message.goodId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_buy_goods_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.c2s_buy_goods_msg} c2s_buy_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_buy_goods_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_buy_goods_msg message.
         * @function verify
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_buy_goods_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                if (!$util.isInteger(message.goodId))
                    return "goodId: integer expected";
            return null;
        };

        /**
         * Creates a c2s_buy_goods_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.c2s_buy_goods_msg} c2s_buy_goods_msg
         */
        c2s_buy_goods_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.c2s_buy_goods_msg)
                return object;
            var message = new $root.wl.c2s_buy_goods_msg();
            if (object.gold != null)
                message.gold = object.gold >>> 0;
            if (object.goodId != null)
                message.goodId = object.goodId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_buy_goods_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.c2s_buy_goods_msg
         * @static
         * @param {wl.c2s_buy_goods_msg} message c2s_buy_goods_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_buy_goods_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gold = 0;
                object.goodId = 0;
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.goodId != null && message.hasOwnProperty("goodId"))
                object.goodId = message.goodId;
            return object;
        };

        /**
         * Converts this c2s_buy_goods_msg to JSON.
         * @function toJSON
         * @memberof wl.c2s_buy_goods_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_buy_goods_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_buy_goods_msg;
    })();

    wl.s2c_buy_goods_msg = (function() {

        /**
         * Properties of a s2c_buy_goods_msg.
         * @memberof wl
         * @interface Is2c_buy_goods_msg
         * @property {number|null} [code] s2c_buy_goods_msg code
         * @property {number|null} [gold] s2c_buy_goods_msg gold
         * @property {Array.<wl.IGood>|null} [goodListAdd] s2c_buy_goods_msg goodListAdd
         */

        /**
         * Constructs a new s2c_buy_goods_msg.
         * @memberof wl
         * @classdesc Represents a s2c_buy_goods_msg.
         * @implements Is2c_buy_goods_msg
         * @constructor
         * @param {wl.Is2c_buy_goods_msg=} [properties] Properties to set
         */
        function s2c_buy_goods_msg(properties) {
            this.goodListAdd = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_buy_goods_msg code.
         * @member {number} code
         * @memberof wl.s2c_buy_goods_msg
         * @instance
         */
        s2c_buy_goods_msg.prototype.code = 0;

        /**
         * s2c_buy_goods_msg gold.
         * @member {number} gold
         * @memberof wl.s2c_buy_goods_msg
         * @instance
         */
        s2c_buy_goods_msg.prototype.gold = 0;

        /**
         * s2c_buy_goods_msg goodListAdd.
         * @member {Array.<wl.IGood>} goodListAdd
         * @memberof wl.s2c_buy_goods_msg
         * @instance
         */
        s2c_buy_goods_msg.prototype.goodListAdd = $util.emptyArray;

        /**
         * Creates a new s2c_buy_goods_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {wl.Is2c_buy_goods_msg=} [properties] Properties to set
         * @returns {wl.s2c_buy_goods_msg} s2c_buy_goods_msg instance
         */
        s2c_buy_goods_msg.create = function create(properties) {
            return new s2c_buy_goods_msg(properties);
        };

        /**
         * Encodes the specified s2c_buy_goods_msg message. Does not implicitly {@link wl.s2c_buy_goods_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {wl.Is2c_buy_goods_msg} message s2c_buy_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_buy_goods_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.gold);
            if (message.goodListAdd != null && message.goodListAdd.length)
                for (var i = 0; i < message.goodListAdd.length; ++i)
                    $root.wl.Good.encode(message.goodListAdd[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_buy_goods_msg message, length delimited. Does not implicitly {@link wl.s2c_buy_goods_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {wl.Is2c_buy_goods_msg} message s2c_buy_goods_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_buy_goods_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_buy_goods_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_buy_goods_msg} s2c_buy_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_buy_goods_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_buy_goods_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.gold = reader.uint32();
                    break;
                case 3:
                    if (!(message.goodListAdd && message.goodListAdd.length))
                        message.goodListAdd = [];
                    message.goodListAdd.push($root.wl.Good.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_buy_goods_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_buy_goods_msg} s2c_buy_goods_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_buy_goods_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_buy_goods_msg message.
         * @function verify
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_buy_goods_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.goodListAdd != null && message.hasOwnProperty("goodListAdd")) {
                if (!Array.isArray(message.goodListAdd))
                    return "goodListAdd: array expected";
                for (var i = 0; i < message.goodListAdd.length; ++i) {
                    var error = $root.wl.Good.verify(message.goodListAdd[i]);
                    if (error)
                        return "goodListAdd." + error;
                }
            }
            return null;
        };

        /**
         * Creates a s2c_buy_goods_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_buy_goods_msg} s2c_buy_goods_msg
         */
        s2c_buy_goods_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_buy_goods_msg)
                return object;
            var message = new $root.wl.s2c_buy_goods_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.gold != null)
                message.gold = object.gold >>> 0;
            if (object.goodListAdd) {
                if (!Array.isArray(object.goodListAdd))
                    throw TypeError(".wl.s2c_buy_goods_msg.goodListAdd: array expected");
                message.goodListAdd = [];
                for (var i = 0; i < object.goodListAdd.length; ++i) {
                    if (typeof object.goodListAdd[i] !== "object")
                        throw TypeError(".wl.s2c_buy_goods_msg.goodListAdd: object expected");
                    message.goodListAdd[i] = $root.wl.Good.fromObject(object.goodListAdd[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_buy_goods_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_buy_goods_msg
         * @static
         * @param {wl.s2c_buy_goods_msg} message s2c_buy_goods_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_buy_goods_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.goodListAdd = [];
            if (options.defaults) {
                object.code = 0;
                object.gold = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.goodListAdd && message.goodListAdd.length) {
                object.goodListAdd = [];
                for (var j = 0; j < message.goodListAdd.length; ++j)
                    object.goodListAdd[j] = $root.wl.Good.toObject(message.goodListAdd[j], options);
            }
            return object;
        };

        /**
         * Converts this s2c_buy_goods_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_buy_goods_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_buy_goods_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_buy_goods_msg;
    })();

    wl.s2c_broadcast_msg = (function() {

        /**
         * Properties of a s2c_broadcast_msg.
         * @memberof wl
         * @interface Is2c_broadcast_msg
         * @property {number|null} [code] s2c_broadcast_msg code
         * @property {string|null} [content] s2c_broadcast_msg content
         */

        /**
         * Constructs a new s2c_broadcast_msg.
         * @memberof wl
         * @classdesc Represents a s2c_broadcast_msg.
         * @implements Is2c_broadcast_msg
         * @constructor
         * @param {wl.Is2c_broadcast_msg=} [properties] Properties to set
         */
        function s2c_broadcast_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_broadcast_msg code.
         * @member {number} code
         * @memberof wl.s2c_broadcast_msg
         * @instance
         */
        s2c_broadcast_msg.prototype.code = 0;

        /**
         * s2c_broadcast_msg content.
         * @member {string} content
         * @memberof wl.s2c_broadcast_msg
         * @instance
         */
        s2c_broadcast_msg.prototype.content = "";

        /**
         * Creates a new s2c_broadcast_msg instance using the specified properties.
         * @function create
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {wl.Is2c_broadcast_msg=} [properties] Properties to set
         * @returns {wl.s2c_broadcast_msg} s2c_broadcast_msg instance
         */
        s2c_broadcast_msg.create = function create(properties) {
            return new s2c_broadcast_msg(properties);
        };

        /**
         * Encodes the specified s2c_broadcast_msg message. Does not implicitly {@link wl.s2c_broadcast_msg.verify|verify} messages.
         * @function encode
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {wl.Is2c_broadcast_msg} message s2c_broadcast_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_broadcast_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified s2c_broadcast_msg message, length delimited. Does not implicitly {@link wl.s2c_broadcast_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {wl.Is2c_broadcast_msg} message s2c_broadcast_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_broadcast_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_broadcast_msg message from the specified reader or buffer.
         * @function decode
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wl.s2c_broadcast_msg} s2c_broadcast_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_broadcast_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wl.s2c_broadcast_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_broadcast_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wl.s2c_broadcast_msg} s2c_broadcast_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_broadcast_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_broadcast_msg message.
         * @function verify
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_broadcast_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a s2c_broadcast_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wl.s2c_broadcast_msg} s2c_broadcast_msg
         */
        s2c_broadcast_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.wl.s2c_broadcast_msg)
                return object;
            var message = new $root.wl.s2c_broadcast_msg();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a s2c_broadcast_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wl.s2c_broadcast_msg
         * @static
         * @param {wl.s2c_broadcast_msg} message s2c_broadcast_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_broadcast_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.content = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this s2c_broadcast_msg to JSON.
         * @function toJSON
         * @memberof wl.s2c_broadcast_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_broadcast_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_broadcast_msg;
    })();

    return wl;
})();

module.exports = $root;
