function validateLoginForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("❌ Please fill in all fields.");
    return false;
  }

  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters.");
    return false;
  }

  return true;
}

const toggle = document.getElementById('theme-toggle');
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            toggle.textContent = document.body.classList.contains('dark-theme') ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
