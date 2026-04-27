document.addEventListener('DOMContentLoaded', () => {
    const gridView = document.getElementById('grid-view');
    const detailView = document.getElementById('detail-view');
    const cards = document.querySelectorAll('.clickable-card');
    const btnBack = document.getElementById('btn-back');

    const detailImg = document.getElementById('detail-img');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
    const detailTechTags = document.getElementById('detail-tech-tags');
    const detailLiveDemo = document.getElementById('btn-live-demo');
    const detailGithub = document.getElementById('btn-github');

    if (!gridView || !detailView) return;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            detailTitle.innerText = card.querySelector('h4').innerText;
            detailDesc.innerText = card.getAttribute('data-description-full');
            detailImg.src = card.querySelector('img').src;
            detailGithub.href = card.getAttribute('data-github');
            
            const liveDemoLink = card.getAttribute('data-live-demo');
            const techListStr = card.getAttribute('data-tech-list');

            detailTechTags.innerHTML = ''; 
            if (techListStr) {
                techListStr.split(',').forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tech-tag';
                    span.innerText = tech.trim();
                    detailTechTags.appendChild(span);
                });
            }

            if (liveDemoLink && liveDemoLink !== '#') {
                detailLiveDemo.href = liveDemoLink;
                detailLiveDemo.style.display = 'flex'; 
            } else {
                detailLiveDemo.style.display = 'none'; 
            }

            gridView.classList.add('fade-out');
            setTimeout(() => {
                gridView.style.display = 'none';
                detailView.style.display = 'block';
                setTimeout(() => detailView.classList.add('fade-in'), 50);
            }, 400); 
        });
    });

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            detailView.classList.remove('fade-in');
            setTimeout(() => {
                detailView.style.display = 'none';
                gridView.style.display = 'grid';
                setTimeout(() => gridView.classList.remove('fade-out'), 50);
            }, 400);
        });
    }
});