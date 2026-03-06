const connection = require("../config/db");

exports.getAllProducts = (req, res) => {
  const query = `
        SELECT * FROM products
    `;
  connection.query(query, (err, rows, fields) => {
    if (err) throw err;

    res.json(rows);
  });
};
exports.createProduct = (req, res) => {
  const { itemName, unitPrice, quantity, supplier } = req.body;

  const query = `
        INSERT INTO products (itemName, unitPrice, quantity, supplier)
        VALUES (?, ?, ?, ?)
    `;

  connection.query(
    query,
    [itemName, unitPrice, quantity, supplier],
    (err, result) => {
      if (err) throw err;

      res.json({
        message: "product created successfully",
        userId: result.insertId,
      });
    },
  );
};
