# Coinpath

Coinpath APIs are a set of money-tracing APIs that help you track funds from one address to another. 

```
query MyQuery {
  cardano {
    coinpath(
      options: {limit: 10}
      initialAddress: {is: "addr1q97fgk07rtjm8hzs7psr59yjqutnzmm3e9wd8tm4fvth82h8qzjkntdu8u7le0c8e5hzuquj0k58c0lruxggpdr0u0hqa0h2kj"}
    ) {
      amount
      block {
        height
        timestamp {
          time
        }
      }
      currency {
        name
        symbol
        tokenId
        tokenType
        decimals
        address
      }
      depth
      receiver {
        annotation
        address
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        type
      }
      sender {
        address
        annotation
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        receiversCount
        sendersCount
        type
      }
    }
  }
}
```

<details> 
<summary>Filtering Coinpath</summary>


</details>