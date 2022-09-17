import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';
import { UserFactory } from '../db/factories/UserFactory';
import { User } from '../entities/User';
import { UserService } from '../services/UserService';

describe('user service', () => {
    it('should create a user', async () => {
        const userService = new UserService();

        expect(userService.create({ name: 'John Doe', email: 'gabriel@asd.com', password: 'aksdhkka123' }))
            .resolves            
            .toBeInstanceOf(User);
    }),
    it('should not create a user with invalid data', async () => {
        const user = await UserFactory.create();
        const userService = new UserService();

        expect(userService.create({
            name: faker.name.firstName(),
            email: user.email,
            password: faker.internet.password(),
        })).rejects.toThrow();
    }),
    it('it should update user password', async () => {
        const user = await UserFactory.create();
        
        const userService = new UserService();

        const userUpdated = await userService.updatePassword(user.id, { password: '123456' });

        expect(userUpdated).toBeInstanceOf(User);
        expect(userUpdated.password).toBe('123456');
    }),
    it('it should delete a user', async () => {
        const user = await UserFactory.create();

        const userService = new UserService();

        expect(userService.delete(user.id)).resolves.toBeUndefined();
    }),
    it('it should not delete a user with invalid id', async () => {
        const userService = new UserService();

        expect(userService.delete(0)).rejects.toThrow();
    })
})