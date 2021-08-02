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
    searcheable: true,
    searchableIsAlwaysActive: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#actor-list',
    attribute: 'actors',
    searcheable: true,
    searchableIsAlwaysActive: true,
  }),

  instantsearch.widgets.ratingMenu({
    container: '#rating-menu',
    attribute: 'rating',
  }),

  instantsearch.widgets.rangeSlider({
    container: '#score-menu',
    attribute: 'score',
    min: 0,
    max: 10,
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div class="row">
          <div class="hit-title">
            {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
          </div>
          <div class="hit-rating">⭐{{rating}}</div>
          <div class="hit-rating">Score: {{score}}</div>
          <img src="{{image}}" align="bottom" alt="{{title}}" onerror="this.onerror=null;this.src='https://bitsofco.de/content/images/2018/12/broken-1.png';" />
          <div class="hit-year">
            {{#helpers.highlight}}{ "attribute": "year" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
