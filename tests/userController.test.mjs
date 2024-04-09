import { expect } from 'chai';
import sinon from 'sinon';
import userController from '../controllers/userControllers.js';
import User from '../models/userModel.js';

describe('User Controller', () => {
    describe('createUser', () => {
        it('should create a new user', async () => {
            const req = {
                body: {
                    username: 'testUser',
                    email: 'test@example.com',
                    password: 'password123',
                    role: 'user'
                }
            };
            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.stub()
            };
            sinon.stub(User.prototype, 'save').resolves({
                username: 'testUser',
                email: 'test@example.com',
                role: 'user'
            });

            await userController.createUser(req, res);

            sinon.assert.calledWithExactly(res.status, 201);
            sinon.assert.calledWithExactly(res.json, {
                username: 'testUser',
                email: 'test@example.com',
                role: 'user'
            });

            User.prototype.save.restore(); // Restore the stub to avoid side effects
        });

        it('should handle error while creating a new user', async () => {
            const req = {
                body: {
                    username: 'testUser',
                    email: 'test@example.com',
                    password: 'password123',
                    role: 'user'
                }
            };
            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.stub()
            };
            sinon.stub(User.prototype, 'save').throws(new Error('Mock Error'));

            await userController.createUser(req, res);

            sinon.assert.calledWithExactly(res.status, 400);
            sinon.assert.calledWithExactly(res.json, { msg: 'Error while creating the user!!' });

            User.prototype.save.restore(); // Restore the stub to avoid side effects
        });
    });


    describe('getUserById', () => {
        it('should get a user by ID', async () => {
            const req = {
                params: { id: 'userId123' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            const user = {
                id: 'userId123',
                username: 'testUser',
                email: 'test@example.com',
                role: 'user'
            };
            sinon.stub(User, 'findById').resolves(user);

            await userController.getUserById(req, res);

            sinon.assert.calledWith(res.json, user);
            sinon.assert.calledWith(res.status, 200);

            User.findById.restore();
        });

        it('should handle user not found', async () => {
            const req = {
                params: { id: 'userId123' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            sinon.stub(User, 'findById').resolves(null);

            await userController.getUserById(req, res);

            sinon.assert.calledWith(res.status, 404);
            sinon.assert.calledWith(res.json, { message: 'User not found' });

            User.findById.restore();
        });

        it('should handle error while getting user by ID', async () => {
            const req = {
                params: { id: 'userId123' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            sinon.stub(User, 'findById').throws(new Error('Mock Error'));

            await userController.getUserById(req, res);

            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledWith(res.json, { msg: 'Mock Error' });

            User.findById.restore();
        });
    });

    describe('updateUser', () => {
        it('should update user details', async () => {
            const req = {
                params: { id: 'userId123' },
                body: { username: 'updatedUser', email: 'updated@example.com' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            const updatedUser = {
                id: 'userId123',
                username: 'updatedUser',
                email: 'updated@example.com',
                role: 'user'
            };
            sinon.stub(User, 'findByIdAndUpdate').resolves(updatedUser);

            await userController.updateUser(req, res);

            sinon.assert.calledWith(res.json, updatedUser);
            sinon.assert.calledWith(res.status, 200);

            User.findByIdAndUpdate.restore();
        });

        it('should handle user not found while updating', async () => {
            const req = {
                params: { id: 'userId123' },
                body: { username: 'updatedUser', email: 'updated@example.com' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            sinon.stub(User, 'findByIdAndUpdate').resolves(null);

            await userController.updateUser(req, res);

            sinon.assert.calledWith(res.status, 404);
            sinon.assert.calledWith(res.json, { message: 'User not found' });

            User.findByIdAndUpdate.restore();
        });

        it('should handle error while updating user', async () => {
            const req = {
                params: { id: 'userId123' },
                body: { username: 'updatedUser', email: 'updated@example.com' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            sinon.stub(User, 'findByIdAndUpdate').throws(new Error('Mock Error'));

            await userController.updateUser(req, res);

            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledWith(res.json, { msg: 'Mock Error' });

            User.findByIdAndUpdate.restore();
        });
    });

    describe('deleteUser', () => {
        it('should delete a user by ID', async () => {
            const req = {
                params: { id: 'userId123' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            const deletedUser = {
                id: 'userId123',
                username: 'deletedUser',
                email: 'deleted@example.com',
                role: 'user'
            };
            sinon.stub(User, 'findByIdAndDelete').resolves(deletedUser);

            await userController.deleteUser(req, res);

            sinon.assert.calledWith(res.json, { msg: 'User deleted successfully' });
            sinon.assert.calledWith(res.status, 200);

            User.findByIdAndDelete.restore();
        });

        it('should handle user not found while deleting', async () => {
            const req = {
                params: { id: 'userId123' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            sinon.stub(User, 'findByIdAndDelete').resolves(null);

            await userController.deleteUser(req, res);

            sinon.assert.calledWith(res.status, 404);
            sinon.assert.calledWith(res.json, { message: 'User not found' });

            User.findByIdAndDelete.restore();
        });

        it('should handle error while deleting user', async () => {
            const req = {
                params: { id: 'userId123' }
            };
            const res = {
                json: sinon.stub(),
                status: sinon.stub().returnsThis()
            };
            sinon.stub(User, 'findByIdAndDelete').throws(new Error('Mock Error'));

            await userController.deleteUser(req, res);

            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledWith(res.json, { msg: 'Mock Error' });

            User.findByIdAndDelete.restore();
        });
    });


});

// module.exports = {
//     expect,
//     sinon,
//     userController,
//     User
// };
