---
title: "Conflux Smart Contract Events API"
description: "Query Conflux smart contract events data using Bitquery GraphQL API. Get contract events, logs, topics, and decoded payloads."
keywords: ["Conflux API", "Conflux Smart Contract Events", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Conflux Smart Contract Events API"/>
<meta name="description" content="Query Conflux smart contract events data using Bitquery GraphQL API. Get contract events, logs, topics, and decoded payloads."/>
<meta name="keywords" content="Conflux API, Conflux Smart Contract Events, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Conflux Smart Contract Events API" />
<meta property="og:description" content="Query Conflux smart contract events data using Bitquery GraphQL API. Get contract events, logs, topics, and decoded payloads." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Conflux Smart Contract Events API" />
<meta property="twitter:description" content="Query Conflux smart contract events data using Bitquery GraphQL API. Get contract events, logs, topics, and decoded payloads." />
</head>

# Conflux Smart Contract Events API

```
query ($network: ConfluxNetwork!, $hash: String!) {
  conflux(network: $network) {
    smartContractEvents(
      options: {limit: 10, offset: 0}
      txHash: {is: $hash}
    ) {
      smartContract {
        address {
          address
          annotation
        }
        contractType
        protocolType
      }
      smartContractEvent {
        name
        signatureHash
        signature
      }
      count
      transaction {
        hash
      }
    }
  }
}
{

  "network": "conflux_hydra",
  "hash": "tx hash"
}
```

<details><summary>Filtering Events</summary>

Smart contract events can be filtered using the following arguments:

- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
- `date`: filter by date of smart contract events
- `height`: filter by block height where transaction is included
- `options`: filter returned data by ordering, limiting, and constraining it
- `smartContractAddress`: filter by smart contract address
- `smartContractEvent`: filter by name of the smart contract event
- `time`: filter by time of the smart contract event
- `txFrom`: filter by transaction from address
- `txHash`: filter by transaction hash
- `txTo`: filter by transaction to address

</details>

## Fields

- **smartContract**
  - The smart contract that emitted the event.
    - **address**
      - The address of the smart contract.
    - **annotation**
      - A annotation field that contains any information about the address
    - **contractType**
      - The type of the smart contract.
    - **protocolType**
      - The protocol that the smart contract is deployed on.
- **smartContractEvent**
  - The name of the event that was emitted.
  - **signatureHash**
    - The hash of the event signature.
  - **signature**
    - The signature of the event.
- **count**
  - The number of times the event was emitted.
- **transaction**
  - The hash of the transaction that emitted the event.

## Related Resources

- [Conflux schema overview](https://docs.bitquery.io/v1/docs/Schema/conflux/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Conflux Coinpath API](https://docs.bitquery.io/v1/docs/Schema/conflux/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
