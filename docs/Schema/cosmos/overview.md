---
sidebar_position: 1
---

# Overview

Bitquery empowers developers by offering comprehensive access to indexed data from the Cosmos blockchain through our user-friendly and efficient GraphQL API. 

Our Cosmos schema simplifies the process of retrieving blockchain data, providing developers with easy access to various types of indexed information, including detailed data about addresses, attributes, blocks, messages, transactions, and transfers. 

To fetch data using the Cosmos API, simply include the `network` argument and provide the name of the specific network you wish to retrieve data from, as demonstrated below:

```
{
  cosmos(network: cosmoshub) {
    __typename
  }
}
```

Bitquery supports following networks:
- `cosmosbub`: Cosmos Hub
- `heimdall`: Heimdall (Matic Verification Network)
- `crypto_mainnet`: Crypto.org mainnet
- `crypto_testnet`: Crypto.org testnet

Let's dive in and explore the Cosmos data available through Bitquery API.