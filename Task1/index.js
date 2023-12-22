const axios = require("axios");
const fs = require("fs");

const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";

axios
  .get(url)
  .then((res) => {
    const data = res.data;
    let prod = res.data.products;

    if (!Array.isArray(prod)) {
      prod = Object.values(prod);
    }

    const sortedProd = prod.sort((a, b) => b.Popularity - a.Popularity);

    const formatedProd = sortedProd.map((product) => ({
      title: product.Title,
      price: product.Price,
    }));

    const jsonData = JSON.stringify(formatedProd, null, 2);

    fs.writeFile("pro.json", jsonData, "utf8", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Data has been written to pro.json");
      }
    });
  })
  .catch((err) => {
    console.log("Failed!", err.message);
  });
