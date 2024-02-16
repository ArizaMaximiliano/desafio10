import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { __dirname } from '../utils.js';
import path from 'path';

export default function setupSwagger(app) {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API del desafio 10',
        version: '1.0.0',
        description: 'Documentacion de mi API desafio 10',
      },
    },
    apis: [path.join(__dirname, '.', 'docs', '**', '*.yaml')],
  };

  const specs = swaggerJsdoc(options);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
