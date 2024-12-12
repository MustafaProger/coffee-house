class CoffeApi {

	_apiBase = 'https://fake-coffee-api.vercel.app/api'


	async getResource(url = this._apiBase) {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	async getAllCoffee() {
		let res = await this.getResource();

		return await res.map(this._transformCoffee);
	}

	async getCoffeeById(id, url = this._apiBase) {
		let res = await fetch(`${url}/${id}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	_transformCoffee(coffee) {
		return {
			id: coffee.id,
			name: coffee.name,
			descr: coffee.description,
			price: coffee.price,
			region: coffee.region,
			img: coffee.image_url,
			roast_level: coffee.roast_level,
			flavor_profile: coffee.flavor_profile,
			grind_option: coffee.grind_option
		}
	}
}

export default CoffeApi;
