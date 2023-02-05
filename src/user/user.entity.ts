import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    login: string;

    @Column()
    password: string;

    toResponse(){
        const { id, login } = this;
        return { id ,login };
    }

}
