// MINHA BIBLIOGRAFIA
function mostrar_dados() {
    div_mostrar.innerHTML = `<h4>Olá eu sou o Kayky e esse é o meu perfil, atualmente sou um aluno BandTec, faço também um curso de playgame na Saga Tatuapé e pretendo iniciar a autoescola e um curso de inglês o quanto antes. <br>
        O desenho sempre esteve presente na minha vida, como alguns familiares meus gostam de dizer parece que foi passado de geração em geração, isso pois meus tios desenham, meu primo, eu e agora meu priminho. <br> 
        Sempre amei desenhar e eu me destacava em algumas atividades por conta disso, desenhava meus personagens favoritos e demais coisas (objetos, lugares ou qualquer outra coisa que me chamasse a atenção). 
        No 9º ano eu já desenhava relativamente bem e foi nesse ano que eu parei de colorir meus desenhos, após o falecimento de uma das pessoas mais importantes da minha vida e assim ela se tornou preto e branco, depois disso passei a desenhar os meus sentimentos,
        encontrei neles uma forma de me expressar. <br>
        Hoje tenho 18 anos, amigos incriveis e uma grande família, esse é um pouco da minha história.</h4>`;
}

function mensao_honrosa() {
    div_mostrar.innerHTML = `<img src="imgs_vd/vovó.jpg" width="100px" style="margin-left: 290px;"> <br>
    <img src="imgs_vd/familia.jpg" width="100px" style="margin-left: 90px;"> 
     <img src="imgs_vd/primos.jpg" width="100px" style="margin-left: 97px;"> 
      <img src="imgs_vd/eu_e_ela.jpg" width="90px" height="130px" style="margin-left: 130px;">  <br>
    <img src="imgs_vd/familia_amigos.jpg" width="160px"  height="110px" style="margin-left: 20px;"> 
     <img src="imgs_vd/amigos.jpg" width="160px"  height="120px" style="margin-left: 80px;"> 
      <img src="imgs_vd/bandtec.jpg" width="100px" height="120px" style="margin-left: 150px;">`;
}

function meus_desenhos() {
    var ver_desenhos = desenho.value;

    if (ver_desenhos == "antigos") {
        div_mostrar.innerHTML = `
        <img src="imgs_vd/meus_desenhos/antigo_dn_rei.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_naruto.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_seiya.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_sp.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_tioPatinhas.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/colorido_espaço.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/colorido_sp.jpg" style="width: 100px; height: 120px;">
        `;
    } else if (ver_desenhos == "realistas") { 
        div_mostrar.innerHTML = `
        <img src="imgs_vd/meus_desenhos/realista_bunita.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_covid.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_diabinha.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_dodoi.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_elfa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_mlk_bandana.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_thor.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_tony.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/fanart_kratos.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_brian.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_coringa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_espelho.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_moçaa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_o_maisBonito.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_olho_2.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_olhos.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_ragnar.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_shelby.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_um_cara.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_uma_moça.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_Xtentation.jpg" style="width: 100px; height: 120px;">
        `;
        
    } else if (ver_desenhos == "animes") { 
        div_mostrar.innerHTML = `
        <img src="imgs_vd/meus_desenhos/anime_3h.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_boruto.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_deku.jpg" style="width: 100px; height: 100px;">
        <img src="imgs_vd/meus_desenhos/anime_enrolado.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_kakashi.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_metadinha.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_moça.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_itachi.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_naruto_sasuke.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_mascara.jpg" style="width: 100px; height: 120px;">
        `;
    } else if (ver_desenhos == "sombreados") { 
        div_mostrar.innerHTML = `
        <img src="imgs_vd/meus_desenhos/realista_alice.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_coringa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_espelho.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_espellho_2.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_moçaa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_o_maisBonito.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_olho_2.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_olhos.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_ragnar.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_um_cara.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_uma_moça.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_Xtentation.jpg" style="width: 100px; height: 120px;">
        `;
    } else if (ver_desenhos == "todos") { 
        div_mostrar.innerHTML = `
        <img src="imgs_vd/meus_desenhos/antigo_dn_rei.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_naruto.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_seiya.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_sp.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/antigo_tioPatinhas.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/colorido_espaço.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/colorido_sp.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_3h.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_boruto.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_deku.jpg" style="width: 100px; height: 100px;">
        <img src="imgs_vd/meus_desenhos/anime_enrolado.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_kakashi.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_metadinha.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/fiz_na_mesa.jpg" style="width: 100px; height: 100px;">
        <img src="imgs_vd/meus_desenhos/realista_bunita.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_covid.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_diabinha.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_dodoi.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_elfa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_mlk_bandana.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_thor.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_tony.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/fanart_kratos.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_moça.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_itachi.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_naruto_sasuke.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/anime_mascara.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_alice.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_brian.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_coringa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_espelho.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_espellho_2.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_moçaa.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_o_maisBonito.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_olho_2.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_olhos.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_ragnar.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_shelby.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_um_cara.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_uma_moça.jpg" style="width: 100px; height: 120px;">
        <img src="imgs_vd/meus_desenhos/realista_Xtentation.jpg" style="width: 100px; height: 120px;">
        `;
    }
}