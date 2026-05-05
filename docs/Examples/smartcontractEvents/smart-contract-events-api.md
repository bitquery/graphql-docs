---
title: "Smart Contract Events API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for EVM smart contract events. Get logs, topics, arguments, and transaction hashes."
keywords: [smart contract API examples, GraphQL queries, Bitquery]
---

# Smart contract event API

The Smart Contract Events API returns parsed event logs with decoded arguments for all supported blockchains. Use it to monitor token transfers, DEX swaps, lending events, governance votes, or any custom event emitted by a smart contract.

## Get Recent Ethereum Smart Contract Events with Parsed Arguments

Fetch the latest smart contract events on Ethereum with decoded argument names and values, contract address, event name, signature hash, and the triggering transaction. Returns events from all contracts in the given date range.

**Variations:** Add `smartContractAddress` to filter events from a specific contract. Use `smartContractEvent: {is: "Transfer"}` for a specific event type. Switch `network` to any EVM chain. Apply [limit/offset](/docs/query-features/filtering/options) for pagination.

[Open this query on IDE](https://ide.bitquery.io/Smart-contract-event-API_1_1)

```graphql
{
	ethereum(network: ethereum) {
		smartContractEvents(
			options: { desc: "block.height", limit: 10, offset: 0 }
			date: { since: "2023-07-24", till: "2023-07-25" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			arguments {
				argument
				value
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			smartContractEvent {
				name
				signatureHash
			}
			transaction {
				hash
				txFrom {
					address
				}
			}
		}
	}
}
```

## Get Ethereum Smart Contract Events for One Pool Contract Address

Get all events emitted by a specific smart contract. This example retrieves events from [AAVE's V3 Pool contract](https://explorer.bitquery.io/ethereum/smart_contract/0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2/events) — useful for monitoring lending activity, liquidations, and protocol state changes.

**Variations:** Replace the contract address with any smart contract. Add `smartContractEvent: {is: "EventName"}` to filter by event type. Use [count aggregation](/docs/query-features/aggregation/count) to see how often each event fires.

[Open this query on IDE](https://ide.bitquery.io/Smart-contract-event-for-Aave-v3-pool)

```graphql
{
	ethereum(network: ethereum) {
		smartContractEvents(
			options: { desc: "block.height", limit: 10, offset: 0 }
			date: { since: "2023-07-24", till: "2023-07-25" }
			smartContractAddress: {
				is: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2"
			}
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			arguments {
				argument
				value
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			smartContractEvent {
				name
				signatureHash
			}
			transaction {
				hash
				txFrom {
					address
				}
			}
		}
	}
}
```

## Get Ethereum Repay Events from Aave V3 Pool Smart Contract

Filter events by both contract address and event name. This example retrieves only `Repay` events from [AAVE's V3 Pool](https://explorer.bitquery.io/ethereum/smart_contract/0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2/events) — useful for tracking loan repayments, building DeFi dashboards, or triggering alerts on specific protocol actions.

**Variations:** Change the event name to `Borrow`, `Supply`, `Liquidation`, or any other event. Add `transaction.txFrom` filter to track events from a specific user. Apply [sorting](/docs/query-features/filtering/sorting) by `block.height` for chronological order.

[Open this query on IDE]https://ide.bitquery.io/Repay-event---Smart-contract-event-for-Aave-v3-pool

```graphql
{
	ethereum(network: ethereum) {
		smartContractEvents(
			options: { desc: "block.height", limit: 10, offset: 0 }
			date: { since: "2023-07-24", till: "2023-07-25" }
			smartContractAddress: {
				is: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2"
			}
			smartContractEvent: { is: "Repay" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			arguments {
				argument
				value
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			smartContractEvent {
				name
				signatureHash
			}
			transaction {
				hash
				txFrom {
					address
				}
			}
		}
	}
}
```

## Get Latest Ethereum Uniswap V2 PairCreated Events from Factory Contract

Track new trading pair deployments by filtering `PairCreated` events from the Uniswap V2 Factory contract ([0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f](https://explorer.bitquery.io/ethereum/smart_contract/0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f)). The event arguments contain the two token addresses and the new pair contract address. [Run query](https://ide.bitquery.io/Ethereum-Get-List-of-Pairs-Created-on-Uniswap).

**Variations:** Replace the factory address with PancakeSwap, SushiSwap, or any Uniswap V2 fork on any EVM chain. Use `argument: {is: "token0"}` with a specific value to find pairs for a given token.

```
{
  ethereum {
    smartContractEvents(
      smartContractAddress: {is: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"}
      smartContractEvent: {is: "PairCreated"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      arguments {
        argument
        index
        value
      }
      block {
        timestamp {
          iso8601
        }
      }
      transaction {
        hash
      }
    }
  }
}
```

## Get BSC PancakeSwap PairCreated Event Arguments from Factory Address

Retrieve parsed event arguments from PancakeSwap's `PairCreated` events on BSC using the `arguments` API. Returns each argument name and value with the transaction hash — useful for indexing newly created liquidity pools. See also [an alternative approach using `any`](https://ide.bitquery.io/Latest-Pair-Created-on-Pancake-Swap_1_1_1).

**Variations:** Replace the factory address with any DEX factory contract. Add `argument: {is: "token0"}` to filter for pairs involving a specific token. Switch `network` for other EVM chains.

```
{
  ethereum(network: bsc) {
    arguments(
      options: {desc: ["block.height", "transaction.hash"], limit: 10}
      smartContractAddress: {in: "0xbcfccbde45ce874adcb698cc183debcf17952812"}
      smartContractEvent: {is: "PairCreated"}
    ) {
      block {
        height
      }
      argument {
        name
      }
      value {
        value
      }
      transaction {
        hash
      }
    }
  }
}
```

## Arguments Filtering

Filter events by specific argument names and values. This query finds `PairCreated` events where `token0` matches a specific address — useful for tracking all pools created for a given token.

```graphql
{
	ethereum(network: bsc) {
		arguments(
			options: {
				desc: ["block.height", "index", "transaction.hash"]
				limit: 10
			}
			smartContractAddress: {
				in: "0xbcfccbde45ce874adcb698cc183debcf17952812"
			}
			smartContractEvent: { is: "PairCreated" }
			argument: { is: "token0" }
			value: { is: "0x1c6b5bb16a12365cc27d83db7302fe2040b897cd" }
		) {
			block {
				height
			}
			index
			argument {
				name
			}
			value {
				value
			}
			transaction {
				hash
			}
		}
	}
}
```

:::note
V1 supports basic argument filtering. For advanced argument aggregation and multi-condition filtering, use the [V2 APIs](https://docs.bitquery.io/docs/examples/events/events-api/) which offer richer capabilities.
:::

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Non-EVM events examples](https://docs.bitquery.io/v1/docs/Examples/smartcontractEvents/Non_EVM_events)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
