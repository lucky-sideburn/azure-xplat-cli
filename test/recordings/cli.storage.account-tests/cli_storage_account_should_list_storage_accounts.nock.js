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
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '23904a3bfe757473ba39b378e0aaacca',
  date: 'Fri, 13 Mar 2015 09:07:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices')
  .reply(200, "<StorageServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/azsmnet4404</Url><ServiceName>azsmnet4404</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXpzbW5ldDQ0MDQ=</Label><Status>Created</Status><Endpoints><Endpoint>https://azsmnet4404.blob.core.windows.net/</Endpoint><Endpoint>https://azsmnet4404.queue.core.windows.net/</Endpoint><Endpoint>https://azsmnet4404.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-02-27T19:53:35Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/azsmnet7371</Url><ServiceName>azsmnet7371</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXpzbW5ldDczNzE=</Label><Status>Created</Status><Endpoints><Endpoint>https://azsmnet7371.blob.core.windows.net/</Endpoint><Endpoint>https://azsmnet7371.queue.core.windows.net/</Endpoint><Endpoint>https://azsmnet7371.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-07-22T18:52:13Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/hovsepstorage</Url><ServiceName>hovsepstorage</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>aG92c2Vwc3RvcmFnZQ==</Label><Status>Created</Status><Endpoints><Endpoint>https://hovsepstorage.blob.core.windows.net/</Endpoint><Endpoint>https://hovsepstorage.queue.core.windows.net/</Endpoint><Endpoint>https://hovsepstorage.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-09-04T00:13:01Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/psteststo3785</Url><ServiceName>psteststo3785</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>cHN0ZXN0c3RvMzc4NQ==</Label><Status>Created</Status><Endpoints><Endpoint>https://psteststo3785.blob.core.windows.net/</Endpoint><Endpoint>https://psteststo3785.queue.core.windows.net/</Endpoint><Endpoint>https://psteststo3785.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2015-02-27T19:54:10Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage1220</Url><ServiceName>teststorage1220</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2UxMjIw</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage1220.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage1220.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage1220.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-07-09T19:35:26Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage4972</Url><ServiceName>teststorage4972</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U0OTcy</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage4972.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage4972.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage4972.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-30T18:41:42Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage6510</Url><ServiceName>teststorage6510</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U2NTEw</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage6510.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage6510.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage6510.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-07-22T02:39:35Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage7282</Url><ServiceName>teststorage7282</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U3Mjgy</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage7282.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage7282.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage7282.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-07-07T22:07:35Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage7599</Url><ServiceName>teststorage7599</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U3NTk5</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage7599.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage7599.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage7599.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-26T23:56:23Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage7709</Url><ServiceName>teststorage7709</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U3NzA5</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage7709.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage7709.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage7709.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-26T23:18:22Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage8888</Url><ServiceName>teststorage8888</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U4ODg4</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage8888.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage8888.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage8888.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-07-22T01:01:22Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage8893</Url><ServiceName>teststorage8893</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U4ODkz</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage8893.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage8893.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage8893.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-26T21:53:56Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage9408</Url><ServiceName>teststorage9408</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U5NDA4</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage9408.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage9408.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage9408.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-27T07:43:15Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage9607</Url><ServiceName>teststorage9607</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U5NjA3</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage9607.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage9607.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage9607.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-27T09:12:00Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage9971</Url><ServiceName>teststorage9971</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2U5OTcx</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage9971.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage9971.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage9971.table.core.windows.net/</Endpoint><Endpoint>https://teststorage9971.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2014-10-29T10:56:55Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststoragehdeahhzj</Url><ServiceName>teststoragehdeahhzj</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2VoZGVhaGh6ag==</Label><Status>Created</Status><Endpoints><Endpoint>https://teststoragehdeahhzj.blob.core.windows.net/</Endpoint><Endpoint>https://teststoragehdeahhzj.queue.core.windows.net/</Endpoint><Endpoint>https://teststoragehdeahhzj.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-18T08:01:13Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststoragevvnbksef</Url><ServiceName>teststoragevvnbksef</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2V2dm5ia3NlZg==</Label><Status>Created</Status><Endpoints><Endpoint>https://teststoragevvnbksef.blob.core.windows.net/</Endpoint><Endpoint>https://teststoragevvnbksef.queue.core.windows.net/</Endpoint><Endpoint>https://teststoragevvnbksef.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-06-17T19:35:42Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/vmbugrepo</Url><ServiceName>vmbugrepo</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dm1idWdyZXBv</Label><Status>Created</Status><Endpoints><Endpoint>https://vmbugrepo.blob.core.windows.net/</Endpoint><Endpoint>https://vmbugrepo.queue.core.windows.net/</Endpoint><Endpoint>https://vmbugrepo.table.core.windows.net/</Endpoint><Endpoint>https://vmbugrepo.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-10-28T18:40:15Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xcliaccount1151</Url><ServiceName>xcliaccount1151</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>xcliaffinity9112</AffinityGroup><Label>eGNsaWFjY291bnQxMTUx</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount1151.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount1151.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount1151.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-03-13T09:06:59Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xcliaccount9387</Url><ServiceName>xcliaccount9387</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>eGNsaWFjY291bnQ5Mzg3</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount9387.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount9387.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount9387.table.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-03-13T09:06:22Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService></StorageServices>", { 'cache-control': 'no-cache',
  'content-length': '21424',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'daec7a6f94fd766d9bd7d409935e85b1',
  date: 'Fri, 13 Mar 2015 09:07:33 GMT' });
 return result; }]];