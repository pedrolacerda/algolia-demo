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

I'll first start with the definition of `Indexing`, as it will be helpful to understand `Records`. An **index** is the place where the data used by a search engine is stored. An **index** is designed and optimized for search operations. For example, in an e-commerce website, the index would be a complete list of all products with a custom ranking. Thus, `Indexing` is the process of adding data to an **index** where it can be searched later on.

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

**Custom Ranking** is the feature where you will be able to tell Algolia's search engine the most relevant business metrics for you. Adjusting your metrics properly, your search results will return most relevant items first, boosting conversion rates. Typical custom ranking attributes include number of sales, views, likes, ratings, release date, etc. Any boolean or numeric attribute works with custom ranking. I totally recomend you a couple of videos which will give you a good understanding of it:

- [Overview of Algolia's search configuration](https://play.vidyard.com/qLiR1Shoh12hnmaFWWZXSU?utm_medium=page_link&utm_source=dashboard&autoplay=2)
- [Configuring business relevance](https://www.youtube.com/watch?v=kC6BBEjicS8&)

You can always reach out to our docs or FAQ to look for more detailed information, as you can see [here](https://www.algolia.com/doc/faq/basics/what-is-an-index/), [here](https://www.algolia.com/doc/faq/basics/what-is-a-record/) and [here](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/)

I hope I could answer your quesions. I'd be happy to give you further details if needed or jump in call to discuss these topics.

Best,

Pedro

## Question 2

> Hello,
>
> Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
>
> Regards, Matt

Hello Matt,

We appreciate your kind and open feedback. At Algolia, we we're always open to hear back from our customers and learn from it.

Our Product Team did several experimentations before releasing the new dashboard design. It was designed to improve navigation through the configurations and make it easier for customers to define their search rules, therefore having better searching experiences.

If you'd like, I can check the availability of one of our Product Managers, so you can elaborate on your feedback and hear directly from them about the decisions they made.

As of now, you can still switch back to the legacy interface on your profile settings.

Kind regards,

Pedro

## Question 3

> Hi,
>
> I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
>
> Regards, Leo

Hi Leo,

Integrating Algolia into your website is a straightforward process. We have a solid API you can levarage and integrate with your application with a few steps.

First of all, I'd recommend you to upload your data to Algolia and configure your search parameters. Having that set, you can leverage the `InstantSearch` libraries to integrate with your current application. `InstantSearch` comes with a variety of built in widgets you can use, reducing the time needed to integrate.

The best way to get started is heading to our [docs](https://www.algolia.com/doc/) and follow the instructions given you tech stack. 

If you don’t have your own developers team or don’t want to have that built in house, we can connect you to one of our verified partners.

Anyway, I’d suggest us to have a quick call so you can give me more details on the structure of your website and your engineering team, so I can give you the best guidance. Could you provide me two or three time slots in the coming week?

Best,

Pedro
