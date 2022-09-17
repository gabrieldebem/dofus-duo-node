import { CreateUserDto } from "../dto/CreateUserDto";
import { UpdateUserDto } from "../dto/UpdateUserDto";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    async create({ name, email, password }: CreateUserDto): Promise<User> {
        const user = this.repository.create({ name, email, password });
        
        return user;
    }

    async updatePassword(id:number, data: UpdateUserDto): Promise<User> {
        const user = this.repository.update(id, data);

        return user;
    }

    async delete(id: number): Promise<void> {
        const user = await this.repository.find(id);

        this.repository.delete(user);
    }
}