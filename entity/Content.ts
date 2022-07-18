import {Entity,Column,PrimaryGeneratedColumn,BaseEntity ,TableInheritance} from "typeorm";
 

@Entity()
@TableInheritance({column:{type:'varchar' , name:"type"}})
export abstract class Content {
    @PrimaryGeneratedColumn()
    id:number | undefined;

    @Column()
    name!: string;

    @Column()
    desc!: string;

     

 
}