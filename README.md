# API de Cadastro de Usuários

## API para cadastro de usuários, com dados armazenados em memória durante a execução do sistema

### Tecnologias

 - Node 12.4
 - Git 2.9.0
 - NPM 6.9
 
###### Como clonar o projeto
	git clone https://github.com/llaet/node-api.git

###### Como rodar o projeto
	Na pasta src do projeto
  	node UsuarioController.js
	
###### O que é uma API?
 - [What is? - en](https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces)

###### Projeto desenvolvido para disciplina de Programação Web II - Curso Bacharelado em Sistemas de Informação

###### Formato JSON do objeto Usuário da API
{
	"nome":"Testerson",
	"email":"teste@email.com",
	"endereco":"Rua Teste, n 355"
}

###### Verbos de Requisição HTTP:
	Listar Todos Usuários | GET    | /users
        Listar Usuário	      | GET    | /users/:id - onde {id} será um parâmetro inteiro recebido na URI
	Cadastrar Usuário     | POST   | /users - no Corpo deverá ser informado um JSON com os dados do Usuário
        Editar Usuário	      | PUT    | /users/:id - onde {id} será um parâmetro inteiro recebido na URI; no Corpo o JSON com os dados atualizados
	Remover Usuário	      | DELETE | /users/:id - onde {id} será um parâmetro inteiro recebido na URI
  	
###### Sobre mim:
  - [Linkedin](https://www.linkedin.com/in/lucas-laet-b47452187/)
  - :e-mail: lucas.laetlira@gmail.com
