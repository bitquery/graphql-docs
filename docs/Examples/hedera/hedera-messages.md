# Hedera Messages API

## Latest Messages


```
query MyQuery {
  hedera(network: hedera) {
    messages(date: {is: "2024-07-22"}, options: {limit: 10, desc: "time.time"}) {
      feeCurrency {
        name
      }
      transactionHash
      topicRunningHash
      result {
        id
        name
      }
      payerAccount {
        num
        id
      }
      success
      time {
        time
      }
      message
      memo
      nodeAccount {
        id
        num
      }
    }
  }
}

```