class ValidaSenha{
    constructor(senha,confirmSenha){
        this.senha = senha;
        this.confirmSenha = confirmSenha;
        this.validador(senha,confirmSenha)
    }

    validador(senha,confirmSenha){
        senha == confirmSenha ? console.dir('Senha valida') : console.dir('Senha invalida')
        if(senha == confirmSenha){
            const addtxt = document.querySelector(".txtSenha").innerHTML = ("SENHA VALIDA*")
            document.querySelector(".txtSenha").setAttribute('style', 'color:green')
            if (addtxt !== addtxt) {
                
                document.querySelector(".txtSenha").remove(addtxt)
    
             }
    
        }
        else{
            const addtxt = document.querySelector(".txtSenha").innerHTML = ("SENHA INVALIDA*")
            document.querySelector(".txtSenha").setAttribute('style', 'color:red')
            if (addtxt !== addtxt) {
                
                document.querySelector(".txtSenha").remove(addtxt)
    
             }
            
        }
    }
}