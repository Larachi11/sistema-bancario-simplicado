export class Cliente {
    private _id: string;
    private _nome: string;
    private _email: string;
    private _cpf: string;
    private _endereco: string;

    constructor(
        nome: string,
        email: string,
        cpf: string,
        endereco: string,
    ) {
        this._id = crypto.randomUUID();
        this._nome = nome;
        this._email = email;
        this._cpf = cpf;
        this._endereco = endereco;
    } 
    
    public autenticar(): boolean{
        return false
    }
    public toJSON(): object{
        return {
            nome: this._nome
        }
    }
    public get nome(): string{
        return this._nome
    }
}   