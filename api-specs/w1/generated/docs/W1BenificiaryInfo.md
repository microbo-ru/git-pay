# W1P2PApi.W1BenificiaryInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platformId** | **String** | Идентификатор площадки | 
**platformBeneficiaryId** | **String** | Идентификатор исполнителя на стороне площадки | 
**title** | **String** | Наименование исполнителя (опционально) | [optional] 
**returnUrl** | **String** | Урл возврата пользователя | 
**paymentTypeId** | **String** | Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию. | [optional] 
**redirectToPaymentToolAddition** | **String** | Перейти сразу к добавлению нового инструмента. Происходит при передаче значения &#39;True&#39;. | [optional] 
**signature** | **Blob** | Подпись запроса | 
**timestamp** | **Date** | Дата формирования запроса в часовом поясе UTC+0 | 
**phoneNumber** | **String** | null | 
**language** | **String** | Язык интерфейса платежных страниц. Доступны ru, en. | [optional] 


