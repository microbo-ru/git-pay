# GitPayApi.ReposApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRegisteredRepos**](ReposApi.md#getRegisteredRepos) | **GET** /repos | Returns a list of registered repositories



## getRegisteredRepos

> [Array] getRegisteredRepos()

Returns a list of registered repositories

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.ReposApi();
apiInstance.getRegisteredRepos((error, data, response) => {
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

