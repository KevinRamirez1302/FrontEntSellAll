import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Configura el servidor de mocks con los handlers definidos
export const server = setupServer(...handlers);
