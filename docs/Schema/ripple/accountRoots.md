---
title: "Ripple Account Roots API"
---

<head>
<meta name="title" content="Ripple Account Roots API"/>

<meta name="description" content="Explore AccountRoots on the Ripple network. Retrieve account details, transfer rate, sequence, and more. Technical query for account information"/>

<meta name="keywords" content="Ripple network, AccountRoots query, Ripple account details, Transfer rate, Account sequence, Previous transaction ID, Owner count, Account operation, Account flags, Domain association, Current balance, XRP, XRP Account, XRP Network"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ripple Account Roots API" />

<meta property="og:description" content="Explore AccountRoots on the Ripple network. Retrieve account details, transfer rate, sequence, and more. Technical query for account information"/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ripple Account Roots API" />

<meta property="twitter:description" content="Explore AccountRoots on the Ripple network. Retrieve account details, transfer rate, sequence, and more. Technical query for account information" />
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