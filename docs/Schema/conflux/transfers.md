# Conflux Transfers API

```
query ($network: ConfluxNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    transfers(
      options: {desc: "block.height", asc: "currency.symbol"}
      time: {since: $from, till: $till}
      amount: {gt: 0}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
        decimals
        name
        tokenId
        tokenType
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
      entityId
      success
    }
  }
}
{

  "network": "conflux_hydra",
  "from": "2023-08-23T11:32:58.000Z",
  "till": "2023-08-23T12:02:58.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Transfers</summary>

- **options** : A set of options that can be used to filter the results.
  - **asc** or **desc** : The order of the results, either "asc" (ascending) or "desc" (descending).
  - **limit** : The maximum number of results to return. The default is 10.
  - **offset** : The number of results to skip. The default is 0.
- **date** : A filter that can be used to select transfers made within a specified date range.

- **txTo** : A filter that can be used to select transfers that were sent to a specific account address.
- **txHash** : A filter that can be used to select transfers with a specific hash.
- **txFrom** : A filter that can be used to select transfers that were made from a specific account address.
- **time** : A filter that can be used to select transfers created within a specified time range.

- **success** : A filter that can be used to select transfers that were successful or not. The `true` value can be used to select transfers that were successful, while the `false` value can be used to select transfers that were not successful.
- **sender** : A filter that can be used to select transfers that were made by a specific account address. The account address can be used to filter the results.
- **receiver** : A filter that can be used to select transfers that were received by a specific account address. The account address can be used to filter the results.
- **height** : A filter that can be used to select transfers with a specific height. The block number can be used to filter the results.
- **external** : A filter that can be used to select transfers that were external or internal. The `true` value can be used to select transfers that were external, while the `false` value can be used to select transfers that were internal..
- **currency** : A filter that can be used to select transfers that transferred a specific currency. The currency address can be used to filter the results.
- **any** : A catch-all filter ( OR logic) that can be used to select transfers that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.
- **amount** : A filter that can be used to select transfers that transferred a specific amount of tokens.

</details>

## Fields

- **block**

  - The block in which the transfer was included.

    - **timestamp**

      - The timestamp of the block in ISO 8601 format.

    - **height**
      - The height of the block.

- **sender**
  - The address of the sender of the transfer.
  - **annotation**
    - A annotation field that contains any information about the address
- **receiver**
  - The address of the receiver of the transfer.
- **currency**
  - The currency that was transferred.
    - **address**
      - The address of the currency contract.
    - **symbol**
      - The symbol of the currency.
    - **decimals**
      - The number of decimal places of the currency.
    - **name**
      - The name of the currency.
    - **tokenId**
      - The token ID of the token, if the transfer is for a token.
    - **tokenType**
      - The token type of the token, if the transfer is for a token.
- **amount**
  - The amount of currency that was transferred.
- **amount_usd**
  - The amount of currency that was transferred in USD. This is calculated using the current exchange rate.
- **transaction**
  - The hash of the transaction that the transfer was included in.
- **external**
  - A `true` or `false` value that indicates whether the transfer was made to an external address (i.e., not a Conflux address).
- **entityId**
  - The ID of the entity that was transferred, if the transfer is for a token.
- **success**
  - A `true` or `false` value that indicates whether the transfer was successful.
