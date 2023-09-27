---
title: Ripple AccountRoots API
---

<head>
<meta name="title" content="Ripple AccountRoots API"/>
<meta name="description" content="Get account domain, balance and transfer rate on the Ripple blockchain. Also, Get account domain, balance and transfer rate for tokens or NFTs on the Ripple blockchain."/>
<meta name="keywords" content="Ripple api, Ripple python api, Ripple nft api, Ripple scan api, Ripple matic api, Ripple api docs, Ripple crypto api, Ripple blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Ripple Account Roots API" />
<meta property="og:description" content="Get account domain, balance and transfer rate on the Ripple   blockchain. Also, get account domain,balance and transfer rate for tokens or NFTs on the Ripple blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Ripple Account Roots API" />
<meta property="twitter:description" content="Get account domain,balance and transfer rate on the Ripple blockchain. Also, get account domain,balance and transfer rate for tokens or NFTs on the Ripple blockchain." />
</head>

```
query MyQuery {
  ripple(network: ripple) {
    accountRoots(
      account: {is: "rocwwPiFPgytt5Yhe3ctdZTnWw92Resy5"}
      options: {limit: 10, desc: "prevLedgerSequence"}
    ) {
      account {
        address
        annotation
      }
      transferRate
      sequence
      prevTxnId
      prevLedgerSequence
      prevBalance
      ownerCount
      operation
      flags
      domain
      balance
    }
  }
}

```

<details>
<summary>Filtering Address</summary>

</details>

## Fields

-   **account**
    -   **address**
        -   The address of the account.
    -   **annotation**
        -   A label that stores any additional information about the account.
-   **transferRate**
    -   The transfer rate of the account. 
-   **sequence**
    -   The sequence number of the account. This is an increasing number that is used to track the number of transactions that have been applied to the account.
-   **prevTxnId**
    -   The transaction ID of the previous transaction that modified the account.
-   **prevLedgerSequence**
    -   The ledger sequence of the previous transaction that modified the account.
-   **prevBalance**
    -   The balance of the account before the previous transaction was applied.
-   **ownerCount**
    -   The number of owners of the account.
-   **operation**
    -   The type of operation that modified the account.
-   **flags**
    -   The flags of the account. These flags can be used to control the behavior of the account.
-   **domain**
    -   The domain of the account. This is the domain that the account is associated with.
-   **balance**
    -   The current balance of the account