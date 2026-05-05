---
title: "Tron Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron addresses. Get balance, rewards, and smart contract details for an address."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Address API

Look up any Tron address to retrieve TRX balance, token balance history, staking rewards, and smart contract metadata.

## Get Tron Address TRX Balance in USD With Annotation

Retrieve the TRX balance (in USD) for a Tron address along with its annotation label. Replace `ADDRESS_HERE` with the target address.

**Variations:** Remove the `in: USD` argument to get the raw TRX balance, or change it to another fiat currency.

```
{
    tron {
        address(address: { is: "ADDRESS_HERE"}) {
            address
            annotation
            balance(in: USD)
        }
    }
}
```

## Get Tron TRX Balance History for an Address

Track how a Tron address's TRX balance changed over time, with per-block snapshots of transfer amounts and running value. Replace `ADDRESS_HERE` with the target address.

**Variations:** Change the `currency` filter to track a different TRC-20 token's balance history.

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      balances(currency: {is: "TRX"}) {
        history {
          block
          timestamp
          transferAmount
          value
        }
      }
    }
  }
}
```

## Get Tron Address Claimable Voting Rewards

Check the pending voting rewards available to claim for a Tron address. Replace `ADDRESS_HERE` with the target address.

**Variations:** Combine with the balance query above to get a full snapshot of an address's holdings and rewards.

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      claimableRewards
    }
  }
}
```

## Get Tron Smart Contract Metadata From an Address

Fetch smart contract metadata for a Tron address, including contract type, protocol type, and token details (decimals, name, symbol). Replace `ADDRESS_HERE` with the target address.

**Variations:** Combine with a [transfers query](/docs/Examples/tron/transfers) to see both contract metadata and recent token activity.

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      smartContract {
        contractType
        currency {
          decimals
          name
          symbol
          tokenType
        }
        protocolType
      }
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address you want to query. This query will fetch basic details of the smart contract, such as contract type and protocol type. If the contract is an ERC-20 token, it will also return additional information like decimals, name, symbol, and token type.

## Get All TRC20 Token Balances for a Tron Address (Wallet Portfolio)

Pull every TRC20 token balance for a Tron wallet using [this](https://ide.bitquery.io/tron-address-balance-stats) query. Data returned by the API response could be used by explorers and portfolio trackers.

```graphql
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      balances {
        currency {
          symbol
          name
          address
          tokenType
          decimals
        }
        value
        value_usd: value(in: USD)
      }
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address. Returns every token currently held by the address along with its USD value.
## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron transfers examples](https://docs.bitquery.io/v1/docs/Examples/tron/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
