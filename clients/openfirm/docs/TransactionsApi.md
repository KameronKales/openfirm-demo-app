# OpenfirmApi.TransactionsApi

All URIs are relative to *https://www.openfirm.co/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classifyMerchantByTransaction**](TransactionsApi.md#classifyMerchantByTransaction) | **GET** /v1/transactions/classify | Classify Transaction by Merchant
[**queueTransaction**](TransactionsApi.md#queueTransaction) | **POST** /v1/transactions/classify/queue | Classify Transaction by Merchant



## classifyMerchantByTransaction

> ApiResponse classifyMerchantByTransaction(merchant)

Classify Transaction by Merchant

Returns a single merchant

### Example

```javascript
import OpenfirmApi from 'openfirm_api';
let defaultClient = OpenfirmApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new OpenfirmApi.TransactionsApi();
let merchant = "merchant_example"; // String | Merchant name to match
apiInstance.classifyMerchantByTransaction(merchant, (error, data, response) => {
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
 **merchant** | **String**| Merchant name to match | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueTransaction

> QueueTransaction queueTransaction(merchantQueue)

Classify Transaction by Merchant

Returns a single merchant

### Example

```javascript
import OpenfirmApi from 'openfirm_api';
let defaultClient = OpenfirmApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new OpenfirmApi.TransactionsApi();
let merchantQueue = new OpenfirmApi.MerchantQueue(); // MerchantQueue | The merchant to identify
apiInstance.queueTransaction(merchantQueue, (error, data, response) => {
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
 **merchantQueue** | [**MerchantQueue**](MerchantQueue.md)| The merchant to identify | 

### Return type

[**QueueTransaction**](QueueTransaction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

