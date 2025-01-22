---
sidebar_position: 2
---

# Getting the Access Token

Update: We now use Access Token for both V1 and V2 APIs. You can access the token [here](https://account.bitquery.io/user/api_v2/access_tokens).

The first step is to create an application:

1.  **Create an Application**: Navigate to the [Applications](https://account.bitquery.io/user/api_v2/applications) page and click `Create application`. Enter a name for your application and select an expiration time for the access tokens. Click `Create`.

![Page](/img/v2Access/tab.png)

2.  **Generate Access Token**: We provide two methods to generate a token:

- You can generate a token for your application with a set expiration time.
- Or you can use your client ID-secret from your application to make a POST request to https://oauth2.bitquery.io/oauth2/token and get a token programmatically.

> **If you have no applications created, the `Bearer` token changes every 12 hours. If the token is invalid, you get "Unauthorized" message.**

## Generating a Token with Set Expiration Time

1.  Go to the [Access Token](https://account.bitquery.io/user/api_v2/access_tokens) page and select the application for which you want to generate an access token.

    ![generate](/img/v2Access/generate.png)

2.  Click **Generate Access Token**.
3.  Copy the access token and store it in a secure location.

![copy](/img/v2Access/copytoken.png)

**Using the token:**

To utilize the token you've copied from the api_v2/access_tokens page, use the code generation feature on your IDE to obtain the code in your preferred programming language. However, **remember to paste the token you've copied from the api_v2/access_tokens page**. This is necessary because the IDE code generator only displays temporary tokens.

![temporary](/img/v2Access/temporarytoken.png)

For example, you can include the token in the header as shown below:

```
Authorization: Bearer <access_token>

```

Refer Postman examples [here](https://www.postman.com/interstellar-eclipse-270749/workspace/bitquery)

**Revoking an Access Token**

If you believe that your access token has been compromised, you can revoke it by clicking **Revoke** on the **Applications** page.

![revoke](/img/v2Access/revoke.png)

## Generating a Token Programmatically

Remember that this approach requires more effort to implement. It is suitable for applications with a high risk of token theft or misuse. This approach expects you to programmatically generate an access token using your client ID and client secret of an application.

![client](/img/v2Access/clientid_secret.png)

Below is a code snippet in Python that shows you how to programmatically generate a token and use the API, replace the placeholders with actual information.

Ensure that `scope=api` is mentioned in the payload,

```
import requests
import json


def oAuth_example():

  url = "https://oauth2.bitquery.io/oauth2/token"

  payload = 'grant_type=client_credentials&client_id=YOUR_ID_HERE&client_secret=YOUR_SECRET_HERE&scope=api'

  headers = {'Content-Type': 'application/x-www-form-urlencoded'}

  response = requests.request("POST", url, headers=headers, data=payload)
  resp = json.loads(response.text)
  print(resp)
  access_token=resp['access_token']

  url_graphql = "https://graphql.bitquery.io"
  headers_graphql = {
      'Content-Type': 'application/json',
      'Authorization': f'Bearer {access_token}'
  }

  //use the token to send a request


oAuth_example()
```

The response will include details on `scope` and `expiration time` of the token. A sample response looks like this:

```
{'access_token': 'ory_at_sKK8sSq8', 'expires_in': 2627999, 'scope': 'api', 'token_type': 'bearer'}

```

**Deleting an Application**

If you no longer need an application, you can delete it by clicking **Delete** on the **Applications** page. All the tokens associated with the application will no longer work.

**Billing Considerations**

- Billing remains consistent across API v1 and v2.
- Purchase points once and utilize them for either v1 or v2 in any combination.

:::caution Don't share your Access Token

Your Access Token is your identity in the system, you have to be very careful to whom and where you place your Access Token, as this will directly impact the performance of your account.
:::
