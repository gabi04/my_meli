const fetch = require("node-fetch");

class ItemsService {
  constructor() {}

  async getItemsByQuery(query) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
        "X-RapidAPI-Key": "your-rapidapi-key",
      },
    };

    const response = await fetch(url, options);
    const responseToJson = await response.json();
    const items = responseToJson.results.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));
    const category = responseToJson.filters.filter(
      (el) => el.id === "category"
    );
    const categoryFirst = category.length ? category[0] : {};
    const categories =
      categoryFirst.values && categoryFirst.values.length
        ? categoryFirst.values[0].path_from_root.map((el) => el.name)
        : [];
    return {
      author: {
        name: "Gabriela",
        lastname: "Suarez",
      },
      categories,
      items,
    };
  }
}

module.exports = ItemsService;
