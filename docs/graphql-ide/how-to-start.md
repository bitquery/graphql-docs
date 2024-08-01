---
sidebar_position: 1
---

# Running your First Query

Create and run your first query on Bitquery IDE by visiting [https://ide.bitquery.io/](https://ide.bitquery.io/).

## Create an account

To continue, you must first [register](https://account.bitquery.io/auth/signup) an account to access the IDE window.

**Registration Process**:

- Navigate to the Bitquery GraphQL IDE by visiting [https://ide.bitquery.io/](https://ide.bitquery.io/).
- If you are not registered, click on the "Not registered" link.
- You will need to provide your Email, Password, Password Confirmation, Name, and Company Name in the designated fields.
- Complete the CAPTCHA challenge and click the Submit button to proceed.
- After submitting your registration form, check your email for a confirmation message. Click the link within this email to verify your account. Once your email is successfully verified, you will receive a notification, confirming your account creation is complete.

If you do everything correctly, you will see the grey triangle in the middle of the screen to run the query.

The query editor is in the center of the screen, and you can use handy Ctrl-Space key
combination to see all possible options that you can enter at the edit point. 

![](/img/ide/quick_start.png)

So you can type the query using hints from IDE. For example, you can query the latest 10 blocks on the ETH network:

```
{
  ethereum(network: ethereum) {
    blocks(options: {limit: 10, desc: "timestamp.time"}) {
      timestamp {
        time
      }
      height
    }
  }
}


```

## Using Bitquery Explorer to get Queries

We have built our multi [blockchain explorer](http://explorer.bitquery.io/) to showcase our APIs, Therefore for beginners, I recommend first check our explorer.

You can enter your token, transaction, address anything and search for it. Once you see the relevant data you can click on the "graphql" button at the bottom right corner to check what GrpahQL query is responsible for that data. I highly recommend searching our explorer first before

[![Bitquey Explorer](/img/explorer.jpeg)](https://vimeo.com/548729514 "Bitquery Explorer - Click to Watch!")

## Check our IDE Explorer - Examples

We have built our [GraphQL IDE](https://graphql.bitquery.io/ide) to make it easy to work with blockchain data. Using our IDE you can create, save, test, and share your GraphQL queries.

Start typing in the search bar in the IDE to find queries written by other users.

You can find a lot of query examples created by our community on our IDE, I recommend checking them first, most probably someone already build the query which you are looking for.

![Queries Created and shared by Bitquery community|690x318](/img/queries-created-and-shared-by-Bitquery-community.png)

## Auto Complete

Use CTRL + Space to use autocomplete.

![query2](/img/ide/second.png)

**Schema**

You can find our GraphQL Schema on our [IDE](https://graphql.bitquery.io/ide).

**Calling Bitquery APIs programmatically**
To call our APIs programmatically, you will need API keys, which you can get it by signing up on our [GraphQL IDE](https://graphql.bitquery.io/ide), to learn more read [this](https://bitquery.io/blog/graphql-with-python-javascript-and-ruby) article.

## Query Builder

We also have a Query Builder on our [IDE](https://graphql.bitquery.io/ide) which is built to help you create our queries easily. This way you can create queries with simple clicks.

[![Graphql API Builder](/img/graphql-api-builder.jpeg)](https://vimeo.com/521756813 "Graphql API Builder - Click to Watch!")

## Important Links

- **V1 docs** - [`https://docs.bitquery.io/v1/`](https://docs.bitquery.io/v1/)
- **V2 Docs** - [`https://docs.bitquery.io/`](https://docs.bitquery.io/)
- [**Difference between v1 and v2**](v1-and-v2.md)
- How to call Bitquery APIs programmatically, [Read Here](https://bitquery.io/blog/graphql-with-python-javascript-and-ruby) and [here](https://community.bitquery.io/t/make-api-calls-to-bitquery-in-python-javascript-dart-golang-and-php/1004).
- To see the difference APIs provided by Bitquery please check [this](https://docs.google.com/presentation/d/1NET2jWidPNwuzR0_gy3SBY6_gX1n_a9KIHw4EQohDCE/edit?usp=sharing)

[![Get started with Bitquery](/img/get-started-with-bitquery.jpeg)](https://www.youtube.com/watch?v=pOFVc-kgSxc "Get started with Bitquery - Click to Watch!")

**Check our Blogs**
We have written blog posts to help you explain our APIs, please them on the [Bitquery blog](https://bitquery.io/blog). Additionally, read these blogs if you are new to Bitquery.

- [Make API calls to Bitquery in Python, JavaScript, Dart, Golang and PHP](https://community.bitquery.io/t/make-api-calls-to-bitquery-in-python-javascript-dart-golang-and-php/1004)

- [How to use GraphQL with Python, Javascript, and Ruby](https://bitquery.io/blog/graphql-with-python-javascript-and-ruby)
- [Create your first Blockchain GraphQL query](https://bitquery.io/blog/blockchain-graphql-query)

**Community**
If you still don't question our GraphQL APIs please ask them on this forum, and always provide complete details.

Check our [Youtube Channel](https://www.youtube.com/@bitquery) for video tutorials.
