'use strict';


/**
 * Accept deal byt Payer
 *
 * platformDealId String 
 * returns DealInfo
 **/
exports.acceptDeal = function(platformDealId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a new deal
 *
 * body DealInfo 
 * returns List
 **/
exports.addNewDeal = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
}, {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel deal, either by Payer or by Benificiar
 *
 * platformDealId String 
 * returns DealInfo
 **/
exports.cancelDeal = function(platformDealId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Commit & pay for the deal
 *
 * platformDealId String 
 * returns DealInfo
 **/
exports.commitDeal = function(platformDealId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove deal, e.g. if its not accepted yet or just orphan
 *
 * platformDealId String 
 * returns DealInfo
 **/
exports.deleteDeal = function(platformDealId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retriee deal details & status
 *
 * platformDealId String 
 * returns DealInfo
 **/
exports.getDealDetails = function(platformDealId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of registered deals
 *
 * returns List
 **/
exports.getRegisteredDeals = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
}, {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
} ], [ {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
}, {
  "PlatformBeneficiaryId" : "PlatformBeneficiaryId",
  "LastErrorMessage" : "LastErrorMessage",
  "ExpireDate" : "2000-01-23T04:56:07.000+00:00",
  "Amount" : 0.8008281904610115,
  "DealTypeId" : "Deferred",
  "DealStateId" : "Created",
  "PayerPhoneNumber" : "PayerPhoneNumber",
  "CreateDate" : "2000-01-23T04:56:07.000+00:00",
  "CurrencyId" : 6,
  "ShortDescription" : 5,
  "PayerPaymentToolId" : 1,
  "BeneficiaryPaymentToolId" : "BeneficiaryPaymentToolId",
  "UpdateDate" : "2000-01-23T04:56:07.000+00:00",
  "PlatformDealId" : "PlatformDealId",
  "PlatformPayerId" : "PlatformPayerId",
  "LastErrorCode" : "LastErrorCode",
  "FullDescription" : "FullDescription"
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of registered pull-requests
 *
 * returns List
 **/
exports.getRegisteredPulls = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ "", "" ], [ "", "" ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of registered repositories
 *
 * returns List
 **/
exports.getRegisteredRepos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ "", "" ], [ "", "" ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

