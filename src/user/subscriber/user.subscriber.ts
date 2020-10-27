import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent, RemoveEvent, UpdateEvent,
} from 'typeorm';
import { User } from '../entity/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>): void {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }

  afterInsert(event: InsertEvent<User>): void {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }

  beforeRemove(event: RemoveEvent<User>): Promise<any> | void {
  }

  afterRemove(event: RemoveEvent<User>): Promise<any> | void {
  }

  beforeUpdate(event: UpdateEvent<User>): Promise<any> | void {
  }

  afterUpdate(event: UpdateEvent<User>): Promise<any> | void {
  }
}
