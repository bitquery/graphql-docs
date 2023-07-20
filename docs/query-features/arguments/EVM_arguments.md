---
sidebar_position: 2
---
# EVM Arguments

You can use the `arguments` method with EVM chains to get arguments and values of transactions, trades and calls.

The data returned from arguments depends on the contract your are querying.

### Example 1

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

### Example 2

```{
  ethereum {
    arguments(
      smartContractAddress: {is: "0x29469395eaf6f95920e59f858042f0e28d98a20b"}
      smartContractMethod: {is: "borrow"}
      options: {desc: "block.height", limit: 6}
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      totalAmount: any(of: argument_value, argument: {is: "offer.totalAmount"})
      minAmount: any(of: argument_value, argument: {is: "offer.minAmount"})
      maxAmount: any(of: argument_value, argument: {is: "offer.maxAmount"})
      loanAmount: any(of: argument_value, argument: {is: "loanAmount"})
      auctionDuration: any(
        of: argument_value
        argument: {is: "offer.auctionDuration"}
      )
      expirationTime: any(of: argument_value, argument: {is: "offer.expirationTime"})
    }
  }
}
```

Here the arguments are completely different.

In this example, the borrow method has six arguments: `offer.totalAmount`, `offer.minAmount`, `offer.maxAmount`, `loanAmount`, `offer.auctionDuration`, and `offer`.`expirationTime`. The argument field is used to specify the name of the argument that you want to retrieve. 

In this case, the `totalAmount`, `minAmount`, `maxAmount`, `loanAmount`, `auctionDuration`, and `expirationTime` arguments are retrieved