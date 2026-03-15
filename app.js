const button = document.getElementById("searchBtn");

button.addEventListener("click", searchCompany);

const displayResults = document.getElementById("results");

async function searchCompany() {

  const container = document.getElementById("results");

  container.innerHTML = "Loading...";

  const data = {
    results: [
      {
        id: 1,
        name: "Flutterwave",
        trustScore: 92,
        verified: true,
        recommendations: 34,
        industry: "Fintech"
      },
      {
        id: 2,
        name: "Paystack",
        trustScore: 95,
        verified: true,
        recommendations: 51,
        industry: "Fintech"
      }
    ]
  };

  container.innerHTML = "";

  data.results.forEach(company => {

    const badge = company.verified ? "✅ Verified" : "❌ Unverified";

    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${company.name}</h3>
      <p>${badge}</p>
      <p>Trust Score: ${company.trustScore}</p>
      <p>Industry: ${company.industry}</p>
      <p>Recommendations: ${company.recommendations}</p>
    `;

    container.appendChild(card);

  });

}