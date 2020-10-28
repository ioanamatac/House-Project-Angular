  import {User} from '../models/user.model';
  import {Subject} from 'rxjs/Subject';

  export class UserService {
  private users: User[] = [
    {
      firstName: 'Will',
      lastName: 'Alexander',
      email: 'will@alexander.com',
      drinkPreference: 'jus d\' orange',
      hobbies: [
        'coder',
        'la dégustation de cafe'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }




  }
