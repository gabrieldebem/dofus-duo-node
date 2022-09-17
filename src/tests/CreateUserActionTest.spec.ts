import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import { CreateUserAction } from "../actions/CreateUserAction";
import { User } from "../entities/User";

describe('create user action', () => {
  it('should create user', async () => {
    expect(new CreateUserAction().execute({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    })).resolves.toBeInstanceOf(User)
  }),
  it('should create user with correct data', async () => {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const user = await new CreateUserAction().execute({ name, email, password });

    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
  })
})