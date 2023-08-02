---
sidebar_position: 1
---


# ETH2 Examples

Our ETH2 APIs provides extensive data on Beacon Chain. Let's look at some of the examples. 

### Get Historical Validator Statuses 

You can get the daily stats of validator statuses (active_exiting, active_ongoing, active_slashed, pending_queued and so on) using the below query. Access it on the [IDE](https://ide.bitquery.io/Validator-Counts-Daily-For-all-status)

```
query MyQuery {
  ethereum2 {
    validatorUpdates(date: {since: "2022-08-31", till: "2022-09-30T23:59:59"}) {
      validatorStatus
      count(uniq: validators)
      date {
        date
      }
    }
  }
}
```


###  ETH2 Deposits

In ETH2, the validators are decided based on the amount they stake. The below example, gets top validators based on the amount deposited.

```
query ($network: Ethereum2Network!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum2(network: $network) {
    deposits(
      options: {desc: "amount", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
    ) {
      validator {
        index
      }
      count: count
      amount
      amount_usd: amount(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}


<!-- Parameters -->

{
  "limit": 10,
  "offset": 0,
  "network": "eth2",
  "from": "2023-07-24",
  "till": "2023-07-31T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```
This query returns: 

- A list of deposits, sorted by decreasing amount.

- Each deposit includes the following information:

   - The validator index.

    - The number of deposits made by the validator.

    - The total amount of ETH deposited by the validator.

    - The total amount of ETH deposited by the validator, in USD.

    - The minimum date (start) on which the validator made a deposit.

    - The maximum date (end) on which the validator made a deposit.

###  ETH2 Validator token unlock

The below returns a list of validator updates for a given validator index `$index`, sorted by ascending date. Each validator update includes the date of the update, the change in validator balance, and the maximum validator balance after the update. 

```
query ($network: Ethereum2Network!, $dateFormat: String!, $index: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum2(network: $network) {
    validatorUpdates(
      options: {asc: "date.date"}
      date: {since: $from, till: $till}
      validatorIndex: {is: $index}
    ) {
      date: date {
        date(format: $dateFormat)
      }
      change: validatorBalanceChange
      balance: maximum(of: validator_balance)
    }
  }
}

<!-- Parameters -->
{
  "limit": 10,
  "offset": 0,
  "network": "eth2",
  "index": 581676,
  "from": null,
  "till": null,
  "dateFormat": "%Y-%m-%d"
}
```


### Beacon Chain Attestor Slashings

The below query returns a list of attester slashings for a given validator index `$index`, sorted by ascending date. Each attester slashing includes the date of the slashing, the parent root hash, the ETH1 deposit count, the ETH1 deposit root hash, the ETH1 block hash, the state root hash, and the validator's public key and index.

You can get the query [here](https://ide.bitquery.io/Beacon-Chain-Validator-Attestor-Slashings)

```
query ($network: Ethereum2Network!, $dateFormat: String!, $index: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum2(network: $network) {
    attesterSlashings(
      options: {asc: "date.date"}
      date: {since: $from, till: $till}
      validatorIndex: {is: $index}
    ) {
      date: date {
        date(format: $dateFormat)
      }
      parentRoot
      eth1 {
        depositCount
        depositRootHash
        blockHash
      }
      stateRoot
      validator {
        pubkey
        index
      }
    }
  }
}
<!-- Parameters -->
{
  "limit": 10,
  "offset": 0,
  "network": "eth2",
  "index": 4100,
  "from": null,
  "till": null,
  "dateFormat": "%Y-%m-%d"
}
```