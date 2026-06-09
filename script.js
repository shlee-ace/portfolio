document.querySelectorAll('.project-card').forEach((card)=>{
  const btn = card.querySelector('.toggle');
  btn.addEventListener('click',()=>{
    card.classList.toggle('open');
    btn.textContent = card.classList.contains('open') ? '접기' : '상세 보기';
  });
});

const copyBtn = document.getElementById('copyEmail');
copyBtn?.addEventListener('click', async ()=>{
  await navigator.clipboard.writeText('kkari1016@gmail.com');
  copyBtn.textContent = '복사 완료';
  setTimeout(()=> copyBtn.textContent = '이메일 복사', 1400);
});
