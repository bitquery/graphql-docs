# Inputs and Outputs

## Getting Spend Volume of a Token

```
query MyQuery {
  flow(network: flow) {
    spendvolume: outputs(
      date: {before: "2023-07-10", after: "2023-07-01"}
      currency: {is: "FlowToken"}
    ) {
      amount(calculate: sum)
      date {
        date
      }
      currency {
        address
        decimals
        name
        symbol
      }
    }
    recievevolume: inputs(
      date: {before: "2023-07-10", after: "2023-07-01"}
      currency: {is: "FlowToken"}
    ) {
      amount(calculate: sum)
      date {
        date
      }
      currency {
        address
        decimals
        name
        symbol
      }
    }
  }
}

```

