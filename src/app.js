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
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#actor-list',
    attribute: 'actors',
    searcheable: true,
    searchableIsAlwaysActive: true,
    showMore: true,
  }),

  instantsearch.widgets.ratingMenu({
    container: '#rating-menu',
    attribute: 'rating',
    templates: {
      item: `
        {{#count}}
          <a class="{{cssClasses.link}}" aria-label="{{value}} & up" href="{{url}}">
        {{/count}}
        {{^count}}
          <div class="{{cssClasses.link}}" aria-label="{{value}} & up" disabled>
        {{/count}}
        {{#stars}}
          <svg
            class="{{cssClasses.starIcon}} {{#.}}{{cssClasses.fullStarIcon}}{{/.}}{{^.}}{{cssClasses.emptyStarIcon}}{{/.}}"
            aria-hidden="true"
            width="24"
            height="24"
          >
            {{#.}}<use xlink:href="#ais-RatingMenu-starSymbol"></use>{{/.}}
            {{^.}}<use xlink:href="#ais-RatingMenu-starEmptySymbol"></use>{{/.}}
          </svg>
        {{/stars}}
        <span class="{{cssClasses.label}}">&amp; Up</span>
        {{#count}}
          <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>
        {{/count}}
        {{#count}}
          </a>
        {{/count}}
        {{^count}}
          </div>
        {{/count}}
      `,
    },
  }),

  instantsearch.widgets.rangeSlider({
    container: '#score-menu',
    attribute: 'score',
    min: 0,
    max: 10,
    precision: 2,
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    transformItems(items) {
      return items.map(item => ({
        ...item,
        score: Math.round(item.score*100)/100,
      }));
    },

    templates: {
      item: `
        <div class="row">
          <div class="hit-title">
            {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
          </div>
          <div class="hit-rating">{{rating}} ⭐</div>
          <div class="hit-score">Score: {{score}}</div>
          <div class="hit-year">Year: {{year}}</div>
          <img src="{{image}}" align="bottom" alt="{{title}}" onerror="this.onerror=null;this.src='https://bitsofco.de/content/images/2018/12/broken-1.png';" />
          
        </div>
      `,
    },
  }),

  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
