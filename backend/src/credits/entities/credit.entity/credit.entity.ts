import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Credit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    limit: number;
}