let Resume = {
  "Name": "Sakthivel.k",
  "Age": "22",
  "Phone_number": "+91 -------",
  "Gender": "Male",
  "Nationality": "Hindhu",
  "Email": "---@gmail.com",
  "Languages": "Tamil,English",
  "Address": "------",
  "Professional_Summary": "• Believes in continuous learning and possesses an innovative approach, • Strong interpersonal and communication skills to work in a team",
  "Programming_Skills": "HTML, CSS, JAVASCRIPT, REACTJS, NODEJS, MONGODB, MYSQL",
  "Intrests": "Web Developing and web Designing",
  "Objective": "I aspire to have a career where I will experience new challenges at every point of work and would convert all my abilities, knowledge, and interest into a meaningful contribution to the company.",
  "Education_deatil_1": "Bsc(Computer science)",
  "Education_deatil_2": "Msc(Computer science)",
  "Experience": "1 year",
  "Project_1": "Building Google Document Clone with MERN Stack",
  "Project_2": "Building FOOD Clone with MERN Stack"
}


// For of loop
// Using for of loop with Resume
for (let [key, value] of Object.entries(Resume)) {
  console.log(`${key}: ${value}`);
}


// For In:
// Using for in loop with Resume
for (let key in Resume) {
  console.log(`${key}: ${Resume[key]}`);
}


// For Each:
// Using forEach loop with Resume
Object.keys(Resume).forEach(key => {
  console.log(`${key}: ${Resume[key]}`);
});