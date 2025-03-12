const {
  readList,
  createItem,
  updateItem,
  removeItem,
} = require("../services/listService");
const fs = require("fs");

function getList(req, res) {
  try {
    const actualData = readList();
    res.send(actualData);
  } catch {
    res.status(500);
    res.send("ERRO");
  }
}

function postInList(req, res) {
  try {
    const title = req.params.title;
    const desc = req.params.desc;
    const date = req.params.date;
    createItem(title, desc, date);
    res.send("Item adicionado");
  } catch {
    res.status(500);
    res.send("ERRO");
  }
}

function patchList(req, res) {
  try {
    const id = req.params.id;
    const title = req.params.title;
    const desc = req.params.desc;
    const date = req.params.date;
    updateItem(id, title, desc, date);
    res.send("Item editado");
  } catch {
    res.status(500);
    res.send("ERRO");
  }
}

function deleteList(req, res) {
  try {
    const id = req.params.id;
    removeItem(id);
    res.send("Item deletado");
  } catch {
    res.status(500);
    res.send("ERRO");
  }
}

module.exports = {
  getList,
  postInList,
  patchList,
  deleteList,
};
