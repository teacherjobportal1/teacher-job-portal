// scriptvacancies.js

// Filter schools that have vacancies
const schoolsWithVacancies = schools.filter(
  school => school.vacancies && school.vacancies.trim() !== ""
);

// Group schools by district
const groupedByDistrict = {};
schoolsWithVacancies.forEach(school => {
  const district = school.district || "Unknown District";
  if (!groupedByDistrict[district]) {
    groupedByDistrict[district] = [];
  }
  groupedByDistrict[district].push(school);
});

// Get the container div
const container = document.getElementById("vacancy-table");

// For each district, create a section
for (const [district, districtSchools] of Object.entries(groupedByDistrict)) {
  // District heading
  const h2 = document.createElement("h2");
  h2.textContent = district;
  container.appendChild(h2);

  // Create a table
  const table = document.createElement("table");
  table.border = "1";
  table.style.borderCollapse = "collapse";
  table.style.marginBottom = "20px";
  table.style.width = "100%";

  // Table header
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
    <th>School Name</th>
    <th>Vacancies</th>
  `;
  table.appendChild(headerRow);

  // Add school rows
  districtSchools.forEach(school => {
    const row = document.createElement("tr");
    const schoolLink = `<a href="Schoolbio.html?name=${encodeURIComponent(school.name)}">${school.name}</a>`;
    row.innerHTML = `
      <td>${schoolLink}</td>
      <td>${school.vacancies}</td>
    `;
    table.appendChild(row);
  });

  container.appendChild(table);
}
