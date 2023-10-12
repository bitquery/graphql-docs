# Bitquery Trace API

## What is Ethereum Trace?

An EVM(Ethereum Virtual Machine) trace is a detailed record of the steps taken by the Ethereum Virtual Machine (EVM) to execute a transaction. It includes information such as the gas used, the results of each step, and any errors that occurred.

- EVM traces can be used to debug smart contracts, analyze performance, and investigate smart contract security vulnerabilities.
- EVM traces can be a valuable tool for developers and researchers who want to understand how smart contracts work.
- They can also be used to track the flow of funds on the Ethereum blockchain and to identify potential security vulnerabilities

In this blog, we will learn how to use Bitquery’s Trace API to perform an ethereum transaction trace. Also, here is an example of [Call Trace API](https://ide.bitquery.io/Transaction-Call-Trace-v2_1).

Take an example of this [transaction](https://explorer.bitquery.io/ethereum/tx/0xd3c3e2164ac91c1d70abcce1bc06ef5107367596303e8925041ef4ebcfb39c43/calls):

![tx](/img/transaction.png)

In the Call depth column, you see the numbers starting from 0, 0-2-1 etc. It shows in what sequence the calls were made. This order displayed is the explorer is the order of execution.

For example if call depth is 0-2-1 then,

the first number (0) indicates the outermost call, the second number (2) indicates the second call, and the third number (1) indicates the third call. Like this, we can interpret the call depth for each entry there.

## Decoding the call sequence visually

To make it visually easier, we will use this data to construct a tree.
For this transaction
[https://explorer.bitquery.io/ethereum/tx/0xd3c3e2164ac91c1d70abcce1bc06ef5107367596303e8925041ef4ebcfb39c43/calls](https://explorer.bitquery.io/ethereum/tx/0xd3c3e2164ac91c1d70abcce1bc06ef5107367596303e8925041ef4ebcfb39c43/calls)

The call tree looks like the one below.

![trace](/img/trace.png)

The multicall method initiates call to multiple methods in same/different smartcontracts .

**root**

The call tree starts at the root node, which represents the main function of the smart contract. The root node has two child nodes, burn and positions.

**burn**

The burn node has no child nodes, so it represents a function that does not call any other functions.

**positions**

The positions node has one child node, collect.

**collect**

The collect node has two child nodes, transfer and transfer. These two child nodes represent two separate calls to the transfer function in the same smart contract.

**unwrapWETH9**

The unwrapWETH9 node has two child nodes, balanceOf and withdraw. These two child nodes represent two separate calls to the balanceOf and withdraw functions in a different smart contract.

You can also visualize it through [bloxy](https://bloxy.info/tx/0xd3c3e2164ac91c1d70abcce1bc06ef5107367596303e8925041ef4ebcfb39c43#) graph. I hope you found this blog on blockchain trace informative. If you have any questions, please feel free to leave a comment below.
