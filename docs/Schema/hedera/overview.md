---
sidebar_position: 1
---

# Overview

Our API makes it easy to access different types of data from the Hedera blockchain, like addresses, arguments, calls, and more.

## Getting Started

To use the API, specify the network parameter with the Hedera network name. For example:

```
{
    hedera(network: hedera){
        __typename
    }
}
```

Supported networks:

-   `hedera`: Hedera Mainnet
-   `hedera_testnets`: Hedera Testnet

Let's dive in and explore the Hedera data available through Bitquery API.

## Using the Explorer

You can also use our user-friendly [explorer](https://explorer.bitquery.io/hedera) to interactively explore Hedera blockchain data.

[![Hedera Explorer](/img/hedera-explorer.png)](https://explorer.bitquery.io/hedera)