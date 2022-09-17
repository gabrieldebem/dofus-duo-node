import { CreateUserDto } from "../dto/CreateUserDto";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";

export class CreateUserAction {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async execute({ name, email, password }: CreateUserDto): Promise<User> {
        const user = await this.userService.create({ name, email, password });

        return user;
    }
}