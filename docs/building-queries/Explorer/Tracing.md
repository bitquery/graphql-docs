---
sidebar_position: 2
---

# Tracing Transactions on Explorer

There is a `Tracing` tab available for every transaction in ETH, BSC, and Arbitrum. This feature shows the entire tree of traces, with icons next to each trace item to indicate what type of transaction it was, making any complicated fund flow easy to visualize.

**Usage:**

1.  Go to the Explorer, select Ethereum, BSC or Arbitrum Explorer
2.  Go to `Transactions` tab and select a transaction hash.
3.  Click on the Tracing tab.
4.  Press Expand All to view the entire tree of traces . You can also see corresponding icons (money, transfer, return, etc.) displayed next to each trace item.

![tracing](/img/tracing.png)


## Money Flow Trace

Below the Transaction trace, you will see a `Money Flow Diagram` indicating the flow of funds (tokens) from one address to another that occured in that transaction.


![flow](/img/flow.png)


If you click on `Get History API` at the bottom you will be taken to the IDE with the corresponsing [Events API](https://docs.bitquery.io/docs/examples/events/events_api/) query prewritten.
