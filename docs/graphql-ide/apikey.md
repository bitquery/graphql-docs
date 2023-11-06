---
sidebar_position: 2
---

# API Key

The API Key is a string that we provide so that you can authenticate yourself to Bitquery services, both in the IDE and in your applications the same API Key is used. In order to get your API Key you must go here [User API Key](https://graphql.bitquery.io/user/api_key), there you can see all the API Keys you have created, you can also re-generate your API Key by clicking the `Regenerate API-KEY` button.

:::caution Delay on Re-Generate 

When regenerating an API Key it may take 5-10 minutes for your old API Key to be disabled, during this time the old and new keys will work, the old API Key will be disabled during this time.
:::

## How to use

To make use of the API Key will depend on your application, usually this is passed through the `X-API-KEY` header.

## Why

The use of the API Key is strictly related to the use of the account, this will allow you to register the points you have consumed, and the metrics associated to your account.

:::caution Don't share your API Key

Your API Key is your identity in the system, you have to be very careful to whom and where you place your API Key, as this will directly impact the performance of your account.
:::