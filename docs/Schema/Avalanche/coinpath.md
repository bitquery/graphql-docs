# Avalanche Coinpath API

The Avalanche Coinpath API allows you to get the money flow for an address on the Avalanche blockchain. You can track any levels of fund movement with this API. This is a very useful API for crypto investigations.

```
query ($network: EthereumNetwork!, $address: String!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
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

  "network": "avalanche",
  "address": "wallet address",
  "currency": "AVAX",
  "from": "2023-08-18",
  "till": "2023-08-25T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

<details>
<summary> Filtering Coinpath</summary>

Coinpath data can be filtered using following arguments:

- `currency`: Filter by the currency involved in the transaction.
- `date`: Filter by the date of the transaction.
- `depth`: Filter by the depth of the transaction.
- `initialAddress`: Filter by the initial address.
- `initialDate`: Filter by the initial date.
- `initialTime`: Filter by the initial time.
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `receiver`: Filter by the receiver's address.
- `sender`: Filter by the sender's address.
- `time`: Filter by the time of the transaction.

</details>

The following are available fields for the `coinpath`:

- `amount`: returns the amount of tokens involved in the transaction.
- `any`:
- `block`: returns details of the block where the transaction happened.
- `count`: returns the aggregate count of transactions.
- `countBigInt`: returns the aggregate count of transactions in BigInt format.
- `currency`: returns details of the currency used in the transaction.
- `depth`: returns depth information.
- `maximum`: returns maximum of selected [coinpath measurable fields](/v1/docs/graphql-reference/objects/ethereum-coinpath)
- `minimum`: returns minimum of selected [coinpath measurable fields](/v1/docs/graphql-reference/objects/ethereum-coinpath)
- `receiver`: returns information about the receiver.
- `sender`: returns information about the sender.
- `transaction`: returns transaction details.
- `transactions`: returns attributes of transactions.
