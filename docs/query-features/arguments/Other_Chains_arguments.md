---
sidebar_position: 3
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