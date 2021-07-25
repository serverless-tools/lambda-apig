// Payload com autorizador de cognito real.

export default {
    "resource": "/order",
    "path": "/order",
    "httpMethod": "POST",
    "headers": {
        "Authorization": "Bearer *** --- ****",
        "Host": "ctrypytns3.execute-api.us-east-1.amazonaws.com",
        "User-Agent": "Paw/3.2.3 (Macintosh; OS X/11.4.0) GCDHTTPRequest",
        "X-Amzn-Trace-Id": "Root=1-60fc3caa-762ed668029a74127fa6d0aa",
        "X-Forwarded-For": "177.192.10.164",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
        "Authorization": [
            "Bearer eyJraWQiOiJuY1lzVDBJQ2diTHdMTTFxZkp2ODB0REp4RVh4blVUS1RQK0lcL0g1RWRxYz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyNjNmZjVlNi01MjkzLTQ1OWUtODQzNS05NzY1YmNlMmI5MTMiLCJjb2duaXRvOmdyb3VwcyI6WyJBRE1JTiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9xTlQ0N1NTTWkiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiIydDZiNDV1MmFwcXJqamN2NmNnOWxrN2dzZyIsIm9yaWdpbl9qdGkiOiIyNDc3OWRlNi04ZTIyLTQ1NDctYmNjYS1iYjg5ZTUxMGM1Y2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTYyNzE0MjQxMiwiZXhwIjoxNjI3MTQ2MDEyLCJpYXQiOjE2MjcxNDI0MTIsImp0aSI6ImJlZjUzNzc3LTE1YWUtNDgwZi1iMzc1LWUxMjFkYjc1Mzg5ZiIsInVzZXJuYW1lIjoiMjYzZmY1ZTYtNTI5My00NTllLTg0MzUtOTc2NWJjZTJiOTEzIn0.mtGH_a8mEV0dFSA5ZTEzzp4phrjzNl4il3rkGUJ74ROhpt35idYnRyzHgKS9Kjx9u1SPZo_vh54glTsV4GgW2IRQuix1FaOj1T3uu00ZJbm1tXrQGY_XWQ2ui2yMzAPbx0F5W5fQUaYbjDUFofiWh8uk2bqmXh6TFv1v01B59ycdE4md1Leu2glAGjfITnbfGQzfZzVefdAE9EulKjqJmjTnVajZTd7I3zVdLze7bBMcaG02ho3C2tDxFueA6bFb-H3vnt3fpNehG3f4iAMyzUNq9HvsbnBdZRSvQeZ2_N6xPvu0mPcG41AOtTAJxWHSVLOwamqmMsQlV_NctHwFiw"
        ],
        "Host": [
            "ctrypytns3.execute-api.us-east-1.amazonaws.com"
        ],
        "User-Agent": [
            "Paw/3.2.3 (Macintosh; OS X/11.4.0) GCDHTTPRequest"
        ],
        "X-Amzn-Trace-Id": [
            "Root=1-60fc3caa-762ed668029a74127fa6d0aa"
        ],
        "X-Forwarded-For": [
            "177.192.10.164"
        ],
        "X-Forwarded-Port": [
            "443"
        ],
        "X-Forwarded-Proto": [
            "https"
        ]
    },
    "queryStringParameters": null,
    "multiValueQueryStringParameters": null,
    "pathParameters": null,
    "stageVariables": null,
    "requestContext": {
        "resourceId": "ly20ly",
        "authorizer": {
            "claims": {
                "sub": "263ff5e6-5293-459e-8435-9765bce2b913",
                "cognito:groups": "ADMIN",
                "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_qNT99SSMi",
                "version": "2",
                "client_id": "2t6b45u2apqrjjcv6cg9lk7gsg",
                "origin_jti": "24779de6-8e22-4547-bcca-bb89e510c5ce",
                "token_use": "access",
                "scope": "openid email",
                "auth_time": "1627142412",
                "exp": "Sat Jul 24 17:00:12 UTC 2021",
                "iat": "Sat Jul 24 16:00:12 UTC 2021",
                "jti": "bef53777-15ae-480f-b375-e121db75389f",
                "username": "263ff5e6-5293-459e-8435-9765bce2b913"
            }
        },
        "resourcePath": "/ordem",
        "httpMethod": "POST",
        "extendedRequestId": "C-5quENJIAMF21A=",
        "requestTime": "24/Jul/2021:16:15:38 +0000",
        "path": "/prod/ordem",
        "accountId": "916321039000",
        "protocol": "HTTP/1.1",
        "stage": "prod",
        "domainPrefix": "ctrypytns3",
        "requestTimeEpoch": 1627143338873,
        "requestId": "8be7f1c0-b73d-457e-94e1-25491ea26e05",
        "identity": {
            "cognitoIdentityPoolId": null,
            "accountId": null,
            "cognitoIdentityId": null,
            "caller": null,
            "sourceIp": "177.192.10.164",
            "principalOrgId": null,
            "accessKey": null,
            "cognitoAuthenticationType": null,
            "cognitoAuthenticationProvider": null,
            "userArn": null,
            "userAgent": "Paw/3.2.3 (Macintosh; OS X/11.4.0) GCDHTTPRequest",
            "user": null
        },
        "domainName": "ctrypytns3.execute-api.us-east-1.amazonaws.com",
        "apiId": "ctrypytns3"
    },
    "body": null,
    "isBase64Encoded": false
}