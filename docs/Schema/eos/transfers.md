# EOS Transfers API

Bitquery's EOS transfers API gives you information including sender, receiver, currency details. Below are the fields in the schema:

```

query ( $date: ISO8601DateTime) {
  eos {
    transfers(
      options: {desc: "block.height", limit: 10, offset: 0}
      date: {is: $date}
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
      }
      amount
      txHash
      actors
    }
  }
}
{
  "date": "2023-08-22"
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
- **external** : A filter that can be used to select transfers that were external or internal. The `true` value can be used to select transfers that were external, while the `false` value can be used to select transfers that were internal.
- **entityId** : A filter that can be used to select transfers that were associated with a specific EOSIO entity. The entity ID can be used to filter the results.
- **currency** : A filter that can be used to select transfers that transferred a specific currency. The currency address can be used to filter the results.
- **any** : A catch-all filter ( OR logic) that can be used to select transfers that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.
- **amount** : A filter that can be used to select transfers that transferred a specific amount of tokens.

</details>

## Fields

- **block** : The block that the transfer was made in.
  - **timestamp** : The timestamp of the block, in ISO 8601 format.
  - **height** : The block number.
- **sender** : The address that sent the tokens.
  - **address** : The EOS account address of the sender.
  - **annotation** : An optional annotation that was set by the sender.
- **receiver** : The address that received the tokens.
  - **address** : The EOS account address of the receiver.
  - **annotation** : Any information about the address
- **currency** : The currency that was transferred.
  - **address** : The EOS account address of the currency.
  - **symbol** : The symbol of the currency.
- **amount** : The amount of tokens that were transferred.
- **txHash** : The hash of the transaction that made the transfer.
- **actors** : The actors involved in the transfer. This includes the sender, receiver, and any other accounts that were involved in the transaction.
