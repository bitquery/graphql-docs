# BalanceEffects

The Stellar BalanceEffects API allows you to get information about the balance changes of an account.Below are the fields in the API:

```
query ($network: StellarNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $limit: Int!, $offset: Int!) {
  stellar(network: $network) {
    balanceEffects(
      date: {since: $from, till: $till}
      address: {is: $address}
      options: {limit: 10, offset: 0, desc: "block"}
    ) {
      block
      amount
      currency {
        name
        symbol
        decimals
        address
        tokenType
        tokenId
      }
      effectIndex
      issuer {
        address
        annotation
      }
      operation {
        index
        name
        sourceAccount {
          address
          annotation
        }
      }
      order
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

{

  "network": "stellar",
  "address": "GDG4MD4RNOOKIQEV4YIYKKUODPDYIP3MBMXNBKNJ773L44RDLQYXK3YG",
  "from": "2023-08-11",
  "till": "2023-08-18T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering balanceEffects</summary>

- **date:** This field allows you to filter the balance effects by date range.
- **address:** This field allows you to filter the balance effects by the account address.
- **options:** This field allows you to control the pagination and sorting of the results. The `limit` parameter specifies the maximum number of results to return, and the `offset` parameter specifies the starting index of the results. The `desc` or `asc` parameter specifies whether the results should be sorted in descending or ascending order.
- **opSourceAccount:** This field allows you to filter the balance effects by the source account of the operation.
- **opIndex:** This field allows you to filter the balance effects by the operation index.
- **operation:** This field allows you to filter the balance effects by the operation type.
- **issuer:** This field allows you to filter the balance effects by the issuer of the asset.
- **effectIndex:** This field allows you to filter the balance effects by the effect index.
- **transactionSender:** This field allows you to filter the balance effects by the sender of the transaction.
- **transactionIndex:** This field allows you to filter the balance effects by the transaction index.
- **transactionHash:** This field allows you to filter the balance effects by the transaction hash.
- **time:** This field allows you to filter the balance effects by the time of the transaction.
- **order:** This field allows you to specify the order of the results. The possible values are `asc` (ascending) and `desc` (descending).
- **currencyName:** This field allows you to filter the balance effects by the name of the currency.
- **block:** This field allows you to filter the balance effects by the block number.
- **any:** A catch-all field ( OR Logic) that can be used to filter on any other field in the API.
- **amount:** This field allows you to filter the balance effects by the amount of the balance change.

</details>

- **block** : The block number in which the balance effect occurred.
- **amount** : The amount of the balance change.
- **currency** : The currency of the balance change.
  - **name** : The name of the currency.
  - **symbol** : The symbol of the currency.
  - **decimals** : The number of decimal places for the currency.
  - **address** : The address of the issuer of the asset, if any.
  - **tokenType** : The type of the asset.
- **tokenId** : The ID of the asset, if any.
- **effectIndex** : The index of the balance effect in the block.
- **issuer** : The issuer of the currency, if applicable.
- **operation** : The type of operation that caused the balance change including `sourceAccount` address and label
- **order** : The order of the balance effect in the list of balance effects.
- **timestamp** : The timestamp of the balance change.
- **transaction** : The transaction hash that caused the balance change.
