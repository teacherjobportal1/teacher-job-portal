



// Sort alphabetically
schools.sort((a, b) => a.name.localeCompare(b.name));

const table = document.getElementById("schoolTable");
const input = document.getElementById("schoolName");

// Function to display schools (with optional filter)
function showSchools(filter = "") {
    table.innerHTML = "";

    const normalize = str =>
        str.replace(/[\.\-\s]/g, "").toLowerCase();

    const filtered = schools.filter(school => {
        const normalizedName = normalize(school.name);
        const normalizedDistrict = normalize(school.district);
        const normalizedFilter = normalize(filter);
        return (
            normalizedName.includes(normalizedFilter) ||
            normalizedDistrict.includes(normalizedFilter)
        );
    });

    for (let i = 0; i < filtered.length; i += 2) {
        const row = document.createElement("tr");

        // --- First cell ---
        const cell1 = document.createElement("td");
        const link1 = document.createElement("a");
        link1.textContent = `${filtered[i].name} (${filtered[i].district})`;
        link1.href = `Schoolbio.html?name=${encodeURIComponent(filtered[i].name)}`;
        link1.style.textDecoration = "none";
        link1.style.color = "blue";
        cell1.appendChild(link1);
        row.appendChild(cell1);

        // --- Second cell ---
        if (filtered[i + 1]) {
            const cell2 = document.createElement("td");
            const link2 = document.createElement("a");
            link2.textContent = `${filtered[i + 1].name} (${filtered[i + 1].district})`;
            link2.href = `Schoolbio.html?name=${encodeURIComponent(filtered[i + 1].name)}`;
            link2.style.textDecoration = "none";
            link2.style.color = "blue";
            cell2.appendChild(link2);
            row.appendChild(cell2);
        }

        table.appendChild(row);
    }
}

// Show all schools initially
showSchools();

// Live search
input.addEventListener("input", function () {
    showSchools(this.value);
});