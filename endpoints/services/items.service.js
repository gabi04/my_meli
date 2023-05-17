const fetch = require("node-fetch");

class ItemsService {
  constructor() {
    this.items = [];
    this.categoires = [];
  }

  async getByQuery() {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=celular`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
        "X-RapidAPI-Key": "your-rapidapi-key",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        const itemsAux = json.results.map((item) => ({
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
        this.items = [...itemsAux];
        const category = json.filters.filter((el) => el.id === "category");
        // TODO destructurar esto previendo errores
        // TODO terminar este endpoint
        const categoiresAux = category[0].values[0].path_from_root.map(
          (el) => el.name
        );
        this.categoires = [...categoiresAux];
      })
      .catch((err) => console.error("error:" + err));

    return {
      author: {
        name: "Gabriela",
        lastname: "Suarez",
      },
      categories: this.categoires,
      items: this.items,
    };
  }
}

module.exports = ItemsService;
