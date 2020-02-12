var algoliaConfig = {
  index_name: 'phalcon-builtwith',
  application_id: '3NJ6VL3MBW',
  search_only_api_key: 'a5196284f238decc7c99eda8ff991ea1'
};

var client = algoliasearch(algoliaConfig.application_id, algoliaConfig.search_only_api_key);
var index = client.initIndex(algoliaConfig.index_name);

autocomplete('#searchinput', { hint: false }, [{
  source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
  displayKey: 'name',
  templates: {
    suggestion: function suggestion(_suggestion) {
      return _suggestion._highlightResult.title.value;
    }
  }
}]).on('autocomplete:selected', function (event, suggestion, dataset) {
  window.location = suggestion.url;
});

autocomplete('#searchinputmobile', { hint: false }, [{
  source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
  displayKey: 'name',
  templates: {
    suggestion: function suggestion(_suggestion2) {
      return _suggestion2._highlightResult.title.value;
    }
  }
}]).on('autocomplete:selected', function (event, suggestion, dataset) {
  window.location = suggestion.url;
});