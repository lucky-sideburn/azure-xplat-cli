// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/jobs/xplatParamJob?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:29:01 GMT',
  etag: '0x8D3DB6493E8AD24',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0dd87931-089b-47e9-9a98-8c60763311b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c73c2339-3915-4f29-aae6-2aceb247571d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatParamJob',
  date: 'Mon, 12 Sep 2016 23:29:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/jobs/xplatParamJob?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:29:01 GMT',
  etag: '0x8D3DB6493E8AD24',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0dd87931-089b-47e9-9a98-8c60763311b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c73c2339-3915-4f29-aae6-2aceb247571d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatParamJob',
  date: 'Mon, 12 Sep 2016 23:29:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatParamJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatParamJob\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatParamJob\",\"eTag\":\"0x8D3DB6493E8AD24\",\"lastModified\":\"2016-09-12T23:29:01.4083876Z\",\"creationTime\":\"2016-09-12T23:28:54.9538427Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:28:54.9839232Z\",\"priority\":2,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"PT10H\",\"maxTaskRetryCount\":5\r\n  },\"poolInfo\":{\r\n    \"poolId\":\"pool1\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta1\",\"value\":\"newValue\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:28:54.9839232Z\",\"poolId\":\"pool1\"\r\n  },\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:29:01 GMT',
  etag: '0x8D3DB6493E8AD24',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e4e01ed8-0508-41b4-9de3-2b25eeec18a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '924f3e13-98c8-4364-baf3-559ef1d31262',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:29:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatParamJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatParamJob\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatParamJob\",\"eTag\":\"0x8D3DB6493E8AD24\",\"lastModified\":\"2016-09-12T23:29:01.4083876Z\",\"creationTime\":\"2016-09-12T23:28:54.9538427Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:28:54.9839232Z\",\"priority\":2,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"PT10H\",\"maxTaskRetryCount\":5\r\n  },\"poolInfo\":{\r\n    \"poolId\":\"pool1\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta1\",\"value\":\"newValue\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:28:54.9839232Z\",\"poolId\":\"pool1\"\r\n  },\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:29:01 GMT',
  etag: '0x8D3DB6493E8AD24',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e4e01ed8-0508-41b4-9de3-2b25eeec18a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '924f3e13-98c8-4364-baf3-559ef1d31262',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:29:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/xplatParamJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ad81f080-f14e-4538-90f4-4aaaa90c1434',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e4ab3517-7ec4-4687-a4d8-d6151b8a1e0b',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:29:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/xplatParamJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ad81f080-f14e-4538-90f4-4aaaa90c1434',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e4ab3517-7ec4-4687-a4d8-d6151b8a1e0b',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:29:02 GMT',
  connection: 'close' });
 return result; }]];