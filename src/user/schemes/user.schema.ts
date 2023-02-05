import { ApiProperty } from "@nestjs/swagger";

export class UserSchema {
    @ApiProperty({
        example: '687a13d9-dte4-5657-dsa1-5g1234b678u0',
        description: 'UserId as UUID'
    })
    id: string;

    @ApiProperty({
        example: 'Max-T',
        description: 'Unique login of the user'
    })
    login!: string;
}