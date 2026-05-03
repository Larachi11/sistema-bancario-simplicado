import { Conta } from "./Conta"

export class Transacao {
    private _id: string;
    private _data: Date;
    private _valor: number;
    private _debitoOuCredito: string;
    private _operacao: string;

    constructor(
        valor: number,
        debitoOuCredito: string,
        operacao: string
    ) {
        this._id = crypto.randomUUID();
        this._data = new Date()
        this._valor = valor;
        this._debitoOuCredito = debitoOuCredito;
        this._operacao = operacao;
    }

    public static criarTransferencia(origem: Conta, destino: Conta, valor: number) {
        const transacaoOrigem = new Transacao(valor, "D", "Transferencia")
        origem.adicionarHistorico(transacaoOrigem);

        const transacaoDestino = new Transacao(valor, "C", "Transferencia")
        destino.adicionarHistorico(transacaoDestino);
    }
}