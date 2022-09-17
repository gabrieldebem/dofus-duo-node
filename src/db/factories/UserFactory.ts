import { User } from "../../entities/User";
import { faker } from '@faker-js/faker';
import { UserRepository } from "../../repositories/UserRepository";

export class UserFactory {
    static async create(): Promise<User> {
        const repository = new UserRepository();

        const user = await repository.create({
            name: faker.name.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });

        return user;
    }
}