import express from "express";

const router = express.Router();

router.get("/search", (req, res) => {
  res.json({
    books: [
      {
        id: 1,
        title: "Metro",
        authors: "Dennis",
        covers: [
          "https://images-na.ssl-images-amazon.com/images/I/51smHWpvm9L._SX327_BO1,204,203,200_.jpg",
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Metro_2033_russian_book_front_cover.jpg/220px-Metro_2033_russian_book_front_cover.jpg"
        ],
        pages: 900
      },
      {
        id: 2,
        title: "Witcher",
        authors: "Durairaj",
        covers: [
          "https://images-na.ssl-images-amazon.com/images/I/51TNOXnzW9L.jpg",
          "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Andrzej_Sapkowski_-_The_Last_Wish.jpg/220px-Andrzej_Sapkowski_-_The_Last_Wish.jpg"
        ],
        pages: 800
      }
    ]
  });
});

export default router;
