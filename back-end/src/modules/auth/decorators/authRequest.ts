import { User } from 'src/modules/users/entities/user.entity';
import Request from 'express';
export interface AuthRequest extends Request {
  user: User;
}
