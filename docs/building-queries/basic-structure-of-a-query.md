---
sidebar_position: 1
---

# Basic Structure of A Query

A query is a request for data from the database. The basic structure of a query is as follows:

```
query ($params: Params!) {
  resource (params: $params) {
    field1: value1
    field2: value2
  }
}
```

The `query` keyword is used to start a query. The params field represents any number of parameters that can be used to filter the results. You can hard-code the filters as well instead of using parameters.


The following is an example of a query that returns the transactions sent and received by the address 0xd576769d320c81fdedb8b7e7e97042d7789134c4:

```
{
  ethereum(network: ethereum) {
    sent: transactions(
      options: {limit: 10000}
      txSender: {is: "0xd576769d320c81fdedb8b7e7e97042d7789134c4"}
    ) {
      block {
        timestamp {
          unixtime
        }
      }
      hash
      amount
      currency {
        name
        symbol
      }
      gasValue
      sender {
        address
      }
      to {
        address
      }
    }
    rec: transactions(
      options: {limit: 10000}
      txTo: {is: "0xd576769d320c81fdedb8b7e7e97042d7789134c4"}
    ) {
      block {
        timestamp {
          unixtime
        }
      }
      hash
      amount
      currency {
        name
        symbol
      }
      gasValue
      sender {
        address
      }
      to {
        address
      }
    }
  }
}
```

This query will return the following fields for each transaction:

- block: The block in which the transaction was included.

- hash: The hash of the transaction.

- amount: The amount of ETH transferred in the transaction.

- currency: The currency of the transaction.

- gasValue: The gas price paid for the transaction.

- sender: The address that sent the transaction.

- to: The address that received the transaction.

The options object is used to filter the results. In this case, the limit option is used to limit the results to 10,000 transactions. The txSender option is used to filter the results to transactions that were sent by the address `0xd576769d320c81fdedb8b7e7e97042d7789134c4`. The txTo option is used to filter the results to transactions that were received by the address `0xd576769d320c81fdedb8b7e7e97042d7789134c4`.