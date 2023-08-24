# Conflux Coinpath API

The Conflux Coinpath API allows you to get the money flow for an address on the Conflux blockchain. You can track any levels of fund movement with this API. This is a very useful API for crypto investigations.

```
 query ($network: ConfluxNetwork!, $address: String!,  $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
    }
    outbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
    }
  }
}
{

  "network": "conflux_hydra",
  "address": "cfx:address here",
  "currency": "CFX",
  "from": "2023-08-17",
  "till": "2023-08-24T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Coinpath</summary>

- **initialAddress** The address of the account whose coinpath you want to retrieve.
- **currency** The currency you want to filter the results by.
- **depth** The maximum depth of the coinpath to retrieve.
- **options**
  - **direction** The direction of the coinpath. Can be `inbound` or `outbound`.
  - **asc** or **desc**: The field to sort the results by in ascending
    or descending order.
  - **limitBy** The field to limit the results by.
  - **date** The date range of the transactions to return.

</details>

## Fields

- **initialAddress** The address of the account whose coinpath you want to retrieve.
- **sender**

  - **address** The address of the sender of the transaction.
  - **annotation** Any additional information about the address.
  - **smartContract** Address of the smart contract involved in the

- **receiver**
  - **address** The address of the receiver of the transaction.
  - **annotation** The annotation for the address that contains additional information.
  - **smartContract** Information about the smart contract that was involved in the transaction, if any.
- **amount** The total amount of tokens transferred in the coinpath.
- **currency** The currency of the tokens transferred in the coinpath.
- **depth** The depth of the coinpath.
- **count** The number of transactions in the coinpath.
- **block** The block in which the first transaction in the coinpath was included.
