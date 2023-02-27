function getValues(form) {
  const formData = new FormData(form);

  return Object.fromEntries(formData);
}

/* 
  7. Dodaj submit event listener na formu i odgovarajuci callback. Submit event mora uzeti vrijednosti
     prethodno dodanog selecta i inputa, te provjeriti jesu li unesene. Ukoliko barem jedna vrijednost
     nije unesena, izbaci alert na ekran koji ima ispis "Molim unesi oba polja!". Nakon toga s te dvije
     vrijednosti napravi post request na /records endpoint s tim podacima. Poslije uspjesnog requesta
     redirectaj usera nazad na pages/list stranicu. 
*/

async function submitHandler(event) {
  event.preventDefault();

  const { value, type } = getValues(event.target);

  if (!value || !type) {
    alert("Molim unesi oba polja!");

    return;
  }

  await axios.post("http://localhost:3000/records", { value, type });

  window.location.href = `${window.location.origin}/pages/list/index.html`;
}

const cancelBtn = document.getElementById("cancel-btn");
const addForm = document.getElementById("add-form");

cancelBtn.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/pages/list/index.html`;
});

addForm.addEventListener("submit", submitHandler);
