# Liquidity PoolEffects

Liquidity pools on Stellar support AMMs. Bitquery's LiquidityPoolEffects API gives you effects information regarding liquidity pools. The following are the fields in the schema:

```
query MyQuery {
  stellar(network: stellar) {
    liquidityPoolTradeEffects(
      transactionHash: {is: "tx hash"}
    ) {
      address {
        address
        annotation
      }
      buyAmount
      buyCurrency {
        decimals
        address
        name
        symbol
        tokenId
        tokenType
      }
      buyIssuer {
        annotation
        address
      }
      effectIndex
      liquidityPoolId
      liquidityPoolDetails
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
        name
        symbol
        decimals
        address
      }
      sellIssuer {
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
    }
  }
}

```

<details><summary>Filtering Effects API</summary>

- **transactionHash**

  The hash of the transaction that created the liquidity pool trade effect.

- **time**

  The time at which the liquidity pool trade effect was created.

- **transactionIndex**

  The index of the liquidity pool trade effect in the transaction.

- **sellIssuer**

  The issuer of the asset that was sold in the liquidity pool trade effect. The `is` operator is used to specify that the issuer must be equal to the value of the `$sellIssuer` variable.

- **sellCurrencyName**

  The name of the asset that was sold in the liquidity pool trade effect. The `is` operator is used to specify that the name must be equal to the value of the `$sellCurrencyName` variable.

- **sellAmount**

  The amount of the asset that was sold in the liquidity pool trade effect.

- **options**

  This object specifies the options for the query. The following fields are supported:

  - **limit** - The maximum number of results to return.
  - **offset** - The offset from the first result to return.
  - `asc` or `desc` The liquidity pool trade effects will be ordered in ascending order by the field mentioned

- **opSourceAccount**

  The account that was the source of the liquidity pool trade effect.

- **opIndex**

  The index of the operation that created the liquidity pool trade effect in the transaction.

- **operation**

  The operation that created the liquidity pool trade effect.

- **liquidityPoolId**

  The identifier of the liquidity pool that was involved in the liquidity pool trade effect.

- **liquidityPoolDetails**

  The details of the liquidity pool that was involved in the liquidity pool trade effect. This includes the name, asset pair, and pool type.

- **effectIndex**

  The index of the liquidity pool trade effect in the transaction.

- **date**

  The date on which the liquidity pool trade effect was created.

- **buyIssuer**

  The issuer of the asset that was bought in the liquidity pool trade effect. The `is` operator is used to specify that the issuer must be equal to the value of the `$buyIssuer` variable.

- **buyCurrencyName**

  The name of the asset that was bought in the liquidity pool trade effect. The `is` operator is used to specify that the name must be equal to the value of the `$buyCurrencyName` variable.

- **buyAmount**

  The amount of the asset that was bought in the liquidity pool trade effect.

- **block**

  The number of the block in which the liquidity pool trade effect was created.

- **any**

  A catch-all field (OR logic) that can be used to filter for liquidity pool trade effects that match any of the other fields.

- **address**

  The address of the account that was affected by the liquidity pool trade effect. The `is` operator is used to specify that the address must be equal to the value of the `$address` variable.

</details>

## Fields

- **transactionHash**

  The hash of the transaction that created the liquidity pool trade effect.

- **address**

  The address of the account that was affected by the liquidity pool trade effect.

- **buyAmount**

  The amount of the asset that was bought in the liquidity pool trade effect.

- **buyCurrency**

  The asset that was bought in the liquidity pool trade effect.

- **buyIssuer**

  The issuer of the asset that was bought in the liquidity pool trade effect.

- **effectIndex**

  The index of the liquidity pool trade effect in the transaction.

- **liquidityPoolId**

  The identifier of the liquidity pool that was involved in the liquidity pool trade effect.

- **liquidityPoolDetails**

  The details of the liquidity pool that was involved in the liquidity pool trade effect. This includes the name, asset pair, and pool type.

- **operation**

  The operation that created the liquidity pool trade effect.

- **sellAmount**

  The amount of the asset that was sold in the liquidity pool trade effect.

- **sellCurrency**

  The asset that was sold in the liquidity pool trade effect.

- **sellIssuer**

  The issuer of the asset that was sold in the liquidity pool trade effect. This is only set if the asset is a custom asset.

- **timestamp**

  The time at which the liquidity pool trade effect was created.

- **transaction**

  The transaction that created the liquidity pool trade effect. This includes the hash, index, and sender of the transaction.
