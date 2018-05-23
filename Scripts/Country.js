class Country {

	constructor(country) {
		this.country = country;
	}

	buildCountry() {
		$("main").append(
			$("<div>").addClass("countryContainer").append(
				$("<div>").css('background-image', 'url(' + this.country.flag + ')').addClass("flag"),
				$("<div>").addClass("countryInfo").append(
					$("<span>", {text: "Country Name: " + this.country.name}),
					$("<span>", {text: "Capital City: " + this.country.capital}),
					$("<span>", {text: "Country Code: " + this.country.alpha2Code}),
					$("<h2>", {text: "Currency Information:"}),
					$("<span>", {text: "Currency Code: " + this.country.currencies[0].code}),
					$("<span>", {text: "Currency Name: " + this.country.currencies[0].name}),
					$("<span>", {text: "Currency Symbol: " + this.country.currencies[0].symbol}),
				)
			)
		)
	}

}