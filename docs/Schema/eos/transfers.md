# Transfers

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
