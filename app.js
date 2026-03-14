const button = document.getElementById("searchBtn");

button.addEventListener("click", searchCompany);

const displayResults = document.getElementById("results");

async function searchCompany() {

  const query = document.getElementById("searchInput").value;

  const url = `https://api.opencorporates.com/v0.4/companies/search?q=${query}`;

  const response = await fetch(url);

  const data = await response.json();

  displayResults.textContent = data;

  console.log(data);
}