// Task 4
const button = document.getElementById("colorBtn");
button.addEventListener("click", () => {
    const colors = [
        "#FFB6C1",
        "#ADD8E6",
        "#90EE90",
        "#FFD700",
        "#DDA0DD"
    ];
    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
// Task 5 API Integration
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let output = '';
        data.forEach(user => {
            output += `
            <div class="user-card">
                <h4>${user.name}</h4>
                <p>${user.email}</p>
                <p>${user.phone}</p>
            </div>
            `;
        });
        document.getElementById('userData').innerHTML = output;
    })
    .catch(error => {
        console.log(error);
    });
}
// Task 6 Form Validation
document.getElementById("myForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    let name =
        document.getElementById("name").value.trim();
    let email =
        document.getElementById("email").value.trim();
    let password =
        document.getElementById("password").value.trim();
    let message =
        document.getElementById("message");
    if(name === ""){
        message.innerHTML =
        "<p style='color:red'>Name is required</p>";
        return;
    }
    if(!email.includes("@")){
        message.innerHTML =
        "<p style='color:red'>Valid email required</p>";
        return;
    }
    if(password.length < 6){
        message.innerHTML =
        "<p style='color:red'>Password must be at least 6 characters</p>";
        return;
    }
    message.innerHTML =
    "<p style='color:green'>Form Submitted Successfully!</p>";
});