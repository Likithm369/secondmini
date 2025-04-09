   
function selectAmount(amount) {
  document.getElementById("customAmount").value = amount;
}

function donateNow() {
  const amount = document.getElementById("customAmount").value;
  const msg = document.getElementById("donationMsg");

  if (amount && amount > 0) {
    msg.textContent = `✅ Thank you for your generous ₹${amount} donation! It will directly support food, care, and love through verified NGOs.`;
  } else {
    msg.textContent = "❗ Please enter a valid amount.";
  }
}


  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const welcomeMessages = [
    "Welcome to ShareBite – Bringing Smiles Through Every Bite!",
    "Join us in spreading love, one meal at a time.",
    "Your leftovers are someone else's blessing.",
    "Together, we can fight hunger!"
  ];

  const welcomeEl = document.getElementById("welcomeMessage");
  welcomeEl.innerText = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  
