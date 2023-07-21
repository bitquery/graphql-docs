# UTXO Input output API


[UTXO](https://www.geeksforgeeks.org/what-is-unspent-transaction-output-utxo/) based blockchains such as Bitcoin. Litecoin, Zcash as inputs and outputs. Let's see some examples. 




## All inputs and outputs of a transaction 

To check all inputs and outputs of a Bitcoin transaction, you can use the following query. Additionally, there are filters like `inputScriptType` , `inputAddress`, `inputValue`, which you can use to get transactions based on your requirements.

[Open this query on IDE](https://ide.bitquery.io/All-input-and-outputs-for-a-given-bitcoin-transaction)


```graphql
{
  bitcoin(network: bitcoin) {
    inputs(
      txHash: {is: "54b18b4232719fc7b8445bc2aa0ff5ee598a8a93b5f20334b3b445ed395be60c"}
      options: {asc: "inputIndex"}
    ) {
      inputIndex
      block {
        height
        timestamp {
          time(format: "%y-%d-%m")
        }
      }
      address: inputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      inputScript
      inputScriptType {
        pattern
        simplePattern
      }
      outputTransaction {
        hash
      }
      transaction {
        hash
      }
      value
    }
    outputs(
      txHash: {is: "54b18b4232719fc7b8445bc2aa0ff5ee598a8a93b5f20334b3b445ed395be60c"}
      options: {asc: "outputIndex"}
    ) {
      outputIndex
      address: outputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      outputDirection
      block {
        height
        timestamp {
          time(format: "%y-%d-%m")
        }
      }
      outputDirection
      outputScript
      outputScriptType {
        pattern
        short
        simplePattern
        type
      }
      reqSigs
      transaction {
        hash
      }
    }
  }
}

```
