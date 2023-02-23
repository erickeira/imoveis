
import axios from "axios";
const baseUrl = "http://localhost:3000"

const api = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'multipart/form-data'}
});

const loaderImg = ({ src, width, quality }) => {
    return `${src}`
}
const loaderImgBackEnd = ({ src, width, quality }) => {
    return `http://localhost:3000${src}`
}

function formatarReal(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}
  
function primeiraLetraMaiuscula(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const condicoes = [
    'Novo',
    'Usado'
]

const finalidades = [
    'Venda',
    'Aluguel',
]

const tiposdeimovel = [
    'Apartemento',
    'Casa',
    'Kitnet',
    'Sobrado',
    'Terreno',
    'Área',
    'Deposito',
    'Ponto Comercial',
    'Salão',
    'Fazenda'
]

const bairros = [
        "Aero Rancho",
        "Alves Pereira",
        "Amamba\u00ed",
        "Am\u00e9rica",
        "Autonomista",
        "Bandeirantes",
        "Batist\u00e3o",
        "Bela Vista",
        "Cabre\u00fava",
        "Cai\u00e7ara",
        "Caiob\u00e1",
        "Carand\u00e1",
        "Carlota",
        "Carvalho",
        "Centen\u00e1rio",
        "Centro",
        "Centro-Oeste",
        "Ch\u00e1cara Cachoeira",
        "Ch\u00e1cara dos Poderes",
        "Coophavila II",
        "Coronel Antonino",
        "Cruzeiro",
        "Dr. Albuquerque",
        "Estrela Dalva",
        "Gl\u00f3ria",
        "Guanandi",
        "Itanhang\u00e1",
        "Jacy",
        "Jardim dos Estados",
        "Jardim Paulista",
        "J\u00f3ckey Club",
        "Jos\u00e9 Abr\u00e3o",
        "Lageado",
        "Leblon",
        "Los Angeles",
        "Margarida",
        "Maria Aparecida Pedrossian",
        "Mata do Jacinto",
        "Mata do Segredo",
        "Monte Castelo",
        "Monte L\u00edbano",
        "Moreninha",
        "Nasser",
        "Noroeste",
        "Nova Campo Grande",
        "Nova Lima",
        "Novos Estados",
        "N\u00facleo Industrial",
        "Panam\u00e1",
        "Parati",
        "Pioneiros",
        "Piratininga",
        "Planalto",
        "Popular",
        "Rita Vieira",
        "Santa F\u00e9",
        "Santo Amaro",
        "Santo Antonio",
        "S\u00e3o Bento",
        "S\u00e3o Conrado",
        "S\u00e3o Francisco",
        "S\u00e3o Louren\u00e7o",
        "Semin\u00e1rio",
        "Sobrinho",
        "Taquarussu",
        "Tarum\u00e3",
        "Taveir\u00f3polis",
        "Tijuca",
        "Tiradentes",
        "Tv Morena",
        "Uni\u00e3o",
        "Universit\u00e1rio",
        "Veraneio",
        "Vilas Boas"
]

const caracteristicas =[
    "Jardim ou área verde",
    "Piscina",
    "Asfalto",
    "Calçada",
    "Esgoto",
    "Muro",
    "Sala de estar",
    "Sala de jantar",
    "Sala de TV",
    "Academia",
    "Alarme",
    "Área de lazer",
    "Área de serviço",
    "Brinquedoteca",
    "Câmeras de segurança",
    "Churrasqueira",
    "Closet",
    "Cozinha planejada",
    "Guarita",
    "Interfone",
    "Lavabo",
    "Lavanderia",
    "Piscina",
    "Portaria",
    "Quiosque",
    "Recepção",
    "Salão de Festas",
    "Salão de Jogos",
    "WC de serviço",
    "Armários embutidos",
    "Ar-condicionado",
    "Banheira",
    "Elevador",
    "Janelas grandes",
    "Iluminação natural abundante",
    "Lareira",
    "Piso aquecido",
    "Terraço",
    "Varanda",
    "Ventilação natural",
    "Perto de transporte público",
    "Próximo a comércios e serviços",
    "Próximo a escolas",
    "Próximo a parques e áreas verdes",
    "Área tranquila e residencial",
    "Acesso fácil a rodovias",
    "Cercado por muitos bairros residenciais",
    "Próximo a instalações desportivas",
    "Vista panorâmica",
    "Fácil acesso a praias",
]

const numeros = [0,1,2,3,4,5,6,7,8,9,10]



export {
    loaderImg,
    bairros,
    condicoes,
    finalidades,
    tiposdeimovel,
    caracteristicas,
    numeros,
    baseUrl,
    api,
    loaderImgBackEnd,
    formatarReal,
    primeiraLetraMaiuscula
}