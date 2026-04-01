---
sidebar_position: 1
title: "Arguments API in Bitquery GraphQL"
description: "Overview of the arguments query for smart contract method and event parameters across EVM and other supported chains."
keywords: [Bitquery, GraphQL, arguments, smart contract, EVM]
---

<head>
<meta name="title" content="Arguments API in Bitquery GraphQL"/>
<meta name="description" content="Overview of the arguments query for smart contract method and event parameters across EVM and other supported chains."/>
<meta name="keywords" content="Bitquery, GraphQL, arguments, smart contract, EVM"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Arguments API in Bitquery GraphQL" />
<meta property="og:description" content="Overview of the arguments query for smart contract method and event parameters across EVM and other supported chains." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Arguments API in Bitquery GraphQL" />
<meta property="twitter:description" content="Overview of the arguments query for smart contract method and event parameters across EVM and other supported chains." />
</head>

# Arguments

The arguments query method returns the arguments of a transaction or smart contract call.  Currently arguments are supported on EVM, Algorand, Everscale, Conflux, Harmony, Hedera and Flow.

 The argument field can be used to specify the name of the argument that you want to retrieve. The data returned from this method depends on the chain and contract your are querying.

For detailed examples check

- [EVM](/docs/query-features/arguments/EVM_arguments.md)

- [Other Chains](/docs/query-features/arguments/Other_Chains_arguments.md)

## Related Resources

- [EVM arguments](https://docs.bitquery.io/v1/docs/query-features/arguments/EVM_arguments)
- [Arguments on other chains](https://docs.bitquery.io/v1/docs/query-features/arguments/Other_Chains_arguments)
- [Network selection](https://docs.bitquery.io/v1/docs/building-queries/network-selection)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)


