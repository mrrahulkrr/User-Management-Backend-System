const express = require('express');
const router = express.Router()
const userController = require('../controllers/userControllers')

// route to create a new user
/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user and add it to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad request.
 *       '500':
 *         description: Internal server error.
 */

router.post('/', userController.createUser);

// route to get user by id
/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     description: Retrieve a user from the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The requested user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found.
 *       '500':
 *         description: Internal server error.
 */

router.get('/:id', userController.getUserById);

//route to update user details
/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Update an existing user in the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found.
 *       '500':
 *         description: Internal server error.
 */

router.put('/:id', userController.updateUser);

// route to delete a user
/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a user from the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User deleted successfully.
 *       '404':
 *         description: User not found.
 *       '500':
 *         description: Internal server error.
 */

router.delete('/:id', userController.deleteUser);

module.exports = router ;