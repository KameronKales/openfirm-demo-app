"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pong = _interopRequireDefault(require("../model/Pong"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Status service.
* @module api/StatusApi
* @version 0.0.1
*/
var StatusApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StatusApi. 
  * @alias module:api/StatusApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StatusApi(apiClient) {
    _classCallCheck(this, StatusApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the ping operation.
   * @callback module:api/StatusApi~pingCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Pong} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Service Status
   * Checks the service is available
   * @param {module:api/StatusApi~pingCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Pong}
   */


  _createClass(StatusApi, [{
    key: "ping",
    value: function ping(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Pong["default"];
      return this.apiClient.callApi('/ping', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return StatusApi;
}();

exports["default"] = StatusApi;