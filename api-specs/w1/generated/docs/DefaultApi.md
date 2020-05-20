# W1P2PApi.DefaultApi

All URIs are relative to *https://api.dev.walletone.com/p2p*

Method | HTTP request | Description
------------- | ------------- | -------------
[**w1AddBenificiary**](DefaultApi.md#w1AddBenificiary) | **POST** /v2/beneficiary | Добавление (привязка) карты исполнителя
[**w1CancelDeal**](DefaultApi.md#w1CancelDeal) | **POST** /v3/deals/{platformDealId}/cancel | Отмена  сделки
[**w1CompleteDeal**](DefaultApi.md#w1CompleteDeal) | **POST** /v3/deals/{platformDealId}/complete | Завершение сделки
[**w1CreateDeal**](DefaultApi.md#w1CreateDeal) | **POST** /v3/deals | Регистрация сделки
[**w1GetDealInfo**](DefaultApi.md#w1GetDealInfo) | **GET** /v3/deals/{platformDealId} | Получение статуса сделки
[**w1PayDeal**](DefaultApi.md#w1PayDeal) | **POST** /v2/deal/pay | Оплата сделки



## w1AddBenificiary

> w1AddBenificiary(platformId, platformBeneficiaryId, returnUrl, signature, timestamp, phoneNumber, opts)

Добавление (привязка) карты исполнителя

### Example

```javascript
import W1P2PApi from 'w1_p2_p_api';

let apiInstance = new W1P2PApi.DefaultApi();
let platformId = "platformId_example"; // String | Идентификатор площадки
let platformBeneficiaryId = "platformBeneficiaryId_example"; // String | Идентификатор исполнителя на стороне площадки
let returnUrl = "returnUrl_example"; // String | Урл возврата пользователя
let signature = null; // Blob | Подпись запроса
let timestamp = new Date("2013-10-20T19:20:30+01:00"); // Date | Дата формирования запроса в часовом поясе UTC+0
let phoneNumber = "phoneNumber_example"; // String | null
let opts = {
  'title': "title_example", // String | Наименование исполнителя (опционально)
  'paymentTypeId': "paymentTypeId_example", // String | Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию.
  'redirectToPaymentToolAddition': "redirectToPaymentToolAddition_example", // String | Перейти сразу к добавлению нового инструмента. Происходит при передаче значения 'True'.
  'language': "language_example" // String | Язык интерфейса платежных страниц. Доступны ru, en.
};
apiInstance.w1AddBenificiary(platformId, platformBeneficiaryId, returnUrl, signature, timestamp, phoneNumber, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platformId** | **String**| Идентификатор площадки | 
 **platformBeneficiaryId** | **String**| Идентификатор исполнителя на стороне площадки | 
 **returnUrl** | **String**| Урл возврата пользователя | 
 **signature** | **Blob**| Подпись запроса | 
 **timestamp** | **Date**| Дата формирования запроса в часовом поясе UTC+0 | 
 **phoneNumber** | **String**| null | 
 **title** | **String**| Наименование исполнителя (опционально) | [optional] 
 **paymentTypeId** | **String**| Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию. | [optional] 
 **redirectToPaymentToolAddition** | **String**| Перейти сразу к добавлению нового инструмента. Происходит при передаче значения &#39;True&#39;. | [optional] 
 **language** | **String**| Язык интерфейса платежных страниц. Доступны ru, en. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined


## w1CancelDeal

> W1DealInfo w1CancelDeal(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest)

Отмена  сделки

Метод инициирует возврат плательщику по сделке. Отменяемая сделка должна находится в одном из состояний: Paid, PaymentHold, PayoutProcessError или CancelError. В противном случае метод завершится с ошибкой DEAL_STATE_ID_ERROR. Если сделка находится в состоянии PaymentHold, то при успешном выполнении, метод вернет объект сделки в состоянии обработки PaymentHoldProcessing. Это означает, что в данный момент производится отмена холда средств на карте плательщика, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. Если сделка находится в состоянии Paid, PayoutProcessError или CancelError, то при успешном выполнении, метод вернет объект сделки в состоянии обработки Canceling. Это означает, что в данный момент производится выплата, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. За изменением состояний сделки можно следить посредством получения уведомлений или используя метод получения статуса сделки. 

### Example

```javascript
import W1P2PApi from 'w1_p2_p_api';

let apiInstance = new W1P2PApi.DefaultApi();
let platformDealId = "platformDealId_example"; // String | 
let xWalletPlatformId = "xWalletPlatformId_example"; // String | Текстовый идентификатор площадки
let xWalletSignature = null; // Blob | ЭЦП ответа сервера, Base64-encoded
let xWalletTimestamp = new Date("2013-10-20T19:20:30+01:00"); // Date | Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
let w1NewDealRequest = new W1P2PApi.W1NewDealRequest(); // W1NewDealRequest | 
apiInstance.w1CancelDeal(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platformDealId** | **String**|  | 
 **xWalletPlatformId** | **String**| Текстовый идентификатор площадки | 
 **xWalletSignature** | **Blob**| ЭЦП ответа сервера, Base64-encoded | 
 **xWalletTimestamp** | **Date**| Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss | 
 **w1NewDealRequest** | [**W1NewDealRequest**](W1NewDealRequest.md)|  | 

### Return type

[**W1DealInfo**](W1DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## w1CompleteDeal

> W1DealInfo w1CompleteDeal(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest)

Завершение сделки

Метод инициирует выплату исполнителю по сделке. Завершаемая сделка должна находится в одном из состояний: Paid, PayoutProcessError или CancelError (АД: имеется в виду на выходе из метода). В противном случае метод завершится с ошибкой DEAL_STATE_ID_ERROR. При успешном выполнении, метод вернет объект сделки в состоянии обработки PayoutProcessing. Это означает, что в данный момент производится выплата, по окончанию которой сделка перейдет в Completed при успешном исходе и PayoutProcessError при неуспешном. За изменением состояний сделки можно следить посредством получения уведомлений или используя метод получения статуса сделки. 

### Example

```javascript
import W1P2PApi from 'w1_p2_p_api';

let apiInstance = new W1P2PApi.DefaultApi();
let platformDealId = "platformDealId_example"; // String | 
let xWalletPlatformId = "xWalletPlatformId_example"; // String | Текстовый идентификатор площадки
let xWalletSignature = null; // Blob | ЭЦП ответа сервера, Base64-encoded
let xWalletTimestamp = new Date("2013-10-20T19:20:30+01:00"); // Date | Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
let w1NewDealRequest = new W1P2PApi.W1NewDealRequest(); // W1NewDealRequest | 
apiInstance.w1CompleteDeal(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platformDealId** | **String**|  | 
 **xWalletPlatformId** | **String**| Текстовый идентификатор площадки | 
 **xWalletSignature** | **Blob**| ЭЦП ответа сервера, Base64-encoded | 
 **xWalletTimestamp** | **Date**| Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss | 
 **w1NewDealRequest** | [**W1NewDealRequest**](W1NewDealRequest.md)|  | 

### Return type

[**W1DealInfo**](W1DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## w1CreateDeal

> W1DealInfo w1CreateDeal(xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest)

Регистрация сделки

Передача повторного запроса с другими параметрами приведет к изменению параметров сделки, в случае, если сделка находится в состоянии Created или PaymentProcessError. Если состояние сделки уже изменилось и переданные параметры отличаются, то запрос вернет ошибку DEAL_PARAMS_MISMATCH, в противном случае вернется информация о сделке. При попытке изменить тип сделки возвращается ошибка DEAL_PARAMS_MISMATCH. 

### Example

```javascript
import W1P2PApi from 'w1_p2_p_api';

let apiInstance = new W1P2PApi.DefaultApi();
let xWalletPlatformId = "xWalletPlatformId_example"; // String | Текстовый идентификатор площадки
let xWalletSignature = null; // Blob | ЭЦП ответа сервера, Base64-encoded
let xWalletTimestamp = new Date("2013-10-20T19:20:30+01:00"); // Date | Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
let w1NewDealRequest = new W1P2PApi.W1NewDealRequest(); // W1NewDealRequest | 
apiInstance.w1CreateDeal(xWalletPlatformId, xWalletSignature, xWalletTimestamp, w1NewDealRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xWalletPlatformId** | **String**| Текстовый идентификатор площадки | 
 **xWalletSignature** | **Blob**| ЭЦП ответа сервера, Base64-encoded | 
 **xWalletTimestamp** | **Date**| Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss | 
 **w1NewDealRequest** | [**W1NewDealRequest**](W1NewDealRequest.md)|  | 

### Return type

[**W1DealInfo**](W1DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## w1GetDealInfo

> W1NewDealRequest w1GetDealInfo(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp)

Получение статуса сделки

Метод инициирует возврат плательщику по сделке. Отменяемая сделка должна находится в одном из состояний: Paid, PaymentHold, PayoutProcessError или CancelError. В противном случае метод завершится с ошибкой DEAL_STATE_ID_ERROR. Если сделка находится в состоянии PaymentHold, то при успешном выполнении, метод вернет объект сделки в состоянии обработки PaymentHoldProcessing. Это означает, что в данный момент производится отмена холда средств на карте плательщика, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. Если сделка находится в состоянии Paid, PayoutProcessError или CancelError, то при успешном выполнении, метод вернет объект сделки в состоянии обработки Canceling. Это означает, что в данный момент производится выплата, по окончанию которой сделка перейдет в Canceled при успешном исходе и CancelError при неуспешном. За изменением состояний сделки можно следить посредством получения уведомлений или используя метод получения статуса сделки. 

### Example

```javascript
import W1P2PApi from 'w1_p2_p_api';

let apiInstance = new W1P2PApi.DefaultApi();
let platformDealId = "platformDealId_example"; // String | 
let xWalletPlatformId = "xWalletPlatformId_example"; // String | Текстовый идентификатор площадки
let xWalletSignature = null; // Blob | ЭЦП ответа сервера, Base64-encoded
let xWalletTimestamp = new Date("2013-10-20T19:20:30+01:00"); // Date | Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss
apiInstance.w1GetDealInfo(platformDealId, xWalletPlatformId, xWalletSignature, xWalletTimestamp, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platformDealId** | **String**|  | 
 **xWalletPlatformId** | **String**| Текстовый идентификатор площадки | 
 **xWalletSignature** | **Blob**| ЭЦП ответа сервера, Base64-encoded | 
 **xWalletTimestamp** | **Date**| Дата формирования ответа в часовом поясе и формате аналогичном дате формирования запроса, формат yyyy-MM-ddTHH:mm:ss | 

### Return type

[**W1NewDealRequest**](W1NewDealRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## w1PayDeal

> w1PayDeal(w1DealPayInfo)

Оплата сделки

### Example

```javascript
import W1P2PApi from 'w1_p2_p_api';

let apiInstance = new W1P2PApi.DefaultApi();
let w1DealPayInfo = new W1P2PApi.W1DealPayInfo(); // W1DealPayInfo | 
apiInstance.w1PayDeal(w1DealPayInfo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **w1DealPayInfo** | [**W1DealPayInfo**](W1DealPayInfo.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

