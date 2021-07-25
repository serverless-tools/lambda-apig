import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {Request as ApigRequest} from "@serverless-tools/aws/apigateway/Request";

interface Json 
{
    data?: any
    erro?: string
}

export const handler = async ( event: APIGatewayProxyEvent ): Promise<APIGatewayProxyResult> =>
{
	const req = new ApigRequest(event);
	const json = {} as Json;

	try
	{
		switch (req.method())
		{
			case "POST":
				json.data = await _POST(req);
				break;
				
			case "GET":
				json.data = await _GET(req);
				break;

			default:
				json.erro = "Bad request (method)";
				return req.responseCreate(json, 400)
		}
	}
	catch(e:any)
	{
		req.logErro(e, req);
		json.erro = e;
		return req.responseCreate(json, 500);
	}

	return req.responseCreate(json);
};

async function _POST(req: ApigRequest) 
{
	const payload = req.body(); // parsed object from body string
	const user = req.cognitoAuthorizer()?.user(); // returns CognitoUser object

	return await req.cognitoAuthorizer()?.email(); // Email (id token cames with request, access token has to go through cognito api to get user)
}

async function _GET(req: ApigRequest) 
{
	return req.queryString();
}

