
# diseño.md

```markdown
# Justificación del Diseño

## Elección de Colores

- Se usaron tonos suaves de azul (#2874f0 y variantes) para transmitir confianza, serenidad y esperanza.
- El fondo claro es blanco roto y gris muy claro para facilitar la lectura.
- El modo oscuro usa tonos oscuros azulados para disminuir fatiga visual en ambientes con poca luz.
- Los botones y elementos interactivos usan azul brillante para llamar la atención sin ser agresivos.

## Tipografía

- Se eligieron dos fuentes de Google Fonts:
  - **Poppins** (semi-bold) para títulos y elementos destacados, por su modernidad y buena legibilidad.
  - **Open Sans** para texto principal, porque es clara, neutral y legible en tamaños pequeños.
- El tamaño base de texto es 1.1rem para facilitar la lectura sin forzar la vista.

## Estructura

- Uso de HTML semántico con `header`, `main`, `section`, `footer` para mejorar accesibilidad y SEO.
- Diseño responsivo mediante CSS Grid y Flexbox:
  - El header con logo y botón de modo claro/oscuro alineados horizontalmente.
  - Secciones con márgenes amplios para respirar el contenido.
  - Grid adaptable para proyectos, pasando de 3 columnas en escritorio a 1 columna en móvil.
- Espaciado y márgenes adecuados para evitar saturación visual.

## Accesibilidad

- Contrastes suficientes según WCAG AAA en texto y botones.
- Botón de modo claro/oscuro con `aria-label` y título para lectores de pantalla.
- Tipografía legible con tamaño y peso que no cansa.
- Transiciones suaves para no causar efectos incómodos.

## Adaptación Multidispositivo

- Viewport configurado correctamente.
- Media queries para tamaños tablet y móvil.
- Layout fluido que se adapta sin romperse en distintos anchos.
- Imágenes con `max-width: 100%` y `object-fit` para evitar distorsión.
- Botones táctiles con área de clic amplia.

---
