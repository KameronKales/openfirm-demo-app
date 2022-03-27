/**
 * Openfirm API
 * This is a sandbox server.  You can find out more about Openfirm [here](/docs).  For this sample, you can use the api key `test` to test the authorization filters.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: kameronkales@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Pong from '../model/Pong';

/**
* Status service.
* @module api/StatusApi
* @version 0.0.1
*/
export default class StatusApi {

    /**
    * Constructs a new StatusApi. 
    * @alias module:api/StatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    ping(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Pong;
      return this.apiClient.callApi(
        '/ping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
