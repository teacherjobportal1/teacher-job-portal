// Get the school name from the URL
const urlParams = new URLSearchParams(window.location.search);
const schoolName = urlParams.get("name");

// Find the school in the data
const school = schools.find(
  s => s.name.toLowerCase() === schoolName?.toLowerCase()
);

if (school) {
    // Display the data
    document.querySelector("h1").textContent = school.name;
    document.querySelector("#district").textContent = "District: " + school.district;
    document.querySelector("#vacancies").textContent = "Vacancies: " + school.vacancies;
    document.querySelector("#location").textContent = "Location: " + school.location;
    document.querySelector("#contact").textContent = "Contact number: " + school.contact;
    document.querySelector("#whatsapp").textContent = "WhatsApp number: " + school.whatsapp;
    document.querySelector("#email").textContent = "Email-ID: " + school.email;

      // ✅ Add clickable Google Maps link
  const findUsElement1 = document.querySelector("#findus");
  if (findUsElement1 && school.findus) {
    const link1 = document.createElement("a");
    link1.href = school.findus;
    link1.target = "_blank";
    link1.textContent = "Click to view on Google Maps";
    findUsElement1.appendChild(link1);
  }

    const findUsElement2 = document.querySelector("#website");
  if (findUsElement2 && school.website) {
    const link2 = document.createElement("a");
    link2.href = school.website;
    link2.target = "_blank";
    link2.textContent = "Click to view on browser";
    findUsElement2.appendChild(link2);
  }


} else {
    document.querySelector("h1").textContent = "School not found";
}

