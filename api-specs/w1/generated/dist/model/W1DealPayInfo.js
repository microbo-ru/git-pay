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
 * The W1DealPayInfo model module.
 * @module model/W1DealPayInfo
 * @version 0.0.1
 */
var W1DealPayInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>W1DealPayInfo</code>.
   * @alias module:model/W1DealPayInfo
   * @param platformId {String} Идентификатор площадки
   * @param platformDealId {String} Идентификатор сделки на стороне площадки
   * @param returnUrl {String} Урл возврата пользователя
   * @param paymentTypeId {String} Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию.
   * @param signature {Blob} Подпись запроса
   * @param timestamp {Date} Дата формирования запроса в часовом поясе UTC+0
   */
  function W1DealPayInfo(platformId, platformDealId, returnUrl, paymentTypeId, signature, timestamp) {
    _classCallCheck(this, W1DealPayInfo);

    W1DealPayInfo.initialize(this, platformId, platformDealId, returnUrl, paymentTypeId, signature, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(W1DealPayInfo, null, [{
    key: "initialize",
    value: function initialize(obj, platformId, platformDealId, returnUrl, paymentTypeId, signature, timestamp) {
      obj['PlatformId'] = platformId;
      obj['PlatformDealId'] = platformDealId;
      obj['ReturnUrl'] = returnUrl;
      obj['PaymentTypeId'] = paymentTypeId;
      obj['Signature'] = signature;
      obj['Timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>W1DealPayInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/W1DealPayInfo} obj Optional instance to populate.
     * @return {module:model/W1DealPayInfo} The populated <code>W1DealPayInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new W1DealPayInfo();

        if (data.hasOwnProperty('PlatformId')) {
          obj['PlatformId'] = _ApiClient.default.convertToType(data['PlatformId'], 'String');
        }

        if (data.hasOwnProperty('PlatformDealId')) {
          obj['PlatformDealId'] = _ApiClient.default.convertToType(data['PlatformDealId'], 'String');
        }

        if (data.hasOwnProperty('AuthData')) {
          obj['AuthData'] = _ApiClient.default.convertToType(data['AuthData'], 'String');
        }

        if (data.hasOwnProperty('ReturnUrl')) {
          obj['ReturnUrl'] = _ApiClient.default.convertToType(data['ReturnUrl'], 'String');
        }

        if (data.hasOwnProperty('RedirectToCardAddition')) {
          obj['RedirectToCardAddition'] = _ApiClient.default.convertToType(data['RedirectToCardAddition'], 'String');
        }

        if (data.hasOwnProperty('PaymentTypeId')) {
          obj['PaymentTypeId'] = _ApiClient.default.convertToType(data['PaymentTypeId'], 'String');
        }

        if (data.hasOwnProperty('Signature')) {
          obj['Signature'] = _ApiClient.default.convertToType(data['Signature'], 'Blob');
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient.default.convertToType(data['Timestamp'], 'Date');
        }

        if (data.hasOwnProperty('Language')) {
          obj['Language'] = _ApiClient.default.convertToType(data['Language'], 'String');
        }
      }

      return obj;
    }
  }]);

  return W1DealPayInfo;
}();
/**
 * Идентификатор площадки
 * @member {String} PlatformId
 */


W1DealPayInfo.prototype['PlatformId'] = undefined;
/**
 * Идентификатор сделки на стороне площадки
 * @member {String} PlatformDealId
 */

W1DealPayInfo.prototype['PlatformDealId'] = undefined;
/**
 * Некоторые способы оплаты поддерживают передачу авторизационных данных из площадки, позволяя плательщику миновать платежные страницы и сразу инициировать оплату.
 * @member {String} AuthData
 */

W1DealPayInfo.prototype['AuthData'] = undefined;
/**
 * Урл возврата пользователя
 * @member {String} ReturnUrl
 */

W1DealPayInfo.prototype['ReturnUrl'] = undefined;
/**
 * Перейти сразу к добавлению нового инструмента оплаты. Происходит при передаче значения 'True'.
 * @member {String} RedirectToCardAddition
 */

W1DealPayInfo.prototype['RedirectToCardAddition'] = undefined;
/**
 * Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию.
 * @member {String} PaymentTypeId
 */

W1DealPayInfo.prototype['PaymentTypeId'] = undefined;
/**
 * Подпись запроса
 * @member {Blob} Signature
 */

W1DealPayInfo.prototype['Signature'] = undefined;
/**
 * Дата формирования запроса в часовом поясе UTC+0
 * @member {Date} Timestamp
 */

W1DealPayInfo.prototype['Timestamp'] = undefined;
/**
 * Язык интерфейса платежных страниц. Доступны ru, en.
 * @member {String} Language
 */

W1DealPayInfo.prototype['Language'] = undefined;
var _default = W1DealPayInfo;
exports.default = _default;