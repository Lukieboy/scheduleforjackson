const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const modalTitle = document.querySelector('.modal-title');

btn.addEventListener('click', (e)=>{
    modalTitle.textContent = 'Launch Meeting?';
});

