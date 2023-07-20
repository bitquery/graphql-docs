---
sidebar_position: 2
---
# EVM Arguments

You can use the `arguments` method with EVM chains to get arguments and values of transactions, trades and calls.

### Example

The following query uses the EVM arguments API to retrieve information about the arguments that were passed to the Staked event of the smart contract with address `0x7fac371c6222caf705b21489a0a5600a2a773a35`

```
{
  ethereum(network: ethereum) {
    arguments(
      options: {desc: ["block.height"], limit: 10}
      smartContractAddress: {in: "0x7fac371c6222caf705b21489a0a5600a2a773a35"}
      smartContractEvent: {is: "Staked"}
    ) {
      block {
        height
      }
      from: any(of: argument_value, argument: {is: "staker"})
      onBehalfOf: any(of: argument_value, argument: {is: "caller"})
      amount: any(of: argument_value, argument: {is: "amount"})
    }
  }
}
```

The argument field can be used to specify the name of the argument that you want to retrieve. The name of the argument is not fixed, it depends on the event that was emitted. For example, the Staked event has three arguments: `staker`, `caller`, and `amount`.