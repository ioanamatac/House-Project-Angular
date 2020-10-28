import {Subject} from 'rxjs/Subject';

export class AppareilService{
/* Quand vous déclarez un Subject, il faut dire quel type de données il gèrera*/
  appareilsSubjects = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
    }
    emitAppareilsSubject() {
      this.appareilsSubjects.next(this.appareils.slice());
    }

    switchOnAll() {
     for (const  appareil of this.appareils) {
        appareil.status = 'allumé';
       }
        this.emitAppareilsSubject();
    }
    switchOffAll() {
      for (const appareil of this.appareils){
        appareil.status = 'eteint';
        this.emitAppareilsSubject();
      }
  }
  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilsSubject();
  }
  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilsSubject();
  }
  addAppareil(name: string, status: string){
      const appareilObject = {
        id: 0,
        name: '',
        status: ''
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilsSubject();
  }

}
