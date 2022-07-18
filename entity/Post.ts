import {Entity,Column,PrimaryGeneratedColumn,BaseEntity ,ChildEntity} from "typeorm";
import { Content } from "./Content";

@ChildEntity()
export class Post extends Content{
 

    @Column()
    viewcount!: string;

 
}