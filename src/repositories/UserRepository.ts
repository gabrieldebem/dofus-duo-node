import { CreateUserDto } from "../dto/CreateUserDto";
import { UpdateUserDto } from "../dto/UpdateUserDto";
import { User } from "../entities/User";
import { Repository } from "./Repository";
import { RepositoryInterface } from "./RepositoryInterface";

export class UserRepository extends Repository implements RepositoryInterface<User> {
    async create({name, email, password}: CreateUserDto): Promise<User> {
        const model = await this.prismaClient.user.create({
            data: {
                name,
                email,
                password,
            }
        });

        return new User(
            model.id,
            model.name,
            model.email,
            model.password
            );
    }

    async update(id: number, data: UpdateUserDto): Promise<User> {
        const model = await this.prismaClient.user.update({
            where: {
                id
            },
            data: data
        });

        if (! model) {
            throw new Error('User not found');
        }

        return new User(
            model.id,
            model.name,
            model.email,
            model.password
        );
    }

    async delete(model: User): Promise<void> {
        this.prismaClient.user.delete({
            where: {
                id: model.id
            }
        });
    }

    async find(id: number): Promise<User> {
        const model = await this.prismaClient.user.findUnique({
            where: {
                id
            }
        });

        if (!model) {
            throw new Error('User not found');
        }

        return new User(
            model.id,
            model.name,
            model.email,
            model.password
        );
    }

    async findAll(): Promise<User[]> {
        const models = await this.prismaClient.user.findMany();

        return models.map(model => new User(
            model.id,
            model.name,
            model.email,
            model.password
        ));
    }
}