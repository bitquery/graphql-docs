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

## When to Use This

On non-EVM chains, **arguments** still represent the inputs attached to contract- or application-level calls, but the parent type, field names, and nested shapes follow that chain’s schema—not the EVM log and ABI layout you may be used to from **ethereum**-style APIs. That means you choose the chain root (for example **algorand** or **hedera**), pass **network** and filters that match that schema, then read chain-specific fields alongside generic concepts like transaction hash, sender, and smart contract address.

The value of this API is forensic and analytical: you can see what was passed into a program call (indices, payloads, notes, or structured values depending on the chain), tie arguments to a block or consensus time, and relate them to the calling account and contract. EVM queries often lean on **arguments** with decoded ABI types; on Algorand, Hedera, and similar chains you rely on the documented fields for that protocol—**value**, **note**, **txType**, Hedera accounts and timestamps, and so on—to reconstruct intent and parameters.

- **Cross-chain mental model:** Treat **arguments** as “call inputs + context” per chain; expect different column sets than EVM and validate against the schema for that network.
- **Parameter inspection:** Use **arguments** when you need what was supplied to a smart contract or application call, not just that a transfer occurred.
- **Filtering by call site:** Combine **arguments** with transaction hash, sender, or contract address filters to zoom in on one invocation or a small set.
- **Ordering results:** Use **options** with **desc** on block height or consensus time so recent activity appears first when exploring unknown traffic.
- **Exploration before deep queries:** Skim field lists in the IDE for the chain you use so you know which parameters are first-class versus opaque blobs.

## Related Resources

- [Arguments overview](https://docs.bitquery.io/v1/docs/query-features/arguments/argument)
- [EVM arguments](https://docs.bitquery.io/v1/docs/query-features/arguments/EVM_arguments)
- [Network selection](https://docs.bitquery.io/v1/docs/building-queries/network-selection)
- [Bitcoin examples](https://docs.bitquery.io/v1/docs/examples/Bitcoin)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)