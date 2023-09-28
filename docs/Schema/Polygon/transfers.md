---
title: Polygon Token Transfer API
description: Get real time and historical Token Transfer details for tokens on the Polygon blockchain using our Transfer API, including transfers for individual addresses.
keywords: [polygon api, polygon python api, polygon transfers, polygon transactions, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api]
---

<!-- <head>
<meta name="title" content="Polygon Token Transfer API"/>
<meta name="description" content="Get real time and historical Token Transfer details for tokens on the Polygon blockchain using our Transfer API, including transfers for individual addresses."/>
<meta name="keywords" content="polygon api, polygon python api, polygon transfers, polygon transactions, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Token Transfer API" />
<meta property="og:description" content="Get real time and historical Token Transfer details for tokens on the Polygon blockchain using our Transfer API, including transfers for individual addresses." />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Token Transfer API" />
<meta property="twitter:description" content="Get real time and historical Token Transfer details for tokens on the Polygon blockchain using our Transfer API, including transfers for individual addresses." />
</head> -->


## Transfers

`transfers` type allows you to retrieve currency or token transfers from Ethereum Blockchain.

Here's an example query that retrieves the first 10 transfers of USDT tokens between June 17th and June 18th, 2023. The results are sorted based on the timestamp of each transfer in descending order.

```
query {
  ethereum(network: matic) {
    transfers(
      currency: { is: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F" }
      date: { between: ["2023-07-17T00:00:00Z", "2023-07-18T00:00:00Z"] }
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
      gasValue
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
      transaction {
        hash
      }
    }
  }
}
```

Read **[this](/docs/Examples/Transfers/transfer-api.md)** to learn more about transfers API.


<details>
<summary>Filtering Transfers</summary>

Data retrieved using `transfers` can be filtered using following arguments:

- `amount`: Filter by amount of tokens transferred in a transfer
  
  Available comparision operators are `between`, `gt`, `gteq`, `in`, `is`, `lt`, `lteq`, `not`, `notIn`.

- `currency`: Filter by currency used in a transfer. Currencies supported are native tokens like ETH/ETC, ERC20, ERC721 tokens. For native currencies you can use symbols of them, for contract use address of that contract.

  Available comparision operators are `in`, `is`, `not`, `notIn`

- `date`: Filter by date on which transfer happened. Date should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`

  Available comparision operator are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.


- `entityId`: Filter by ERC-721 entity Id

- `external`:

- `height`: Filter by height of Block where transaction happened.

  Available comparision operators are `between`, `gt`, `gteq`, `in`, `is`, `lt`, `lteq`, `not`, `notIn`.

- `options`: Filter returned data by ordering, limiting and constrainting transfer data.
  
  Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset` 

- `receiver`: Filter by receiver of the transfer. 
   
  Available comparision operators are `in`, `is`, `not`, `notIn`

- `sender`: Filter by sender of the transfer. 
  
  Available comparision operators are `in`, `is`, `not`, `notIn`

- `success`: Filter by if transaction is successful or not

- `time`: Filter by time when transfer happened. Time should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`

  Available comparision operator are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.

- `txFrom`: Filter by the address responsible for creating the transaction. Available comparision operators are `in`, `is`, `not`, `notIn`.

  Read the difference between transfers and transaction in Bitquery API here.

- `txHash`: Filter by transaction hash of the transfer.
  
  Available comparision operators are `is`, `in`, `not`, `notIn`.

</details>

`transfers` field has following subfield which returns relevant infomation about currency transfers.

- `amount`: returns amount of currency transferred
- `any`: 
- `block`: returns block in which transfer happened
- `count`: returns aggregate count of transfers
- `countBigInt`: returns aggregate coutn of transfers in `BigInt` format
- `currency`: returns details of currency used in transfer
- `date`: returns date of transfer
- `entityId`: returns entity identifier for ERC-721 tokens
- `expression`: performs arithematic operation and returns value of the operation
- `external`: 
- `gasValue`: returns gas value consumed to perform a particular transfer
- `maximum`: returns maximum of [selected measurable](/v1/docs/graphql-reference/enums/ethereum-transfers-measureable) field of `transfers`
- `minimum`: returns minimum of [selected measurable](/v1/docs/graphql-reference/enums/ethereum-transfers-measureable) field of `transfers`
- `receiver`: returns receiver of a particular transfer
- `sender`: returns sender of a particular transfer
- `success`: returns boolean value for success of a particular transfer
- `transaction`: returns details of transaction in which a particular transfer 


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::