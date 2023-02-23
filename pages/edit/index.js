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
