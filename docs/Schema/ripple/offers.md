# Offers

The offers query can be used to get information about all of the offers that have been created by a specific account. Below are the fields in the API:

```
query MyQuery {
  ripple(network: ripple) {
    offers(transactionHash: {is: "hash of the tx"}) {
      transaction {
        hash
        index
        sender
        type
      }
      timestamp {
        time
      }
      takerPaysCurrency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      takerPaysAmount
      takerGetsCurrency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      takerGetsAmount
      sequence
      prevTxnId
      prevLedgerSequence
      preTakerPaysAmount
      preTakerGetsAmount
      operation
      flags
      expiration
      bookNode
      bookDirectory
      block
      account {
        annotation
        address
      }
    }
  }
}

```

<details><summary>Filtering Offers</summary>

- `options`: This field specifies the options for the query, such as the order of the results and the number of results to return.

- `date`: This field specifies the date range for the offers.

- `transactionHash`: This field specifies the transaction hash of the offers.
  transaction hash.
- `transactionType`: This field specifies the type of transaction for the offers.
- `transactionSender`: This field specifies the address of the sender of the transactions.
- `transactionIndex`: This field specifies the index of the transaction in the ledger.
- `time`: This field specifies the timestamp of the transactions.
- `takerPaysCurrencySymbol`: This field specifies the symbol of the currency that the taker pays.
- `takerPaysAmount`: This field specifies the amount of the currency that the taker pays.
- `takerGetsCurrencySymbol`: This field specifies the symbol of the currency that the taker receives.
- `takerGetsAmount`: This field specifies the amount of the currency that the taker receives.
- `sequence`: This field specifies the sequence number of the transactions.
- `prevTxnId`: This field specifies the previous transaction ID of the transactions.
- `prevLedgerSequence`: This field specifies the previous ledger sequence of the transactions.
- `preTakerPaysAmount`: This field specifies the amount of the currency that the taker pays before fees.
- `preTakerGetsAmount`: This field specifies the amount of the currency that the taker receives before fees.
- `operation`: This field specifies the operation type of the transactions.
- `flags`: This field specifies the flags of the transactions.
- `expiration`: This field specifies the expiration time of the transactions.
- `bookNode`: This field specifies the book node of the transactions.
- `bookDirectory`: This field specifies the book directory of the transactions.
- `block`: This field specifies the block number of the transactions.
- `any`: A catch-all field ( OR Logic) that can be used to filter on any other field in the payments API.
- `account`: This field specifies the account that created the transactions.

</details>

## Fields

- **transaction**
  - **hash**
    - The hash of the transaction that created the offer.
  - **index**
    - The index of the transaction that created the offer.
  - **sender**
    - The address of the account that created the offer.
  - **type**
    - The type of the transaction that created the offer.
- **timestamp**
  - **time**
    - The time at which the offer was created.
- **takerPaysCurrency**
  - **tokenType**
    - The type of the currency that the offer is paying.
  - **tokenId**
    - The ID of the token, if any.
  - **symbol**
    - The symbol of the currency.
  - **name**
    - The name of the currency.
  - **decimals**
    - The number of decimal places in the currency.
  - **address**
    - The address of the account that holds the currency.
- **takerPaysAmount**
  - The amount of currency that the offer is paying.
- **takerGetsCurrency**
  - **tokenType**
    - The type of the currency that the offer is getting.
  - **tokenId**
    - The ID of the token, if any.
  - **symbol**
    - The symbol of the currency.
  - **name**
    - The name of the currency.
  - **decimals**
    - The number of decimal places in the currency.
  - **address**
    - The smart contract address of the currency.
- **takerGetsAmount**
  - The amount of currency that the offer is getting.
- **sequence**
  - The sequence number of the offer.
- **prevTxnId**
  - The transaction ID of the previous transaction that modified the offer.
- **prevLedgerSequence**
  - The ledger sequence of the previous transaction that modified the offer.
- **preTakerPaysAmount**
  - The amount of currency that was being paid by the offer before it was modified.
- **preTakerGetsAmount**
  - The amount of currency that was being received by the offer before it was modified.
- **operation**
  - The type of operation that modified the offer.
- **flags**
  - The flags of the offer.
- **expiration**
  - The time at which the offer will expire.
- **bookNode**
  - The book node of the offer.
- **bookDirectory**
  - The book directory of the offer.
- **block**
  - The block number where the offer was created.
- **account**

  - **address**
    - The address of the account that created the offer.
  - **annotation**
    - A label to store any additional information about the address.
