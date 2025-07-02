import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Kotresh007',
            password: 'Kotresh893',
        },
        {
            userId: 2,
            username: 'Priyanka012',
            password: 'Priyanka893',
        },
    ];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
