# OpenfirmApi.StatusApi

All URIs are relative to *https://www.openfirm.co/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](StatusApi.md#ping) | **GET** /ping | Service Status



## ping

> Pong ping()

Service Status

Checks the service is available

### Example

```javascript
import OpenfirmApi from 'openfirm_api';

let apiInstance = new OpenfirmApi.StatusApi();
apiInstance.ping((error, data, response) => {
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

[**Pong**](Pong.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

