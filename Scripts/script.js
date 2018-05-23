showAll();

$("form").on("submit", (e) => {
	e.preventDefault();
})

function showAll() {
	fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;alpha2Code')
	.then(response => response.json())
	.then(countries => initCountries(countries));
}

function initCountries(countries) {
	var Allcountries = new CountryList();
	Allcountries.populate(countries);

	$("input[name=search]").keyup(throttle(filter, 100));
	$("input[name=search]").on("search", throttle(filter, 100));

	function filter() {
		if ($("input[name=search]").val().length > 0) {
			Allcountries.filter($("input[name=search]").val());
		}
		else {
			showAll();
		}
	}
}


function throttle (callback, limit) {
    var wait = false;
    return function () {
        if (!wait) {
			callback.call();
			wait = true;
			setTimeout(function () {
				wait = false;
			}, limit);
		}
	}
}