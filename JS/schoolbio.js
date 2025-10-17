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
  const findUsElement = document.querySelector("#findus");
  if (findUsElement && school.findus) {
    const link = document.createElement("a");
    link.href = school.findus;
    link.target = "_blank";
    link.textContent = "View on Google Maps";
    findUsElement.appendChild(link);
  }
} else {
    document.querySelector("h1").textContent = "School not found";
}