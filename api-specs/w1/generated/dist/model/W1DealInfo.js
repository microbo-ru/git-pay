"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _W1DealState = _interopRequireDefault(require("./W1DealState"));

var _W1DealType = _interopRequireDefault(require("./W1DealType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The W1DealInfo model module.
 * @module model/W1DealInfo
 * @version 0.0.1
 */
var W1DealInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>W1DealInfo</code>.
   * @alias module:model/W1DealInfo
   */
  function W1DealInfo() {
    _classCallCheck(this, W1DealInfo);

    W1DealInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(W1DealInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>W1DealInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/W1DealInfo} obj Optional instance to populate.
     * @return {module:model/W1DealInfo} The populated <code>W1DealInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new W1DealInfo();

        if (data.hasOwnProperty('PlatformDealId')) {
          obj['PlatformDealId'] = _ApiClient.default.convertToType(data['PlatformDealId'], 'String');
        }

        if (data.hasOwnProperty('DealStateId')) {
          obj['DealStateId'] = _W1DealState.default.constructFromObject(data['DealStateId']);
        }

        if (data.hasOwnProperty('CreateDate')) {
          obj['CreateDate'] = _ApiClient.default.convertToType(data['CreateDate'], 'Date');
        }

        if (data.hasOwnProperty('UpdateDate')) {
          obj['UpdateDate'] = _ApiClient.default.convertToType(data['UpdateDate'], 'Date');
        }

        if (data.hasOwnProperty('ExpireDate')) {
          obj['ExpireDate'] = _ApiClient.default.convertToType(data['ExpireDate'], 'Date');
        }

        if (data.hasOwnProperty('Amount')) {
          obj['Amount'] = _ApiClient.default.convertToType(data['Amount'], 'Number');
        }

        if (data.hasOwnProperty('CurrencyId')) {
          obj['CurrencyId'] = _ApiClient.default.convertToType(data['CurrencyId'], 'Number');
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
          obj['BeneficiaryPaymentToolId'] = _ApiClient.default.convertToType(data['BeneficiaryPaymentToolId'], 'String');
        }

        if (data.hasOwnProperty('ShortDescription')) {
          obj['ShortDescription'] = _ApiClient.default.convertToType(data['ShortDescription'], 'Number');
        }

        if (data.hasOwnProperty('FullDescription')) {
          obj['FullDescription'] = _ApiClient.default.convertToType(data['FullDescription'], 'String');
        }

        if (data.hasOwnProperty('DealTypeId')) {
          obj['DealTypeId'] = _W1DealType.default.constructFromObject(data['DealTypeId']);
        }

        if (data.hasOwnProperty('LastErrorCode')) {
          obj['LastErrorCode'] = _ApiClient.default.convertToType(data['LastErrorCode'], 'String');
        }

        if (data.hasOwnProperty('LastErrorMessage')) {
          obj['LastErrorMessage'] = _ApiClient.default.convertToType(data['LastErrorMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return W1DealInfo;
}();
/**
 * @member {String} PlatformDealId
 */


W1DealInfo.prototype['PlatformDealId'] = undefined;
/**
 * @member {module:model/W1DealState} DealStateId
 */

W1DealInfo.prototype['DealStateId'] = undefined;
/**
 * @member {Date} CreateDate
 */

W1DealInfo.prototype['CreateDate'] = undefined;
/**
 * @member {Date} UpdateDate
 */

W1DealInfo.prototype['UpdateDate'] = undefined;
/**
 * @member {Date} ExpireDate
 */

W1DealInfo.prototype['ExpireDate'] = undefined;
/**
 * @member {Number} Amount
 */

W1DealInfo.prototype['Amount'] = undefined;
/**
 * @member {Number} CurrencyId
 */

W1DealInfo.prototype['CurrencyId'] = undefined;
/**
 * @member {String} PlatformPayerId
 */

W1DealInfo.prototype['PlatformPayerId'] = undefined;
/**
 * @member {String} PayerPhoneNumber
 */

W1DealInfo.prototype['PayerPhoneNumber'] = undefined;
/**
 * @member {Number} PayerPaymentToolId
 */

W1DealInfo.prototype['PayerPaymentToolId'] = undefined;
/**
 * @member {String} PlatformBeneficiaryId
 */

W1DealInfo.prototype['PlatformBeneficiaryId'] = undefined;
/**
 * @member {String} BeneficiaryPaymentToolId
 */

W1DealInfo.prototype['BeneficiaryPaymentToolId'] = undefined;
/**
 * @member {Number} ShortDescription
 */

W1DealInfo.prototype['ShortDescription'] = undefined;
/**
 * @member {String} FullDescription
 */

W1DealInfo.prototype['FullDescription'] = undefined;
/**
 * @member {module:model/W1DealType} DealTypeId
 */

W1DealInfo.prototype['DealTypeId'] = undefined;
/**
 * @member {String} LastErrorCode
 */

W1DealInfo.prototype['LastErrorCode'] = undefined;
/**
 * @member {String} LastErrorMessage
 */

W1DealInfo.prototype['LastErrorMessage'] = undefined;
var _default = W1DealInfo;
exports.default = _default;