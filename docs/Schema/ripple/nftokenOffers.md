---
title: Ripple NFToken API
---

<head>
<meta name="title" content="Ripple NFToken API"/>
<meta name="description" content="Get information on Ripple NFToken including taker, LedgerSequence, amount and invoice."/>
<meta name="keywords" content="Ripple api, Ripple python api, Ripple nft api, Ripple scan api, Ripple api, Ripple api docs, Ripple crypto api, Ripple blockchain api, ripple network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Ripple NFToken API" />
<meta property="og:description" content="Get information on Ripple NFToken including taker, LedgerSequence, amount and invoice." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Ripple NFToken API" />
<meta property="twitter:description" content="Get information on Ripple NFToken including taker, LedgerSequence, amount and invoice." />
</head>

NFTokens are NFTs on Ripple

> The `NFToken` object represents a single non-fungible token (NFT). It
> is not stored on its own, but is contained in a [NFTokenPage
> object](https://xrpl.org/nftokenpage.html) alongside other `NFToken`
> objects

Bitquery's NFTokenNFToken API contains info about NFTs on XRP that have NFToken to buy/sell/transfer an NFT.
Below are the fields in the schema of the API:

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!) {
  ripple(network: $network) {
    nftokenNFToken(options: {asc: "timestamp.time", limit: $limit, offset: $offset}) {
      block
      transaction {
        index
        type
        hash
        sender
      }
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      fromAccount {
        address
        annotation
      }
      destinationAccount {
        address
        annotation
      }
      nftokenCurrency {
        name
        symbol
        tokenType
        tokenId
        decimals
        address
      }
      currency {
        name
        symbol
      }
      nftokenAmount
      nftoken_amount_usd: nftokenAmount(in: USD)
      amount
      amount_usd: amount(in: USD)
      operation
      prevTxnId
      prevLedgerSequence
      nftokenSellOffer
      sequence
      nftokenBuyOffer
      flags
      bookNode
      bookDirectory
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "network": "ripple"
}

```

<details><summary>Filtering NFtoken NFToken</summary>

- `transactionType`: The type of transaction that created the offer.
- `transactionSender`: The account that created the offer.
- `transactionIndex`: The index of the transaction that created the offer.
- `transactionHash`: The hash of the transaction that created the offer.
- `time`: The timestamp of the transaction that created the offer.
- `sequence`: The sequence number of the offer.
- `prevTxnId`: The ID of the previous transaction, if any.
- `prevLedgerSequence`: The ledger sequence of the previous transaction, if any.
- `operation`: The type of operation that created the offer.
- `nftokenCurrencySymbol`: The symbol of the NFT currency that is being offered.
- `nftokenAmount`: The amount of NFTs being offered.
- `mount`: The amount of currency being offered.
- `fromAccount`: The account that created the offer.
- `flags`: The flags of the offer.
- `expiration`: The expiration date of the offer.
- `destinationAccount`: The account that the offer is for.
- `date`: The date of the offer.
- `bookNode`: The book node of the offer.
- `bookDirectory`: The book directory of the offer.
- `block`: The block number of the transaction that created the offer.
- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.

</details>

## Fields

- `block`: The block number of the transaction that created the offer.
- `transaction`: The transaction that created the offer.
- `timestamp`: The timestamp of the transaction that created the offer.
- `fromAccount`: The account that created the offer.
- `destinationAccount`: The account that the offer is for.
- `nftokenCurrency`: The NFT currency that is being offered.
- `currency`: The currency that the offer is denominated in.
- `nftokenAmount`: The amount of NFTs being offered.
- `nftoken_amount_usd`: The amount of NFTs being offered in USD.
- `amount`: The amount of currency being offered.
- `amount_usd`: The amount of currency being offered in USD.
- `operation`: The type of operation that created the offer like `CreatedNode`
- `prevTxnId`: The ID of the previous transaction, if any.
- `prevLedgerSequence`: The ledger sequence of the previous transaction, if any.
- `nftokenSellOffer`: Whether the offer is to sell the NFT.
- `sequence`: The sequence number of the offer.
- `nftokenBuyOffer`: Whether the offer is to buy the NFT.
- `flags`: The flags of the offer.
- `bookNode`: The book node of the offer.
- `bookDirectory`: The book directory of the offer.
