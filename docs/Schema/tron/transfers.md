
# Transfers

The `transfers` field allows us to fetch token transfer details from Tron blockchain.

Here is an example that demonstrates how to fetch transfers from a particular block:

```
{
  tron {
    transfers(
      height: {is: 53420250}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

<details>
<summary>Filtering Transfer</summary>

- `amount`: filter by amount of token transferred
- `any`:
- `contractType`: filter by contract type
- `currency`: filter by currency address
- `date`: filter by date of the transfer
- `entityId`: filter by ERC-721 entity id
- `external`: filter by if call is external or internal
- `height`: filter by block where transaction is included
- `options`: filter returned data by ordering, limiting, and constraining it
- `receiver`: filter by address of receiver
- `sender`: filter by address of sender
- `success`: filter by success of transaction
- `time`: filter by time of transaction
- `txFrom`: filter by address that executed the transaction
- `txHash`: filter by transaction hash
- `txTo`: filter by address where transaction was sent

</details>

- `amount`: returns transfer amount
- `any`:
- `block`: returns block where transaction is included
- `contractType`: returns contract type
- `count`: returns count and other metrics
- `countBigInt`: returns count and other metrics as BigInt
- `currency`: returns currency of transfer
- `date`: returns date of transaction
- `energyUsageTotal`: returns total energy usage for transfer
- `entityId`: returns ERC-721 entity Id
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `external`: returns if transfer is external or internal
- `fee`: returns fee consumed for transfer
- `maximum`: returns maximum of selected measurable field of [Tron Transfers](/v1/docs/graphql-reference/enums/tron-transfers-measureable)
- `minimum`: returns minimum of selected measurable field of [Tron Transfers](/v1/docs/graphql-reference/enums/tron-transfers-measureable)
- `netUsage`: 
- `receiver`: returns address of transfer receiver
- `sender`: returns address of transfer sender
- `success`: returns success of transfer
- `txFrom`: returns transaction from address
- `txHash`: returns transaction hash
- `txTo`: returns transaction to address