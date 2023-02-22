function createListItem({ type, value }) {
  const html = `
  <li class="cash-list__item">
    <span>${translate[type]}</span>
    <span>${value}</span>    
  </li>
  `;
  const templateElement = createElement(html);

  return templateElement;
}

function createElement(html) {
  const template = document.createElement("template");

  template.innerHTML = html;

  return template.content.cloneNode(true);
}

function clearList() {
  const list = document.getElementById("cash-list");

  list.innerHTML = "";
}

function displayList(items) {
  const list = document.getElementById("cash-list");
  const cashList = items.map(createListItem);

  clearList();
  list.append(...cashList);
}

/* 
1. Napisi funkciju fetchList koja se koristi za dohvacanje liste studenata sa endpointa /records
 i potom displaya te podatke koristeci displayList funkciju. Mozes koristiti axios za to.
 Kreiraj varijablu u koju ces spremati tu listu u funkciji fetchList, te pozovi tu funkciju
 pri inicijalizaciji.
*/

/* 
 2. Modificiraj postojecu createListItem funkciju da umjesto UTILITIES, GROCERIES, REPAIRS ,MISCELLANEOUS
  ispisuje Rezije, Namirnice, Servis, Ostalo. 
*/

const translate = {
  UTILITIES: "Rezije",
  GROCERIES: "Namirnice",
  REPAIRS: "Servis",
  MISCELLANEOUS: "Ostalo",
};

async function fetchList() {
  const { data } = await axios.get("http://localhost:3000/records");

  cashList = data;
  displayList(data);
}

let cashList = [];

fetchList();

/* 
 3. Dodaj funkciju na botun koja ce pri prvom kliku na botun sortirati listu od najveceg prema najmanjem
  i promjeniti naziv botuna u Descending. Drugim klikom ce sortirati od najmanjem prema najvecem, a 
  naziv botuna ce biti Ascending. Ponovnim klikom botun ce mjenjati svoje stanje iz Ascendinga u Descending
  i obrnuto.
*/

/* 
 4. Dodaj funkciju na input koja ce pri change eventu filtrirati listu ovisno o unesenom tekstu. Dakle
  za unos rez, mora mi izlistati sve elemente s imenom rezije.
*/
