// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-route-table-routes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': '1de08a6b-38e1-46a2-b766-461f4879f0be',
  'x-ms-correlation-request-id': '1de08a6b-38e1-46a2-b766-461f4879f0be',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123026Z:1de08a6b-38e1-46a2-b766-461f4879f0be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:30:25 GMT',
  connection: 'close',
  'content-length': '121' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-route-table-routes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': '1de08a6b-38e1-46a2-b766-461f4879f0be',
  'x-ms-correlation-request-id': '1de08a6b-38e1-46a2-b766-461f4879f0be',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123026Z:1de08a6b-38e1-46a2-b766-461f4879f0be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:30:25 GMT',
  connection: 'close',
  'content-length': '121' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes\",\"name\":\"xplat-test-route-table-routes\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '221',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '6de94e4a-aec6-4b1d-b885-98b52621c566',
  'x-ms-correlation-request-id': '6de94e4a-aec6-4b1d-b885-98b52621c566',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123028Z:6de94e4a-aec6-4b1d-b885-98b52621c566',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:30:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes\",\"name\":\"xplat-test-route-table-routes\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '221',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '6de94e4a-aec6-4b1d-b885-98b52621c566',
  'x-ms-correlation-request-id': '6de94e4a-aec6-4b1d-b885-98b52621c566',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123028Z:6de94e4a-aec6-4b1d-b885-98b52621c566',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:30:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table-routes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6e65713a-251f-4643-a315-107b7d37f51f',
  'x-ms-correlation-request-id': '6e65713a-251f-4643-a315-107b7d37f51f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123030Z:6e65713a-251f-4643-a315-107b7d37f51f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:30:29 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table-routes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6e65713a-251f-4643-a315-107b7d37f51f',
  'x-ms-correlation-request-id': '6e65713a-251f-4643-a315-107b7d37f51f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123030Z:6e65713a-251f-4643-a315-107b7d37f51f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:30:29 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"3e9f19a8-80ff-4df6-8561-133ce55dbf3d\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a0400627-3f29-4a0f-8831-99032a4dc3b1\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '468',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a479bb70-ef2b-4bd7-9759-6f546b6634b2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/a479bb70-ef2b-4bd7-9759-6f546b6634b2?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': 'a640d21d-dd45-4427-9832-b790f59f0d3c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123033Z:a640d21d-dd45-4427-9832-b790f59f0d3c',
  date: 'Fri, 25 Mar 2016 12:30:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"3e9f19a8-80ff-4df6-8561-133ce55dbf3d\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a0400627-3f29-4a0f-8831-99032a4dc3b1\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '468',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a479bb70-ef2b-4bd7-9759-6f546b6634b2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/a479bb70-ef2b-4bd7-9759-6f546b6634b2?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': 'a640d21d-dd45-4427-9832-b790f59f0d3c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123033Z:a640d21d-dd45-4427-9832-b790f59f0d3c',
  date: 'Fri, 25 Mar 2016 12:30:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/a479bb70-ef2b-4bd7-9759-6f546b6634b2?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a67b4007-4d37-4b74-a1a2-09e66612f047',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'd50249e3-74d6-4454-8d6a-73cd490e79c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123104Z:d50249e3-74d6-4454-8d6a-73cd490e79c1',
  date: 'Fri, 25 Mar 2016 12:31:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/a479bb70-ef2b-4bd7-9759-6f546b6634b2?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a67b4007-4d37-4b74-a1a2-09e66612f047',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'd50249e3-74d6-4454-8d6a-73cd490e79c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123104Z:d50249e3-74d6-4454-8d6a-73cd490e79c1',
  date: 'Fri, 25 Mar 2016 12:31:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"d539249e-81b1-46ff-a782-b687f0cde130\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a0400627-3f29-4a0f-8831-99032a4dc3b1\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d539249e-81b1-46ff-a782-b687f0cde130"',
  'x-ms-request-id': '8f99f274-6f1f-43f1-8279-f5040869686e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '5d305ea6-0698-49f1-9ea1-a82b6003795d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123106Z:5d305ea6-0698-49f1-9ea1-a82b6003795d',
  date: 'Fri, 25 Mar 2016 12:31:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"d539249e-81b1-46ff-a782-b687f0cde130\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a0400627-3f29-4a0f-8831-99032a4dc3b1\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d539249e-81b1-46ff-a782-b687f0cde130"',
  'x-ms-request-id': '8f99f274-6f1f-43f1-8279-f5040869686e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '5d305ea6-0698-49f1-9ea1-a82b6003795d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123106Z:5d305ea6-0698-49f1-9ea1-a82b6003795d',
  date: 'Fri, 25 Mar 2016 12:31:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"d539249e-81b1-46ff-a782-b687f0cde130\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a0400627-3f29-4a0f-8831-99032a4dc3b1\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d539249e-81b1-46ff-a782-b687f0cde130"',
  'x-ms-request-id': '8330ed8f-4b13-497a-97c4-a58e63ad785e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '74114e5e-26c5-405b-bb5a-d2250002f5bc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123106Z:74114e5e-26c5-405b-bb5a-d2250002f5bc',
  date: 'Fri, 25 Mar 2016 12:31:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"d539249e-81b1-46ff-a782-b687f0cde130\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a0400627-3f29-4a0f-8831-99032a4dc3b1\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d539249e-81b1-46ff-a782-b687f0cde130"',
  'x-ms-request-id': '8330ed8f-4b13-497a-97c4-a58e63ad785e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '74114e5e-26c5-405b-bb5a-d2250002f5bc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123106Z:74114e5e-26c5-405b-bb5a-d2250002f5bc',
  date: 'Fri, 25 Mar 2016 12:31:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a00cf8e6-2dd2-44ac-99a3-d3de836f5cd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '175c052b-2688-40e9-bc67-a1729b96bf9d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123108Z:175c052b-2688-40e9-bc67-a1729b96bf9d',
  date: 'Fri, 25 Mar 2016 12:31:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a00cf8e6-2dd2-44ac-99a3-d3de836f5cd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '175c052b-2688-40e9-bc67-a1729b96bf9d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123108Z:175c052b-2688-40e9-bc67-a1729b96bf9d',
  date: 'Fri, 25 Mar 2016 12:31:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"25404415-466e-48d3-8c19-01b30925d0aa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '2b40954e-a1cd-41fa-92a3-28257942bb78',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/2b40954e-a1cd-41fa-92a3-28257942bb78?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '48a6acd6-8c9a-448e-833a-24de5d03ac4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123109Z:48a6acd6-8c9a-448e-833a-24de5d03ac4c',
  date: 'Fri, 25 Mar 2016 12:31:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"25404415-466e-48d3-8c19-01b30925d0aa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '2b40954e-a1cd-41fa-92a3-28257942bb78',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/2b40954e-a1cd-41fa-92a3-28257942bb78?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '48a6acd6-8c9a-448e-833a-24de5d03ac4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123109Z:48a6acd6-8c9a-448e-833a-24de5d03ac4c',
  date: 'Fri, 25 Mar 2016 12:31:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/2b40954e-a1cd-41fa-92a3-28257942bb78?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'adace81d-c52d-4bf5-8f87-f7bd22a23a9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '294015f6-27ab-4edc-9a13-d125ef71b53d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123140Z:294015f6-27ab-4edc-9a13-d125ef71b53d',
  date: 'Fri, 25 Mar 2016 12:31:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/2b40954e-a1cd-41fa-92a3-28257942bb78?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'adace81d-c52d-4bf5-8f87-f7bd22a23a9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '294015f6-27ab-4edc-9a13-d125ef71b53d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123140Z:294015f6-27ab-4edc-9a13-d125ef71b53d',
  date: 'Fri, 25 Mar 2016 12:31:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"b8259fdb-3a40-4597-b1c3-b8d33c42b852\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '414',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b8259fdb-3a40-4597-b1c3-b8d33c42b852"',
  'x-ms-request-id': '2d8e6697-e30b-43d6-a1a5-21624d3e1865',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'f0395c64-7386-48b9-89e2-20fd44e3c42a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123141Z:f0395c64-7386-48b9-89e2-20fd44e3c42a',
  date: 'Fri, 25 Mar 2016 12:31:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"b8259fdb-3a40-4597-b1c3-b8d33c42b852\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '414',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b8259fdb-3a40-4597-b1c3-b8d33c42b852"',
  'x-ms-request-id': '2d8e6697-e30b-43d6-a1a5-21624d3e1865',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'f0395c64-7386-48b9-89e2-20fd44e3c42a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T123141Z:f0395c64-7386-48b9-89e2-20fd44e3c42a',
  date: 'Fri, 25 Mar 2016 12:31:41 GMT',
  connection: 'close' });
 return result; }]];