var userCadastrado = [
	{
		nome: "Ana",
		sobrenome: "Santos",
		data_de_nascimento: "1999-05-15",
		cidade: "Rio de Janeiro",
		estado: "RJ",
		bairro: "Copacabana",
		endereco: {
			tipo: "apartamento",
			numero: 301,
		},
	},
	{
		nome: "Carlos",
		sobrenome: "Oliveira",
		data_de_nascimento: "1989-09-20",
		cidade: "São Paulo",
		estado: "SP",
		bairro: "Pinheiros",
		endereco: {
			tipo: "casa",
			numero: 45,
		},
	},
	{
		nome: "Mariana",
		sobrenome: "Silva",
		data_de_nascimento: "1996-03-10",
		cidade: "Belo Horizonte",
		estado: "MG",
		bairro: "Savassi",
		endereco: {
			tipo: "apartamento",
			numero: 802,
		},
	},
	{
		nome: "Pedro",
		sobrenome: "Gomes",
		data_de_nascimento: "1982-11-28",
		cidade: "Porto Alegre",
		estado: "RS",
		bairro: "Moinhos de Vento",
		endereco: {
			tipo: "casa",
			numero: 76,
		},
	},
	{
		nome: "Juliana",
		sobrenome: "Martins",
		data_de_nascimento: "1990-07-03",
		cidade: "Brasília",
		estado: "DF",
		bairro: "Asa Sul",
		endereco: {
			tipo: "apartamento",
			numero: 502,
		},
	},
	{
		nome: "Lucas",
		sobrenome: "Ferreira",
		data_de_nascimento: "1995-12-18",
		cidade: "Recife",
		estado: "PE",
		bairro: "Boa Viagem",
		endereco: {
			tipo: "casa",
			numero: 22,
		},
	},
	{
		nome: "Camila",
		sobrenome: "Rodrigues",
		data_de_nascimento: "1993-08-07",
		cidade: "Salvador",
		estado: "BA",
		bairro: "Barra",
		endereco: {
			tipo: "apartamento",
			numero: 1001,
		},
	},
	{
		nome: "Felipe",
		sobrenome: "Pereira",
		data_de_nascimento: "1988-04-22",
		cidade: "Fortaleza",
		estado: "CE",
		bairro: "Meireles",
		endereco: {
			tipo: "casa",
			numero: 15,
		},
	},
	{
		nome: "Laura",
		sobrenome: "Almeida",
		data_de_nascimento: "1991-10-05",
		cidade: "Curitiba",
		estado: "PR",
		bairro: "Batel",
		endereco: {
			tipo: "apartamento",
			numero: 601,
		},
	},
	{
		nome: "Gustavo",
		sobrenome: "Ribeiro",
		data_de_nascimento: "1998-02-14",
		cidade: "Manaus",
		estado: "AM",
		bairro: "Adrianópolis",
		endereco: {
			tipo: "casa",
			numero: 30,
		},
	},
];

function verificarCadastro(nome, sobrenome) {
	for (let i = 0; i < userCadastrado; i++) {
		if (userCadastrado[i].nome === nome && userCadastrado[i].sobrenome === sobrenome) {
			return true;
		}
	}
	return false;
}

function cadastraNovoUser(novoUsuario) {
	if (verificarCadastro(novoUsuario.nome, novoUsuario.sobrenome)) {
		console.log("Cadastro já feito");
	} else {
		userCadastrado.push(novoUsuario);
		console.log("Novo usuário cadastrado com sucesso");
	}
}
document.getElementById("btnCadastrar").addEventListener("click", function () {
	const nome = document.getElementById("nome").value;
	const sobrenome = document.getElementById("sobrenome").value;
	const dataNascimento = document.getElementById("data_de_nascimento").value;
	const estado = document.getElementById("estado").value;
	const cidade = document.getElementById("cidade").value;
	const bairro = document.getElementById("bairro").value;
	const endereco = document.getElementById("endereco").value;

	const novoUsuario = {
		nome: nome,
		sobrenome: sobrenome,
		data_de_nascimento: dataNascimento,
		estado: estado,
		cidade: cidade,
		bairro: bairro,
		endereco: {
			tipo: "",
			numero: endereco,
		},
	};

	cadastraNovoUser(novoUsuario);
});
