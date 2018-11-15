                //Objeto usuário
                var usuario = {
                    nome: "isario111",
                    idade: 23,
                    trabalho: "Minerador",
                    coins: 4000,
                    skillminerar: 2,
                    skilllenhador: 10
                };
                document.getElementById("nome_user").innerHTML = usuario.nome;
                //Gerar Mapa
                var idDesco = 0;
                var imageGrama = 'url("img/grama.jpg")';
                var imageCobre = 'url("img/grama-c-cobre.jpg")';
                //var imagePetro = 'url("img/grama-c-petroleo.jpg")';
                var imageMinaFerro = 'url("img/mina-ferro.jpg")';
                var imageOuro = 'url("img/grama-c-ouro.jpg")';
                var imageMinaOuro = 'url("img/minaouro.jpg")';
                var imageMinaCobre = 'url("img/minacobre.jpg")';
                //var imageAreia = 'url("http://fercarbuggy.com.br/site/wp-content/uploads/2013/04/areia-background1.jpg")';
                var imageMar = 'url("img/agua.jpg")';
                var imageRes1 = 'url("img/grama-c-casa.jpg")';
                var imageFerro = 'url("img/grama-c-ferro.jpg")';
                var imageFloresta = 'url("img/floresta.jpg")';
                var imageSerralheria = 'url("img/serralheria.jpg")';
                var imagePedreira = 'url("img/pedreira.jpg")';
                var imageCarvao = 'url("img/carvao.jpg")';
                var imageMinaCarvao = 'url("img/minacarvao.jpg")';
                function criarBox(images, boo, n){
                    var boxElement = document.createElement('div');
                    boxElement.setAttribute('class','box');
                    boxElement.setAttribute('id',n);
                    boxElement.style.width = 48;
                    boxElement.style.height = 48;
                    boxElement.style.border = "solid 1px #BDB76B";
                    boxElement.style.backgroundImage = images;
                    boxElement.style.float = 'left';
                    boxElement.style.backgroundSize = 'cover';
                    boxElement.style.backgroundPosition = 'center';

                    boxElement.onclick = function(){
                        if(boo == true){
                            document.getElementById("compra").style.display = "block";
                            idDesco = this.id;
                        }
                        //Terreno 
                        else {
                            //document.getElementById("telaterreno").style.display = "block";
                            document.getElementById("compra").style.display = "block";
                            idDesco = this.id;
                        }
                    }

                    boxElement.onmouseover = function(){
                        if(boo == true){
                            boxElement.style.cursor = "pointer";
                        } else { boxElement.style.cursor = "zoom-in";}
                    }
    
                    var containerElement = document.querySelector('#conteudo #tela');
                    containerElement.appendChild(boxElement);
                }
                var imageRandom = [];
                function gerarBox(grama, recursos, agua, arvores, pedras){
                        for(var i = 0;i<grama;i++){
                            imageRandom[i] = imageGrama;
                        };
                        var recursoss = recursos + i;
                        var letters = "aaaaaabbbbbbccddddddddd";
                        for(var f2 = recursoss - recursos;f2<recursoss;f2++){
                            var qualRand = Math.floor(Math.random() * 21);
                            //console.log(qualRand);
                            var qualRec = letters.charAt(qualRand);
                            //console.log(qualRec);
                            switch(qualRec){
                                case "a": imageRandom[f2] = imageFerro;break;
                                case "b": imageRandom[f2] = imageCobre;break;
                                case "c": imageRandom[f2] = imageOuro;break;
                                case "d": imageRandom[f2] = imageCarvao;break;
                                default: imageRandom[f2] = imageOuro
                            }
                        };
                        var mar = agua + f2;
                        for(var f3 = mar - agua;f3<mar;f3++){
                            imageRandom[f3] = imageMar;
                        }
                        var floresta = arvores + f3;
                        for(var f4 = floresta - arvores;f4<floresta;f4++){
                            imageRandom[f4] = imageFloresta;
                        }
                        var pedreira = pedras + f4;
                        for(var f5 = pedreira - pedras;f5<pedreira;f5++){
                            imageRandom[f5] = imagePedreira;
                        }
                        
                    console.log(imageRandom);
                    var bool = false;
                    for(var i=0;i<624;i++){
                        var f = Math.floor(Math.random() * (imageRandom.length-1)) + 1;
                        switch(imageRandom[f]){
                            case 'url("img/grama-c-ouro.jpg")': bool = true; var letra = "AC"; break;
                            case 'url("img/grama-c-ferro.jpg")': bool = true; var letra = "AB"; break;
                            case 'url("img/grama-c-cobre.jpg")': bool = true; var letra = "AD"; break;
                            case 'url("img/floresta.jpg")': bool = true; var letra = "BA"; break;
                            case 'url("img/pedreira.jpg")': bool = true; var letra = "GA"; break;
                            case 'url("img/carvao.jpg")': bool = true; var letra = "AF"; break;
                            default: bool = false; var letra = "DA";
                        }

                        var nu = letra +i;
                        //console.log(bool, nu);
                        criarBox(imageRandom[f], bool, nu);
                    }
                }
                gerarBox(75,20,20,100, 4);
                //Fim gerar mapa
                var coin = document.getElementById('coinh2').innerHTML = usuario.coins;
                function fecharCompra(){
                    document.getElementById("compra").style.display = "none";
                }
                function comprado(){
                    document.getElementById("compra").style.display = "none";
                    document.getElementById("messagebox").style.display = "block";
                    var custo = 0;
                    if(idDesco.indexOf("AC") != -1){
                        custo = 500;
                        //console.log(usuario.coins, custo);
                        if(usuario.coins >= custo){
                            document.getElementById("messagep").innerHTML = "Parabéns!<br> Você adquiriu uma mina de ouro por "+custo+" coins";
                            document.getElementById(idDesco).style.backgroundImage = imageMinaOuro;
                            document.getElementById(idDesco).style.border = "solid 1px #f00";
                            usuario.coins -= custo;
                            document.getElementById('coinh2').innerHTML = usuario.coins;
                        } else {document.getElementById("messagep").innerHTML = "Você não tem dinheiro";}
                    }
                    if(idDesco.indexOf("AB") != -1){
                        custo = 150;
                        if(usuario.coins >= custo){
                            document.getElementById("messagep").innerHTML = "Parabéns!<br> Você adquiriu Jazida de ferro por "+custo+" coins";
                            document.getElementById(idDesco).style.backgroundImage = imageMinaFerro;
                            document.getElementById(idDesco).style.border = "solid 1px #f00";
                            usuario.coins -= custo;
                            document.getElementById('coinh2').innerHTML = usuario.coins;
                        } else {document.getElementById("messagep").innerHTML = "Você não tem dinheiro";}
                    }
                    if(idDesco.indexOf("AD") != -1){
                        custo = 100;
                        if(usuario.coins >= custo){
                            document.getElementById("messagep").innerHTML = "Parabéns!<br> Você adquiriu mina de cobre por "+custo+" coins";
                            document.getElementById(idDesco).style.backgroundImage = imageMinaCobre;
                            document.getElementById(idDesco).style.border = "solid 1px #f00";
                            usuario.coins -= custo;
                            document.getElementById('coinh2').innerHTML = usuario.coins;
                        } else {document.getElementById("messagep").innerHTML = "Você não tem dinheiro";}
                    }
                    if(idDesco.indexOf("DA") != -1){
                        custo = 200;
                        var nm_city = "city" + idDesco;
                        if(usuario.coins >= custo){
                            document.getElementById("messagep").innerHTML = "Parabéns!<br> Você adquiriu este terreno por "+custo+" coins";
                            var imgElement = document.createElement("IMG");
                            imgElement.setAttribute('src','img/cidade.png');
                            imgElement.style.width ='50px';
                            imgElement.style.height = '50px';
                            imgElement.style.position = 'relative';
                            imgElement.style.top = '-20px';
                            imgElement.style.color = "#fff";
                            var pcity = document.createElement("P");
                            pcity.setAttribute('id',nm_city);
                            pcity.style.position = 'relative';
                            pcity.style.top = '15px';
                            pcity.style.color = "#fff";
                            pcity.style.zIndex = "20";
                            pcity.style.textAlign = "center";
                            pcity.style.fontFamily = "calibri light";
                            document.getElementById(idDesco).appendChild(pcity);
                            document.getElementById(idDesco).appendChild(imgElement);
                           document.getElementById(idDesco).style.border = "solid 1px #f00";
                            usuario.coins -= custo;
                            document.getElementById('coinh2').innerHTML = usuario.coins;
                            pcity = document.getElementById(nm_city).innerHTML = "Avalon";
                        } else {document.getElementById("messagep").innerHTML = "Você não tem dinheiro";}
                    }
                    if(idDesco.indexOf("BA") != -1){
                        custo = 75;
                        if(usuario.coins >= custo){
                            document.getElementById("messagep").innerHTML = "Parabéns!<br> Você adquiriu uma floresta comum por "+custo+" coins";
                            document.getElementById(idDesco).style.backgroundImage = imageSerralheria;
                            document.getElementById(idDesco).style.border = "solid 1px #f00";
                            usuario.coins -= custo;
                            document.getElementById('coinh2').innerHTML = usuario.coins;
                        } else {document.getElementById("messagep").innerHTML = "Você não tem dinheiro";}
                    }
                    if(idDesco.indexOf("GA") != -1){
                        custo = 120;
                        if(usuario.coins >= custo){
                            document.getElementById("messagep").innerHTML = "Parabéns!<br> Você adquiriu uma pedreira comum por "+custo+" coins";
                            document.getElementById(idDesco).style.backgroundImage = imageSerralheria;
                            document.getElementById(idDesco).style.border = "solid 1px #f00";
                            usuario.coins -= custo;
                            document.getElementById('coinh2').innerHTML = usuario.coins;
                        } else {document.getElementById("messagep").innerHTML = "Você não tem dinheiro";}
                    }
                    if(idDesco.indexOf("AF") != -1){
                        custo = 150;
                        if(usuario.coins >= custo){
                            document.getElementById("messagep").innerHTML = "Parabéns!<br> Você adquiriu uma carvoaria por "+custo+" coins";
                            document.getElementById(idDesco).style.backgroundImage = imageMinaCarvao;
                            document.getElementById(idDesco).style.border = "solid 1px #f00";
                            usuario.coins -= custo;
                            document.getElementById('coinh2').innerHTML = usuario.coins;
                        } else {document.getElementById("messagep").innerHTML = "Você não tem dinheiro";}
                    }
                    //alert(idDesco);
                }
                //Fim gerar compra
                //Gerar cidade
                function criarBoxTerreno(imagest, boote, nt){
                    var boxElement2 = document.createElement('div');
                    boxElement2.setAttribute('class','boxcity');
                    boxElement2.setAttribute('id',nt);
                    boxElement2.style.width = 48;
                    boxElement2.style.height = 48;
                    boxElement2.style.border = "solid 1px #000";
                    boxElement2.style.backgroundImage = imagest;
                    boxElement2.style.float = 'left';
                    boxElement2.style.backgroundSize = 'cover';
                    boxElement2.style.backgroundPosition = 'center';

                    boxElement2.onclick = function(){
                        if(boote == true){
                            document.getElementById("compra").style.display = "block";
                            idDesco = this.id;
                        }
                    }
    
                    var containerElement2 = document.querySelector('#conteudo #tela #telaterreno');
                    containerElement2.appendChild(boxElement2);
                }
                function gerarBoxTerreno(){
                    var imageRandomTerreno = [0, imageGrama, imageRes1];
                    var boolt = false;
                    for(var i=0;i<240;i++){
                        var f = Math.floor(Math.random() * (imageRandomTerreno.length-1)) + 1;
                        switch(f){
                            case 0: boolt = true; var letra = "CND"; break;
                            case 1: boolt = true; var letra = "CND"; break;
                            default: boolt = false; var letra = "CA";
                        }

                        var nut = letra +i;
                        //console.log(boolt, nut);
                        criarBoxTerreno(imageRandomTerreno[f], boolt, nut);
                    }
                }
                gerarBoxTerreno();
                //Fim gerar cidade
                
                function fecharMessageBox(){
                    document.getElementById("messagebox").style.display = "none";
                }
                //Scripts de Trabalho
                var empregos = {
                    nome: ["Lenhador", "Minerador"],
                    salario: [10, 20],
                    tempo: [10, 20],
                    imageJob: ['img/lenhador.jpg','img/mineracao.jpg']
                }
                var salario = 0;
                var tempoTrabalho = 0;
                var mostrarTempoTrabalho = tempoTrabalho / 1000;
                var cronoMinutos = 0;
                var cronoHoras = 0;
                var cronoSegundo = 0;
                function fechar(nome_id){
                    document.getElementById(nome_id).style.display = "none";
                }
                function abrir(nome_id2){
                    document.getElementById(nome_id2).style.display = "block";
                }
                function trabalho(){
                    switch(usuario.trabalho){
                        case 'Minerador': salario = empregos.salario[1] * (usuario.skillminerar * 0.5); mostrarTempoTrabalho = empregos.tempo[1];
                        document.querySelector("#trabalho img").setAttribute("src", "img/mineracao.jpg");
                        document.querySelector("#trabalho h1").innerHTML = empregos.nome[1];
                        document.getElementById("sair-trabalho").style.display = "block";
                        document.getElementById("trabalhar-turno").innerHTML = "TRABALHAR";
                        document.getElementById("trabalhar-turno").setAttribute("onclick","trabalhar()");break;
                        case 'Lenhador': salario = empregos.salario[0] * (usuario.skilllenhador * 0.5); mostrarTempoTrabalho = empregos.tempo[0];
                        document.querySelector("#trabalho img").setAttribute("src", "img/lenhador.jpg");
                        document.querySelector("#trabalho h1").innerHTML = empregos.nome[0];
                        document.getElementById("sair-trabalho").style.display = "block";
                        document.getElementById("trabalhar-turno").innerHTML = "TRABALHAR";
                        document.getElementById("trabalhar-turno").setAttribute("onclick","trabalhar()");break;
                        default: salario = 0; mostrarTempoTrabalho = 0;
                        document.querySelector("#trabalho img").setAttribute("src", "img/desempregado.jpg"); 
                        document.querySelector("#trabalho h1").innerHTML = "Desempregado";
                        document.getElementById("sair-trabalho").style.display = "none";
                        document.getElementById("trabalhar-turno").innerHTML = "Procurar Emprego";
                        document.getElementById("trabalhar-turno").setAttribute("onclick","listaEmpregos()");
                    }
                    document.getElementById("trabalho").style.display = "block";
                    document.getElementById("salario-trabalho").innerHTML = salario;
                    document.getElementById("tempo-trabalho").innerHTML = mostrarTempoTrabalho;
                }
                function trabalhar(){

                    if(cronoSegundo > 0){
                        document.getElementById("messagebox").style.display = "block";
                        document.getElementById("messagep").innerHTML = "Você já está trabalhando, espere mais um pouco";
                    }else{
                        usuario.coins += salario;
                        document.getElementById('coinh2').innerHTML = usuario.coins;
                        cronoMinutos = Math.round(mostrarTempoTrabalho / 60);
                        cronoSegundo = mostrarTempoTrabalho - (cronoMinutos * 60 - 1);
                        cronoTrabalho();
                    }
                }
                function cronoTrabalho(){
                    document.getElementById("crono-span").innerHTML = cronoHoras+" : "+cronoMinutos+" : "+cronoSegundo;
                    if((cronoSegundo-1) >= 0){
                        cronoSegundo -= 1;
                        if(cronoMinutos == 0 && cronoSegundo == 0 && cronoHoras > 0){
                            cronoHoras -= 1;
                            cronoMinutos = 59;
                            cronoSegundo = 59;
                        };
                        if(cronoSegundo == 0 && cronoMinutos > 0){
                            cronoMinutos -= 1;
                            cronoSegundo = 59;
                        };
                        if(cronoSegundo <= 0){
                            cronoSegundo = 0;
                        };
                        setTimeout('cronoTrabalho();',1000);
                    }else{clearInterval();}
                }
                function sairTrabalho(){
                    usuario.trabalho = "desempregado";
                    document.getElementById("trabalho").style.display = "none";
                }
                function blocoJobs(idJob2, img, nmTrab, slaJob, TemJob){
                    var listJobsElement = document.createElement("div");
                    listJobsElement.setAttribute("class","listjobs");
                    listJobsElement.setAttribute("id",idJob2);

                    var listJobsImg = document.createElement("IMG");
                    listJobsImg.setAttribute("src",img);

                    listJobsElement.innerHTML = [
                        '<table',
                        '<tr>',
                        '<td>Trabalho: </td>',
                        '<td>'+nmTrab+'</td>',
                        '</tr>',
                        '<tr>',
                        '<td>Salário por turno: </td>',
                        '<td>'+slaJob+' coins</td>',
                        '</tr>',
                        '<tr>',
                        '<td>Tempo do turno: </td>',
                        '<td>'+TemJob+' segundos</td>',
                        '</tr>',
                        '</table>'
                      ].join("\n");

                    var listJobsButton = document.createElement("button");
                    listJobsButton.innerHTML = "Pegar trabalho";
                    listJobsButton.style.float = "left";
                    listJobsButton.style.marginTop = "0px";
                    listJobsButton.onclick = function(){
                        usuario.trabalho = nmTrab;
                        document.getElementById("lista-empregos").style.display = "none";
                        document.getElementById("messagebox").style.display = "block";
                        {document.getElementById("messagep").innerHTML = "Parabéns pelo seu novo emprego!";}
                    }

                    var listaJobs = document.querySelector("#conteudo #tela #lista-empregos");
                    listaJobs.appendChild(listJobsElement);

                    var listaJobsSelectImg = document.getElementById(idJob2);
                    listaJobsSelectImg.appendChild(listJobsImg);
                    listaJobsSelectImg.appendChild(listJobsButton);

                }
                function removeJobs(Code){
                    var node = document.getElementById(Code);
                    if (node.parentNode) {
                    node.parentNode.removeChild(node);
}
                }
                function listaEmpregos(){
                    document.getElementById("trabalho").style.display = "none";
                    document.getElementById("lista-empregos").style.display = "block";
                    if(document.getElementById("JA0") != null){
                        for(var i=0; i<empregos.nome.length;i++){
                            var idJob3 = "JA" + i;
                            removeJobs(idJob3);
                        }
                    }
                    for(var i=0; i<empregos.nome.length;i++){
                        var idJob = "JA" + i;
                        let imgJob = empregos.imageJob[i];
                        let nmJob = empregos.nome[i];
                        let slJob = empregos.salario[i];
                        let TmJob = empregos.tempo[i];
                        blocoJobs(idJob, imgJob, nmJob, slJob, TmJob);
                    }
                }
                //Fim dos scripts de trabalho                