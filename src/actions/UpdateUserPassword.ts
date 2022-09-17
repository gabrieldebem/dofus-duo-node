import { UpdateUserDto } from "../dto/UpdateUserDto";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";

export class UpdateUserPassword {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute({ id, password }: UpdateUserDto): Promise<User> {
        const user = await this.userService.updatePassword({id, password});

        return user;
    }
}