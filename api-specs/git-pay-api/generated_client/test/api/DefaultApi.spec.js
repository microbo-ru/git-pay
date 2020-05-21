/**
 * GitPay API
 * Is developed as a part of gitpay.ru project by Microbo team 
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: alexandrdavydenko@yandex.ru
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitPayApi);
  }
}(this, function(expect, GitPayApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitPayApi.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('acceptDeal', function() {
      it('should call acceptDeal successfully', function(done) {
        //uncomment below and update the code to test acceptDeal
        //instance.acceptDeal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNewDeal', function() {
      it('should call addNewDeal successfully', function(done) {
        //uncomment below and update the code to test addNewDeal
        //instance.addNewDeal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelDeal', function() {
      it('should call cancelDeal successfully', function(done) {
        //uncomment below and update the code to test cancelDeal
        //instance.cancelDeal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('commitDeal', function() {
      it('should call commitDeal successfully', function(done) {
        //uncomment below and update the code to test commitDeal
        //instance.commitDeal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDeal', function() {
      it('should call deleteDeal successfully', function(done) {
        //uncomment below and update the code to test deleteDeal
        //instance.deleteDeal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDealDetails', function() {
      it('should call getDealDetails successfully', function(done) {
        //uncomment below and update the code to test getDealDetails
        //instance.getDealDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRegisteredDeals', function() {
      it('should call getRegisteredDeals successfully', function(done) {
        //uncomment below and update the code to test getRegisteredDeals
        //instance.getRegisteredDeals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRegisteredPulls', function() {
      it('should call getRegisteredPulls successfully', function(done) {
        //uncomment below and update the code to test getRegisteredPulls
        //instance.getRegisteredPulls(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRegisteredRepos', function() {
      it('should call getRegisteredRepos successfully', function(done) {
        //uncomment below and update the code to test getRegisteredRepos
        //instance.getRegisteredRepos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
