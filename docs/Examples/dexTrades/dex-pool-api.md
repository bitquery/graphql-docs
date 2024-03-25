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

## FDV of a Token

Fully Diluted Valuation (FDV) of a crypto token is a metric that projects the total market capitalization of a cryptocurrency if all its tokens were to be in circulation. It is calculated using the formula: `Token Price x Total Supply`.

Investors use FDV to assess possible inflationary impact on the value of their holdings.  A high FDV relative to the current market cap may indicate that a significant amount of tokens is yet to enter circulation, which could lead to dilution of value for current token holders if demand does not increase proportionately with the increase in supply. 

Conversely, a closer parity between FDV and market cap might suggest that most of the tokens are already in circulation, potentially providing a more stable investment outlook.

While you cannot calculate FDV on the IDE directly, you can retrieve the data needed easily and calculate the final value in your local system.

To calculate supply, we will use the formula,

`Total supply = Initial Supply + Minted supply - Burned supply` . You can find a sample query to calculate total supply [here](https://ide.bitquery.io/Total-supply-of-FTC-token)


To get the latest price, you can use our DEXTrades API. Here's an [example](https://ide.bitquery.io/Latest-price-of-ERUTA).

Once you have both values, you can multiply and get the FDV.

