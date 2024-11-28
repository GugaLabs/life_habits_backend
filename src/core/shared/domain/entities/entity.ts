import { ValueObject } from '../value-objects/value-object';
import { Notification } from '../validators/notification';

export abstract class Entity {
  notification: Notification = new Notification();

  abstract get entity_id(): ValueObject;
  abstract toJSON(): any;
}
