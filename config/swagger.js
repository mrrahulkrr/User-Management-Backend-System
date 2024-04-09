// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management API',
            version: '1.0.0',
            description: 'API documentation for the User Management Backend System',
        },
        servers: [
            {
                url : "http://localhost:3000/api/users"
            }
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        // Define properties of the User schema
                        username: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        role: { type: 'string' },
                    },
                    // Add additional configuration as needed
                    // Example: required: ['username', 'email', 'password', 'role']
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

