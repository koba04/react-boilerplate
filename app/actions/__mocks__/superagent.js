/* global jest */

// workaround for https://github.com/facebook/jest/issues/61
 
var superagent = jest.genMockFunction().mockReturnThis();
 
var Response = jest.genMockFunction().mockImplementation(function() {
  this.status = 200;
  this.ok = true;
});
 
Response.prototype.get = jest.genMockFunction();
Response.prototype.toError = jest.genMockFunction();
 
var Request = jest.genMockFunction().mockImplementation(function(method, url) {
  this.method = method;
  this.url = url;
});
 
Request.prototype.accept = jest.genMockFunction().mockReturnThis();
Request.prototype.set = jest.genMockFunction().mockReturnThis();
Request.prototype.send = jest.genMockFunction().mockReturnThis();
Request.prototype.field = jest.genMockFunction().mockReturnThis();
Request.prototype.query = jest.genMockFunction().mockReturnThis();
 
Request.prototype.end = jest.genMockFunction().mockImplementation(function(callback) {
  if (superagent.mockDelay) {
    this.delayTimer = setTimeout(callback, 0, superagent.mockError, superagent.mockResponse);
 
    return;
  }
 
  callback(superagent.mockError, superagent.mockResponse);
});
 
Request.prototype.abort = jest.genMockFunction().mockImplementation(function() {
  this.aborted = true;
 
  if (this.delayTimer) {
    clearTimeout(this.delayTimer);
  }
});
 
superagent.Request = Request;
superagent.Response = Response;
 
superagent.mockResponse = new Response();
superagent.mockError = null;
superagent.mockDelay = false;
 
module.exports = superagent;
