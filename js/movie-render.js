fetch('/movies.json')
  .then(response => response.json())
  .then(data => {
    const moviesContainer = document.getElementById('movies');
    const seriesContainer = document.getElementById('series');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'movie-card';

      card.innerHTML = `
        <div class="poster">
          <img src="${item.poster}" alt="${item.chinese}" loading="lazy">
        </div>
        <div class="info">
          <h3>${item.chinese} <span class="year">(${item.year})</span></h3>
          <p><strong>英文名：</strong>${item.english}</p>
          <p><strong>导演：</strong>${item.director}</p>
          <p><strong>豆瓣评分：</strong>${item.douban_score || '暂无'}</p>
          <p class="comment">💬 ${item.my_comment}</p>
        </div>
      `;

      if (item.type === 'movie') {
        moviesContainer.appendChild(card);
      } else if (item.type === 'series') {
        seriesContainer.appendChild(card);
      }
    });
  })
  .catch(err => {
    console.error("加载 JSON 失败", err);
  });

