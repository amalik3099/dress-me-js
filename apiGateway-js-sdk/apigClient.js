/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://1y2qitfifd.execute-api.us-east-1.amazonaws.com/prod';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.closetGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var closetGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/closet').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(closetGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.closetOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var closetOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/closet').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(closetOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.closetClosetGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['closet', 'sub'], ['body']);
        
        var closetClosetGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/closet/{closet}').expand(apiGateway.core.utils.parseParametersToObject(params, ['closet', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['sub']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(closetClosetGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.closetClosetOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var closetClosetOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/closet/{closet}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(closetClosetOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.uploadUserClosetClosetKeyPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['closet', 'key', 'user', 'x-amz-meta-customLabels', 'x-api-key'], ['body']);
        
        var uploadUserClosetClosetKeyPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/upload/{user}/closet/{closet}/{key}').expand(apiGateway.core.utils.parseParametersToObject(params, ['closet', 'key', 'user', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['x-amz-meta-customLabels', 'x-api-key']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(uploadUserClosetClosetKeyPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.uploadUserClosetClosetKeyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var uploadUserClosetClosetKeyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/upload/{user}/closet/{closet}/{key}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(uploadUserClosetClosetKeyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.uploadUserSearchFolderKeyPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['key', 'folder', 'user', 'x-amz-meta-customLabels', 'x-api-key'], ['body']);
        
        var uploadUserSearchFolderKeyPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/upload/{user}/search/{folder}/{key}').expand(apiGateway.core.utils.parseParametersToObject(params, ['key', 'folder', 'user', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['x-amz-meta-customLabels', 'x-api-key']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(uploadUserSearchFolderKeyPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.uploadUserSearchFolderKeyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var uploadUserSearchFolderKeyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/upload/{user}/search/{folder}/{key}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(uploadUserSearchFolderKeyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
