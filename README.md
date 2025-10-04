# Proyecto E-commerce "Sell All" (Frontend)

Este es el repositorio del frontend para "Sell All", una aplicación de comercio electrónico construida con React. La aplicación permite a los usuarios registrarse, iniciar sesión, ver productos, agregarlos a un carrito de compras y procesar pagos.

## ✨ Características Principales

- **Autenticación de Usuarios:** Sistema completo de registro, inicio de sesión y cierre de sesión.
- **Rutas Protegidas:** Ciertas vistas solo son accesibles para usuarios autenticados.
- **Catálogo de Productos:** Visualización de productos en tarjetas y una vista detallada.
- **Carrito de Compras:** Funcionalidad para agregar, ver y gestionar productos en el carrito.
- **Gestión de Estado Global:** Uso de React Context para manejar el estado de la autenticación y el carrito de compras en toda la aplicación.
- **Diseño Responsivo:** Interfaz estilizada con Tailwind CSS para una experiencia de usuario moderna en cualquier dispositivo.

## 🚀 Tecnologías Utilizadas

- **React:** Biblioteca principal para la construcción de la interfaz de usuario.
- **Vite:** Herramienta de desarrollo y empaquetado rápido.
- **React Router DOM:** Para la gestión de rutas en la aplicación.
- **Tailwind CSS:** Framework de CSS para un diseño rápido y personalizable.
- **Axios:** Cliente HTTP para realizar peticiones a la API del backend.
- **js-cookie:** Para gestionar las cookies de autenticación en el navegador.

## 📂 Estructura del Proyecto

El proyecto está organizado para separar responsabilidades y facilitar el mantenimiento.

```
/
├── api/                # Módulos para interactuar con la API del backend.
│   ├── auth.jsx        # Peticiones de autenticación (login, registro).
│   ├── axios.jsx       # Instancia pre-configurada de Axios.
│   └── shoppingCar.jsx # Peticiones para el carrito de compras.
│
├── context/            # Contextos de React para el estado global.
│   ├── AuthContext.jsx   # Estado de autenticación y datos del usuario.
│   └── ShoppingContext.jsx # Estado del carrito de compras.
│
├── public/             # Archivos estáticos (imágenes, iconos).
│
├── src/
│   ├── assets/         # Assets importados por componentes.
│   ├── PrivateViews/   # Vistas que requieren autenticación.
│   ├── Views/          # Vistas públicas (login, home, etc.).
│   ├── App.jsx         # Componente principal y configuración de rutas.
│   ├── main.jsx        # Punto de entrada de la aplicación.
│   └── ProtectedRoute.jsx # Componente para proteger rutas.
│
└── ...                 # Archivos de configuración (vite, tailwind, etc.).
```

## 🏁 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/)

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/KevinRamirez1302/FrontEntSellAll.git
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd FrontEntSellAll
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

### Scripts Disponibles

- **Iniciar el servidor de desarrollo:**

  ```bash
  npm run dev
  ```

  La aplicación se ejecutará en `http://localhost:5173`.

- **Construir para producción:**

  ```bash
  npm run build
  ```

  Genera una versión optimizada en la carpeta `dist/`.

- **Previsualizar la build de producción:**
  ```bash
  npm run preview
  ```

## 🎨 Patrones de Arquitectura

- **API Abstraction:** Toda la comunicación con el backend se centraliza en el directorio `api/`. La instancia de `axios.jsx` gestiona la URL base y las credenciales, mientras que otros archivos como `auth.jsx` definen las funciones específicas para cada endpoint.
- **State Management con Context:** Se utilizan `AuthContext` y `ShoppingContext` para proveer un estado global sin necesidad de librerías externas como Redux. Esto mantiene la gestión del estado simple y alineada con las funcionalidades de React.
- **Componentes y Vistas:** Las vistas principales se dividen en `Views` (públicas) y `PrivateViews` (privadas), protegidas por el componente `ProtectedRoute.jsx` que verifica el estado de autenticación.
