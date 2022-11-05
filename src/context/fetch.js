import React, { useState } from 'react';
export async function infoData(link) {
  let next = true;
  let data;
  let arr = [];
  while (next) {
    data = await fetch(link)
      .then((res) => res.json())
      .then((dt) => dt);
    arr = arr.concat(data.data);
    data.links.hasOwnProperty("next")
      ? (link = data.links.next)
      : (next = false);
  }
  globalThis.datos = arr;
  globalThis.kDatos = () => console.table(Object.keys(datos[0].attributes));
  globalThis.pDatos = (atributo,i = 0) => console.log(datos[i].attributes[atributo]);
  return arr;
}