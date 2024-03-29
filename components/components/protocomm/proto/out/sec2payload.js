// source: my_proto.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Sec2Payload');
goog.provide('proto.Sec2Payload.PayloadCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.S2SessionCmd0');
goog.require('proto.S2SessionCmd1');
goog.require('proto.S2SessionResp0');
goog.require('proto.S2SessionResp1');

goog.forwardDeclare('proto.Sec2MsgType');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Sec2Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Sec2Payload.oneofGroups_);
};
goog.inherits(proto.Sec2Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Sec2Payload.displayName = 'proto.Sec2Payload';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Sec2Payload.oneofGroups_ = [[20,21,22,23]];

/**
 * @enum {number}
 */
proto.Sec2Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SC0: 20,
  SR0: 21,
  SC1: 22,
  SR1: 23
};

/**
 * @return {proto.Sec2Payload.PayloadCase}
 */
proto.Sec2Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.Sec2Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.Sec2Payload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Sec2Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.Sec2Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Sec2Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Sec2Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sc0: (f = msg.getSc0()) && proto.S2SessionCmd0.toObject(includeInstance, f),
    sr0: (f = msg.getSr0()) && proto.S2SessionResp0.toObject(includeInstance, f),
    sc1: (f = msg.getSc1()) && proto.S2SessionCmd1.toObject(includeInstance, f),
    sr1: (f = msg.getSr1()) && proto.S2SessionResp1.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Sec2Payload}
 */
proto.Sec2Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Sec2Payload;
  return proto.Sec2Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Sec2Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Sec2Payload}
 */
proto.Sec2Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Sec2MsgType} */ (reader.readEnum());
      msg.setMsg(value);
      break;
    case 20:
      var value = new proto.S2SessionCmd0;
      reader.readMessage(value,proto.S2SessionCmd0.deserializeBinaryFromReader);
      msg.setSc0(value);
      break;
    case 21:
      var value = new proto.S2SessionResp0;
      reader.readMessage(value,proto.S2SessionResp0.deserializeBinaryFromReader);
      msg.setSr0(value);
      break;
    case 22:
      var value = new proto.S2SessionCmd1;
      reader.readMessage(value,proto.S2SessionCmd1.deserializeBinaryFromReader);
      msg.setSc1(value);
      break;
    case 23:
      var value = new proto.S2SessionResp1;
      reader.readMessage(value,proto.S2SessionResp1.deserializeBinaryFromReader);
      msg.setSr1(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Sec2Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Sec2Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Sec2Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Sec2Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSc0();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.S2SessionCmd0.serializeBinaryToWriter
    );
  }
  f = message.getSr0();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.S2SessionResp0.serializeBinaryToWriter
    );
  }
  f = message.getSc1();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.S2SessionCmd1.serializeBinaryToWriter
    );
  }
  f = message.getSr1();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.S2SessionResp1.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sec2MsgType msg = 1;
 * @return {!proto.Sec2MsgType}
 */
proto.Sec2Payload.prototype.getMsg = function() {
  return /** @type {!proto.Sec2MsgType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Sec2MsgType} value
 * @return {!proto.Sec2Payload} returns this
 */
proto.Sec2Payload.prototype.setMsg = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional S2SessionCmd0 sc0 = 20;
 * @return {?proto.S2SessionCmd0}
 */
proto.Sec2Payload.prototype.getSc0 = function() {
  return /** @type{?proto.S2SessionCmd0} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionCmd0, 20));
};


/**
 * @param {?proto.S2SessionCmd0|undefined} value
 * @return {!proto.Sec2Payload} returns this
*/
proto.Sec2Payload.prototype.setSc0 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.Sec2Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Sec2Payload} returns this
 */
proto.Sec2Payload.prototype.clearSc0 = function() {
  return this.setSc0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Sec2Payload.prototype.hasSc0 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional S2SessionResp0 sr0 = 21;
 * @return {?proto.S2SessionResp0}
 */
proto.Sec2Payload.prototype.getSr0 = function() {
  return /** @type{?proto.S2SessionResp0} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionResp0, 21));
};


/**
 * @param {?proto.S2SessionResp0|undefined} value
 * @return {!proto.Sec2Payload} returns this
*/
proto.Sec2Payload.prototype.setSr0 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.Sec2Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Sec2Payload} returns this
 */
proto.Sec2Payload.prototype.clearSr0 = function() {
  return this.setSr0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Sec2Payload.prototype.hasSr0 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional S2SessionCmd1 sc1 = 22;
 * @return {?proto.S2SessionCmd1}
 */
proto.Sec2Payload.prototype.getSc1 = function() {
  return /** @type{?proto.S2SessionCmd1} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionCmd1, 22));
};


/**
 * @param {?proto.S2SessionCmd1|undefined} value
 * @return {!proto.Sec2Payload} returns this
*/
proto.Sec2Payload.prototype.setSc1 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.Sec2Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Sec2Payload} returns this
 */
proto.Sec2Payload.prototype.clearSc1 = function() {
  return this.setSc1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Sec2Payload.prototype.hasSc1 = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional S2SessionResp1 sr1 = 23;
 * @return {?proto.S2SessionResp1}
 */
proto.Sec2Payload.prototype.getSr1 = function() {
  return /** @type{?proto.S2SessionResp1} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionResp1, 23));
};


/**
 * @param {?proto.S2SessionResp1|undefined} value
 * @return {!proto.Sec2Payload} returns this
*/
proto.Sec2Payload.prototype.setSr1 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.Sec2Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Sec2Payload} returns this
 */
proto.Sec2Payload.prototype.clearSr1 = function() {
  return this.setSr1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Sec2Payload.prototype.hasSr1 = function() {
  return jspb.Message.getField(this, 23) != null;
};


