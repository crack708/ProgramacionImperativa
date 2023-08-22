
let banco = {
    clientes:  [{
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
      },
      {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
      },
      {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
      },
      {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
      },
      {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
      }],
     consultarCliente: function(nombre) {
        for (let i = 0; i<this.clientes.length; i++){
            if( this.clientes[i]["titularCuenta"] == nombre){
                console.log(this.clientes[i]);
            }
        }
    },
    deposito: function(titular,deposito){
        let saldo = 0;
        for (let i = 0; i<this.clientes.length; i++){
            if( this.clientes[i]["titularCuenta"] == titular){
                saldo = this.clientes[i]["saldoEnPesos"] +=deposito;
                console.log("Depósito realizado, su nuevo saldo es: " + saldo);
            }
        }

    },
    extraccion: function(titular,monto){
        let saldoActual = 0;
        for (let i = 0; i<this.clientes.length; i++){
            if( this.clientes[i]["titularCuenta"] == titular){
                saldoActual = this.clientes[i]["saldoEnPesos"] -= monto;
                if (saldoActual<=0){
                    console.log("Fondos insuficientes");
                }else {
                console.log("Extracción realizada correctamente, su nuevo saldo es: " + saldoActual + " Usted Retiro : " + monto);
            }
            }
        }

    },
}

banco.consultarCliente("Ramon Connell");

banco.deposito("Ramon Connell",1000);

banco.extraccion("Ramon Connell",7000);

