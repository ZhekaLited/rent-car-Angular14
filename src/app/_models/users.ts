export class Users {
  constructor(
    id: bigint, name: string, surname: string, birthday: Date,
    passid: string, balance: number, timearent: string, carsid: bigint,
    nameCars: string,model:string,price:bigint,damage:string,deviations:string,
    disbalance:boolean) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.passid = passid;
    this.balance = balance;
    this.timearent = timearent;
    this.carsid = carsid;
    this.nameCars = nameCars;
    this.model = model;
    this.price = price;
    this.damage = damage;
    this.deviations = deviations;
    this.disbalance = disbalance;
  }

  id: bigint;
  name: string;
  surname: string;
  birthday: Date;
  passid: string;
  balance: number;
  timearent: string;
  carsid: bigint;
  nameCars:string;
  model:string;
  price:bigint;
  damage:string;
  deviations:string;
  disbalance:boolean;
}
