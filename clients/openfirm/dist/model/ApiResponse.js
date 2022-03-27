"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ApiResponse model module.
 * @module model/ApiResponse
 * @version 0.0.1
 */
var ApiResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiResponse</code>.
   * @alias module:model/ApiResponse
   */
  function ApiResponse() {
    _classCallCheck(this, ApiResponse);

    ApiResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApiResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponse} obj Optional instance to populate.
     * @return {module:model/ApiResponse} The populated <code>ApiResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiResponse();

        if (data.hasOwnProperty('merchant')) {
          obj['merchant'] = _ApiClient["default"].convertToType(data['merchant'], 'String');
        }

        if (data.hasOwnProperty('cache')) {
          obj['cache'] = _ApiClient["default"].convertToType(data['cache'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApiResponse;
}();
/**
 * @member {String} merchant
 */


ApiResponse.prototype['merchant'] = undefined;
/**
 * @member {Boolean} cache
 */

ApiResponse.prototype['cache'] = undefined;
/**
 * @member {String} id
 */

ApiResponse.prototype['id'] = undefined;
var _default = ApiResponse;
exports["default"] = _default;