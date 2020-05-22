'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.acceptDeal = function acceptDeal (req, res, next, platformDealId) {
  Default.acceptDeal(platformDealId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addNewDeal = function addNewDeal (req, res, next, body) {
  Default.addNewDeal(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelDeal = function cancelDeal (req, res, next, platformDealId) {
  Default.cancelDeal(platformDealId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commitDeal = function commitDeal (req, res, next, platformDealId) {
  Default.commitDeal(platformDealId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDeal = function deleteDeal (req, res, next, platformDealId) {
  Default.deleteDeal(platformDealId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDealDetails = function getDealDetails (req, res, next, platformDealId) {
  Default.getDealDetails(platformDealId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegisteredDeals = function getRegisteredDeals (req, res, next) {
  Default.getRegisteredDeals()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegisteredPulls = function getRegisteredPulls (req, res, next) {
  Default.getRegisteredPulls()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegisteredRepos = function getRegisteredRepos (req, res, next) {
  Default.getRegisteredRepos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
