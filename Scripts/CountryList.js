class CountryList {

	constructor() {
		this.countries = [];
	}

	displayAll() {
		this.countries.forEach(country => {
			var country = new Country(country);
			country.buildCountry();
		})
	}

	populate(countries) {
		$("main").empty();
		this.countries = [];
		if (countries.length > 0) {
			countries.forEach((country) => {
				this.countries.push(country)
			})
		} else {
			this.emptyResults();
		}
		this.displayAll();
	}

	emptyResults() {
		$("main").append(
			$("<span>", {text: "Sorry...couldn't find anything..."})
		)
	}

	filter(query) {
		fetch("https://restcountries.eu/rest/v2/name/" + query)
		.then(response => response.json())
		.then(countries => this.populate(countries));
	}


}