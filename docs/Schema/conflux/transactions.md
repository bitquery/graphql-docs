# Conflux Transactions API

```
query ($network: ConfluxNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    transactions(
      options: {desc: "block.height", asc: "address.address", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
        hash
      }
      address: sender {
        address
        annotation
      }
      hash
      gasValue
      gas_value_usd: gasValue(in: USD)
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      creates {
        annotation
        address
      }
      success
    }
  }
}
{
  "network": "conflux_hydra",
  "from": "2023-08-23T11:27:27.000Z",
  "till": "2023-08-23T11:57:27.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Transactions</summary></details>

## Fields

- **block**
  - The block in which the transaction was included.
    - **timestamp**
      - The timestamp of the block in ISO 8601 format.
      - You can use the `time(format: "%Y-%m-%d %H:%M:%S")` function to format the timestamp.
    - **height**
      - The height of the block.
- **address**
  - The address of the sender of the transaction.
  - **annotation**
    - A annotation field that contains any information about the address
- **hash**
  - The hash of the transaction.
- **gas_value_usd**
  - The gas price of the transaction in USD. This is calculated using the current exchange rate.
- **currency**
  - The currency that was transferred, if any.
    - **tokenType**
      - The type of the currency.
    - **tokenId**
      - The token ID, if the transfer is for a token.
    - **symbol**
      - The symbol of the currency.
    - **name**
      - The name of the currency.
    - **decimals**
      - The number of decimal places of the currency.
    - **address**
      - The address of the currency contract, if the transfer is for a token.
- **creates**
  - The address of the contract that was created, if any.
  - **annotation**
    - A annotation field that contains any information about the address
- **success**
  - Whether the transaction was successful.
