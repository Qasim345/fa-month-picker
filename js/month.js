const _el = document.querySelectorAll("[data-toggle='month']");
_el.forEach(_elm => {
  _elm.style.padding = "10px";
  _elm.style.direction = "rtl";
  _elm.style.textAlign = "right";
  if (_elm.getAttribute("show-selected") == "true") {
    _elm.onchange = function() {
      alert(this.value)
    }
  }
  var _afMonth = {
    m1: "حمل",
    m2: "ثور",
    m3: "جوزا",
    m4: "سرطان",
    m5: "اسد",
    m6: "سنبله",
    m7: "میزان",
    m8: "عقرب",
    m9: "قوس",
    m10: "جدی",
    m11: "دلو",
    m12: "حوت"
  },
   _psMonth = {
    m1: "وری",
    m2: "غویي",
    m3: "غبرګولی",
    m4: "چنګاښ",
    m5: "زمری",
    m6: "وږی",
    m7: "تله",
    m8: "لړم",
    m9: "لیندۍ",
    m10: "مرغومې",
    m11: "سلواغه",
    m12: "کب"
  },
  _irMonth = {
    m1: "فروردین",
    m2: "اردیبهشت",
    m3: "خرداد",
    m4: "تیر",
    m5: "مرداد",
    m6: "شهریور",
    m7: "مهر",
    m8: "آبان",
    m9: "آذر",
    m10: "دی",
    m11: "بهمن",
    m12: "اسفند"
  },
  _enMonth = {
    m1: "January",
    m2: "February",
    m3: "March",
    m4: "April",
    m5: "May",
    m6: "June",
    m7: "July",
    m8: "August",
    m9: "September",
    m10: "October",
    m11: "November",
    m12: "December"
  };

  var _selectedLang = _afMonth
  var _sel = "انتخاب"
  if (_elm.getAttribute("data-lang") == "ir") {
    _selectedLang = _irMonth;
  }
  else if(_elm.getAttribute("data-lang")== "ps"){
    _selectedLang = _psMonth;
  }
  else if (_elm.getAttribute("data-lang") == "en") {
    _selectedLang = _enMonth;
    _sel = "Select";
    _elm.style.direction = "ltr";
    _elm.style.textAlign = "left";
  } else {
    _selectedLang = _afMonth
  }
  _elm.innerHTML = `<option selected disabled>${_sel}</option>`;
  for (var i in _selectedLang) {
    _elm.innerHTML += `
    <option value=${_selectedLang[i]}>${_selectedLang[i]}</option>
    `;
  }
});