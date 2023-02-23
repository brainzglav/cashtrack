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

async function fetchList() {
  const { data } = await axios.get("http://localhost:3000/records");

  cashList = data;
  displayList(data);
}

function sortHandler() {
  if (sortBtn.innerHTML === "Descending") {
    const data = cashList.sort((first, second) => first.value - second.value);

    sortBtn.innerHTML = "Ascending";
    displayList(data);

    return;
  }

  const data = cashList.sort((first, second) => second.value - first.value);

  sortBtn.innerHTML = "Descending";
  displayList(data);
}

function changeHandler(event) {
  const filter = event.target.value.toLowerCase();
  const data = cashList.filter(({ type }) => {
    const value = translate[type].toLowerCase();

    return value.includes(filter);
  });

  displayList(data);
}

const translate = {
  UTILITIES: "Rezije",
  GROCERIES: "Namirnice",
  REPAIRS: "Servis",
  MISCELLANEOUS: "Ostalo",
};

let cashList = [];

fetchList();

/* 
 3. Dodaj funkciju na botun koja ce pri prvom kliku na botun sortirati listu od najveceg prema najmanjem
  i promjeniti naziv botuna u Descending. Drugim klikom ce sortirati od najmanjem prema najvecem, a 
  naziv botuna ce biti Ascending. Ponovnim klikom botun ce mjenjati svoje stanje iz Ascendinga u Descending
  i obrnuto.
*/

const sortBtn = document.getElementById("sort-btn");
const addBtn = document.getElementById("add-btn");
const searchInput = document.getElementById("search");

sortBtn.addEventListener("click", sortHandler);
addBtn.addEventListener(
  "click",
  () =>
    (window.location.href = `${window.location.origin}/pages/edit/index.html`)
);
searchInput.addEventListener("keyup", changeHandler);

/* 
 4. Dodaj funkciju na input koja ce pri change eventu filtrirati listu ovisno o unesenom tekstu. Dakle
  za unos rez, mora mi izlistati sve elemente s imenom rezije.
*/

/* 
 5. Dodaj Add botun na vrhu liste gdje se nalazi filter. Add botun mora redirectat usera na pages/edit screen.
    Zakaci odgovarajuci event listener na taj botun kako bi izvrsio redirect. U pages/edit/index.html dokumentu
    dodaj Cancel botun koji ce usera vracati na pages/list/index.html. 
*/
