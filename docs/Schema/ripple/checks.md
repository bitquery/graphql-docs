# Checks

Checks are a feature in Ripple network that allow users to `create deferred payments that can be canceled or cashed by the intended recipients.`

Bitquery's Ripple Checks API provides you with information on checks created and used on Ripple network. The transaction type of check creation is `CheckCreate`

```
query ($network: RippleNetwork!) {
  ripple(network: $network) {
    checks(
      options: {asc: "timestamp.time", limit: 10, offset: 0}

    ) {
      block
      transaction {
        index
        type
        hash
        sender
      }
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      account {
        address
        annotation
      }
      destination {
        address
        annotation
      }
      sendMax
      send_max_usd: sendMax(in: USD)
      currency {
        symbol
        name
      }
      operation
    }
  }
}
{

  "network": "ripple"
}

```

<details><summary>Filtering Checks</summary>
-   `options`: This object contains options that control the pagination and sorting of the results.
 
-   `date`: This object contains the start and end dates and times of the time range to filter the results by.

- `transactionType`: This field filters the results to only include checks of the specified type. Valid values are `CheckCreate` and `CheckCash`.
- `transactionSender`: This field filters the results to only include checks that were created by the specified address.
- `transactionIndex`: This field filters the results to only include checks that have the specified index in the ledger.
- `transactionHash`: This field filters the results to only include checks that have the specified hash.
- `time`: This field filters the results to only include checks that were created on or after the specified date and time.
- `sourceTag`: This field filters the results to only include checks that have the specified source tag.
- `sendMax`: This field filters the results to only include checks that have a send max of at least the specified amount.
- `sequence`: This field filters the results to only include checks that have the specified sequence number.
- `prevTxnId`: This field filters the results to only include checks that are dependent on the specified transaction ID.
- `prevLedgerSequence`: This field filters the results to only include checks that are dependent on the specified ledger sequence.
- `operation`: This field filters the results to only include checks of the specified operation like for example `CreatedNode`
- `invoiceId`: This field filters the results to only include checks that have the specified invoice ID.
- `flags`: This field filters the results to only include checks that have the specified flags set.
- `expiration`: This field filters the results to only include checks that expire on or before the specified date and time.
- `destinationTag`: This field filters the results to only include checks that have the specified destination tag.
- `destination`: This field filters the results to only include checks that are payable to the specified address.
- `currencySymbol`: This field filters the results to only include checks that are denominated in the specified currency symbol.
- `block`: This field filters the results to only include checks that were included in the specified block.
- `any`

</details>

## Fields

- `block`: The block number in which the check was created.
- `transaction`: The transaction ID of the check creation transaction.
  - `index`: The index of the transaction in the ledger.
  - `type`: The type of transaction, in this case `CheckCreate`
  - `hash`: The hash of the transaction.
- `timestamp`: The timestamp of the check creation.
- `account`: The account that created the check.
- `destination`: The account that the check is payable to.
- `sendMax`: The maximum amount that can be redeemed from the check.
- `send_max_usd`: The maximum amount that can be redeemed from the check in USD.
- `currency`: The currency of the check.
- `operation`: The type of check that was created.
