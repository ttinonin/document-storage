# Projeto Document Store (MongoDB)

## Coleções

Coleções utilizadas para armazenar os dados são especificadas dentro do arquivo da pasta Schema, sendo os seguintes:

- alunos
- alunos_cursou
- alunos_tccs
- cursos
- departamentos
- disciplinas
- disciplinas ministradas
- professores

## Inserção de dados

Para extrairmos e inserirmos os dados do projeto passado, criamos uma api com express js, para iniciala execute `npm start`.

Para inserir os dados e criar as colections é preciso fazer uma requisição POST para o endpoint `/api/dados`.

## Queries

As queries estão definidadas dentro do arquivo de `routes/routes.js`, para fazer cada uma das queries é necessario fazer requisições GET para as seguintes endpoints:

- `/api/historico-aluno`
- `/api/historico-professor`
- `/api/chefes-departamento`
- `/api/grupo-tcc`
- `/api/alunos-formados`

## Integrantes do Grupo

| Nome  | RA |
| ------------- | ------------- |
| Angelo Gabriel Vasconcelos Baptista  | 22.122.081-7  |
| Thiago Monteiro Tinonin  | 22.122.044-5  |