# Effects

According to the Stellar documentation,

> Effects represent specific changes that occur in the ledger as a
> result of successful operations, but are not necessarily directly
> reflected in the ledger or history, as transactions and operations
> are.

Bitquery Effects API gives you details on the same. Below are the fields in the schema:

```
query ($network: StellarNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  stellar(network: $network) {
    effects(
      options: {desc: "block", limit: 10, offset: 0}
      date: {since: $from, till: $till}
      address: {is: $address}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      block
      transaction {
        hash
        index
      }
      operation {
        index
        sourceAccount {
          annotation
          address
        }
        name
      }
      effect
      index
      order
      details
      address {
        annotation
        address
      }
    }
  }
}
{
  "address": "GDBRKQ43BSDBSCXKPD42RNK3BXDPOYBL6NI6IFSEW2FG7DBNN55435D5",
  "network": "stellar",
  "from": "2023-08-14",
  "till": "2023-08-21T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Effects</summary>

- **options**

  This object specifies the options for the query. The following fields are supported:

  - **asc** or **desc** - The order in which the results should be returned.
  - **limit** - The maximum number of results to return.
  - **offset** - The offset from the first result to return.
  -

- **date**

  This object specifies the date range for the query.

- **transactionSender**

  This field specifies the account that sent the transaction that created the effects.

- **transactionIndex**

  This field specifies the index of the transaction that created the effects in the ledger.

- **transactionHash**

  This field specifies the hash of the transaction that created the effects.

- **time**

  This field specifies the time at which the effects should be filtered for.

- **opSourceAccount**

  This field specifies the account that was the source of the operation that created the effects.

- **opIndex**

  This field specifies the index of the operation that created the effects in the transaction.

- **operation**

  This field specifies the type of operation that created the effects.

- **effectIndex**

  This field specifies the index of the effect in the ledger.

- **effect**

  This field specifies the type of effect that should be filtered for.

- **details**

  This field specifies the details of the effects that should be filtered for.

- **block**

  This field specifies the block number that the effects should be filtered for.

</details>

## Fields

- **timestamp**

  The time at which the effect was created.

- **block**

  The number of the block in which the effect was created.

- **transaction**

  The transaction that created the effect.

- **operation**

  The operation that created the effect.

- **effect**

  The type of the effect, for example `account_debited`

- **index**

  The index of the effect in the ledger.

- **order**

  The order in which the effect was created. This is a unique identifier for the effect within the ledger, but it is relative to other effects created in the same ledger.

- **details**

  A JSON object that contains additional information about the effect including `asset_type` and `asset_issuer`

- **address**

  The account that is the subject of the effect.
