# Customer questions

## Question 1

> Hello,
>
> I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
>
> Records
> Indexing
> I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
>
> Cheers, George

Hi George,

Thanks for your question. I'm glad you reached out about your onboarding, these concepts will be key for you to understanding how Algolia works and get the best out of it.

I'll first start with the definition of `Indexing`, as it will be helpful to understand Records. An **index** is the place where the data used by a search engine is stored. And **index** is designed and optimized for search operations. For example, in an ecommerce website, the index would be a complete list of all products with a custom ranking. Thus, `Indexing` is the process of adding data to an **index** where it can be searched later on.

A **record** is an object you add to an **index** and want to search for. It can contain any number of attributes. An **index** can also contain any number of **records**. Here is an example of a record, formatted in JSON:

```json
{
  "name": "Iphone 6 64Gb",
  "brand": "Apple",
  "color": "Gold",
  "categories": ["smartphone", "phone", "electronics"],
  "price": 789
}
```

You can always reach out to our docs or FAQ to look for more detailed information, as you can see [here](https://www.algolia.com/doc/faq/basics/what-is-an-index/) and [here](https://www.algolia.com/doc/faq/basics/what-is-a-record/).

I hope I could answer your quesions. I'd be happy to give you further details if needed.

Best,

## Question 2

> Hello,
>
> Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
>
> Regards, Matt

Hello Matt,

We appreciate your kind and open feedback. At Algolia, we we're always open to hear back from our customers and learn from it.
