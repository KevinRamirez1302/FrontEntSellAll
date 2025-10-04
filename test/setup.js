import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from './mocks/server.js';

// Iniciar el servidor antes de que comiencen todas las pruebas
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Limpiar el DOM después de cada prueba
afterEach(() => {
  cleanup();
});

// Resetear los handlers de MSW después de cada prueba para que no interfieran entre sí
afterEach(() => server.resetHandlers());

// Cerrar el servidor una vez que todas las pruebas hayan terminado
afterAll(() => server.close());
