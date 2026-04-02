---
sidebar_position: 1
title: "Search API in Bitquery GraphQL"
description: "Search addresses, tokens, and hashes across chains with the Bitquery search method and typed subject results."
keywords: [Bitquery, GraphQL, search, address, multi-chain]
---

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

## When to Use This

**Search** is built for discovery when you have an incomplete or human-facing string—an address fragment, a token name, a symbol, or a hash—and you want the API to tell you what it might be and which **network** it belongs to. It complements typed, schema-driven queries: instead of choosing a chain and a field filter up front, you supply a string and interpret **subject** (via **__typename** and fragments) to learn whether you hit an address, currency, contract, transaction hash, or message hash.

Use filtered queries on a specific chain when you already know the network, entity type, and filter fields; use **search** when the user pasted something ambiguous, when you are building a global lookup box, or when you need to resolve “SPECTRE AI” or a partial symbol across protocols. Search answers “what is this string?”; filtered queries answer “give me all rows matching these precise conditions on this network.”

- **Wallet or explorer UX:** Resolve pasted text to an address, token, or tx with network context before you run detail queries.
- **Token or name lookup:** Find currencies or contracts by name or symbol when the user does not know the canonical address.
- **Ambiguous hashes:** Let **subject** discriminate transaction hashes, message hashes, and related types instead of guessing which root query to call.
- **After search, drill down:** Take the returned **network** and **subject** fields and follow up with narrow, filtered queries for balances, transfers, or events on that chain only.

## Related Resources

- [Network selection](https://docs.bitquery.io/v1/docs/building-queries/network-selection)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Arguments overview](https://docs.bitquery.io/v1/docs/query-features/arguments/argument)
- [Coinpath explained — overview](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)