// Toggle modo claro/oscuro
    const btn = document.getElementById('mode-toggle');
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      if(document.body.classList.contains('dark')) {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21.64 13.44a9 9 0 0 1-12.08-12.08 7 7 0 0 0 12.08 12.08z"/>
          </svg> Modo Claro
        `;
      } else {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9z"/>
          </svg> Modo Oscuro
        `;
      }
    });