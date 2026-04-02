---
sidebar_position: 1
title: "Arguments API in Bitquery GraphQL"
description: "Overview of the arguments query for smart contract method and event parameters across EVM and other supported chains."
keywords: [Bitquery, GraphQL, arguments, smart contract, EVM]
---

# Arguments

The arguments query method returns the arguments of a transaction or smart contract call.  Currently arguments are supported on EVM, Algorand, Everscale, Conflux, Harmony, Hedera and Flow.

 The argument field can be used to specify the name of the argument that you want to retrieve. The data returned from this method depends on the chain and contract your are querying.

For detailed examples check

- [EVM](/docs/query-features/arguments/EVM_arguments.md)

- [Other Chains](/docs/query-features/arguments/Other_Chains_arguments.md)

In practice, **arguments** are the decoded parameters that accompany a contract method call or an emitted event. They correspond to what you would see after ABI decoding: function inputs, event topics broken out into named fields, and similar structured payloads. That makes the arguments query a direct bridge between raw on-chain calldata and human-readable contract interaction.

Use arguments when you need to **analyze how contracts are used**—for example, which token amounts appear in swaps, which addresses are passed into governance calls, or which values show up in custom events—without re-decoding transaction input yourself. The shape and availability of fields still depend on the chain, the contract, and how the indexer exposes that contract, so you treat arguments as the indexed, decoded view of interaction data rather than a guarantee of every possible ABI layout.

## When to Use Arguments

- **Contract interaction analysis**: When you are studying how users or protocols call a specific method or emit a particular event, arguments let you filter and aggregate on parameter values instead of only on transaction hashes or addresses.
- **Decoded call data**: When your question is “what was passed into this function?” rather than “did this transaction succeed?”, arguments align with ABI-level semantics (parameter names and types as exposed by the API) rather than opaque hex input.
- **Cross-protocol comparisons**: When comparing similar patterns across contracts (for example, standard interfaces), consistent argument fields make it easier to build comparable metrics across deployments.
- **Narrowing large call sets**: When you already know the contract or method family, combining arguments with your schema’s filters helps you isolate relevant calls before pulling full transaction detail.
- **Validation against off-chain expectations**: When reconciling indexer output with known ABI definitions, argument fields are the right layer to spot mismatches or chain-specific encoding differences.

## Related Resources

- [EVM arguments](https://docs.bitquery.io/v1/docs/query-features/arguments/EVM_arguments)
- [Arguments on other chains](https://docs.bitquery.io/v1/docs/query-features/arguments/Other_Chains_arguments)
- [Network selection](https://docs.bitquery.io/v1/docs/building-queries/network-selection)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)


