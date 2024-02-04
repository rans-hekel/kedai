document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brazil",
        img: "product1.jpg",
        price: 20000,
      },
      {
        id: 2,
        name: "Ameriacno",
        img: "product2.jpg",
        price: 40000,
      },
      {
        id: 3,
        name: "Latte Gak Pake Gula",
        img: "product3.jpg",
        price: 60000,
      },
      {
        id: 4,
        name: "Robusta Zimbabwe",
        img: "product4.jpg",
        price: 10000,
      },
    ],
  }));
});
