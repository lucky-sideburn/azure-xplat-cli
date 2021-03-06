// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/example1.com/MX/test-mx2?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"bb9bfc9f-29c2-47dd-a80a-a7d11f45a12c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-mx2.example1.com\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.com.\",\"preference\":10},{\"exchange\":\"mail2.com.\",\"preference\":10}]}}", { 'cache-control': 'private',
  'content-length': '446',
  'content-type': 'application/json; charset=utf-8',
  etag: 'bb9bfc9f-29c2-47dd-a80a-a7d11f45a12c',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '8a522d6f-748b-42c2-9c4e-482eab9594ba',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'f86e0b83-7535-4b4c-9f0e-417b9c96a288',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T080158Z:f86e0b83-7535-4b4c-9f0e-417b9c96a288',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 08:01:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/example1.com/MX/test-mx2?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"bb9bfc9f-29c2-47dd-a80a-a7d11f45a12c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-mx2.example1.com\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.com.\",\"preference\":10},{\"exchange\":\"mail2.com.\",\"preference\":10}]}}", { 'cache-control': 'private',
  'content-length': '446',
  'content-type': 'application/json; charset=utf-8',
  etag: 'bb9bfc9f-29c2-47dd-a80a-a7d11f45a12c',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '8a522d6f-748b-42c2-9c4e-482eab9594ba',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'f86e0b83-7535-4b4c-9f0e-417b9c96a288',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T080158Z:f86e0b83-7535-4b4c-9f0e-417b9c96a288',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 08:01:58 GMT',
  connection: 'close' });
 return result; }]];
