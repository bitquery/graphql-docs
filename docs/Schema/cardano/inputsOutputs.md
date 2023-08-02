# Inputs and Outputs

The Inputs and Outputs API schema returns information about the inputs and outputs of a transaction. The schema includes the following fields:

```
query ($network: CardanoNetwork!, $hash: String!) {
  cardano(network: $network) {
    inputs(
      txHash: {is: $hash}
      options: {asc: "inputIndex", limit: 10, offset: 0}
    ) {
      inputIndex
      address: inputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      currency {
        symbol
      }
    }
    outputs(
      txHash: {is: $hash}
      options: {asc: "outputIndex", limit: 10, offset: 0}
    ) {
      outputIndex
      address: outputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      currency {
        symbol
      }
      outputDirection
    }
  }
}
<!-- Parameters -->

{
  "network": "cardano",
  "hash": "bdc00acd38d54ae9beb2ae583f8c0405aca17e509b81803f588fd719b505bc31"
}
```
<details>
<summary>Filtering Input Output</summary>

`date`
The date of the transaction.

`currency`
The currency of the value. 

`height`
The height of the block in which the transaction was included.

`inOutputIndex`
The index of the input or output within the transaction.

`inOutputTxId`
The hash of the transaction that the input or output came from.

`inputAddress`
The address of the input or output.

`inputIndex`
The index of the input within the transaction.

`inputSource`
The source of the input, either "UTxO" or "reward".

`inputValue`
The amount of ADA transferred into the input or output.

`options`
Additional options for the query, such as sorting and pagination.

`time`
The timestamp of the transaction.

`txHash`
The hash of the transaction.

`txIndex`
The index of the transaction within the block.

`outputAddress`
The address of the output.

`outputDirection`
The direction of the output, either "incoming" or "outgoing".

`outputIndex`
The index of the output within the transaction.

`outputValue`
The amount of ADA transferred out of the output.

</details>