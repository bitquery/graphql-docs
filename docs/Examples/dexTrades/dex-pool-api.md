# DEX Pools API

In this section, we will look at some examples regarding DEX Pools data.

## Latest Pair Created

The following GraphQL query retrieves data on the latest 50 PairCreated events on the Ethereum network, along with their associated block timestamp, token0 address and name. It uses the ethereum network and the arguments from the query above to filter events based on specific criteria.

```graphql
{
  ethereum(network: ethereum) {
    arguments(
      options: { desc: ["block.timestamp.time"], limit: 50 }
      smartContractEvent: { is: "PairCreated" }
      time: { after: "2023-03-11T18:47:55+00:00" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      token0: any(of: argument_value, argument: { is: "token0" })
      token0Name: any(
        of: argument_value
        argument: { is: "token0" }
        as: token_name
      )
    }
  }
}
```

**Parameters**

- `network`: Specifies the network used for the query. In this case, it is set to "ethereum".
- `smartContractEvent`: Filters the events to include only those with the `PairCreated` event signature.
- `time`: Filters the events to include only those occurring after the specified time.
- `options`: Specifies additional options for the query. In this case, it sorts the events in descending order based on block timestamp and limits the number of events returned to 50.

**Returned Data**

- `block`: Returns information about the block in which the event occurred, including the block timestamp.
- `timestamp`: Returns the block timestamp in a specified format.
- `token0`: Returns the `token0` address associated with the event.
- `token0Name`: Returns the name of the `token0` token, using the `as` parameter to specify the field name.
