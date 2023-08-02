# Transactions

The Solana transactions API allows you to query for transactions on the Solana blockchain. You can use this API to get information about specific transactions, such as the signature, block, transaction fee, success, fee payer, inner instructions count, instructions count, signer, and transaction index.

```
query ($network: SolanaNetwork!, $date: ISO8601DateTime, $height: Int) {
  solana(network: $network) {
    transactions(options: {limit: 10}, date: {is: $date}, height: {is: $height}) {
      signature
      block {
        timestamp {
          time
        }
        height
        parentSlot
        hash
        previousBlockHash
      }
      transactionFee
      success
      feePayer
      innerInstructionsCount
      instructionsCount
      signer
      transactionIndex
    }
  }
}

{
  "network": "solana",
  "height": 208986228,
  "from": "2023-07-26",
  "till": "2023-08-02T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Transactions</summary>

`transactionIndex`: This field allows you to filter transactions by their index in the block.

`transactionFee`: This field allows you to filter transactions by their fee.

`success`: This field allows you to filter transactions by whether or not they were successful.

`signer`: This field allows you to filter transactions by the account that signed the transaction.

`signature`: This field allows you to filter transactions by their signature.

`recentBlockHash`: This field allows you to filter transactions by the hash of the most recent block they were included in.

`previousBlockHash`: This field allows you to filter transactions by the hash of the block that they were included in.

`parentSlot`: This field allows you to filter transactions by the parent slot of the block that they were included in.

`options`: This field allows you to filter returned data by ordering, limiting, and constraining it.

`instructionsCount`: This field allows you to filter transactions by the number of instructions they contain.

`innerInstructionsCount`: This field allows you to filter transactions by the number of inner instructions they contain.

`height`: This field allows you to filter transactions by their height.

`feePayer`: This field allows you to filter transactions by the account that paid the transaction fee.

`fee`: This field allows you to filter transactions by their fee.

`date`: This field allows you to filter transactions by their date.

blockHash: This field allows you to filter transactions by their block hash.

any: This field allows you to filter transactions by any of the other fields in OR condition.

accountsCount: This field allows you to filter transactions by the number of accounts they interact with.

</details>


## Fields


`signature`: The signature of the transaction.

`block`: The block that the transaction was included in.

`transactionFee`: The transaction fee.

`success`: Whether or not the transaction was successful.

`feePayer`: The account that paid the transaction fee.

`innerInstructionsCount`: The number of inner instructions in the transaction.

`instructionsCount`: The total number of instructions in the transaction.

`signer`: The account that signed the transaction.

`transactionIndex`: The index of the transaction in the block.