const productsTable = document.getElementById("pTable");
const productsBody = document.getElementById("pBody");

fetch("pro.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const row = document.createElement("tr");

      const productName = document.createElement("td");
      productName.textContent = product.title;

      const productPrice = document.createElement("td");
      productPrice.textContent = `$${product.price}`;

      row.appendChild(productName);
      row.appendChild(productPrice);

      productsBody.appendChild(row);
    });

    productsTable.style.display = "table";
  })
  .catch((error) => {
    console.log("Failed to fetch data:", error);
  });
