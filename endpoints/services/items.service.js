const fetch = require("node-fetch");

const getItemsByQuery = async (query) => {
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
  const category = responseToJson.filters.filter((el) => el.id === "category");
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
};

const getItemDetail = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const urlDescription = `https://api.mercadolibre.com/items/${id}/description`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      "X-RapidAPI-Key": "your-rapidapi-key",
    },
  };

  const response = await fetch(url, options);
  const itemDetail = await response.json();
  const responseDescription = await fetch(urlDescription, options);
  const itemDetailDescription = await responseDescription.json();

  return {
    author: {
      name: "Gabriela",
      lastname: "Suarez",
    },
    item: {
      id: itemDetail.id,
      title: itemDetail.title,
      price: {
        currency: itemDetail.currency_id,
        amount: itemDetail.price,
        decimals: 0,
      },
      picture: itemDetail.pictures[0].url,
      condition: itemDetail.condition,
      free_shipping: itemDetail.shipping.free_shipping,
      sold_quantity: itemDetail.sold_quantity,
      description: itemDetailDescription.plain_text,
    },
  };
};

module.exports = {
  getItemsByQuery,
  getItemDetail,
};
