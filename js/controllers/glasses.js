export let glassesInfo = (glasses) => {
  document.querySelector('#glassesInfo').style.display = 'block';
  document.querySelector('#glassesInfo').innerHTML = `
    <h2>${glasses.name} - ${glasses.brand}</h2>
    <div>
      <span style="background-color: red; color: white;">$${glasses.price}</span>
      <span style="color: green;">Stocking</span>
    </div>
    <p>${glasses.description}</p>
  `;
};

export let appear = (glasses) => {
  document.querySelector('#avatar').innerHTML = `<img src="${glasses.virtualImg}" alt="Glasses image">`;
};