NG // Recruitment Challenge V2.0

🚀 Overview

Este proyecto es una plataforma de gestión de postulaciones técnicas diseñada para Nimble Gravity. La aplicación permite a los candidatos autenticarse, visualizar vacantes disponibles en tiempo real y enviar sus repositorios de soluciones de manera segura y eficiente.

🎨 Design & UX

Se implementó una estética Neo-Brutalista personalizada, priorizando la legibilidad y un flujo de usuario industrial.

Responsive Design: Adaptado para dispositivos móviles y escritorio.

Feedback System: Notificaciones en tiempo real mediante Toasts (Sonner) y validaciones de formularios customizadas.

Visuals: Bordes redondeados (rounded-xl), sombras duras (shadow-brutal) y una paleta de colores técnica (Lilac, Pink, Blue).

🛠️ Tech Stack

Core: React 19 + TypeScript.

Styling: Tailwind CSS v4 (Custom Theme).

State Management: Context API + Custom Hooks (Separación de lógica y vista).

Networking: Axios (Instancia centralizada con manejo de errores).

Icons: Lucide React.

🏗️ Architecture & Principles

El proyecto fue construido bajo estándares de Clean Code y SOLID:

Single Responsibility (SRP): Componentes atomizados (Atomic Design).

Custom Hooks: Toda la lógica de fetching y autenticación está desacoplada de los componentes de UI.

Persistence: Gestión de sesión mediante localStorage con sincronización de estado.

⚙️ Setup & Installation


1. Clonar el repositorio e instalar dependencias:


npm install


2. Configurar variables de entorno:

El proyecto requiere conectarse a la API de Nimble Gravity. Copia el archivo de plantilla y completa la URL base:


cp .env.template .env


Nota: Asegúrate de que VITE_API_URL apunte a la dirección correcta proporcionada en el challenge.

3. Ejecutar en modo desarrollo:


npm run dev


👤 Author
Selene Posadas Full Stack Developer & Engineering Student 2026