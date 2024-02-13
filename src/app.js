document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brazil",
        img: "product1.jpg",
        price: 200000,
      },
      {
        id: 2,
        name: "Americano",
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
        price: 100000,
      },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah barang duplikat
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.total += newItem.price;
        this.quantity++;
      } else {
        // jika barang sudah ada, cek apakah barang duplikat
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sama
            item.quantity++;
            item.total = item.price * item.quantity;
            this.total += item.price;
            this.quantity++;
            return item;
          }
        });
      }
    },
  });
});

// convert to rp
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
