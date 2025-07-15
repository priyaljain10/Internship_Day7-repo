const users = [
    {name: "Ayesha Singh", branch: "CSE", email: "ayeshas@gmail.com", year: 2024},
    {name: "Divya Verma", branch: "AIDS", email: "divya@gmail.com", year: 2022},
    {name: "Gaurav Shah", branch: "ECE", email: "gaurav@gmail.com", year: 2023},
    {name: "Harsh Nagpal", branch: "EE", email: "harsh@gmail.com", year: 2023},
    {name: "Ritu Kapoor", branch: "CSE", email: "ritu@gmail.com", year: 2025},
    {name: "Rohit Vijay", branch: "ME", email: "rohit@gmail.com", year: 2024}
];

const userlist= document.getElementById("list");
const searchInput = document.getElementById("search");
const sortButton = document.getElementById(sortBtn);

function displayUsers(list) {
    userlist.innerHTML = "";
    list.forEach(user => {
        const card = document.createElement("div");
        card.className = "userCard";
        card.innerHTML = `<h3>${user.name}</h3>
        <p><strong>Branch:</strong> ${user.branch}</p>
        <p><strong>Year:</strong> ${user.year}</p>`;
        userlist.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const filtered = users.filter(user => 
        user.name.toLowerCase().includes(term) || 
        user.branch.toLowerCase().includes(term)
    );
    displayUsers(filtered);
});

sortBtn.addEventListener("click", () => {
    users.sort((a,b) => a.year - b.year);
    displayUsers(users);
});

displayUsers(users);