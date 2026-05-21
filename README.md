# 🪙 CuentiQ

> **Sistema de control financiero inteligente con proyección, análisis predictivo y toma de decisiones.**

[![NestJS](https://img.shields.io/badge/Backend-NestJS-red?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![React 19](https://img.shields.io/badge/Frontend-React%2019-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind v4](https://img.shields.io/badge/CSS-Tailwind%20v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/DevOps-Docker-0db7ed?style=flat-square&logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 📋 Descripción

**CuentiQ** es una plataforma moderna e integral de gestión financiera diseñada para transformar el registro contable tradicional en un motor de decisiones estratégico. A diferencia de las herramientas contables convencionales, CuentiQ combina el registro de transacciones, administración de cuentas y optimización de créditos con un **motor de proyección inteligente** capaz de predecir la salud financiera a mediano y largo plazo.

---

## ⚡ El Problema que Resuelve

1. **Falta de Proyección Activa**: La mayoría de las personas y pequeñas empresas saben cuánto gastaron ayer, pero no tienen claridad sobre su saldo en 3, 6 o 12 meses basándose en sus deudas y gastos recurrentes.
2. **Complejidad en la Gestión de Créditos**: Administrar créditos, calcular cuotas de amortización y visualizar el impacto real de los intereses sobre el patrimonio neto suele requerir complejas hojas de cálculo.
3. **Decisiones a Ciegas**: Falta de asesoramiento personalizado que indique cuándo es óptimo realizar una inversión, recortar gastos o amortizar anticipadamente una deuda.
4. **Dependencia de la Nube para Datos Sensibles**: Las herramientas de IA tradicionales obligan a subir datos financieros privados a servidores de terceros, comprometiendo la privacidad de los usuarios.

---

## 🧠 Integración de Inteligencia Artificial (En Desarrollo 🚀)

CuentiQ cuenta actualmente en desarrollo con una integración nativa de **modelos de IA locales a través de Ollama**. 

Al ejecutar LLMs avanzados (como *Llama 3*, *Mistral* o *Phi-3*) de forma local dentro de la infraestructura del usuario:
* **Predicción Financiera**: Analiza el histórico de transacciones para proyectar flujos de caja y alertar de posibles periodos de baja liquidez.
* **Análisis de Créditos y Amortización**: Evalúa dinámicamente tus contratos de crédito para sugerir estrategias óptimas de pago (métodos de Bola de Nieve o Avalancha).
* **Asistencia en Toma de Decisiones**: Funciona como un copiloto financiero privado que responde consultas complejas, realiza simulaciones de escenarios del tipo *"¿Qué pasa si compro un coche de $15,000 en cuotas?"*, y genera informes automatizados, **todo sin que tus datos financieros salgan jamás de tu servidor local**.

---

## 🏗️ Arquitectura del Proyecto

El proyecto adopta un enfoque de **Monorepo gestionado con NPM Workspaces**, promoviendo un desacoplamiento claro entre el cliente (Frontend), el servidor (Backend) y los modelos de datos compartidos (Shared).

### Estructura del Workspace

```text
CuentiQ/
├── backend/                  # API Rest construida en NestJS (TypeScript)
│   ├── src/
│   │   ├── accounts/         # Módulo de cuentas de ahorro, efectivo, etc.
│   │   ├── balance/          # Módulo de cálculo y agregación de saldos
│   │   ├── categories/       # Categorización de ingresos y egresos
│   │   ├── credits/          # Contratos de créditos y deudas activas
│   │   ├── credit_transactions/ # Transacciones/pagos asociados a créditos
│   │   ├── recurring/        # Configuración de transacciones recurrentes
│   │   ├── transactions/     # Libro de transacciones generales
│   │   ├── config/           # Configuraciones globales y de TypeORM
│   │   └── main.ts           # Punto de entrada de la aplicación backend
│   ├── Dockerfile            # Configuración de construcción para backend
│   └── package.json
├── frontend/                 # Aplicación SPA construida con React y Vite
│   ├── src/
│   │   ├── components/       # Componentes de UI altamente reutilizables
│   │   ├── pages/            # Vistas principales de la aplicación (Dashboard, Balance, etc.)
│   │   ├── modules/          # Lógica de negocio por componentes
│   │   ├── hooks/            # Hooks de React personalizados para consumo de API
│   │   ├── services/         # Clientes de API y peticiones utilizando Axios y React Query
│   │   ├── index.css         # Estilos globales configurados con TailwindCSS v4
│   │   └── main.tsx          # Punto de entrada de React
│   └── package.json
├── shared/                   # DTOs, interfaces y utilidades compartidas (En preparación)
├── docker-compose.yml        # Orquestación de infraestructura local (Postgres y Backend)
└── package.json              # Configuración principal del Monorepo
```

---

## 🛠️ Tecnologías Utilizadas

### Backend
* **NestJS** (v11) - Framework progresivo de Node.js para construir aplicaciones altamente escalables y mantenibles.
* **TypeORM** - Mapeador Objeto-Relacional (ORM) para la interacción con la base de datos de manera tipada.
* **PostgreSQL** - Base de datos relacional de grado empresarial para transacciones robustas y seguras.
* **TypeScript** - Superconjunto de JavaScript que añade tipado estático robusto.

### Frontend
* **React 19** - Librería para la construcción de interfaces de usuario interactivas.
* **Vite** - Bundler de última generación ultrarrápido.
* **TailwindCSS v4** - Framework de CSS utilitario de alto rendimiento.
* **Zustand** - Gestor de estado global ligero y rápido.
* **React Query (TanStack)** - Sincronización y manejo eficiente del estado del servidor.
* **React Router Dom 7** - Enrutamiento dinámico SPA.
* **React Hook Form & Zod** - Gestión de formularios robusta y validación estricta de esquemas.

---

## 🚀 Instalación y Configuración

### Requisitos Previos
* **Node.js** (v18 o superior)
* **npm** (v9 o superior)
* **Docker y Docker Compose**

---

### 📦 Desarrollo Local sin Docker (Para frontend y backend en vivo)

1. **Clonar el repositorio**:
   ```bash
   git clone git@github-personal:DearTitan70/CuentiQ.git
   cd CuentiQ
   ```

2. **Instalar dependencias del monorepo**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la carpeta `backend/` basándote en la configuración de base de datos requerida:
   ```env
   DATABASE_USER=postgres
   DATABASE_PASSWORD=mysecurepassword
   DATABASE_NAME=cuentiq_db
   DATABASE_PORT=5432
   ```

4. **Correr la base de datos (Postgres) mediante Docker**:
   ```bash
   docker compose up postgres -d
   ```

5. **Iniciar el entorno de desarrollo concurrente**:
   Este comando levantará el backend (NestJS) en el puerto `3000` y el frontend (Vite) en el puerto `5173` concurrentemente:
   ```bash
   npm run dev
   ```

---

### 🐳 Setup con Docker Completo (Producción / Simulación)

Para levantar toda la infraestructura (Base de datos y API Backend) en contenedores Docker aislados:

1. **Configurar variables de entorno globales**:
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   DATABASE_USER=postgres
   DATABASE_PASSWORD=mysecurepassword
   DATABASE_NAME=cuentiq_db
   DATABASE_PORT=5432
   ```

2. **Iniciar servicios con Docker Compose**:
   ```bash
   docker compose up --build -d
   ```

3. **Verificar el estado de los servicios**:
   ```bash
   docker compose ps
   ```

---

## ✨ Features Actuales del Sistema

* **Estructura Multicuenta**: Crea y monitorea múltiples cuentas financieras (bancarias, efectivo, tarjetas de crédito) con consolidación en tiempo real.
* **Libro de Transacciones**: Registro detallado de ingresos y egresos con soporte para categorización personalizada.
* **Gestión de Créditos Avanzada**: Sistema especializado para registrar deudas, tasas de interés, cálculo automático de saldos restantes e historial de abonos individuales.
* **Transacciones Recurrentes**: Automatiza el registro de gastos fijos mensuales (suscripciones, arriendos, seguros) para que tus proyecciones siempre sean realistas.
* **Módulo de Balance**: Agregación dinámica de activos, pasivos y patrimonio neto actual.

---

## 🎯 Casos de Uso

* **Planificación del Retiro o Ahorro a Largo Plazo**: Permite proyectar a cuántos años se logrará una meta financiera basándose en la tasa de ahorro real de los últimos meses.
* **Simulación de Decisiones de Endeudamiento**: Compara de forma interactiva si es financieramente más saludable adquirir un crédito o ahorrar para pagar de contado una inversión.
* **Optimización de Pago de Deudas**: Utiliza el historial de créditos y transacciones para definir qué deudas priorizar para pagar menos intereses globales.
* **Auditoría Financiera Personal**: Detecta suscripciones fantasma mediante transacciones recurrentes y clasifica fugas de capital a través del panel de categorías.

---

## 🗺️ Roadmap de Desarrollo

### Fase 1: Cimiento Financiero y Core (Completado/En Estabilización 🛠️)
- [x] Arquitectura de Monorepo con soporte de dependencias y scripts concurrentes.
- [x] Modelado de base de datos para cuentas, transacciones y categorías.
- [x] Módulo robusto de deudas (créditos) y transacciones de amortización.
- [x] Cliente SPA integrado con TailwindCSS v4, Zustand y enrutamiento modular.

### Fase 2: Motor de IA con Ollama (En Desarrollo Activo 🧠)
- [ ] Conexión del backend NestJS al servicio de **Ollama** local.
- [ ] Pipeline de RAG (Generación Aumentada por Recuperación) para dotar al LLM de contexto financiero anonymizado y seguro.
- [ ] Creación del Agente Consejero Financiero en el frontend (interfaz de chat y avisos proactivos).
- [ ] Modelos de proyección predictiva de flujo de caja basados en series de tiempo históricas.

### Fase 3: Automatización y Escalabilidad (Planificado 🚀)
- [ ] Sincronización automática bancaria segura (mediante APIs abiertas o importación avanzada).
- [ ] Reportes PDF generados de forma automática con análisis estructurado por IA.
- [ ] Aplicación móvil progresiva (PWA) para registro rápido de transacciones en la calle.

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](file:///c:/Users/Camilo%20Vera%20Skydropx/Projects/personal/CuentiQ/LICENSE) para obtener más detalles.

---

**CuentiQ** - *Toma el control de tu futuro financiero con el poder de la Inteligencia Artificial Local.*
