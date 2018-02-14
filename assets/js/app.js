const $form = $('#search-form');
const $searchField = $('#search-keyword');
const $responseContainer = $('#response-container');
let searchedForText;

$form.submit(function(e) {
	e.preventDefault();
	$responseContainer.html('');
	searchedForText = $searchField.val();
	getNews();
});

	function getNews() {
		$.ajax({
		url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=89b3173222ed4e12937542d136f691b6`
		}).done(addNews)
		.fail(handleError);
	}

	function addNews(news){
		const articles = news.response.docs;

		articles.forEach(function(article) {
        const title = article.headline.main;
		const snippet = article.snippet;

		let $li = $('<li />').addClass('articleClass').text(snippet);
		$responseContainer.append($li);
		});
	}
		


	function handleError(){
		console.log('se ha presentado un error');
	}

