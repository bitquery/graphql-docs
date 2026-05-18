---
title: "Ethereum Trace API Examples"
description: "Example GraphQL queries for EVM transaction traces. Inspect internal calls, gas, and execution trees."
keywords: [Ethereum API examples, trace GraphQL queries, Bitquery]
---

# Ethereum Trace API

**Ethereum Trace API** examples show how to read EVM execution traces in Bitquery: call order, depth, gas, and nested contract flows in Explorer or GraphQL for debugging, analytics, and security review.

**Variations:** Reuse the same flow on other EVM networks in Explorer; plug in any transaction hash that returns trace or internal-call data.

## What is Ethereum Trace?

Use **EVM traces** to reconstruct how a transaction actually ran: nested contract calls, gas, return data, and reverts—so you debug failures, compare gas, and audit DeFi or router flows beyond the outer `from` / `to` on the receipt.

- Step through **internal calls**, not only the top-level `to` / `from` on the receipt.
- Inspect **gas and errors per sub-call** when a batch or router transaction fails partway through.
- Follow **control and value flow** across nested calls, delegatecalls, and multicall-style routers.

Open trace-oriented queries in the IDE with [Call Trace API](https://ide.bitquery.io/Transaction-Call-Trace-v2_1).

**Variations:** Filter IDE examples by transaction hash, network, or block range; start from Explorer’s Calls view, then copy the hash into GraphQL when automating.

Follow this [transaction](https://explorer.bitquery.io/ethereum/tx/0xd3c3e2164ac91c1d70abcce1bc06ef5107367596303e8925041ef4ebcfb39c43/calls) in Explorer to see how **Call depth** maps to EVM execution order in the flat call list.

![tx](/img/transaction.png)

Values like `0` and `0-2-1` encode **execution order** left to right: outer call → nested call → deeper nested call. Rows match the sequence the EVM executed.

Depth **0-2-1** means: root frame **`0`**, then branch index **`2`**, then **`1`** at the next level—so you can walk from the root down to that internal call.

**Variations:** Compare depth strings across Explorer, Bloxy, or your API by anchoring on the same transaction hash; notation lines up once the root call matches.

## Decoding the call sequence visually

The same [transaction](https://explorer.bitquery.io/ethereum/tx/0xd3c3e2164ac91c1d70abcce1bc06ef5107367596303e8925041ef4ebcfb39c43/calls) as a **tree** lets you align Explorer’s flat call list with parent/child relationships in one view.

The call tree looks like the one below.

![trace](/img/trace.png)

The pattern is **multicall-style**: one root fans into multiple contract methods—same contract or several—in a single transaction.

**root**

**root** is the top-level call; here it splits into **burn** and **positions**.

**burn**

**burn** is a **leaf** in this trace—no deeper nested calls under it.

**positions**

**positions** continues into **collect** as the nested child step.

**collect**

**collect** fans into **two** sibling `transfer` calls—parallel branches under the same parent.

**unwrapWETH9**

**unwrapWETH9** calls into another contract, nesting **balanceOf** and **withdraw**.

Compare the shape on [bloxy](https://bloxy.info/tx/0xd3c3e2164ac91c1d70abcce1bc06ef5107367596303e8925041ef4ebcfb39c43#) for an alternate graph layout.

**Variations:** Open other transactions in Bloxy or Explorer side by side; reuse the hash in GraphQL trace queries when you need the same structure in API responses.

## Related Resources

Use these for Ethereum schema reference, Coinpath, the GraphQL IDE, and related API examples.

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Smart contract calls examples](https://docs.bitquery.io/v1/docs/Examples/smartcontractCalls/smart-contract-calls-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)