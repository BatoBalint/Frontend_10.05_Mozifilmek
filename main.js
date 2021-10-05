var testP = document.getElementById('testP');
var FilmTomb = [];

class Film {
  nev;
  rendezo;
  kiadasi_ev;
  constructor(nev, rendezo, kiadasi_ev) {
    this.nev = nev;
    this.rendezo = rendezo;
    this.kiadasi_ev = kiadasi_ev;
  }

  get getAdatok() {
    return this.Adatok();
  }

  Adatok() {
    return this.nev + " , " + this.rendezo + " , " + this.kiadasi_ev;
  }
}

var testFilm = new Film("Kacsa", "En", "2020");

FilmTomb.push(testFilm);

testP.innerHTML = FilmTomb[0].getAdatok;
