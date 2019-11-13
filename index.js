const alfy = require("alfy");
const qs = require("qs");
const translate = require("./translate");

const input = alfy.input;

const data = await translate(input);

const items = alfy.inputMatches(data, "title").map(element => ({
  title: element.title,
  subtitle: element.body,
  arg: element.id
}));

alfy.output(items);
