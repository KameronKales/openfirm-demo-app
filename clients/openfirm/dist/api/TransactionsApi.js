"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiResponse = _interopRequireDefault(require("../model/ApiResponse"));

var _MerchantQueue = _interopRequireDefault(require("../model/MerchantQueue"));

var _QueueTransaction = _interopRequireDefault(require("../model/QueueTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Transactions service.
* @module api/TransactionsApi
* @version 0.0.1
*/
var TransactionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TransactionsApi. 
  * @alias module:api/TransactionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransactionsApi(apiClient) {
    _classCallCheck(this, TransactionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the classifyMerchantByTransaction operation.
   * @callback module:api/TransactionsApi~classifyMerchantByTransactionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ApiResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Classify Transaction by Merchant
   * Returns a single merchant
   * @param {String} merchant Merchant name to match
   * @param {module:api/TransactionsApi~classifyMerchantByTransactionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ApiResponse}
   */


  _createClass(TransactionsApi, [{
    key: "classifyMerchantByTransaction",
    value: function classifyMerchantByTransaction(merchant, callback) {
      var postBody = null; // verify the required parameter 'merchant' is set

      if (merchant === undefined || merchant === null) {
        throw new Error("Missing the required parameter 'merchant' when calling classifyMerchantByTransaction");
      }

      var pathParams = {};
      var queryParams = {
        'merchant': merchant
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApiResponse["default"];
      return this.apiClient.callApi('/v1/transactions/classify', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the queueTransaction operation.
     * @callback module:api/TransactionsApi~queueTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QueueTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Classify Transaction by Merchant
     * Returns a single merchant
     * @param {module:model/MerchantQueue} merchantQueue The merchant to identify
     * @param {module:api/TransactionsApi~queueTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QueueTransaction}
     */

  }, {
    key: "queueTransaction",
    value: function queueTransaction(merchantQueue, callback) {
      var postBody = merchantQueue; // verify the required parameter 'merchantQueue' is set

      if (merchantQueue === undefined || merchantQueue === null) {
        throw new Error("Missing the required parameter 'merchantQueue' when calling queueTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _QueueTransaction["default"];
      return this.apiClient.callApi('/v1/transactions/classify/queue', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TransactionsApi;
}();

exports["default"] = TransactionsApi;