const fs = require("fs");

function readList() {
  return JSON.parse(fs.readFileSync("list.json"));
}

function createItem(title, desc, date) {
  const actualData = readList();
  let actualId = 0;

  actualData.forEach((item) => {
    if (item.id > actualId) {
      actualId = item.id;
    }
  });
  actualId = actualId + 1;
  const newItem = {
    id: actualId,
    title: title,
    desc: desc,
    date: date,
  };
  console.log(newItem);
  fs.writeFileSync("list.json", JSON.stringify([...actualData, newItem]));
}

function updateItem(id, title, desc, date) {
  let actualData = readList();
  console.log(id);
  actualData[id] = {
    id: +id,
    title: title,
    desc: desc,
    date: date,
  };
  fs.writeFileSync("list.json", JSON.stringify([...actualData]));
}

function removeItem(idItemDel) {
  const actualData = JSON.parse(fs.readFileSync("list.json"));

  const newData = actualData.filter((item) => item.id !== +idItemDel);

  fs.writeFileSync("list.json", JSON.stringify([...newData]));
}

module.exports = {
  readList,
  createItem,
  updateItem,
  removeItem,
};
