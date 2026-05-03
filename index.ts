import { Cliente } from "./cliente";
import { Conta } from "./Conta";

const larissa = new Cliente("Larissa", "larissa@email.com", "000.000.00-10", "rua dez, 1680")

const raquel = new Cliente("Raquel", "raquel@email.com", "000.000.00-20", "rua vinte, 2080")

console.log("Novo cliente cadastrado", larissa)

const contaDaLarissa = new Conta(larissa)

const contaDaRaquel = new Conta(raquel)

console.log("Nova conta criada", contaDaLarissa)

contaDaLarissa.verSaldo()

contaDaLarissa.depositar(50.99)

contaDaLarissa.verSaldo()

contaDaLarissa.sacar(5.00)

contaDaLarissa.verSaldo()

contaDaLarissa.transferir(6.00, contaDaRaquel)

contaDaLarissa.verSaldo()

contaDaRaquel.verSaldo()

console.log(contaDaLarissa.toJSON(), contaDaRaquel.toJSON())