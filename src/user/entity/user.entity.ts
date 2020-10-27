import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Photo } from './photo.entity';

@Entity()
export class User {
  constructor(id?, firstName?, lastName?, isActive?) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}

// ===============================================================================
// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column()
//   firstName: string;
//
//   @Column()
//   lastName: string;
//
//   @Column({ default: true })
//   isActive: boolean;
//
//   @OneToMany(type => Photo, photo => photo.user)
//   photos: Photo[];
// }
