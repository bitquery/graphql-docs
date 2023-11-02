---
sidebar_position: 2
---

# Tracing Transactions on Explorer

There is a `Tracing` tab available for every transaction in ETH, BSC, and Arbitrum. This feature shows the entire tree of traces, with icons next to each trace item to indicate what type of transaction occurred. 

**Usage:**

1.  Go to the Explorer, select Ethereum, BSC, or Arbitrum Explorer
2.  Go to `Transactions` tab and select a transaction hash.
3.  Click on the Tracing tab.
4.  Press Expand All to view the entire tree of traces. You can also see corresponding icons (money, transfer, return, etc.) displayed next to each trace item.

![tracing](/img/tracing.png)


## Money Flow Trace

Below the Transaction trace, you will see a `Money Flow Diagram` indicating the flow of funds (tokens) from one address to another that occurred in that transaction, making any complicated fund movements easy to visualize. The Tracing feature can be used to investigate a wide range of financial crimes and identify bottlenecks in the financial system.


![flow](/img/flow.png)

If you click on `Get History API` at the bottom you will be taken to the IDE with the corresponding [Events API](https://docs.bitquery.io/docs/examples/events/events_api/) query prewritten. 
In this picture, the funds are first transferred from `0xcd531ae9efcce479654c4926dec5f6209531ca7b` to `0x96f68837877fd0414b55050c9e794aecdbcfca59`. This is a delegated transfer, which means that the funds are still under the control of `0xcd531ae9efcce479654c4926dec5f6209531ca7b`, but they are temporarily being used by `0x96f68837877fd0414b55050c9e794aecdbcfca59`.

`0xcd531ae9efcce479654c4926dec5f6209531ca7b` splits them into two equal parts. One part is used to delegate power to `0x2e7896f7c65ad0a3f98c38a76f32e6b1dbed1ee3`, and the other part is used to undelegate power from `0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9 `.

