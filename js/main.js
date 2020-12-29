function consultarCep() {
    $(".barra-progresso").show();

    var cep = document.getElementById("cep");
    var url = "https://viacep.com.br/ws/" + cep.value + "/json/";
    
    //Verificacao se o cep é uma string numerica e tem 8 digitos
    if ($.isNumeric(cep.value) && (cep.value.length == 8)){
        // $.ajax({
        //     url: url,
        //     type: "GET",
        //     success: function (response) {
        //         console.log(response);
        //         if (response.erro != true){
        //             $("#titulo_cep").html("CEP "+response.cep);
        //             $("#logradouro").html(response.logradouro);
        //             $("#bairro").html(response.bairro);
        //             $("#localidade").html(response.localidade);
        //             $("#uf").html(response.uf);
        //             $(".cep").show();
        //         }else{
        //             $(".cep").hide();
        //             alert("CEP não encontrado!");
        //         }
        //     }
        // })

        $.getJSON(url, function(conteudo){
            if (!conteudo.erro){
                //console.log(conteudo);
                $("#titulo_cep").html("CEP "+conteudo.cep);
                $("#logradouro").html(conteudo.logradouro);
                $("#bairro").html(conteudo.bairro);
                $("#localidade").html(conteudo.localidade);
                $("#uf").html(conteudo.uf);
                $(".cep").show();
                $(".barra-progresso").hide();
            }else{
                $(".cep").hide();
                alert("CEP não encontrado!");
            }
        })
    }else{
        $(".cep").hide();
        alert("CEP inválido!");
    }
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
