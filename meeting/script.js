let dodgeCount = 0;
const dodgeTexts = [
  "Yo'q", "Aniqmi?", "Rostanmi?", "O'ylab ko'ring", "Nega?",
  "Bir shans bering", "Iltimos...", "Pushaymon bo'lasiz", "Oxirgi imkoniyat 🥺"
];

function showInvite(){
  const name = document.getElementById('nameInput').value.trim();
  const title = name ? name + ", men bilan uchrashasanmi?" : "Men bilan uchrashasanmi?";
  document.getElementById('inviteTitle').textContent = title;
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

function dodge(e){
  const btn = document.getElementById('noBtn');
  const card = document.getElementById('card');
  const cardRect = card.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;
  const randX = Math.random() * maxX - maxX/2;
  const randY = Math.random() * maxY - maxY/2;

  btn.style.position = 'relative';
  btn.style.left = randX + 'px';
  btn.style.top = randY + 'px';

  dodgeCount++;
  const idx = Math.min(dodgeCount, dodgeTexts.length - 1);
  btn.textContent = dodgeTexts[idx];

  if(e) e.preventDefault();
}

function showOptions(){
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.remove('hidden');
}

function sendInvite(){
  const activity = document.getElementById('activity').value;
  const date = document.getElementById('dateInput').value;
  const time = document.getElementById('timeInput').value;
  const name = document.getElementById('nameInput').value.trim();

  let msg = "Taklif jo'natildi! 💌<br>";
  msg += (name ? name : "U") + " bilan <b>" + activity + "</b>";
  if(date) msg += ", " + date;
  if(time) msg += " soat " + time;
  msg += " da uchrashamiz 💕";

  document.getElementById('finalMsg').innerHTML = msg;
  document.getElementById('step3').classList.add('hidden');
  document.getElementById('step4').classList.remove('hidden');
}
