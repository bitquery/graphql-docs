---
sidebar_position: 3
title: "Arguments on Algorand, Hedera & Other Chains — Bitquery API"
description: "Examples of the arguments API on non-EVM chains including Algorand and Hedera with Bitquery GraphQL."
keywords: [Bitquery, GraphQL, arguments, Algorand, Hedera]
---

<head>
<meta name="title" content="Arguments on Algorand, Hedera & Other Chains — Bitquery API"/>
<meta name="description" content="Examples of the arguments API on non-EVM chains including Algorand and Hedera with Bitquery GraphQL."/>
<meta name="keywords" content="Bitquery, GraphQL, arguments, Algorand, Hedera"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Arguments on Algorand, Hedera & Other Chains — Bitquery API" />
<meta property="og:description" content="Examples of the arguments API on non-EVM chains including Algorand and Hedera with Bitquery GraphQL." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Arguments on Algorand, Hedera & Other Chains — Bitquery API" />
<meta property="twitter:description" content="Examples of the arguments API on non-EVM chains including Algorand and Hedera with Bitquery GraphQL." />
</head>

# Using Arguments on Other Chains

Using arguments in other chains varies from one to another. 


```
algorand(network: algorand) {
  arguments(
    options: {limit: 10, desc: "block.height"}
    txHash: {is: "YDCX54GBQJEBM4GLSBYR2KAPPFSJUSF7D7FVRDEAV24GX2B6XFYA"}
  ) {
    argindex
    block {
      height
    }
    firstRound
    genesisId
    note
    smartContract {
      address {
        address
      }
    }
    transaction {
      hash
    }
    txSender {
      address
    }
    txType
    value
  }
}
```


Here' another example on Hedera, as you can see the data returned varies vastly.

```
query MyQuery {
  hedera {
    arguments(options: {limit: 10, desc: "consensusTimestamp.time"}) {
      consensusTimestamp {
        time
      }
      nodeAccount {
        num
        id
        shardId
        realmId
      }
      payerAccount {
        num
        id
        realmId
        shardId
      }
      result {
        id
        name
      }
      smartContractEntity {
        num
        id
      }
      success
      transactionHash
    }
  }
}
```

## Related Resources

- [Arguments overview](https://docs.bitquery.io/v1/docs/query-features/arguments/argument)
- [EVM arguments](https://docs.bitquery.io/v1/docs/query-features/arguments/EVM_arguments)
- [Network selection](https://docs.bitquery.io/v1/docs/building-queries/network-selection)
- [Bitcoin examples](https://docs.bitquery.io/v1/docs/Examples/bitcoin)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)