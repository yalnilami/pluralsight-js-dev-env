// this file lets you switch between the production data and mock data by adding "/?useMockApi=true" to the end of the URL.
export default function getBaseUrl() {
	return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3020/' : '/';
}

// method procured from StackOverflow: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQueryStringParameterByName(name, url){
	if(!url){
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");

	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	var results = regex.exec(url);

	if(!results){
		return null;
	}

	if(!results[2]){
		return '';
	}

	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
