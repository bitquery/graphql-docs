---
sidebar_position: 3
title: "Integrate Bitquery GraphQL API in Your Application"
description: "Generate language-specific code snippets from the Bitquery IDE, copy your query, and call the GraphQL API with your access token from any stack."
keywords:
  [
    Bitquery integration,
    GraphQL client,
    REST alternative,
    code snippet,
    API in app,
  ]
---

# Use it in Your Application

You can write any API and use it any application built on any language.To get the code, simply write your query and on the right side, you will see a ```</>``` symbol.

![code](/img/ide/codesnippet.png)

Click on the ```</>``` symbol to view the code snippet tab. You can select the langauge from the dropdown and then copy the code snippet.

![language](/img/ide/code_dropdown.png)

## Practical Tips

Integrating Bitquery into an application is mostly a GraphQL client exercise: finalize the query in the IDE, copy the generated snippet for your stack, then call the same HTTP endpoint your snippet uses with a valid access token. The IDE’s code generator is there to reduce boilerplate—headers, endpoint URL, and example variable wiring—so you can paste and adapt rather than hand-writing the first request.

Typical stacks include browser and server JavaScript (fetch, axios, Apollo Client, urql), mobile clients that can issue HTTPS POST, and backend languages (Python, Go, Ruby, Java, .NET) using their HTTP or GraphQL libraries. Anything that can send a **POST** with a JSON body and an **Authorization** (or equivalent) header can run Bitquery; the snippet tab reflects common choices but the underlying contract is standard GraphQL over HTTP.

Authentication is usually a bearer-style token you obtain from the account or API key documentation: your app stores it as a secret on the server or injects it at build time for private dashboards—avoid exposing long-lived keys in public frontends. Refresh or rotate tokens according to your workspace policy, handle 401 and rate-limit responses in one place, and keep query text version-controlled so production and the IDE stay in sync.

- **Workflow:** Author and test in the IDE → copy snippet → replace placeholders with env-based token and variables → add error handling and timeouts.
- **Languages:** Use any HTTP-capable runtime; prefer official or well-maintained GraphQL clients when you need caching, subscriptions, or typed documents.
- **Security:** Keep API tokens on the server side when possible; proxy through your backend if the client must not hold secrets.
- **Consistency:** Treat the IDE as source of truth for the query string; regenerate snippets after substantive query changes to avoid drift.

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [API examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
- [Getting an API access token](https://docs.bitquery.io/v1/docs/graphql-ide/apikey)
- [How to use the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/ide)
- [Getting started with the IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Basic structure of a GraphQL query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
