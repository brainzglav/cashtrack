function createListItem({ type, value }) {
  const html = `
  <li class="cash-list__item">
    <span>${type}</span>
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
 Napisi funkciju fetchList koja se koristi za dohvacanje liste studenata sa endpointa /records
 i potom displaya tu funkciju koristeci displayList funkciju. Mozes koristiti axios za to.
 Pozivi tu funkciju pri inicijalizaciji stranice.
*/
