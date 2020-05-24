# GitPayApi.DealsApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptDeal**](DealsApi.md#acceptDeal) | **POST** /deals/{platformDealId}/accept | Accept deal byt Payer
[**addNewDeal**](DealsApi.md#addNewDeal) | **POST** /deals | Creates a new deal
[**cancelDeal**](DealsApi.md#cancelDeal) | **POST** /deals/{platformDealId}/cancel | Cancel deal, either by Payer or by Benificiar
[**commitDeal**](DealsApi.md#commitDeal) | **POST** /deals/{platformDealId}/commit | Commit &amp; pay for the deal
[**deleteDeal**](DealsApi.md#deleteDeal) | **DELETE** /deals/{platformDealId} | Remove deal, e.g. if its not accepted yet or just orphan
[**getDealDetails**](DealsApi.md#getDealDetails) | **GET** /deals/{platformDealId} | Retriee deal details &amp; status
[**getRegisteredDeals**](DealsApi.md#getRegisteredDeals) | **GET** /deals | Returns a list of registered deals



## acceptDeal

> DealInfo acceptDeal(platformDealId)

Accept deal byt Payer

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.DealsApi();
let platformDealId = "platformDealId_example"; // String | 
apiInstance.acceptDeal(platformDealId, (error, data, response) => {
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

### Return type

[**DealInfo**](DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addNewDeal

> [DealInfo] addNewDeal(dealInfo)

Creates a new deal

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.DealsApi();
let dealInfo = new GitPayApi.DealInfo(); // DealInfo | 
apiInstance.addNewDeal(dealInfo, (error, data, response) => {
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
 **dealInfo** | [**DealInfo**](DealInfo.md)|  | 

### Return type

[**[DealInfo]**](DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelDeal

> DealInfo cancelDeal(platformDealId)

Cancel deal, either by Payer or by Benificiar

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.DealsApi();
let platformDealId = "platformDealId_example"; // String | 
apiInstance.cancelDeal(platformDealId, (error, data, response) => {
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

### Return type

[**DealInfo**](DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## commitDeal

> DealInfo commitDeal(platformDealId)

Commit &amp; pay for the deal

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.DealsApi();
let platformDealId = "platformDealId_example"; // String | 
apiInstance.commitDeal(platformDealId, (error, data, response) => {
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

### Return type

[**DealInfo**](DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDeal

> DealInfo deleteDeal(platformDealId)

Remove deal, e.g. if its not accepted yet or just orphan

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.DealsApi();
let platformDealId = "platformDealId_example"; // String | 
apiInstance.deleteDeal(platformDealId, (error, data, response) => {
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

### Return type

[**DealInfo**](DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDealDetails

> DealInfo getDealDetails(platformDealId)

Retriee deal details &amp; status

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.DealsApi();
let platformDealId = "platformDealId_example"; // String | 
apiInstance.getDealDetails(platformDealId, (error, data, response) => {
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

### Return type

[**DealInfo**](DealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRegisteredDeals

> [Array] getRegisteredDeals()

Returns a list of registered deals

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.DealsApi();
apiInstance.getRegisteredDeals((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[Array]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

