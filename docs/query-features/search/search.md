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