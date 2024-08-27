"use strict";

const planetNames = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
];

const planets = {
  Mercurio: 3.7,
  Venus: 8.85,
  Tierra: 9.81,
  Marte: 3.72,
  Júpiter: 26.39,
  Saturno: 11.67,
  Urano: 11.43,
  Neptuno: 11.07,
};

const planetSelector = document.querySelector("#planetsSlt");
const btn = document.querySelector("#btnCalc");
const txtKg = document.querySelector("#txtKg");
const resultDiv = document.querySelector(".result");

planetNames.forEach((e) => {
  const option = document.createElement("option");
  option.text = e.toUpperCase();
  option.value = e;
  planetSelector.appendChild(option);
});

btn.addEventListener("click", () => {
  if (isValidData(txtKg, planetSelector)) {
    const kg = Number(txtKg.value);    
    const val = findPlanet(planetSelector.value, planets);
    console.log((Math.ceil(kg * val * 100) / 100).toFixed(2));
    resultDiv.textContent = `El peso en ${planetSelector.value.toUpperCase()} es de ${(
      Math.ceil(kg * val * 100) / 100
    ).toFixed(2)} N`;
  } else {
    resultDiv.textContent = "";
    alert("Ingrese valores adecuados");
  }
});

function isValidData(input, select) {
  const pattern = /^[\d]+$/gm;
  const isNumber = pattern.test(input.value);
  
  if (!planetSelector.value || !txtKg.value || !isNumber ) return false;
  if ( Number( input.value ) < 1) return false;
  return true;
}

function findPlanet(planet, arrPlanets) {
  const values = Object.entries(arrPlanets);
  const valor = values.find((v) => v[0] === planet);
  return Number(valor[1]);
}
