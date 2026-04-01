---
title: "Stellar Liquidity Pool Trade Effects API"
description: "Query Stellar liquidity pool data using Bitquery GraphQL API. Get liquidity pool trades, reserves, and pool participants."
keywords: ["Stellar API", "Stellar Liquidity Pool Trade Effects", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Stellar Liquidity Pool Trade Effects API"/>
<meta name="description" content="Query Stellar liquidity pool data using Bitquery GraphQL API. Get liquidity pool trades, reserves, and pool participants."/>
<meta name="keywords" content="Stellar API, Stellar Liquidity Pool Trade Effects, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Stellar Liquidity Pool Trade Effects API" />
<meta property="og:description" content="Query Stellar liquidity pool data using Bitquery GraphQL API. Get liquidity pool trades, reserves, and pool participants." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Stellar Liquidity Pool Trade Effects API" />
<meta property="twitter:description" content="Query Stellar liquidity pool data using Bitquery GraphQL API. Get liquidity pool trades, reserves, and pool participants." />
</head>

# Liquidity Pool Trade Effects

Liquidity pools on Stellar support AMMs. Bitquery's Liquidity TradePoolEffects API gives you trade effects information regarding liquidity pools. The following are the fields in the schema:

```
query ($network: StellarNetwork!) {
  stellar(network: $network) {
    liquidityPoolTradeEffects(
      buyIssuer: {is: "an address"}
    ) {
      transaction {
        sender
        index
        hash
      }
      timestamp {
        time
      }
      sellIssuer {
        address
        annotation
      }
      sellCurrency {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      sellAmount
      order
      operation {
        name
        index
      }
      liquidityPoolId
      liquidityPoolDetails
      effectIndex
      buyIssuer {
        address
        annotation
      }
      buyCurrency {
        address
        decimals
        name
        tokenId
        tokenType
        symbol
      }
      buyAmount
      address {
        annotation
        address
      }
    }
  }
}
{
  "network": "stellar"
}

```

<details><summary>Filtering Trade Effects API</summary>

- **buyIssuer**

  The issuer of the asset that was bought in the liquidity pool trade effect. The `is` operator is used to specify that the issuer must be equal to the value of the `$buyIssuer` variable.

- **transactionSender**

  The address of the account that sent the transaction that created the liquidity pool trade effect.

- **transactionIndex**

  The index of the transaction that created the liquidity pool trade effect in the ledger.

- **transactionHash**

  The hash of the transaction that created the liquidity pool trade effect.

- **time**

  The time at which the liquidity pool trade effect was created.

- **sellIssuer**

  The issuer of the asset that was sold in the liquidity pool trade effect. The `is` operator is used to specify that the issuer must be equal to the value of the `$sellIssuer` variable.

- **sellCurrencyName**

  The name of the asset that was sold in the liquidity pool trade effect. The `is` operator is used to specify that the name must be equal to the value of the `$sellCurrencyName` variable.

- **sellAmount**

  The amount of the asset that was sold in the liquidity pool trade effect.

- **options**

  This object specifies the options for the query. The following fields are supported:

  - **limit** - The maximum number of results to return.
  - **offset** - The offset from the first result to return.
  - `asc` or `desc` The liquidity pool trade effects will be ordered in ascending order by the field mentioned

- **opSourceAccount**

  The account that was the source of the liquidity pool trade effect.

- **opIndex**

  The index of the operation that created the liquidity pool trade effect in the transaction.

- **operation**

  The operation that created the liquidity pool trade effect.

- **liquidityPoolId**

  The identifier of the liquidity pool that was involved in the liquidity pool trade effect.

- **liquidityPoolDetails**

  The details of the liquidity pool that was involved in the liquidity pool trade effect. This includes the name, asset pair, and pool type.

- **effectIndex**

  The index of the liquidity pool trade effect in the transaction.

- **date**

  The date on which the liquidity pool trade effect was created.

- **buyCurrencyName**

  The name of the asset that was bought in the liquidity pool trade effect. The `is` operator is used to specify that the name must be equal to the value of the `$buyCurrencyName` variable.

- **buyAmount**

  The amount of the asset that was bought in the liquidity pool trade effect.

- **block**

  The number of the block in which the liquidity pool trade effect was created.

- **any**

  A catch-all field (OR logic) that can be used to filter for liquidity pool trade effects that match any of the other fields.

- **address**

  The address of the account that was affected by the liquidity pool trade effect.

</details>

## Fields

- **transaction**

  The transaction that created the liquidity pool trade effect. This includes the hash, index, and sender of the transaction.

- **timestamp**

  The time at which the liquidity pool trade effect was created.

- **sellIssuer**

  The issuer of the asset that was sold in the liquidity pool trade effect.

- **sellCurrency**

  The asset that was sold in the liquidity pool trade effect in Lumens

- **sellAmount**

  The amount of the asset that was sold in the liquidity pool trade effect.

- **order**

  The order of the liquidity pool trade effect.

- **operation**

  The operation that created the liquidity pool trade effect.

- **liquidityPoolId**

  The identifier of the liquidity pool that was involved in the liquidity pool trade effect.

- **liquidityPoolDetails**

  The details of the liquidity pool that was involved in the liquidity pool trade effect. This includes the name, asset pair, and pool type.

- **effectIndex**

  The index of the liquidity pool trade effect in the transaction.

- **buyIssuer**

  The issuer of the asset that was bought in the liquidity pool trade effect.

- **buyCurrency**

  The asset that was bought in the liquidity pool trade effect in Lumens

- **buyAmount**

  The amount of the asset that was bought in the liquidity pool trade effect.

- **address**

  The address of the account that was affected by the liquidity pool trade effect.

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Stellar Coinpath API](https://docs.bitquery.io/v1/docs/Schema/stellar/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
