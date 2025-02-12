# Transfer API

Our Tron Transfers API rpovides detailed information about token transfers made on the Tron blockchain.

## Get latest transfer for a token

```
{
  tron {
    transfers(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

This query retrieves the latest 10 transfers of a specific currency ("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t") on the Tron network that occurred after July 31, 2023. It provides details such as transfer amount, block timestamp, currency address and name, receiver and sender addresses, and transaction hash.

## Get latest transfers by receivers

In this query we use the `reciever` filter to get all transfers sent to an address on Tron. You can run it [here](https://ide.bitquery.io/tron-transactions-by-receiver)

```
{
  tron {
    transfers(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      receiver: {is: "TShuppF9wx9Ddx7ih1E2o88QskXeqQpGKE"}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

This query retrieves the latest 10 transfers on the Tron network for the currency "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" that occurred after July 31, 2023, where the specified receiver address is "TShuppF9wx9Ddx7ih1E2o88QskXeqQpGKE". It provides details such as transfer amount, block timestamp, currency address and name, receiver address, sender address, and transaction hash.

## Filter transfers by block height

```
{
  tron {
    transfers(
      height: {is: 53420256}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

This query retrieves transfers on the Tron network that occurred at block height 53420256, providing details such as transfer amount, block timestamp, currency address and name, receiver address, sender address, and transaction hash.

## Tron Transfers Both Inflow and Outflow

The following query is used to fetch the total incoming and outgoing transfers for a specific address on the Tron network.

For both incoming and outgoing transfers, the total value of transfers and the currency name are returned.You can run the query [here](https://ide.bitquery.io/Tron-Transfer-API)

```
query MyQuery {
  tron(network: tron) {
    incoming_txs: transfers(receiver: {is: "TMfXyeQPYfgrG4NqpoTnksGPCUJBYmEedQ"}) {
      total_value: amount(calculate: sum)
      currency {
        name
      }
    }
    outgoing_txs: transfers(sender: {is: "TMfXyeQPYfgrG4NqpoTnksGPCUJBYmEedQ"}) {
      total_value: amount(calculate: sum)
      currency {
        name
      }
    }
  }
}
```
