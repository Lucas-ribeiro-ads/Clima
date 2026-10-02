// Municípios e nomes: API de Localidades do IBGE, consultada em 02/10/2026.
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/25/municipios?orderBy=nome
// Coordenadas: IBGE, Localidades do Brasil 2022 (pontos de referência das sedes municipais).
// https://geoftp.ibge.gov.br/organizacao_do_territorio/estrutura_territorial/localidades/Localidades_do_Brasil/2022/Localidades_Brasil_gpkg.zip

export type Cidade = {
    id: string
    nome: string
    latitude: number
    longitude: number
}

export const cidades: Cidade[] = [
    {
        "id": "agua-branca",
        "nome": "Água Branca",
        "latitude": -7.5133,
        "longitude": -37.638901
    },
    {
        "id": "aguiar",
        "nome": "Aguiar",
        "latitude": -7.0916,
        "longitude": -38.172401
    },
    {
        "id": "alagoa-grande",
        "nome": "Alagoa Grande",
        "latitude": -7.0392,
        "longitude": -35.630501
    },
    {
        "id": "alagoa-nova",
        "nome": "Alagoa Nova",
        "latitude": -7.061,
        "longitude": -35.763302
    },
    {
        "id": "alagoinha",
        "nome": "Alagoinha",
        "latitude": -6.9515,
        "longitude": -35.546799
    },
    {
        "id": "alcantil",
        "nome": "Alcantil",
        "latitude": -7.7423,
        "longitude": -36.064899
    },
    {
        "id": "algodao-de-jandaira",
        "nome": "Algodão de Jandaíra",
        "latitude": -6.9042,
        "longitude": -36.011101
    },
    {
        "id": "alhandra",
        "nome": "Alhandra",
        "latitude": -7.4364,
        "longitude": -34.912701
    },
    {
        "id": "amparo",
        "nome": "Amparo",
        "latitude": -7.5696,
        "longitude": -37.064499
    },
    {
        "id": "aparecida",
        "nome": "Aparecida",
        "latitude": -6.7848,
        "longitude": -38.084099
    },
    {
        "id": "aracagi",
        "nome": "Araçagi",
        "latitude": -6.851,
        "longitude": -35.387402
    },
    {
        "id": "arara",
        "nome": "Arara",
        "latitude": -6.8297,
        "longitude": -35.759102
    },
    {
        "id": "araruna",
        "nome": "Araruna",
        "latitude": -6.5304,
        "longitude": -35.740299
    },
    {
        "id": "areia",
        "nome": "Areia",
        "latitude": -6.9671,
        "longitude": -35.702499
    },
    {
        "id": "areia-de-baraunas",
        "nome": "Areia de Baraúnas",
        "latitude": -7.1236,
        "longitude": -36.945702
    },
    {
        "id": "areial",
        "nome": "Areial",
        "latitude": -7.0507,
        "longitude": -35.9282
    },
    {
        "id": "aroeiras",
        "nome": "Aroeiras",
        "latitude": -7.5466,
        "longitude": -35.708099
    },
    {
        "id": "assuncao",
        "nome": "Assunção",
        "latitude": -7.0735,
        "longitude": -36.7276
    },
    {
        "id": "baia-da-traicao",
        "nome": "Baía da Traição",
        "latitude": -6.6877,
        "longitude": -34.937698
    },
    {
        "id": "bananeiras",
        "nome": "Bananeiras",
        "latitude": -6.7542,
        "longitude": -35.6339
    },
    {
        "id": "barauna",
        "nome": "Baraúna",
        "latitude": -6.6437,
        "longitude": -36.250999
    },
    {
        "id": "barra-de-santa-rosa",
        "nome": "Barra de Santa Rosa",
        "latitude": -6.7206,
        "longitude": -36.060398
    },
    {
        "id": "barra-de-santana",
        "nome": "Barra de Santana",
        "latitude": -7.5233,
        "longitude": -35.9995
    },
    {
        "id": "barra-de-sao-miguel",
        "nome": "Barra de São Miguel",
        "latitude": -7.7511,
        "longitude": -36.3186
    },
    {
        "id": "bayeux",
        "nome": "Bayeux",
        "latitude": -7.1251,
        "longitude": -34.9268
    },
    {
        "id": "belem",
        "nome": "Belém",
        "latitude": -6.6966,
        "longitude": -35.5378
    },
    {
        "id": "belem-do-brejo-do-cruz",
        "nome": "Belém do Brejo do Cruz",
        "latitude": -6.1904,
        "longitude": -37.536701
    },
    {
        "id": "bernardino-batista",
        "nome": "Bernardino Batista",
        "latitude": -6.4542,
        "longitude": -38.550098
    },
    {
        "id": "boa-ventura",
        "nome": "Boa Ventura",
        "latitude": -7.4201,
        "longitude": -38.217701
    },
    {
        "id": "boa-vista",
        "nome": "Boa Vista",
        "latitude": -7.2631,
        "longitude": -36.242599
    },
    {
        "id": "bom-jesus",
        "nome": "Bom Jesus",
        "latitude": -6.8154,
        "longitude": -38.655499
    },
    {
        "id": "bom-sucesso",
        "nome": "Bom Sucesso",
        "latitude": -6.4441,
        "longitude": -37.929798
    },
    {
        "id": "bonito-de-santa-fe",
        "nome": "Bonito de Santa Fé",
        "latitude": -7.3148,
        "longitude": -38.5168
    },
    {
        "id": "boqueirao",
        "nome": "Boqueirão",
        "latitude": -7.4809,
        "longitude": -36.129101
    },
    {
        "id": "borborema",
        "nome": "Borborema",
        "latitude": -6.8068,
        "longitude": -35.5998
    },
    {
        "id": "brejo-do-cruz",
        "nome": "Brejo do Cruz",
        "latitude": -6.3503,
        "longitude": -37.496899
    },
    {
        "id": "brejo-dos-santos",
        "nome": "Brejo dos Santos",
        "latitude": -6.3766,
        "longitude": -37.827999
    },
    {
        "id": "caapora",
        "nome": "Caaporã",
        "latitude": -7.5155,
        "longitude": -34.9175
    },
    {
        "id": "cabaceiras",
        "nome": "Cabaceiras",
        "latitude": -7.4883,
        "longitude": -36.285801
    },
    {
        "id": "cabedelo",
        "nome": "Cabedelo",
        "latitude": -6.9769,
        "longitude": -34.8293
    },
    {
        "id": "cachoeira-dos-indios",
        "nome": "Cachoeira dos Índios",
        "latitude": -6.9222,
        "longitude": -38.673401
    },
    {
        "id": "cacimba-de-areia",
        "nome": "Cacimba de Areia",
        "latitude": -7.1285,
        "longitude": -37.156601
    },
    {
        "id": "cacimba-de-dentro",
        "nome": "Cacimba de Dentro",
        "latitude": -6.6416,
        "longitude": -35.792301
    },
    {
        "id": "cacimbas",
        "nome": "Cacimbas",
        "latitude": -7.2111,
        "longitude": -37.058899
    },
    {
        "id": "caicara",
        "nome": "Caiçara",
        "latitude": -6.6157,
        "longitude": -35.4683
    },
    {
        "id": "cajazeiras",
        "nome": "Cajazeiras",
        "latitude": -6.8877,
        "longitude": -38.558899
    },
    {
        "id": "cajazeirinhas",
        "nome": "Cajazeirinhas",
        "latitude": -6.9622,
        "longitude": -37.7995
    },
    {
        "id": "caldas-brandao",
        "nome": "Caldas Brandão",
        "latitude": -7.1678,
        "longitude": -35.350101
    },
    {
        "id": "camalau",
        "nome": "Camalaú",
        "latitude": -7.8886,
        "longitude": -36.823799
    },
    {
        "id": "campina-grande",
        "nome": "Campina Grande",
        "latitude": -7.2191,
        "longitude": -35.889801
    },
    {
        "id": "capim",
        "nome": "Capim",
        "latitude": -6.9206,
        "longitude": -35.1735
    },
    {
        "id": "caraubas",
        "nome": "Caraúbas",
        "latitude": -7.7284,
        "longitude": -36.494598
    },
    {
        "id": "carrapateira",
        "nome": "Carrapateira",
        "latitude": -7.0386,
        "longitude": -38.3442
    },
    {
        "id": "casserengue",
        "nome": "Casserengue",
        "latitude": -6.7821,
        "longitude": -35.818699
    },
    {
        "id": "catingueira",
        "nome": "Catingueira",
        "latitude": -7.1244,
        "longitude": -37.6078
    },
    {
        "id": "catole-do-rocha",
        "nome": "Catolé do Rocha",
        "latitude": -6.343,
        "longitude": -37.745998
    },
    {
        "id": "caturite",
        "nome": "Caturité",
        "latitude": -7.4194,
        "longitude": -36.020199
    },
    {
        "id": "conceicao",
        "nome": "Conceição",
        "latitude": -7.5601,
        "longitude": -38.502399
    },
    {
        "id": "condado",
        "nome": "Condado",
        "latitude": -6.9108,
        "longitude": -37.602501
    },
    {
        "id": "conde",
        "nome": "Conde",
        "latitude": -7.2611,
        "longitude": -34.911999
    },
    {
        "id": "congo",
        "nome": "Congo",
        "latitude": -7.7964,
        "longitude": -36.659801
    },
    {
        "id": "coremas",
        "nome": "Coremas",
        "latitude": -7.0159,
        "longitude": -37.946701
    },
    {
        "id": "coxixola",
        "nome": "Coxixola",
        "latitude": -7.6314,
        "longitude": -36.603298
    },
    {
        "id": "cruz-do-espirito-santo",
        "nome": "Cruz do Espírito Santo",
        "latitude": -7.1417,
        "longitude": -35.091301
    },
    {
        "id": "cubati",
        "nome": "Cubati",
        "latitude": -6.8652,
        "longitude": -36.351501
    },
    {
        "id": "cuite",
        "nome": "Cuité",
        "latitude": -6.4855,
        "longitude": -36.152
    },
    {
        "id": "cuite-de-mamanguape",
        "nome": "Cuité de Mamanguape",
        "latitude": -6.9121,
        "longitude": -35.248299
    },
    {
        "id": "cuitegi",
        "nome": "Cuitegi",
        "latitude": -6.8977,
        "longitude": -35.5243
    },
    {
        "id": "curral-de-cima",
        "nome": "Curral de Cima",
        "latitude": -6.7183,
        "longitude": -35.266701
    },
    {
        "id": "curral-velho",
        "nome": "Curral Velho",
        "latitude": -7.5376,
        "longitude": -38.196899
    },
    {
        "id": "damiao",
        "nome": "Damião",
        "latitude": -6.63,
        "longitude": -35.905998
    },
    {
        "id": "desterro",
        "nome": "Desterro",
        "latitude": -7.2886,
        "longitude": -37.088402
    },
    {
        "id": "diamante",
        "nome": "Diamante",
        "latitude": -7.4263,
        "longitude": -38.2668
    },
    {
        "id": "dona-ines",
        "nome": "Dona Inês",
        "latitude": -6.6065,
        "longitude": -35.627701
    },
    {
        "id": "duas-estradas",
        "nome": "Duas Estradas",
        "latitude": -6.6861,
        "longitude": -35.418098
    },
    {
        "id": "emas",
        "nome": "Emas",
        "latitude": -7.1058,
        "longitude": -37.715199
    },
    {
        "id": "esperanca",
        "nome": "Esperança",
        "latitude": -7.0179,
        "longitude": -35.858398
    },
    {
        "id": "fagundes",
        "nome": "Fagundes",
        "latitude": -7.3584,
        "longitude": -35.783401
    },
    {
        "id": "frei-martinho",
        "nome": "Frei Martinho",
        "latitude": -6.4035,
        "longitude": -36.4548
    },
    {
        "id": "gado-bravo",
        "nome": "Gado Bravo",
        "latitude": -7.5824,
        "longitude": -35.7915
    },
    {
        "id": "guarabira",
        "nome": "Guarabira",
        "latitude": -6.8531,
        "longitude": -35.489201
    },
    {
        "id": "gurinhem",
        "nome": "Gurinhém",
        "latitude": -7.1261,
        "longitude": -35.4259
    },
    {
        "id": "gurjao",
        "nome": "Gurjão",
        "latitude": -7.2475,
        "longitude": -36.488998
    },
    {
        "id": "ibiara",
        "nome": "Ibiara",
        "latitude": -7.4996,
        "longitude": -38.402901
    },
    {
        "id": "igaracy",
        "nome": "Igaracy",
        "latitude": -7.1789,
        "longitude": -38.1483
    },
    {
        "id": "imaculada",
        "nome": "Imaculada",
        "latitude": -7.39,
        "longitude": -37.5089
    },
    {
        "id": "inga",
        "nome": "Ingá",
        "latitude": -7.2895,
        "longitude": -35.610298
    },
    {
        "id": "itabaiana",
        "nome": "Itabaiana",
        "latitude": -7.33,
        "longitude": -35.335999
    },
    {
        "id": "itaporanga",
        "nome": "Itaporanga",
        "latitude": -7.3058,
        "longitude": -38.149101
    },
    {
        "id": "itapororoca",
        "nome": "Itapororoca",
        "latitude": -6.8286,
        "longitude": -35.247002
    },
    {
        "id": "itatuba",
        "nome": "Itatuba",
        "latitude": -7.3769,
        "longitude": -35.630001
    },
    {
        "id": "jacarau",
        "nome": "Jacaraú",
        "latitude": -6.6151,
        "longitude": -35.291401
    },
    {
        "id": "jerico",
        "nome": "Jericó",
        "latitude": -6.554,
        "longitude": -37.808701
    },
    {
        "id": "joao-pessoa",
        "nome": "João Pessoa",
        "latitude": -7.1688,
        "longitude": -34.8638
    },
    {
        "id": "joca-claudino",
        "nome": "Joca Claudino",
        "latitude": -6.4849,
        "longitude": -38.477501
    },
    {
        "id": "juarez-tavora",
        "nome": "Juarez Távora",
        "latitude": -7.1747,
        "longitude": -35.589199
    },
    {
        "id": "juazeirinho",
        "nome": "Juazeirinho",
        "latitude": -7.0686,
        "longitude": -36.575699
    },
    {
        "id": "junco-do-serido",
        "nome": "Junco do Seridó",
        "latitude": -6.9953,
        "longitude": -36.714298
    },
    {
        "id": "juripiranga",
        "nome": "Juripiranga",
        "latitude": -7.3751,
        "longitude": -35.2384
    },
    {
        "id": "juru",
        "nome": "Juru",
        "latitude": -7.5382,
        "longitude": -37.818501
    },
    {
        "id": "lagoa",
        "nome": "Lagoa",
        "latitude": -6.5906,
        "longitude": -37.9151
    },
    {
        "id": "lagoa-de-dentro",
        "nome": "Lagoa de Dentro",
        "latitude": -6.6742,
        "longitude": -35.3773
    },
    {
        "id": "lagoa-seca",
        "nome": "Lagoa Seca",
        "latitude": -7.1568,
        "longitude": -35.8536
    },
    {
        "id": "lastro",
        "nome": "Lastro",
        "latitude": -6.515,
        "longitude": -38.178101
    },
    {
        "id": "livramento",
        "nome": "Livramento",
        "latitude": -7.3755,
        "longitude": -36.947601
    },
    {
        "id": "logradouro",
        "nome": "Logradouro",
        "latitude": -6.6148,
        "longitude": -35.442402
    },
    {
        "id": "lucena",
        "nome": "Lucena",
        "latitude": -6.8989,
        "longitude": -34.870602
    },
    {
        "id": "mae-d-agua",
        "nome": "Mãe d'Água",
        "latitude": -7.2589,
        "longitude": -37.426498
    },
    {
        "id": "malta",
        "nome": "Malta",
        "latitude": -6.9076,
        "longitude": -37.521198
    },
    {
        "id": "mamanguape",
        "nome": "Mamanguape",
        "latitude": -6.8356,
        "longitude": -35.120201
    },
    {
        "id": "manaira",
        "nome": "Manaíra",
        "latitude": -7.7061,
        "longitude": -38.153198
    },
    {
        "id": "marcacao",
        "nome": "Marcação",
        "latitude": -6.7675,
        "longitude": -35.013401
    },
    {
        "id": "mari",
        "nome": "Mari",
        "latitude": -7.0607,
        "longitude": -35.319302
    },
    {
        "id": "marizopolis",
        "nome": "Marizópolis",
        "latitude": -6.8444,
        "longitude": -38.353298
    },
    {
        "id": "massaranduba",
        "nome": "Massaranduba",
        "latitude": -7.1802,
        "longitude": -35.734299
    },
    {
        "id": "mataraca",
        "nome": "Mataraca",
        "latitude": -6.6016,
        "longitude": -35.050301
    },
    {
        "id": "matinhas",
        "nome": "Matinhas",
        "latitude": -7.1221,
        "longitude": -35.7714
    },
    {
        "id": "mato-grosso",
        "nome": "Mato Grosso",
        "latitude": -6.5429,
        "longitude": -37.713501
    },
    {
        "id": "matureia",
        "nome": "Maturéia",
        "latitude": -7.2666,
        "longitude": -37.349602
    },
    {
        "id": "mogeiro",
        "nome": "Mogeiro",
        "latitude": -7.3025,
        "longitude": -35.478001
    },
    {
        "id": "montadas",
        "nome": "Montadas",
        "latitude": -7.0872,
        "longitude": -35.960098
    },
    {
        "id": "monte-horebe",
        "nome": "Monte Horebe",
        "latitude": -7.2145,
        "longitude": -38.5863
    },
    {
        "id": "monteiro",
        "nome": "Monteiro",
        "latitude": -7.8915,
        "longitude": -37.125999
    },
    {
        "id": "mulungu",
        "nome": "Mulungu",
        "latitude": -7.0307,
        "longitude": -35.465199
    },
    {
        "id": "natuba",
        "nome": "Natuba",
        "latitude": -7.642,
        "longitude": -35.554199
    },
    {
        "id": "nazarezinho",
        "nome": "Nazarezinho",
        "latitude": -6.9163,
        "longitude": -38.324299
    },
    {
        "id": "nova-floresta",
        "nome": "Nova Floresta",
        "latitude": -6.4577,
        "longitude": -36.2047
    },
    {
        "id": "nova-olinda",
        "nome": "Nova Olinda",
        "latitude": -7.4792,
        "longitude": -38.042301
    },
    {
        "id": "nova-palmeira",
        "nome": "Nova Palmeira",
        "latitude": -6.6766,
        "longitude": -36.415798
    },
    {
        "id": "olho-d-agua",
        "nome": "Olho d'Água",
        "latitude": -7.2288,
        "longitude": -37.748699
    },
    {
        "id": "olivedos",
        "nome": "Olivedos",
        "latitude": -6.9895,
        "longitude": -36.243
    },
    {
        "id": "ouro-velho",
        "nome": "Ouro Velho",
        "latitude": -7.6208,
        "longitude": -37.151199
    },
    {
        "id": "parari",
        "nome": "Parari",
        "latitude": -7.3179,
        "longitude": -36.654202
    },
    {
        "id": "passagem",
        "nome": "Passagem",
        "latitude": -7.1373,
        "longitude": -37.047501
    },
    {
        "id": "patos",
        "nome": "Patos",
        "latitude": -7.0264,
        "longitude": -37.276798
    },
    {
        "id": "paulista",
        "nome": "Paulista",
        "latitude": -6.5937,
        "longitude": -37.624199
    },
    {
        "id": "pedra-branca",
        "nome": "Pedra Branca",
        "latitude": -7.4268,
        "longitude": -38.068298
    },
    {
        "id": "pedra-lavrada",
        "nome": "Pedra Lavrada",
        "latitude": -6.7556,
        "longitude": -36.4646
    },
    {
        "id": "pedras-de-fogo",
        "nome": "Pedras de Fogo",
        "latitude": -7.4018,
        "longitude": -35.1157
    },
    {
        "id": "pedro-regis",
        "nome": "Pedro Régis",
        "latitude": -6.6382,
        "longitude": -35.291199
    },
    {
        "id": "pianco",
        "nome": "Piancó",
        "latitude": -7.1988,
        "longitude": -37.9286
    },
    {
        "id": "picui",
        "nome": "Picuí",
        "latitude": -6.5088,
        "longitude": -36.3512
    },
    {
        "id": "pilar",
        "nome": "Pilar",
        "latitude": -7.2669,
        "longitude": -35.259102
    },
    {
        "id": "piloes",
        "nome": "Pilões",
        "latitude": -6.8688,
        "longitude": -35.613701
    },
    {
        "id": "piloezinhos",
        "nome": "Pilõezinhos",
        "latitude": -6.8429,
        "longitude": -35.5312
    },
    {
        "id": "pirpirituba",
        "nome": "Pirpirituba",
        "latitude": -6.7812,
        "longitude": -35.496201
    },
    {
        "id": "pitimbu",
        "nome": "Pitimbu",
        "latitude": -7.4733,
        "longitude": -34.808201
    },
    {
        "id": "pocinhos",
        "nome": "Pocinhos",
        "latitude": -7.0775,
        "longitude": -36.0588
    },
    {
        "id": "poco-dantas",
        "nome": "Poço Dantas",
        "latitude": -6.4052,
        "longitude": -38.4977
    },
    {
        "id": "poco-de-jose-de-moura",
        "nome": "Poço de José de Moura",
        "latitude": -6.5764,
        "longitude": -38.511299
    },
    {
        "id": "pombal",
        "nome": "Pombal",
        "latitude": -6.7712,
        "longitude": -37.798599
    },
    {
        "id": "prata",
        "nome": "Prata",
        "latitude": -7.6948,
        "longitude": -37.0844
    },
    {
        "id": "princesa-isabel",
        "nome": "Princesa Isabel",
        "latitude": -7.7352,
        "longitude": -37.9944
    },
    {
        "id": "puxinana",
        "nome": "Puxinanã",
        "latitude": -7.147,
        "longitude": -35.963402
    },
    {
        "id": "queimadas",
        "nome": "Queimadas",
        "latitude": -7.3623,
        "longitude": -35.900101
    },
    {
        "id": "quixaba",
        "nome": "Quixaba",
        "latitude": -7.031,
        "longitude": -37.1479
    },
    {
        "id": "remigio",
        "nome": "Remígio",
        "latitude": -6.9657,
        "longitude": -35.7953
    },
    {
        "id": "riachao",
        "nome": "Riachão",
        "latitude": -6.541,
        "longitude": -35.659698
    },
    {
        "id": "riachao-do-bacamarte",
        "nome": "Riachão do Bacamarte",
        "latitude": -7.25,
        "longitude": -35.663101
    },
    {
        "id": "riachao-do-poco",
        "nome": "Riachão do Poço",
        "latitude": -7.1466,
        "longitude": -35.264198
    },
    {
        "id": "riacho-de-santo-antonio",
        "nome": "Riacho de Santo Antônio",
        "latitude": -7.6938,
        "longitude": -36.156898
    },
    {
        "id": "riacho-dos-cavalos",
        "nome": "Riacho dos Cavalos",
        "latitude": -6.4358,
        "longitude": -37.652199
    },
    {
        "id": "rio-tinto",
        "nome": "Rio Tinto",
        "latitude": -6.8107,
        "longitude": -35.0756
    },
    {
        "id": "salgadinho",
        "nome": "Salgadinho",
        "latitude": -7.1026,
        "longitude": -36.8442
    },
    {
        "id": "salgado-de-sao-felix",
        "nome": "Salgado de São Félix",
        "latitude": -7.3556,
        "longitude": -35.434601
    },
    {
        "id": "santa-cecilia",
        "nome": "Santa Cecília",
        "latitude": -7.7441,
        "longitude": -35.879398
    },
    {
        "id": "santa-cruz",
        "nome": "Santa Cruz",
        "latitude": -6.5343,
        "longitude": -38.061401
    },
    {
        "id": "santa-helena",
        "nome": "Santa Helena",
        "latitude": -6.7219,
        "longitude": -38.640499
    },
    {
        "id": "santa-ines",
        "nome": "Santa Inês",
        "latitude": -7.6271,
        "longitude": -38.559299
    },
    {
        "id": "santa-luzia",
        "nome": "Santa Luzia",
        "latitude": -6.8695,
        "longitude": -36.918598
    },
    {
        "id": "santa-rita",
        "nome": "Santa Rita",
        "latitude": -7.1205,
        "longitude": -34.976398
    },
    {
        "id": "santa-teresinha",
        "nome": "Santa Teresinha",
        "latitude": -7.0852,
        "longitude": -37.443901
    },
    {
        "id": "santana-de-mangueira",
        "nome": "Santana de Mangueira",
        "latitude": -7.5515,
        "longitude": -38.336899
    },
    {
        "id": "santana-dos-garrotes",
        "nome": "Santana dos Garrotes",
        "latitude": -7.3829,
        "longitude": -37.990601
    },
    {
        "id": "santo-andre",
        "nome": "Santo André",
        "latitude": -7.2192,
        "longitude": -36.631001
    },
    {
        "id": "sao-bentinho",
        "nome": "São Bentinho",
        "latitude": -6.8905,
        "longitude": -37.726898
    },
    {
        "id": "sao-bento",
        "nome": "São Bento",
        "latitude": -6.491,
        "longitude": -37.450401
    },
    {
        "id": "sao-domingos",
        "nome": "São Domingos",
        "latitude": -6.815,
        "longitude": -37.941799
    },
    {
        "id": "sao-domingos-do-cariri",
        "nome": "São Domingos do Cariri",
        "latitude": -7.633,
        "longitude": -36.431301
    },
    {
        "id": "sao-francisco",
        "nome": "São Francisco",
        "latitude": -6.6197,
        "longitude": -38.094898
    },
    {
        "id": "sao-joao-do-cariri",
        "nome": "São João do Cariri",
        "latitude": -7.3919,
        "longitude": -36.532398
    },
    {
        "id": "sao-joao-do-rio-do-peixe",
        "nome": "São João do Rio do Peixe",
        "latitude": -6.7231,
        "longitude": -38.4543
    },
    {
        "id": "sao-joao-do-tigre",
        "nome": "São João do Tigre",
        "latitude": -8.0806,
        "longitude": -36.8484
    },
    {
        "id": "sao-jose-da-lagoa-tapada",
        "nome": "São José da Lagoa Tapada",
        "latitude": -6.9405,
        "longitude": -38.1646
    },
    {
        "id": "sao-jose-de-caiana",
        "nome": "São José de Caiana",
        "latitude": -7.2515,
        "longitude": -38.300499
    },
    {
        "id": "sao-jose-de-espinharas",
        "nome": "São José de Espinharas",
        "latitude": -6.8473,
        "longitude": -37.326302
    },
    {
        "id": "sao-jose-de-piranhas",
        "nome": "São José de Piranhas",
        "latitude": -7.1196,
        "longitude": -38.499401
    },
    {
        "id": "sao-jose-de-princesa",
        "nome": "São José de Princesa",
        "latitude": -7.7404,
        "longitude": -38.098099
    },
    {
        "id": "sao-jose-do-bonfim",
        "nome": "São José do Bonfim",
        "latitude": -7.1621,
        "longitude": -37.308899
    },
    {
        "id": "sao-jose-do-brejo-do-cruz",
        "nome": "São José do Brejo do Cruz",
        "latitude": -6.2133,
        "longitude": -37.3554
    },
    {
        "id": "sao-jose-do-sabugi",
        "nome": "São José do Sabugi",
        "latitude": -6.775,
        "longitude": -36.7952
    },
    {
        "id": "sao-jose-dos-cordeiros",
        "nome": "São José dos Cordeiros",
        "latitude": -7.3911,
        "longitude": -36.806499
    },
    {
        "id": "sao-jose-dos-ramos",
        "nome": "São José dos Ramos",
        "latitude": -7.2491,
        "longitude": -35.380299
    },
    {
        "id": "sao-mamede",
        "nome": "São Mamede",
        "latitude": -6.9273,
        "longitude": -37.0965
    },
    {
        "id": "sao-miguel-de-taipu",
        "nome": "São Miguel de Taipu",
        "latitude": -7.2505,
        "longitude": -35.2089
    },
    {
        "id": "sao-sebastiao-de-lagoa-de-roca",
        "nome": "São Sebastião de Lagoa de Roça",
        "latitude": -7.1033,
        "longitude": -35.866299
    },
    {
        "id": "sao-sebastiao-do-umbuzeiro",
        "nome": "São Sebastião do Umbuzeiro",
        "latitude": -8.1533,
        "longitude": -37.008598
    },
    {
        "id": "sao-vicente-do-serido",
        "nome": "São Vicente do Seridó",
        "latitude": -6.9344,
        "longitude": -36.4025
    },
    {
        "id": "sape",
        "nome": "Sapé",
        "latitude": -7.0962,
        "longitude": -35.230202
    },
    {
        "id": "serra-branca",
        "nome": "Serra Branca",
        "latitude": -7.4833,
        "longitude": -36.66
    },
    {
        "id": "serra-da-raiz",
        "nome": "Serra da Raiz",
        "latitude": -6.6875,
        "longitude": -35.442902
    },
    {
        "id": "serra-grande",
        "nome": "Serra Grande",
        "latitude": -7.2147,
        "longitude": -38.368401
    },
    {
        "id": "serra-redonda",
        "nome": "Serra Redonda",
        "latitude": -7.1863,
        "longitude": -35.6805
    },
    {
        "id": "serraria",
        "nome": "Serraria",
        "latitude": -6.8201,
        "longitude": -35.641602
    },
    {
        "id": "sertaozinho",
        "nome": "Sertãozinho",
        "latitude": -6.7531,
        "longitude": -35.439899
    },
    {
        "id": "sobrado",
        "nome": "Sobrado",
        "latitude": -7.1469,
        "longitude": -35.238098
    },
    {
        "id": "solanea",
        "nome": "Solânea",
        "latitude": -6.7626,
        "longitude": -35.655899
    },
    {
        "id": "soledade",
        "nome": "Soledade",
        "latitude": -7.0599,
        "longitude": -36.363602
    },
    {
        "id": "sossego",
        "nome": "Sossêgo",
        "latitude": -6.7672,
        "longitude": -36.247501
    },
    {
        "id": "sousa",
        "nome": "Sousa",
        "latitude": -6.7586,
        "longitude": -38.229
    },
    {
        "id": "sume",
        "nome": "Sumé",
        "latitude": -7.6721,
        "longitude": -36.879101
    },
    {
        "id": "tacima",
        "nome": "Tacima",
        "latitude": -6.4883,
        "longitude": -35.639801
    },
    {
        "id": "taperoa",
        "nome": "Taperoá",
        "latitude": -7.2112,
        "longitude": -36.8242
    },
    {
        "id": "tavares",
        "nome": "Tavares",
        "latitude": -7.6338,
        "longitude": -37.876499
    },
    {
        "id": "teixeira",
        "nome": "Teixeira",
        "latitude": -7.222,
        "longitude": -37.254002
    },
    {
        "id": "tenorio",
        "nome": "Tenório",
        "latitude": -6.9402,
        "longitude": -36.627602
    },
    {
        "id": "triunfo",
        "nome": "Triunfo",
        "latitude": -6.5786,
        "longitude": -38.597801
    },
    {
        "id": "uirauna",
        "nome": "Uiraúna",
        "latitude": -6.5212,
        "longitude": -38.410999
    },
    {
        "id": "umbuzeiro",
        "nome": "Umbuzeiro",
        "latitude": -7.6969,
        "longitude": -35.662701
    },
    {
        "id": "varzea",
        "nome": "Várzea",
        "latitude": -6.7719,
        "longitude": -36.992901
    },
    {
        "id": "vieiropolis",
        "nome": "Vieirópolis",
        "latitude": -6.5446,
        "longitude": -38.277401
    },
    {
        "id": "vista-serrana",
        "nome": "Vista Serrana",
        "latitude": -6.7395,
        "longitude": -37.567699
    },
    {
        "id": "zabele",
        "nome": "Zabelê",
        "latitude": -8.0751,
        "longitude": -37.098
    }
]
