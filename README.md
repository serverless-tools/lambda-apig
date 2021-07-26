# Typescript Lambda API Gateway Example

# `How to deploy`

1. Create the AWS Lambda Node 14.x function.
2. Check your terminal AWS_PROFILE enviroment variable. The script uses `aws cli` to deploy (ensure that you have)
3. Check Lambda ARN in `package.json` configs 
4. > `npm run deploy`

# `npm run`

#### Local test and cloudwatch log (for remote test helper)
- `test`: local test (change payload event in `src/test.ts`)
- `log`: realtime tail cloudwatch log

#### Clear, Validate and Build (a bundle /dist/index)
- `clear`: rm deploy.zip dist/ deploy/
- `validate`: typescript validate
- `build`: npm run clear && ts-node src/esbuild (ESBuild create bundled file /dits/index.js)

#### Zip and deploy
- `zip`: npm run build && ./scripts/zip.sh
- `deploy`: npm run zip && ./scripts/deploy.sh $npm_package_config_lambda

# `index.handle`

```typescript
import {Request as ApigRequest} from "@serverless-tools/aws/apigateway/Request";

export const handler = async ( event: APIGatewayProxyEvent ): Promise<APIGatewayProxyResult> =>
{
	const req = new ApigRequest(event);
	const json = {} as IJsonRetorno;

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

	return req.responseCreate(json); // CORS * enable by default
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
```

> Check [@serverless-tools/aws](https://github.com/serverless-tools/aws)
