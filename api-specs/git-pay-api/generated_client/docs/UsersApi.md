# GitPayApi.UsersApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserPull**](UsersApi.md#addUserPull) | **POST** /users/{userId}/pulls | Add the pull request to the list of user work items
[**addUserRepo**](UsersApi.md#addUserRepo) | **POST** /users/{userId}/repos | Add the repository to the User&#39;s collection, as a an owner
[**getUserDeals**](UsersApi.md#getUserDeals) | **GET** /users/{userId}/deals | Get List of user deals (that could be either as payer or benificiary
[**getUserEvents**](UsersApi.md#getUserEvents) | **GET** /users/{userId}/events | Return User-specific Events, used on Activity tab
[**getUserPulls**](UsersApi.md#getUserPulls) | **GET** /users/{userId}/pulls | User pull requests available for the deals
[**getUserRepos**](UsersApi.md#getUserRepos) | **GET** /users/{userId}/repos | User-specific repositories
[**getUserSettings**](UsersApi.md#getUserSettings) | **GET** /users/{userId}/settings | User-specific settings
[**removeUserPull**](UsersApi.md#removeUserPull) | **DELETE** /users/{userId}/pulls/{pullId} | Remove pull request from the user&#39;s work items
[**removeUserRepo**](UsersApi.md#removeUserRepo) | **DELETE** /users/{userId}/repos/{repoId} | Remove user repository
[**updateUserSettings**](UsersApi.md#updateUserSettings) | **PUT** /users/{userId}/settings | Update user settings



## addUserPull

> {String: Object} addUserPull(userId, requestBody)

Add the pull request to the list of user work items

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
let requestBody = {key: null}; // {String: Object} | 
apiInstance.addUserPull(userId, requestBody, (error, data, response) => {
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
 **userId** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addUserRepo

> {String: Object} addUserRepo(userId, requestBody)

Add the repository to the User&#39;s collection, as a an owner

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
let requestBody = {key: null}; // {String: Object} | 
apiInstance.addUserRepo(userId, requestBody, (error, data, response) => {
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
 **userId** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUserDeals

> [UserDealInfo] getUserDeals(userId)

Get List of user deals (that could be either as payer or benificiary

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUserDeals(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

[**[UserDealInfo]**](UserDealInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserEvents

> [Event] getUserEvents(userId)

Return User-specific Events, used on Activity tab

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUserEvents(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserPulls

> [Object] getUserPulls(userId)

User pull requests available for the deals

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUserPulls(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserRepos

> [Object] getUserRepos(userId)

User-specific repositories

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUserRepos(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserSettings

> UserSettings getUserSettings(userId)

User-specific settings

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUserSettings(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

[**UserSettings**](UserSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeUserPull

> removeUserPull(userId, pullId)

Remove pull request from the user&#39;s work items

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
let pullId = "pullId_example"; // String | 
apiInstance.removeUserPull(userId, pullId, (error, data, response) => {
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
 **userId** | **String**|  | 
 **pullId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeUserRepo

> removeUserRepo(userId, repoId)

Remove user repository

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
let repoId = "repoId_example"; // String | 
apiInstance.removeUserRepo(userId, repoId, (error, data, response) => {
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
 **userId** | **String**|  | 
 **repoId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateUserSettings

> UserSettings updateUserSettings(userId, userSettings)

Update user settings

### Example

```javascript
import GitPayApi from 'git_pay_api';

let apiInstance = new GitPayApi.UsersApi();
let userId = "userId_example"; // String | 
let userSettings = new GitPayApi.UserSettings(); // UserSettings | 
apiInstance.updateUserSettings(userId, userSettings, (error, data, response) => {
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
 **userId** | **String**|  | 
 **userSettings** | [**UserSettings**](UserSettings.md)|  | 

### Return type

[**UserSettings**](UserSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

