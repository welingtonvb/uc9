export class User {

  constructor (
    public nome: string,
    public opniao: string
  ){}

  getNome():string {
    return this.nome;
  }

  getOpniao():string {
    return this.opniao;
  }
}
