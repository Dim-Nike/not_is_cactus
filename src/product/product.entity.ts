import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameProduct: string;

    @Column()
    photo: Buffer;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column({ default: true })
    isActive: boolean;

}
