<a href="http://sabion.com.br">
    <img src="https://avatars2.githubusercontent.com/u/26559852?s=200&v=4" alt="Sabion Digital" width="120"/>
</a>

# fullstack challenge

*Data aproximada da criação do projeto: 03/07/2019*

## Detalhes de implementação

- Linguagem utilizada: 
  - Javascript;

- Stack:
  - NodeJS
  - ExpressJS;
  - PostgreSQL;

- Outras libs utilizadas: 
  - Sequelize: ORM utilizado para criação e manipulação do banco de dados, utilizando o padrão Code First, onde eu criei o banco de dados a partir dos objetos Javascript.
  - Mocha: Módulo para criação dos testes. Utilizei o Módulo 'Assert' que vem embutido no Node para realização das asserções em cada caso dos testes.
  - Axios: Módulo utilizado para a realização das requisições http nos casos de teste.

## Rodando o projeto

- Após a instalação dos módulos com o comando _npm install_, você pode rodar o projeto e em seguida os testes.
- Para rodar o projeto, basta rodar o comando _npm start_.
- Para rodar os testes, _npm test_.
- Para ver a documentação, acesse _localhost:3000/api-docs_.

## Descrição do processo

Assim que li a descrição do desafio, já percebi que haviam detalhes faltantes nos requisitos, algo que seria necessário ser pesquisado e definido previamente, como por exemplo o que viria a ser cada bot exatamente e as informações necessárias nos registros de cada um deles. Desta forma, acabei seguindo apenas com a informação de nome do bot. Acabei definindo também que cada chat (conversa) pertence a um bot e como estava especificado, cada mensagem pertence a uma conversa. Fiz a distinção da origem da mensagem (podendo ter sido emitida pelo bot ou pelo usuário) através de um campo no registro da própria mensagem, chamado sentByUser, onde caso não tenha sido enviado pelo usuário, partiu do bot.

Após definir isso criei um diagrama simples para poder me direcionar a partir dele, algo parecido com um Diagrama Entidade Relacionamento. No mesmo diagrama, coloquei também todos os endpoints a serem criados para acessar cada um dos recursos.

Comecei a programação de fato a partir dos modelos, criando conforme havia definido no diagrama, utilizando o sequelize. O banco de dados que escolhi foi o PostgreSQL, pois já tenho cadastro em um servidor gratuito para poucos acessos.

Após isso, defini o servidor com o express, e parti para criação dos controllers, pois estou organizando os arquivos com um padrão próximo do MVC. Cada arquivo da pasta controllers contém uma rota base, que seria a /bots, /chats e /messages. Também estou seguindo os padrões para a criação de APIs REST, onde são utilizados os métodos http de forma correta.

Decidi utilizar o padrão TDD, criando os casos de teste antes mesmo de definir completamente cada um dos controllers e consequentemente das rotas.

Após a criação dos casos de teste dos bots, criei as rotas dos bots, depois fiz o mesmo com os chats e mensagens.

Os casos de teste criados não cobrem totalmente todas as rotas, eu apenas criei os essenciais que garantem o mínimo funcionamento, mas poderia criar testes para garantir que, caso alguma informação faltasse ou fosse enviado de forma errada, a aplicação responderia de forma adequada retornando o erro específico.

Já tive a experiência de utilizar um outro framework chamado Hapi.js que facilita muito nessa questão e validação, e até na documentação da API, porém existem pontos de implementação que não me lembro no momento e não ficaria da forma que eu gostaria.

Em questão de escalabilidade, sei que essa arquitetura e organização não seria a mais eficiente, pois o ideal seria a divisão em arquivos menores, e que esses arquivos pudessem ser carregados de forma dinâmica, porém é algo que eu nunca criei e levaria um tempo maior para planejar.

Por fim, implementei também o início de uma documentação, contendo apenas a documentação para o CRUD dos bots, porém não está 100% completa, faltando a definição do status de sucesso de cada um dos métodos http. A url padrão para visualização da documentação é "localhost:3000/", para utilizar em outra url é necessário alterar a base_url no arquivo "src/docs/swagger.json".

Dentro da mesma pasta "docs/", também está o arquivo contendo o diagrama inicial que eu citei, contendo as entidades e os endpoints em meu primeiro planejamento. O diagrama foi criado utilizando uma ferramenta online [Draw.io](https://www.draw.io).

## Banco de dados

Estou incluíndo nos arquivos que serão enviados ao github o arquivo de configuração para acesso ao BD, porém sei que em um projeto real, isso não pode ser feito de forma alguma. Após análise do projeto, estarei retirando a pasta _config/_.

Em caso de alguma dúvida, fico à disposição! 

_Até mais!_

