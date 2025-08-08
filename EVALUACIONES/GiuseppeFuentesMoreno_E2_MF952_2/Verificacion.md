# Verificación y Pruebas realizadas

## Pruebas en DevTools

- **Google Chrome DevTools:**
  - Probada la página en modos móvil (iPhone 12), tablet (iPad), y escritorio.
  - La página mantiene la legibilidad, jerarquía visual y correcta disposición de secciones.
  - El menú principal y botón de modo claro/oscuro funcionan correctamente.
  - Imágenes responden bien al tamaño de pantalla (la imagen de portada se adapta sin recortes importantes).
  - Las tarjetas de proyectos se reordenan en grid flexible (de 3 columnas en escritorio a 1 columna en móvil).

- **Accesibilidad:**
  - Usado el Lighthouse audit para accesibilidad con resultado > 90%.
  - Botón de cambio de modo tiene etiquetas aria-label y título para lectores de pantalla.
  - Contrastes de color adecuados tanto en modo claro como oscuro.

- **JavaScript:**
  - El toggle modo claro/oscuro funciona sin errores.
  - Cambio del texto y icono en el botón es fluido y accesible.

## Pruebas en servidor Apache2 local (Linux)

- Servidor Apache 2.4 instalado y configurado con DocumentRoot apuntando a la carpeta del proyecto.
- La página carga sin errores ni referencias rotas.
- No hay problemas con encoding UTF-8 ni con recursos externos (Google Fonts, imágenes de Unsplash).
- Permisos de archivos correctos para lectura desde Apache.

## Problemas detectados y resueltos

- Inicialmente, el icono del botón no se alineaba verticalmente, se corrigió con `display: flex; align-items: center;` en el botón.
- El texto del botón se cortaba en pantallas pequeñas, se ajustó tamaño de fuente y padding con media queries.
- Contraste insuficiente en modo oscuro para algunos textos, ajustado colores variables CSS.
- La imagen hero se veía demasiado grande en móviles, se añadió max-height y object-fit para mejorar presentación.

---