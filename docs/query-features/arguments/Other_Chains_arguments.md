---
sidebar_position: 3
title: "Arguments on Algorand, Hedera & Other Chains — Bitquery API"
description: "Examples of the arguments API on non-EVM chains including Algorand and Hedera with Bitquery GraphQL."
keywords: [Bitquery, GraphQL, arguments, Algorand, Hedera]
---

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
- [Bitcoin examples](https://docs.bitquery.io/v1/docs/examples/Bitcoin)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)