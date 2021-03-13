// tutorial

var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/all", function (req, res) {
  db.Customer.findAll()
    .then((customers) => {
      // res.status(200).send(JSON.stringify(customers));
      res.render("customers", { title: "Customers", data: customers });
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.get("/pivot-table", function (req, res) {
  db.Customer.findByPk(req.params.id)
    .then((person) => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

module.exports = router;
