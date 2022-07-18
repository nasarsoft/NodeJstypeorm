import {Entity,Column,PrimaryGeneratedColumn,BaseEntity } from "typeorm";
@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number | undefined;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    phone!: string;

    @Column()
    token!:string

    @Column()
    status!:number
}