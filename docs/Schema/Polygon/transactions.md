---
title: Polygon Transaction API
---


<head>
<meta name="title" content="Polygon Transaction API"/>
<meta name="description" content="Get real-time and historical Polygon (Matic) blockchain transaction details with fees details."/>
<meta name="keywords" content="polygon api, polygon python api, polygon transactions, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Transaction API" />
<meta property="og:description" content="Get real-time and historical Polygon (Matic) blockchain transaction details with fees details." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Transaction API" />
<meta property="twitter:description" content="Get real-time and historical Polygon (Matic) blockchain transaction details with fees details." />
</head>


## Transactions

`transactions` type allows you to retrieve all the blockchain transactions from Ethereum Blockchain.

Here's an exmaple query that retrieves 10 latest transactions from Ethereum blockchain:

```
query {
  ethereum (network: matic){
    transactions(
      date: { after: "2023-07-17T00:00:00Z" }
      options: { desc: "block.timestamp.iso8601", limit: 10 }
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
        symbol
      }
      feePayer
      feeRatio
      gas
      gasCurrency {
        address
        name
        symbol
      }
      gasPrice
      gasValue
      hash
      nonce
      sender {
        address
        annotation
      }
      to {
        address
        annotation
      }
      txType
    }
  }
}
```

Read **[this](/docs/Examples/Transactions/transaction-api.md)** to learn more about our Transactions API.

<details>
<summary>Filtering Transactions</summary>

Transactions can be filtered using following arguments:

- `amount`: Filter by amount of tokens transferred in a transaction. Available comparision operators are `between`, `gt`, `gteq`, `in`, `is`, `lt`, `lteq`, `not`, `notIn`.

- `any`:
- `date`: Filter by date on which transaction happened. Date should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`. Available comparision operator are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.

- `feePayer`:
- `feeRatio`:
- `gasCurrency`: Filter by currency used for gas. Available comparision operators are `in`, `is`, `not`, `notIn`.

- `gasValue`: Filter by gas value used in the transaction. Available comparision operators are `between`, `gt`, `gteq`, `in`, `is`, `lt`, `lteq`, `not`, `notIn`.

- `height`: Filter by height of block where transaction happened. Available comparision operators are `between`, `gt`, `gteq`, `in`, `is`, `lt`, `lteq`, `not`, `notIn`.

- `options`: Filter returned data by ordering, limiting and constrainting transaction data. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`


- `success`:
  
- `time`: Filter by time when transaction happened. Time should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`. Available comparision operator are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.

- `txCreates`:
  
- `txHash`: Filter by transaction hash of the transaction. Available comparision operators are `is`, `in`, `not`, `notIn`.

- `txIndex`: Filter by index of transaction in the block. Available comparision operators are `is`, `in`, `not`, `notIn`.

- `txSender`: Filter by address of transaction sender. Available comparision operators are `is`, `in`, `not`, `notIn`.
- `txTo`: Filter by address transaction is sent to. Available comparision operators are `is`, `in`, `not`, `notIn`.
  
- `txType`:

</details>

`transactions` field has following subfield which returns relevant information about blockchain transactions.

- `any`:
- `block`: returns block details in which transaction happened
- `count`: returns aggregate count of transactions
- `countBigInt`: returns aggregate count of transactions in `BigInt` format
- `creates`:
- `currency`: returns details of currency used in tranasction
- `date`: returns date of transaction 
- `error`: returns error value
- `expression`: performs arithematic operation and returns value of the operation
- `feePayer`:  
- `feeRatio`:
- `gas`: returns gas value consumed in transaction 
- `gasCurrency`: returns gas currency used in a particular transaction
- `gasPrice`: returns gas price for a particular transaction
- `gasValue`: returns gas value consumed to perform a particular transaction
- `hash`: returns hash of a particular transaction
- `index`: returns index of a transaction in a block
- `maximum`: returns maximum of selected measurable field of `transactions`
- `minimum`: returns minimum of selected measurable field of `transactions`
- `nonce`: returns nonce of a tranasction
- `sender`: returns address of sender of a particular transaction
- `success`: returns if transaction is success or not
- `to`: returns address to which of a particular transaction was sent
- `txType`: returns transaction type



:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::