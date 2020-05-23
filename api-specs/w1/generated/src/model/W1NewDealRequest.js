/**
 * W1 P2P API
 * Wallet One p2p API implementaion Is developed as a part of gitpay.ru project by Microbo team 
 *
 * The version of the OpenAPI document: 0.0.3
 * Contact: alexandrdavydenko@yandex.ru
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The W1NewDealRequest model module.
 * @module model/W1NewDealRequest
 * @version 0.0.3
 */
class W1NewDealRequest {
    /**
     * Constructs a new <code>W1NewDealRequest</code>.
     * @alias module:model/W1NewDealRequest
     */
    constructor() { 
        
        W1NewDealRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>W1NewDealRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/W1NewDealRequest} obj Optional instance to populate.
     * @return {module:model/W1NewDealRequest} The populated <code>W1NewDealRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new W1NewDealRequest();

            if (data.hasOwnProperty('PlatformDealId')) {
                obj['PlatformDealId'] = ApiClient.convertToType(data['PlatformDealId'], 'String');
            }
            if (data.hasOwnProperty('PlatformPayerId')) {
                obj['PlatformPayerId'] = ApiClient.convertToType(data['PlatformPayerId'], 'String');
            }
            if (data.hasOwnProperty('PayerPhoneNumber')) {
                obj['PayerPhoneNumber'] = ApiClient.convertToType(data['PayerPhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('PayerPaymentToolId')) {
                obj['PayerPaymentToolId'] = ApiClient.convertToType(data['PayerPaymentToolId'], 'Number');
            }
            if (data.hasOwnProperty('PlatformBeneficiaryId')) {
                obj['PlatformBeneficiaryId'] = ApiClient.convertToType(data['PlatformBeneficiaryId'], 'String');
            }
            if (data.hasOwnProperty('BeneficiaryPaymentToolId')) {
                obj['BeneficiaryPaymentToolId'] = ApiClient.convertToType(data['BeneficiaryPaymentToolId'], 'Number');
            }
            if (data.hasOwnProperty('Amount')) {
                obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
            }
            if (data.hasOwnProperty('CurrencyId')) {
                obj['CurrencyId'] = ApiClient.convertToType(data['CurrencyId'], 'Number');
            }
            if (data.hasOwnProperty('ShortDescription')) {
                obj['ShortDescription'] = ApiClient.convertToType(data['ShortDescription'], 'String');
            }
            if (data.hasOwnProperty('FullDescription')) {
                obj['FullDescription'] = ApiClient.convertToType(data['FullDescription'], 'String');
            }
            if (data.hasOwnProperty('DeferPayout')) {
                obj['DeferPayout'] = ApiClient.convertToType(data['DeferPayout'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} PlatformDealId
 */
W1NewDealRequest.prototype['PlatformDealId'] = undefined;

/**
 * @member {String} PlatformPayerId
 */
W1NewDealRequest.prototype['PlatformPayerId'] = undefined;

/**
 * @member {String} PayerPhoneNumber
 */
W1NewDealRequest.prototype['PayerPhoneNumber'] = undefined;

/**
 * =1, опциональный параметр
 * @member {Number} PayerPaymentToolId
 */
W1NewDealRequest.prototype['PayerPaymentToolId'] = undefined;

/**
 * @member {String} PlatformBeneficiaryId
 */
W1NewDealRequest.prototype['PlatformBeneficiaryId'] = undefined;

/**
 * =1, опциональный параметр
 * @member {Number} BeneficiaryPaymentToolId
 */
W1NewDealRequest.prototype['BeneficiaryPaymentToolId'] = undefined;

/**
 * @member {Number} Amount
 */
W1NewDealRequest.prototype['Amount'] = undefined;

/**
 * =643
 * @member {Number} CurrencyId
 */
W1NewDealRequest.prototype['CurrencyId'] = undefined;

/**
 * @member {String} ShortDescription
 */
W1NewDealRequest.prototype['ShortDescription'] = undefined;

/**
 * @member {String} FullDescription
 */
W1NewDealRequest.prototype['FullDescription'] = undefined;

/**
 * При значении false создается online (Instant) сделка
 * @member {Boolean} DeferPayout
 */
W1NewDealRequest.prototype['DeferPayout'] = undefined;






export default W1NewDealRequest;
