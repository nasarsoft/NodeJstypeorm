import {Entity,Column,PrimaryGeneratedColumn,BaseEntity,ChildEntity } from "typeorm";
import { Content } from "./Content";

@ChildEntity()
export class Question extends Content{
 
    @Column()
    quescount!: string;

     
}