class Pantalla {
    constructor(pantallaValorAnterior, pantallaValorActual) {
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.pantallaValorActual = pantallaValorActual;
        this.caculador = new Calculadora();
        this.tipoOpe = undefined
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar:'+',
            restar:'-',
            dividir:'/',
            multiplicar:'*'
        }
        this.vector = []
    }

    

    colocarNumero(num){
        if (num === '.' && this.valorActual.includes('.')) {
            return
        } else {
            this.valorActual = this.valorActual.toString() + num.toString();
            this.mostrarValores();
        }
        
    }

    mostrarValores() {
        this.pantallaValorActual.textContent = this.valorActual;
        this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOpe] || ''}`;
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.mostrarValores()
    }

    borrarTodo() {
        this.valorActual = ''
        this.valorAnterior = ''
        this.tipoOpe = undefined
        this.mostrarValores()
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)
        if (isNaN(valorActual) || isNaN(valorAnterior)) {
            return
        }else{
            const aux = this.valorActual            
            this.valorActual = this.caculador[this.tipoOpe](valorAnterior, valorActual)
            this.vector.push(`${this.valorAnterior} ${this.signos[this.tipoOpe]} ${aux} = ${this.valorActual}`)
        }
    }

    enviar() {
        return this.vector;
    }

    eliminar(){
        const tam = this.vector.length
        for (let index = 0; index < tam; index++) {
           this.vector.shift()
        }
    }


    computar(tipoOpe){
        if (this.tipoOpe !== 'igual') {
            this.calcular()
            this.tipoOpe = tipoOpe
            this.valorAnterior = this.valorActual || this.valorAnterior
            this.valorActual = ''
            this.mostrarValores()
        } else {
            this.mostrarValores()
        }
    }


}