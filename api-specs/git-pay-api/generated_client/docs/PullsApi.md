# GitPayApi.PullsApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRegisteredPulls**](PullsApi.md#getRegisteredPulls) | **GET** /pulls | Returns a list of registered pull-requests



## getRegisteredPulls

> [Array] getRegisteredPulls()

Returns a list of registered pull-requests

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.PullsApi();
apiInstance.getRegisteredPulls((error, data, response) => {
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

