# ⚡ NG // Recruitment Challenge V2.0

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge" alt="Tailwind CSS">
</p>

---

## 🚀 Overview
Este proyecto es una plataforma de gestión de postulaciones técnicas diseñada para **Nimble Gravity**. La aplicación permite a los candidatos:
- **Autenticarse** mediante un protocolo seguro de acceso.
- **Visualizar vacantes** disponibles en tiempo real con una interfaz fluida.
- **Postularse** enviando repositorios de soluciones de manera directa a la API.

---

## 🎨 Design & UX: Neo-Brutalism
Se implementó una estética **Neo-Brutalista** personalizada, fusionando un estilo industrial con interfaces modernas.

- **Responsive Design:** Experiencia optimizada tanto para *mobile* como para *desktop*.
- **Feedback System:** Notificaciones mediante **Sonner** y validaciones de formularios en tiempo real para evitar errores de envío.
- **Visual Palette:** - 🟪 **Lilac** & 🟦 **Blue** para acentos técnicos.
  - ⬛ **Shadow Brutal:** Sombras duras y bordes definidos (`rounded-xl`).

---

## 🛠️ Tech Stack
| Tecnología | Uso |
| :--- | :--- |
| **React 19** | Core del desarrollo y manejo de UI |
| **TypeScript** | Tipado estricto para mayor robustez |
| **Tailwind v4** | Estilizado mediante Custom Themes |
| **Context API** | Gestión de estado global de la sesión |
| **Axios** | Cliente HTTP con manejo centralizado de errores |
| **Lucide React** | Set de iconos minimalistas e industriales |

---

## 🏗️ Architecture & Principles
El proyecto aplica principios de **Clean Code** y **SOLID** para asegurar la escalabilidad:

1. **Single Responsibility (SRP):** Componentes desacoplados siguiendo el patrón de *Atomic Design*.
2. **Custom Hooks:** Lógica de *fetching* y negocio separada de la capa de presentación.
3. **Persistence:** Sincronización automática del estado del candidato con `localStorage`.
4. **Error Handling:** Sistema global para capturar y mostrar errores de API de forma amigable.

---

## ⚙️ Setup & Installation

### 1. Preparar el entorno
Clona el repositorio e instala todas las dependencias necesarias:
```bash
npm install