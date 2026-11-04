const reader = document.querySelector('#reader');
const readerFrame = document.querySelector('#reader-frame');
const readerNew = document.querySelector('#reader-new');
const readerTitle = document.querySelector('#reader-title');

function openReader(button) {
  const pdf = button.dataset.open;
  const card = button.closest('[data-doc-id]');
  const title = card.querySelector('h3').textContent;
  readerTitle.textContent = title;
  readerFrame.src = pdf;
  readerNew.href = pdf;
  reader.showModal();
}

document.querySelectorAll('.read-button').forEach((button) => {
  button.addEventListener('click', () => openReader(button));
});

document.querySelector('#reader-close').addEventListener('click', () => reader.close());
reader.addEventListener('close', () => { readerFrame.src = 'about:blank'; });
reader.addEventListener('click', (event) => {
  if (event.target === reader) reader.close();
});
