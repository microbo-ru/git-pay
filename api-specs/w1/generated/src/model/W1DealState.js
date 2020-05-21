/**
 * W1 P2P API
 * Wallet One p2p API implementaion Is developed as a part of gitpay.ru project by Microbo team 
 *
 * The version of the OpenAPI document: 0.0.2
 * Contact: alexandrdavydenko@yandex.ru
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class W1DealState.
* @enum {}
* @readonly
*/
export default class W1DealState {
    
        /**
         * value: "Created"
         * @const
         */
        "Created" = "Created";

    
        /**
         * value: "Paid"
         * @const
         */
        "Paid" = "Paid";

    
        /**
         * value: "PayoutProcessError"
         * @const
         */
        "PayoutProcessError" = "PayoutProcessError";

    
        /**
         * value: "CancelError"
         * @const
         */
        "CancelError" = "CancelError";

    
        /**
         * value: "PayoutProcessing"
         * @const
         */
        "PayoutProcessing" = "PayoutProcessing";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    
        /**
         * value: "PaymentHold"
         * @const
         */
        "PaymentHold" = "PaymentHold";

    
        /**
         * value: "Canceling"
         * @const
         */
        "Canceling" = "Canceling";

    
        /**
         * value: "Canceled"
         * @const
         */
        "Canceled" = "Canceled";

    

    /**
    * Returns a <code>W1DealState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/W1DealState} The enum <code>W1DealState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

