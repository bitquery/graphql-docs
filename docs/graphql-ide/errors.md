# Common Errors and What to Do

This section will guide you through the interpretation of common error messages encountered within Bitquery APIs. It will help you decide when to escalate issues by filing a ticket at [Bitquery Support](https://support.bitquery.io/).

### ClickHouse Error: 400 Bad Request

#### Error Message:

```plaintext
clickhouse return status 400 [400 Bad request] response <html><body><h1>400 Bad request</h1>\nYour browser sent an invalid request.\n</body></html>\n"
```

#### Probable Cause:

This error typically arises due to incorrect query construction involving limits, sorting, or filtering parameters.

#### Resolution Steps:

- **Review Query Parameters:** Ensure that the query adheres to the specified limits, sorting criteria, and filters as required in a standard [query](/docs/graphql-ide/how-to-start).
- **Validate Syntax:** Double-check the syntax of the query to identify any mistakes or discrepancies.
- **Consult Documentation:** Refer to Bitquery documentation for similar examples.
- **Escalation:** If the issue persists or requires further assistance, consider filing a detailed ticket on [Bitquery Support](https://support.bitquery.io/) for help and resolution.

### "Parse error on ... (IDENTIFIER) at [1, 1]"

This happens when the query formatting is wrong, check if your query begins in the following manner;

```
query  queryName{

}

```


### Empty Response Returned

If no trades/transfers are found for the queried period, compare with public explorers. If issues persist, contact support through the public Telegram group.

### Error in Name, Error in Symbol on Explorer

![symbol](/img/ide/symbol_error.png)

This is an issue with indexing the token, please create a ticket at [support.bitquery.io](https://support.bitquery.io/hc/en-us)

### ActiveRecordError : Memory Exceeded

#### Error Message:

    "message": "ActiveRecord::ActiveRecordError: Response code: 500:\nCode: 241, e.displayText() = DB::Exception: Received from ..... DB::Exception: Memory limit (for query) exceeded: would use 29.87 GiB (attempt to allocate chunk of 134740784 bytes), maximum: 29.80 GiB: ....

#### Resolution Steps:

This error occurs due to excessive data retrieved in a single query. Limit results using 'limit' option or narrow the query range using 'since' and 'till' on `time` field. Read more on limits [here](/docs/query-features/filtering/limits) and on filters [here](/docs/query-features/filtering/options).

### Too many simultaneous queries

This happens when you hit the number of requests for your plan. Please contact the support team. 


### 500 Internal Server Error

#### Probable Cause:

The error with status 500 is a generic internal server error that could result from various issues within the system.

#### Resolution Steps:

- **Review Query and Syntax:** Double-check the query and its syntax for any errors or discrepancies.
- **Check Server Status:** Verify the [server status](https://account.bitquery.io/user/system_status) to ensure it is operational and not experiencing downtime.
- **Escalation:** Contact support on the [telegram channel](https://t.me/Bloxy_info).



### ActiveRecord::ActiveRecordError: Response code: 500 DB::Exception: Too many simultaneous queries

If you see this text `DB::Exception: Too many simultaneous queries`, this happens when you hit the number of requests for your plan. Please contact the support team.


### ActiveRecord::ActiveRecordError: Response code: 500: Estimated query execution time is too long.

In this case, the number of records that need to be processed for your query are too high. Please use [limits](/docs/query-features/filtering/limits.md) and filter using necessary fields to reduce the number of records pricessed. 


### DB::Exception : Memory limit (total) exceeded

`"message":"ActiveRecord::ActiveRecordError: Response code: 500:\nCode: 241, e.displayText() = DB::Exception: Memory limit (total) exceeded: would use 78.01 GiB (attempt to allocate chunk of 134658600 bytes), maximum: 78.01 GiB: ...`


This error occurs when a query lacks a limit or requests an excessive number of records. To resolve it, consider adding filters to refine the query parameters. If issue still persists, please contact the support team on telegram with your query.


### Timeout TCP socket

[{"message":"Net::ReadTimeout ...}]

This error occurs when the query is complex and takes too long to respond to a request. Check if you can optimize the query, if not please contact the support team on telegram with your query.


### Error: Failed to fetch ERROR http 424

Please retry the query in a few minutes, this is a temporary issue. If repeats please create a ticket at [support.bitquery.io](https://support.bitquery.io/hc/en-us)


### 403 Forbidden Error

When request fails with status code 403, please contact support on telegram. 

**Escalation:** If the issue persists or requires further assistance, consider filing a detailed ticket on [Bitquery Support](https://support.bitquery.io/) for help and resolution.





### Important Notes

- **Resource Consideration**: Be cautious when setting high limits, as large queries might consume significant resources and impact performance.
- **Pagination**: For large datasets, consider implementing pagination with `offset` to retrieve data in smaller chunks for better efficiency. Read more on limits and offsets [here](/docs/query-features/filtering/limits)
- **Optimization**: Always aim to optimize your queries to retrieve the necessary data efficiently without exceeding resource limits.
