import {
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
/**
 * Represents the base entity and provides a
 * snowflake ID, createdAt and updatedAt column
 */
export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  @Index()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
