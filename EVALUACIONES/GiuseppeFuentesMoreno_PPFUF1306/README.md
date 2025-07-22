# Proyecto Web - Giuseppe Fuentes Moreno (PPFUF1306)

Este proyecto web representa una práctica de desarrollo front-end que integra HTML, CSS y elementos multimedia, incluyendo un efecto visual **parallax**. A continuación, se detalla el contenido, estructura, tecnologías y validaciones realizadas.

---

## 📁 Estructura del Proyecto

GiuseppeFuentesMoreno_PPFUF1306/
├── index.html
├── ASSETS/
│ ├── CSS/
│ │ └── styles.css
│ └── IMAGES/
│ └── img.png
└── VALIDACIONES/
├── Validacion-HTML (W3C).png
└── Validacion-CSS (W3C).png


---

## ✅ Validaciones W3C

El proyecto ha sido validado con las herramientas oficiales de W3C, cumpliendo con los estándares web:

- **HTML:** Libre de errores (ver `VALIDACIONES/Validacion-HTML (W3C).png`)
- **CSS:** Libre de errores (ver `VALIDACIONES/Validacion-CSS (W3C).png`)

---

## 🧱 Tecnologías Utilizadas

### 🔤 HTML
- Página principal `index.html`.
- Uso de etiquetas semánticas como `<h1>` y `<div>`.

### 🎨 CSS
- Estilos definidos en `ASSETS/CSS/styles.css`.
- Tipografía ligera mediante Google Fonts o `font-family` personalizada.
- Estilización del layout y fondos con `flex`, `padding`, `color`, etc.

### 🖼 Imágenes
- Imagen principal `img.png` (dimensiones: 500x250px), usada tanto de forma directa como en el fondo.

---

## 🌄 Efecto Parallax

Se implementó un efecto visual **parallax** utilizando CSS puro. La clase `.parallax` aplicada a un contenedor hace que la imagen de fondo permanezca fija al hacer scroll, generando profundidad visual.

### 📌 Ejemplo de implementación:

```css
.parallax {
  background-image: url('../IMAGES/img.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}
