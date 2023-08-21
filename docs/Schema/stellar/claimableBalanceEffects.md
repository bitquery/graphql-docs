# Claimable BalanceEffects

Claimable balance allows stellar wallets to send payments in parts.The claimable balance is recorded on the Stellar ledger. Read more [here](https://developers.stellar.org/docs/encyclopedia/claimable-balances)

Bitquery's Claimable BalanceEffects API provides information on the same. Below are the fields in the schema:

```
query MyQuery {
  stellar(network: stellar) {
    claimableBalanceEffects(
      transactionHash: {is: "tx hash"}
    ) {
      amount
      balanceId
      block
      claimant {
        annotation
        address
      }
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      effectIndex
      effect
      issuer {
        annotation
        address
      }
      sponsor {
        annotation
        address
      }
      order
      operation {
        name
        index
      }
      timestamp {
        time
      }
      transaction {
        sender
        index
        hash
      }
    }
  }
}

```

<details> <summary>Filtering claimableBalance Effects</summary>

- **transactionHash**

  The hash of the transaction that created the claimable balance effect.

- **transactionSender**

  The address of the account that sent the transaction that created the claimable balance effect.

- **transactionIndex**

  The index of the transaction that created the claimable balance effect in the ledger.

- **time**

  The time at which the claimable balance effect was created.

- **sponsor**

  The address of the account that sponsored the creation of the claimable balance effect.

- **order**

  The order in which the claimable balance effect was created.

- **options**

This field allows you to control the pagination and sorting of the results. The `limit` parameter specifies the maximum number of results to return, and the `offset` parameter specifies the starting index of the results. The `desc` or `asc` parameter specifies whether the results should be sorted in descending or ascending order.

- **opSourceAccount**

  The address of the account that was the source of the operation that created the claimable balance effect.

- **opIndex**

  The index of the operation that created the claimable balance effect in the transaction.

- **operation**

  The type of the operation that created the claimable balance effect.

- **issuer**

  The address of the account that issued the asset that is the subject of the claimable balance.

- **effectIndex**

  The index of the claimable balance effect in the ledger.

- **effect**

  The type of the claimable balance effect. This can be either `created`, `claimed`, or `deleted`.

- **date**

  The date on which the claimable balance effect was created.

- **currencyName**

  The name of the asset that is the subject of the claimable balance.

- **claimant**

  The address of the account that is the recipient of the claimable balance.

- **block**

  The number of the block in which the claimable balance effect was created.

- **balanceId**

  The unique identifier for the claimable balance.

- **any**

  A catch-all field (OR logic) that can be used to filter for claimable balance effects that match any of the other fields.

- **amount**

  The amount of the asset in the claimable balance.

</details>

## Fields

- **amount**

  The amount of the asset in the claimable balance.

- **balanceId**

  The unique identifier for the claimable balance.

- **block**

  The number of the block in which the claimable balance effect was created.

- **claimant**

  The account that is the recipient of the claimable balance.

- **currency**

  The asset that is the subject of the claimable balance.

- **effectIndex**

  The index of the claimable balance effect in the ledger.

- **effect**

  The type of the claimable balance effect.

- **issuer**

  The account that issued the asset that is the subject of the claimable balance.

- **sponsor**

  The account that sponsored the creation of the claimable balance.

- **order**

  The order in which the claimable balance effect was created.

- **operation**

  The operation that created the claimable balance effect.

- **timestamp**

  The time at which the claimable balance effect was created.

- **transaction**

  The transaction that created the claimable balance effect.
