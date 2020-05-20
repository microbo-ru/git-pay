"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The W1NewDealRequest model module.
 * @module model/W1NewDealRequest
 * @version 0.0.1
 */
var W1NewDealRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>W1NewDealRequest</code>.
   * @alias module:model/W1NewDealRequest
   */
  function W1NewDealRequest() {
    _classCallCheck(this, W1NewDealRequest);

    W1NewDealRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(W1NewDealRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>W1NewDealRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/W1NewDealRequest} obj Optional instance to populate.
     * @return {module:model/W1NewDealRequest} The populated <code>W1NewDealRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new W1NewDealRequest();

        if (data.hasOwnProperty('PlatformDealId')) {
          obj['PlatformDealId'] = _ApiClient.default.convertToType(data['PlatformDealId'], 'String');
        }

        if (data.hasOwnProperty('PlatformPayerId')) {
          obj['PlatformPayerId'] = _ApiClient.default.convertToType(data['PlatformPayerId'], 'String');
        }

        if (data.hasOwnProperty('PayerPhoneNumber')) {
          obj['PayerPhoneNumber'] = _ApiClient.default.convertToType(data['PayerPhoneNumber'], 'String');
        }

        if (data.hasOwnProperty('PayerPaymentToolId')) {
          obj['PayerPaymentToolId'] = _ApiClient.default.convertToType(data['PayerPaymentToolId'], 'Number');
        }

        if (data.hasOwnProperty('PlatformBeneficiaryId')) {
          obj['PlatformBeneficiaryId'] = _ApiClient.default.convertToType(data['PlatformBeneficiaryId'], 'String');
        }

        if (data.hasOwnProperty('BeneficiaryPaymentToolId')) {
          obj['BeneficiaryPaymentToolId'] = _ApiClient.default.convertToType(data['BeneficiaryPaymentToolId'], 'Number');
        }

        if (data.hasOwnProperty('Amount')) {
          obj['Amount'] = _ApiClient.default.convertToType(data['Amount'], 'Number');
        }

        if (data.hasOwnProperty('CurrencyId')) {
          obj['CurrencyId'] = _ApiClient.default.convertToType(data['CurrencyId'], 'Number');
        }

        if (data.hasOwnProperty('ShortDescription')) {
          obj['ShortDescription'] = _ApiClient.default.convertToType(data['ShortDescription'], 'String');
        }

        if (data.hasOwnProperty('FullDescription')) {
          obj['FullDescription'] = _ApiClient.default.convertToType(data['FullDescription'], 'String');
        }

        if (data.hasOwnProperty('DeferPayout')) {
          obj['DeferPayout'] = _ApiClient.default.convertToType(data['DeferPayout'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return W1NewDealRequest;
}();
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
var _default = W1NewDealRequest;
exports.default = _default;