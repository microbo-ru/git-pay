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
 * The W1BenificiaryInfo model module.
 * @module model/W1BenificiaryInfo
 * @version 0.0.1
 */
var W1BenificiaryInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>W1BenificiaryInfo</code>.
   * @alias module:model/W1BenificiaryInfo
   * @param platformId {String} Идентификатор площадки
   * @param platformBeneficiaryId {String} Идентификатор исполнителя на стороне площадки
   * @param returnUrl {String} Урл возврата пользователя
   * @param signature {Blob} Подпись запроса
   * @param timestamp {Date} Дата формирования запроса в часовом поясе UTC+0
   * @param phoneNumber {String} null
   */
  function W1BenificiaryInfo(platformId, platformBeneficiaryId, returnUrl, signature, timestamp, phoneNumber) {
    _classCallCheck(this, W1BenificiaryInfo);

    W1BenificiaryInfo.initialize(this, platformId, platformBeneficiaryId, returnUrl, signature, timestamp, phoneNumber);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(W1BenificiaryInfo, null, [{
    key: "initialize",
    value: function initialize(obj, platformId, platformBeneficiaryId, returnUrl, signature, timestamp, phoneNumber) {
      obj['PlatformId'] = platformId;
      obj['PlatformBeneficiaryId'] = platformBeneficiaryId;
      obj['ReturnUrl'] = returnUrl;
      obj['Signature'] = signature;
      obj['Timestamp'] = timestamp;
      obj['PhoneNumber'] = phoneNumber;
    }
    /**
     * Constructs a <code>W1BenificiaryInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/W1BenificiaryInfo} obj Optional instance to populate.
     * @return {module:model/W1BenificiaryInfo} The populated <code>W1BenificiaryInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new W1BenificiaryInfo();

        if (data.hasOwnProperty('PlatformId')) {
          obj['PlatformId'] = _ApiClient.default.convertToType(data['PlatformId'], 'String');
        }

        if (data.hasOwnProperty('PlatformBeneficiaryId')) {
          obj['PlatformBeneficiaryId'] = _ApiClient.default.convertToType(data['PlatformBeneficiaryId'], 'String');
        }

        if (data.hasOwnProperty('Title')) {
          obj['Title'] = _ApiClient.default.convertToType(data['Title'], 'String');
        }

        if (data.hasOwnProperty('ReturnUrl')) {
          obj['ReturnUrl'] = _ApiClient.default.convertToType(data['ReturnUrl'], 'String');
        }

        if (data.hasOwnProperty('PaymentTypeId')) {
          obj['PaymentTypeId'] = _ApiClient.default.convertToType(data['PaymentTypeId'], 'String');
        }

        if (data.hasOwnProperty('RedirectToPaymentToolAddition')) {
          obj['RedirectToPaymentToolAddition'] = _ApiClient.default.convertToType(data['RedirectToPaymentToolAddition'], 'String');
        }

        if (data.hasOwnProperty('Signature')) {
          obj['Signature'] = _ApiClient.default.convertToType(data['Signature'], 'Blob');
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient.default.convertToType(data['Timestamp'], 'Date');
        }

        if (data.hasOwnProperty('PhoneNumber')) {
          obj['PhoneNumber'] = _ApiClient.default.convertToType(data['PhoneNumber'], 'String');
        }

        if (data.hasOwnProperty('Language')) {
          obj['Language'] = _ApiClient.default.convertToType(data['Language'], 'String');
        }
      }

      return obj;
    }
  }]);

  return W1BenificiaryInfo;
}();
/**
 * Идентификатор площадки
 * @member {String} PlatformId
 */


W1BenificiaryInfo.prototype['PlatformId'] = undefined;
/**
 * Идентификатор исполнителя на стороне площадки
 * @member {String} PlatformBeneficiaryId
 */

W1BenificiaryInfo.prototype['PlatformBeneficiaryId'] = undefined;
/**
 * Наименование исполнителя (опционально)
 * @member {String} Title
 */

W1BenificiaryInfo.prototype['Title'] = undefined;
/**
 * Урл возврата пользователя
 * @member {String} ReturnUrl
 */

W1BenificiaryInfo.prototype['ReturnUrl'] = undefined;
/**
 * Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию.
 * @member {String} PaymentTypeId
 */

W1BenificiaryInfo.prototype['PaymentTypeId'] = undefined;
/**
 * Перейти сразу к добавлению нового инструмента. Происходит при передаче значения 'True'.
 * @member {String} RedirectToPaymentToolAddition
 */

W1BenificiaryInfo.prototype['RedirectToPaymentToolAddition'] = undefined;
/**
 * Подпись запроса
 * @member {Blob} Signature
 */

W1BenificiaryInfo.prototype['Signature'] = undefined;
/**
 * Дата формирования запроса в часовом поясе UTC+0
 * @member {Date} Timestamp
 */

W1BenificiaryInfo.prototype['Timestamp'] = undefined;
/**
 * null
 * @member {String} PhoneNumber
 */

W1BenificiaryInfo.prototype['PhoneNumber'] = undefined;
/**
 * Язык интерфейса платежных страниц. Доступны ru, en.
 * @member {String} Language
 */

W1BenificiaryInfo.prototype['Language'] = undefined;
var _default = W1BenificiaryInfo;
exports.default = _default;