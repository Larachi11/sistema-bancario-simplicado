import { Cliente } from "./cliente";
import { Transacao } from "./Transacao";

export class Conta {
    private _id: string;
    private _saldo: number;
    private _titular: Cliente;
    private _historico: Transacao[];

    constructor(titular: Cliente) {
        this._id = crypto.randomUUID();
        this._saldo = 0;
        this._titular = titular;
        this._historico = []
    }

    public get titular(): Cliente {
        return this._titular;
    }

    public toJSON(): object{
        return {
            saldo: this._saldo,
            historico: this._historico
        }
    }

    public adicionarHistorico(transacao:Transacao){
        this._historico.push(transacao);

    }

    public verSaldo(): void {
        console.log("Saldo atual é:", this._saldo, "da conta de", this._titular.nome)
    }

    public depositar(valor: number): void {
        console.log("Depositando: ", valor, "na conta de", this._titular.nome)

        if (valor < 0) {
            console.log("Impossivel depositar valor negativo")
            return
        }
        this._saldo = this._saldo + valor;
        const transacao = new Transacao(valor, "C", "Depósito")
        this.adicionarHistorico(transacao);
    }

    public sacar(valor: number): void {
        console.log("Sacando: ", valor, "da conta de", this._titular.nome)

        if (valor < 0) {
            console.log("Impossivel sacar valor negativo")
            return
        }
        if (valor > this._saldo) {
            console.log("Saldo insuficiente")
            return
        }

        this._saldo = this._saldo - valor;
        const transacao = new Transacao(valor, "D", "Saque")
        this.adicionarHistorico(transacao);
    }

    public transferir(valor: number, contaDestino: Conta): void {
        if (valor > this._saldo) {
            console.log("Saldo insuficiente")
            return
        }
        console.log("Transferindo: ", valor, " para a conta de", contaDestino.titular.nome)
        this.sacar(valor)
        contaDestino.depositar(valor)
        Transacao.criarTransferencia(this, contaDestino, valor)
    }
}