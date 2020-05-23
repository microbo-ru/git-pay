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


import ApiClient from "../ApiClient";
import W1DealInfo from '../model/W1DealInfo';
import W1DealPayInfo from '../model/W1DealPayInfo';
import W1NewDealRequest from '../model/W1NewDealRequest';

/**
* Default service.
* @module api/DefaultApi
* @version 0.0.3
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the w1AddBenificiary operation.
     * @callback module:api/DefaultApi~w1AddBenificiaryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Добавление (привязка) карты исполнителя
     * @param {String} platformId Идентификатор площадки
     * @param {String} platformBeneficiaryId Идентификатор исполнителя на стороне площадки
     * @param {String} returnUrl Урл возврата пользователя
     * @param {Blob} signature Подпись запроса
     * @param {Date} timestamp Дата формирования запроса в часовом поясе UTC+0
     * @param {String} phoneNumber null
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Наименование исполнителя (опционально)
     * @param {String} opts.paymentTypeId Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию.
     * @param {String} opts.redirectToPaymentToolAddition Перейти сразу к добавлению нового инструмента. Происходит при передаче значения 'True'.
     * @param {String} opts.language Язык интерфейса платежных страниц. Доступны ru, en.
     * @param {module:api/DefaultApi~w1AddBenificiaryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    w1AddBenificiary(platformId, platformBeneficiaryId, returnUrl, signature, timestamp, phoneNumber, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'platformId' is set
      if (platformId === undefined || platformId === null) {
        throw new Error("Missing the required parameter 'platformId' when calling w1AddBenificiary");
      }
      // verify the required parameter 'platformBeneficiaryId' is set
      if (platformBeneficiaryId === undefined || platformBeneficiaryId === null) {
        throw new Error("Missing the required parameter 'platformBeneficiaryId' when calling w1AddBenificiary");
      }
      // verify the required parameter 'returnUrl' is set
      if (returnUrl === undefined || returnUrl === null) {
        throw new Error("Missing the required parameter 'returnUrl' when calling w1AddBenificiary");
      }
      // verify the required parameter 'signature' is set
      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling w1AddBenificiary");
      }
      // verify the required parameter 'timestamp' is set
      if (timestamp === undefined || timestamp === null) {
        throw new Error("Missing the required parameter 'timestamp' when calling w1AddBenificiary");
      }
      // verify the required parameter 'phoneNumber' is set
      if (phoneNumber === undefined || phoneNumber === null) {
        throw new Error("Missing the required parameter 'phoneNumber' when calling w1AddBenificiary");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'PlatformId': platformId,
        'PlatformBeneficiaryId': platformBeneficiaryId,
        'Title': opts['title'],
        'ReturnUrl': returnUrl,
        'PaymentTypeId': opts['paymentTypeId'],
        'RedirectToPaymentToolAddition': opts['redirectToPaymentToolAddition'],
        'Signature': signature,
        'Timestamp': timestamp,
        'PhoneNumber': phoneNumber,
        'Language': opts['language']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/beneficiary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the w1CancelDeal operation.
     * @callback module:api/DefaultApi~w1CancelDealCallback
     * @param {String} error Error message, if any.
     * @param {module:model/W1DealInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Отмена  сделки
     * Метод инициирует возврат плательщику по сделке. Отменяемая сделка должна находится в одном из состояний: Paid, PaymentHold, PayoutProcessError или CancelError. В противном случае метод завершится с ошибкой DEAL_STATE_ID_ERROR. Если сделка находится в состоянии PaymentHold, то при успешном выполнении, метод вернет объект сделки в состоянии обработки PaymentHoldProcessing. Это означает, что в данный момент производится отмена холда средств на карте плательщика, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. Если сделка находится в состоянии Paid, PayoutProcessError или CancelError, то при успешном выполнении, метод вернет объект сделки в состоянии обработки Canceling. Это означает, что в данный момент производится выплата, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. За изменением состояний сделки можно следить посредством получения уведомлений или используя метод получения статуса сделки. 
     * @param {String} platformDealId 
     * @param {String} xWalletPlatformId Текстовый идентификатор площадки
     * @param {Blob} xWalletSignature ЭЦП ответа сервера, Base64-encoded
     * @param {Date} xWalletTimestamp Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
     * @param {module:model/W1NewDealRequest} w1NewDealRequest 
     * @param {module:api/DefaultApi~w1CancelDealCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/W1DealInfo}
     */
    w1CancelDeal(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest, callback) {
      let postBody = w1NewDealRequest;
      // verify the required parameter 'platformDealId' is set
      if (platformDealId === undefined || platformDealId === null) {
        throw new Error("Missing the required parameter 'platformDealId' when calling w1CancelDeal");
      }
      // verify the required parameter 'xWalletPlatformId' is set
      if (xWalletPlatformId === undefined || xWalletPlatformId === null) {
        throw new Error("Missing the required parameter 'xWalletPlatformId' when calling w1CancelDeal");
      }
      // verify the required parameter 'xWalletSignature' is set
      if (xWalletSignature === undefined || xWalletSignature === null) {
        throw new Error("Missing the required parameter 'xWalletSignature' when calling w1CancelDeal");
      }
      // verify the required parameter 'xWalletTimestamp' is set
      if (xWalletTimestamp === undefined || xWalletTimestamp === null) {
        throw new Error("Missing the required parameter 'xWalletTimestamp' when calling w1CancelDeal");
      }
      // verify the required parameter 'w1NewDealRequest' is set
      if (w1NewDealRequest === undefined || w1NewDealRequest === null) {
        throw new Error("Missing the required parameter 'w1NewDealRequest' when calling w1CancelDeal");
      }

      let pathParams = {
        'platformDealId': platformDealId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Wallet-PlatformId': xWalletPlatformId,
        'X-Wallet-Signature': xWalletSignature,
        'X-Wallet-Timestamp': xWalletTimestamp
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = W1DealInfo;
      return this.apiClient.callApi(
        '/v3/deals/{platformDealId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the w1CompleteDeal operation.
     * @callback module:api/DefaultApi~w1CompleteDealCallback
     * @param {String} error Error message, if any.
     * @param {module:model/W1DealInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Завершение сделки
     * Метод инициирует выплату исполнителю по сделке. Завершаемая сделка должна находится в одном из состояний: Paid, PayoutProcessError или CancelError (АД: имеется в виду на выходе из метода). В противном случае метод завершится с ошибкой DEAL_STATE_ID_ERROR. При успешном выполнении, метод вернет объект сделки в состоянии обработки PayoutProcessing. Это означает, что в данный момент производится выплата, по окончанию которой сделка перейдет в Completed при успешном исходе и PayoutProcessError при неуспешном. За изменением состояний сделки можно следить посредством получения уведомлений или используя метод получения статуса сделки. 
     * @param {String} platformDealId 
     * @param {String} xWalletPlatformId Текстовый идентификатор площадки
     * @param {Blob} xWalletSignature ЭЦП ответа сервера, Base64-encoded
     * @param {Date} xWalletTimestamp Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
     * @param {module:model/W1NewDealRequest} w1NewDealRequest 
     * @param {module:api/DefaultApi~w1CompleteDealCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/W1DealInfo}
     */
    w1CompleteDeal(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest, callback) {
      let postBody = w1NewDealRequest;
      // verify the required parameter 'platformDealId' is set
      if (platformDealId === undefined || platformDealId === null) {
        throw new Error("Missing the required parameter 'platformDealId' when calling w1CompleteDeal");
      }
      // verify the required parameter 'xWalletPlatformId' is set
      if (xWalletPlatformId === undefined || xWalletPlatformId === null) {
        throw new Error("Missing the required parameter 'xWalletPlatformId' when calling w1CompleteDeal");
      }
      // verify the required parameter 'xWalletSignature' is set
      if (xWalletSignature === undefined || xWalletSignature === null) {
        throw new Error("Missing the required parameter 'xWalletSignature' when calling w1CompleteDeal");
      }
      // verify the required parameter 'xWalletTimestamp' is set
      if (xWalletTimestamp === undefined || xWalletTimestamp === null) {
        throw new Error("Missing the required parameter 'xWalletTimestamp' when calling w1CompleteDeal");
      }
      // verify the required parameter 'w1NewDealRequest' is set
      if (w1NewDealRequest === undefined || w1NewDealRequest === null) {
        throw new Error("Missing the required parameter 'w1NewDealRequest' when calling w1CompleteDeal");
      }

      let pathParams = {
        'platformDealId': platformDealId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Wallet-PlatformId': xWalletPlatformId,
        'X-Wallet-Signature': xWalletSignature,
        'X-Wallet-Timestamp': xWalletTimestamp
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = W1DealInfo;
      return this.apiClient.callApi(
        '/v3/deals/{platformDealId}/complete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the w1CreateDeal operation.
     * @callback module:api/DefaultApi~w1CreateDealCallback
     * @param {String} error Error message, if any.
     * @param {module:model/W1DealInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Регистрация сделки
     * Передача повторного запроса с другими параметрами приведет к изменению параметров сделки, в случае, если сделка находится в состоянии Created или PaymentProcessError. Если состояние сделки уже изменилось и переданные параметры отличаются, то запрос вернет ошибку DEAL_PARAMS_MISMATCH, в противном случае вернется информация о сделке. При попытке изменить тип сделки возвращается ошибка DEAL_PARAMS_MISMATCH. 
     * @param {String} xWalletPlatformId Текстовый идентификатор площадки
     * @param {Blob} xWalletSignature ЭЦП ответа сервера, Base64-encoded
     * @param {Date} xWalletTimestamp Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
     * @param {module:model/W1NewDealRequest} w1NewDealRequest 
     * @param {module:api/DefaultApi~w1CreateDealCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/W1DealInfo}
     */
    w1CreateDeal(xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest, callback) {
      let postBody = w1NewDealRequest;
      // verify the required parameter 'xWalletPlatformId' is set
      if (xWalletPlatformId === undefined || xWalletPlatformId === null) {
        throw new Error("Missing the required parameter 'xWalletPlatformId' when calling w1CreateDeal");
      }
      // verify the required parameter 'xWalletSignature' is set
      if (xWalletSignature === undefined || xWalletSignature === null) {
        throw new Error("Missing the required parameter 'xWalletSignature' when calling w1CreateDeal");
      }
      // verify the required parameter 'xWalletTimestamp' is set
      if (xWalletTimestamp === undefined || xWalletTimestamp === null) {
        throw new Error("Missing the required parameter 'xWalletTimestamp' when calling w1CreateDeal");
      }
      // verify the required parameter 'w1NewDealRequest' is set
      if (w1NewDealRequest === undefined || w1NewDealRequest === null) {
        throw new Error("Missing the required parameter 'w1NewDealRequest' when calling w1CreateDeal");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Wallet-PlatformId': xWalletPlatformId,
        'X-Wallet-Signature': xWalletSignature,
        'X-Wallet-Timestamp': xWalletTimestamp
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = W1DealInfo;
      return this.apiClient.callApi(
        '/v3/deals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the w1GetDealInfo operation.
     * @callback module:api/DefaultApi~w1GetDealInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/W1DealInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение статуса сделки
     * Метод инициирует возврат плательщику по сделке. Отменяемая сделка должна находится в одном из состояний: Paid, PaymentHold, PayoutProcessError или CancelError. В противном случае метод завершится с ошибкой DEAL_STATE_ID_ERROR. Если сделка находится в состоянии PaymentHold, то при успешном выполнении, метод вернет объект сделки в состоянии обработки PaymentHoldProcessing. Это означает, что в данный момент производится отмена холда средств на карте плательщика, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. Если сделка находится в состоянии Paid, PayoutProcessError или CancelError, то при успешном выполнении, метод вернет объект сделки в состоянии обработки Canceling. Это означает, что в данный момент производится выплата, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. За изменением состояний сделки можно следить посредством получения уведомлений или используя метод получения статуса сделки. 
     * @param {String} platformDealId 
     * @param {String} xWalletPlatformId Текстовый идентификатор площадки
     * @param {Blob} xWalletSignature ЭЦП ответа сервера, Base64-encoded
     * @param {Date} xWalletTimestamp Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
     * @param {module:api/DefaultApi~w1GetDealInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/W1DealInfo}
     */
    w1GetDealInfo(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, callback) {
      let postBody = null;
      // verify the required parameter 'platformDealId' is set
      if (platformDealId === undefined || platformDealId === null) {
        throw new Error("Missing the required parameter 'platformDealId' when calling w1GetDealInfo");
      }
      // verify the required parameter 'xWalletPlatformId' is set
      if (xWalletPlatformId === undefined || xWalletPlatformId === null) {
        throw new Error("Missing the required parameter 'xWalletPlatformId' when calling w1GetDealInfo");
      }
      // verify the required parameter 'xWalletSignature' is set
      if (xWalletSignature === undefined || xWalletSignature === null) {
        throw new Error("Missing the required parameter 'xWalletSignature' when calling w1GetDealInfo");
      }
      // verify the required parameter 'xWalletTimestamp' is set
      if (xWalletTimestamp === undefined || xWalletTimestamp === null) {
        throw new Error("Missing the required parameter 'xWalletTimestamp' when calling w1GetDealInfo");
      }

      let pathParams = {
        'platformDealId': platformDealId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Wallet-PlatformId': xWalletPlatformId,
        'X-Wallet-Signature': xWalletSignature,
        'X-Wallet-Timestamp': xWalletTimestamp
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = W1DealInfo;
      return this.apiClient.callApi(
        '/v3/deals/{platformDealId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the w1PayDeal operation.
     * @callback module:api/DefaultApi~w1PayDealCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Оплата сделки
     * @param {module:model/W1DealPayInfo} w1DealPayInfo 
     * @param {module:api/DefaultApi~w1PayDealCallback} callback The callback function, accepting three arguments: error, data, response
     */
    w1PayDeal(w1DealPayInfo, callback) {
      let postBody = w1DealPayInfo;
      // verify the required parameter 'w1DealPayInfo' is set
      if (w1DealPayInfo === undefined || w1DealPayInfo === null) {
        throw new Error("Missing the required parameter 'w1DealPayInfo' when calling w1PayDeal");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/deal/pay', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}