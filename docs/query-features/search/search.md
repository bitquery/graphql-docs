---
sidebar_position: 1
title: "Search API in Bitquery GraphQL"
description: "Search addresses, tokens, and hashes across chains with the Bitquery search method and typed subject results."
keywords: [Bitquery, GraphQL, search, address, multi-chain]
---

<head>
<meta name="title" content="Search API in Bitquery GraphQL"/>
<meta name="description" content="Search addresses, tokens, and hashes across chains with the Bitquery search method and typed subject results."/>
<meta name="keywords" content="Bitquery, GraphQL, search, address, multi-chain"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Search API in Bitquery GraphQL" />
<meta property="og:description" content="Search addresses, tokens, and hashes across chains with the Bitquery search method and typed subject results." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Search API in Bitquery GraphQL" />
<meta property="twitter:description" content="Search addresses, tokens, and hashes across chains with the Bitquery search method and typed subject results." />
</head>

# Search

The Search method allows you to identify the type of object that was found and the network that it belongs to by typing a string. You can for example type an address and to check which network the address belongs. Each result also has a `subject` field, which has a `__typename` subfield which tells you the type of the object found ( e.g. `Address`).

It also includes a list of possible types for the subject of the search:  `Currency`, `MessageHash`, `SmartContract`, and `TransactionHash`.

```
query MyQuery {
  search(string: "sample string") {
    network {
      network
      protocol
    }
    subject {
      ... on Address {
        address
        annotation
      }
      ... on Currency {
        address
        name
      }
      ... on MessageHash {
        __typename
        messageHash
      }
      ... on SmartContract {
        address
        annotation
      }
      ... on TransactionHash {
        __typename
        hash
      }
    }
  }
}


```

For example, the below query searches all chains using token name "SPECTRE AI" . You can run the query [here](https://ide.bitquery.io/SPECTRE-AI-String-search)


```
query MyQuery {
  search(string: "SPECTRE AI") {
    network {
      network
      protocol
    }
    subject {
      ... on Address {
        address
        annotation
      }
      ... on Currency {
        address
        name
        symbol
        properties
      }
      ... on MessageHash {
        __typename
        messageHash
      }
      ... on SmartContract {
        address
        annotation
        contractType
        protocol
      }
      ... on TransactionHash {
        __typename
        hash
      }
    }
  }
}


```

## Related Resources

- [Network selection](https://docs.bitquery.io/v1/docs/building-queries/network-selection)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Arguments overview](https://docs.bitquery.io/v1/docs/query-features/arguments/argument)
- [Coinpath explained — overview](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)