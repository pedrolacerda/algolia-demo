/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'movies_pedrolacerda',
  searchClient: algoliasearch('2BJ12I6R7Z', 'aeb1a5954885ea2e4834231c82bece84'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#genre-list',
    attribute: 'genre',
  }),
  instantsearch.widgets.refinementList({
    container: '#actor-list',
    attribute: 'actors',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image}}" align="left" alt="{{title}}" />
          <div class="hit-title">
            {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
          </div>
          <div class="hit-year">
            {{#helpers.highlight}}{ "attribute": "year" }{{/helpers.highlight}}
          </div>
          <div class="hit-rating">⭐{{rating}}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
