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

import ApiClient from '../ApiClient';

/**
 * The Pong model module.
 * @module model/Pong
 * @version 0.0.1
 */
class Pong {
    /**
     * Constructs a new <code>Pong</code>.
     * @alias module:model/Pong
     */
    constructor() { 
        
        Pong.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pong</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pong} obj Optional instance to populate.
     * @return {module:model/Pong} The populated <code>Pong</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pong();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
Pong.prototype['message'] = undefined;






export default Pong;
