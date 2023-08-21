# Trade Effects

When an offer is fully or partially fulfilled, a trade happens. Trade Effects capture the effects wrt trades. Below are the fields in the schema:

```
query ($network: StellarNetwork!, $hash: String!) {
  stellar(network: $network) {
    tradeEffects(transactionHash: {is: $hash}, options: {limit: 10, offset: 0}) {
      buyAmount
      buyCurrency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      buyIssuer {
        annotation
        address
      }
      operation {
        name
        index
        sourceAccount {
          annotation
          address
        }
      }
      sellAmount
      sellCurrency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      sellIssuer {
        annotation
        address
      }
      seller {
        annotation
        address
      }
      timestamp {
        time
      }
      transaction {
        sender
        index
        hash
      }
      offerId
    }
  }
}
{
  "hash": "tx hash",
  "network": "stellar"
}

```

<details><summary>Filtering TradeEffects</summary>

- **options**

  This object specifies the options for the query. The following fields are supported:

- **asc** or **desc** - The order in which the results should be returned.
- **limit** - The maximum number of results to return.
- **offset** - The offset from the first result to return.
- **date**

  This object specifies the date range for the query.

- **transactionHash**

  This field specifies the hash of the transaction that created the trade effects.

- **transactionSender**

  This field specifies the account that sent the transaction that created the trade effects.

- **transactionIndex**

  This field specifies the index of the transaction that created the trade effects in the ledger.

- **time**

  This field specifies the time at which the trade effects should be filtered for.

- **sellIssuer**

  This field specifies the issuer of the asset that was sold.

- **seller**

  This field specifies the account that sold the asset.

- **sellCurrencyName**

  This field specifies the name of the asset that was sold.

- **sellAmount**

  This field specifies the amount of the asset that was sold.

- **order**

  This field specifies the order in which the results should be returned. The default is `asc` (ascending).

- **opSourceAccount**

  This field specifies the account that was the source of the operation that created the trade effects.

- **opIndex**

  This field specifies the index of the operation that created the trade effects in the transaction.

- **operation**

  This field specifies the type of operation that created the trade effects.

- **offerId**

  This field specifies the ID of the offer that was involved in the trade.

- **effectIndex**

  This field specifies the index of the trade effect in the ledger.

- **buyIssuer**

  This field specifies the issuer of the asset that was bought.

- **buyCurrencyName**

  This field specifies the name of the asset that was bought.

- **buyAmount**

  This field specifies the amount of the asset that was bought.

- **block**

  This field specifies the block number that the trade effects should be filtered for.

- **any**

  This field specifies a catch-all field (OR logic) that can be used to filter for trade effects that match any of the other fields.

- **address**

  This field specifies the address that the trade effects should be filtered for.

</details>

## Fields

- **buyAmount**

  The amount of the buy asset that was traded.

- **buyCurrency**

  The asset that was bought. This can be either a native asset (XLM) or a custom asset.

- **buyIssuer**

  The issuer of the buy asset. This is the account that created the asset.

- **operation**

  The operation that created the trade effect.

- **sellAmount**

  The amount of the sell asset that was traded.

- **sellCurrency**

  The asset that was sold. This can be either a native asset (XLM) or a custom asset.

- **sellIssuer**

  The issuer of the sell asset. This is the account that created the asset.

- **seller**

  The account that sold the asset.

- **timestamp**

  The time at which the trade effect was created.

- **transaction**

  The transaction that created the trade effect.

- **offerId**

  The ID of the offer that was involved in the trade.
