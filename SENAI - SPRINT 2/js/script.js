/////////////////////////////////PÁGINA GRÁFICOS///////////////////////////////////////////////
setTimeout(function () {
  document.getElementById("mensagem-erro").style.display = 'none'
}, 3000);

//////////////////////////PIZZA///////////////////////
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoPizza);

function desenharGraficoPizza() {

  var data = google.visualization.arrayToDataTable([
    ['Animal', 'Quantidade'],
    ['Gato', Math.round(100 * Math.random())],
    ['Cachorro', Math.round(100 * Math.random())],
    ['Peixe', Math.round(100 * Math.random())],
    ['Passáros', Math.round(100 * Math.random())],
    ['Hamister', Math.round(100 * Math.random())]
  ]);

  var options = {
    title: 'Tipos de Pets'
  };

  var chart = new google.visualization.PieChart(document.getElementById('graficoPizza'));

  chart.draw(data, options);
}

//////////////////////////BARRA////////////////////////////////

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(desenharGraficoBarra);
function desenharGraficoBarra() {
  var data = google.visualization.arrayToDataTable([
    ["Agendamentos", "", { role: "style" }],
    ["Segunda", Math.round(100 * Math.random()), "#304d63"],
    ["Terça", Math.round(100 * Math.random()), "#8fb9aa"],
    ["Quarta", Math.round(100 * Math.random()), "#f2d096"],
    ["Quinta", Math.round(100 * Math.random()), "#ed8975"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2]);

  var options = {
    title: "Agendamentos Semanais",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("graficoBarra"));
  chart.draw(view, options);
}


////////////////////////////AREA//////////////////////////////

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoArea);

function desenharGraficoArea() {
  var data = google.visualization.arrayToDataTable([
    ['Anos', 'Vendas', 'Despesas'],
    ['2019', 1000, 400],
    ['2020', 1170, 460],
    ['2021', 660, 1120],
    ['2022', 1030, 540]
  ]);

  var options = {
    title: 'Desenvolvimento da Empresa',
    hAxis: { title: 'Anos', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('graficoArea'));
  chart.draw(data, options);
}


/////////////////////////COLUNAS////////////////////////////////
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoColunas);

function desenharGraficoColunas() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Anos', 'Sul', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Norte'],
    ['2019', 165, 938, 522, 998, 450],
    ['2020', 135, 1120, 599, 1268, 288],
    ['2021', 157, 1167, 587, 807, 397],
    ['2022', 139, 1110, 615, 968, 215]
  ]);

  var options = {
    title: 'Casos de abandono nas regiões do Brasil',
    vAxis: { title: 'Casos' },
    hAxis: { title: 'Anos' },
    seriesType: 'bars',
    series: { 5: { type: 'linha' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('graficoColunas'));
  chart.draw(data, options);
};


 

///////////////////////////////////////////PÁGINA CADASTRO////////////////////////////////////////////////
function aviso() {
  let divErro = document.getElementById("mensagem-erro");
  divErro.style.display = 'none';


  let nomeCompleto = frmRegistro.inNomeCompleto.value;
  let data = frmRegistro.inDataNascimento.value;
  let cpf = frmRegistro.inCpf.value;
  let endereco = frmRegistro.inEndereco.value;
  let cidade = frmRegistro.inCidade.value;
  let sigla = frmRegistro.inSiglaDoEstado.value;
  let email = frmRegistro.inEmail.value;
  let telefone = frmRegistro.inTelefone.value;
  let senha = frmRegistro.inSenha.value;
  let nomePet = frmRegistro.inNomeDoPet.value;
  let dtNascPet = frmRegistro.dtNasPet.value;
  let inIdade = frmRegistro.inIdade;

  inIdade.style.display = 'none';

  /*///////////////NOME///////////////*/

  if (nomeCompleto.trim() == '') {
    divErro.innerHTML = "O campo nome não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inNomeCompleto.focus();
    return false;
  }

  if (nomeCompleto.trim().length < 3) {
    divErro.innerHTML = "O campo nome deve conter pelo menos 3 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inNomeCompleto.focus();
    return false;
  }

  if (nomeCompleto.trim().length > 100) {
    divErro.innerHTML = "O campo nome deve conter menos de 100 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inNomeCompleto.focus();
    return false;
  }

  /*/////////////DATA/////////////////*/

  if (data.trim() == '') {
    divErro.innerHTML = "O campo data não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inDataNascimento.focus();
    return false;
  }

  remover = /\D/g
  data = data.replace(remover, '');
  let padraoData = /^(\d{4})(\d{2})(\d{2})$/
  let dataValida = true;
  let ano = ''

  if (data.length == 8) {
    let vetorData = padraoData.exec(data);
    //console.log(vetorData);
    ano = vetorData[1];
    mes = vetorData[2];
    dia = vetorData[3];
  }

  if (ano > 2023) {
    divErro.innerHTML = "Data de Nascimento não pode ser maior que o ano atual!";
    divErro.style.display = 'block';
    frmRegistro.inDataNascimento.focus();
    return false;
  }

  if (ano < 1923) {
    divErro.innerHTML = "Data de Nascimento não pode ser muito antiga!";
    divErro.style.display = 'block';
    frmRegistro.inDataNascimento.focus();
    return false;
  }

  // //*/////////////CPF////////////////*/

  if (cpf.trim() == '') {
    divErro.innerHTML = "O campo CPF não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inCpf.focus();
    return false;
  }

  let removerCPF = /\D/g;
  let cpfIsValid = true;

  cpf = cpf.replace(removerCPF, '');

  if (cpf.length == 11) {
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
      cpfIsValid = false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
      cpfIsValid = false;
    }

    if (cpfIsValid) {
      let novoCpf = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(9, 2)
      alert('deu certo')
    } else {
      divErro.innerHTML = "O CPF informado não é válido!";
      divErro.style.display = 'block';
      frmRegistro.inCpf.focus();
      return false;
    }
  } else {
    divErro.innerHTML = "O CPF deve conter 11 dígitos!";
    divErro.style.display = 'block';
    frmRegistro.inCpf.focus();
    return false;
  }

  /*///////////////ENDEREÇO/////////////*/

  if (endereco.trim() == '') {
    divErro.innerHTML = "O campo endereço não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inEndereco.focus();
    return false;
  }

  if (endereco.trim().length < 3) {
    divErro.innerHTML = "O campo endereço deve conter pelo menos 3 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inEndereco.focus();
    return false;
  }

  if (endereco.trim().length > 50) {
    divErro.innerHTML = "O campo endereço deve conter menos de 50 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inEndereco.focus();
    return false;
  }

  /*///////////CIDADE////////////////*/

  if (cidade.trim() == '') {
    divErro.innerHTML = "O campo cidade não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inCidade.focus();
    return false;
  }

  if (cidade.trim().length < 3) {
    divErro.innerHTML = "O campo cidade deve conter pelo menos 3 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inCidade.focus();
    return false;
  }

  if (cidade.trim().length > 50) {
    divErro.innerHTML = "O campo cidade deve conter menos de 50 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inCidade.focus();
    return false;
  }

  /*////////////////UF///////////*/

  if (sigla.trim() == '') {
    divErro.innerHTML = "O campo sigla não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inSiglaDoEstado.focus();
    return false;
  }


  if (sigla.trim().length != 2) {
    divErro.innerHTML = "O campo sigla deve conter 2 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inSiglaDoEstado.focus();
    return false;
  }

  /*/////////////EMAIL///////////////*/

  if (email.trim() == '') {
    divErro.innerHTML = "O campo email não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inEmail.focus();
    return false;
  }

  //aceitar somente e-mails com domínio "gmail.com", "sesisp.org.br","hotmail.com" ou qualquer dominio ".br".
  let padraoEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3})$/
  let emailValido = padraoEmail.test(email);

  if (emailValido == false) {
    if (emailValido) {
      divErro.innerHTML = "O campo email deve conter menos de 100 caracteres!";
      divErro.style.display = 'block';
      frmRegistro.inEmail.focus();
      return false;
    } else {
      divErro.innerHTML = "O campo email deve conter @ ou .com!";
      divErro.style.display = 'block';
      frmRegistro.inEmail.focus();
      return false;
    }
  }

  // /*/////////TELEFONE/////////*/

  if (telefone.trim() == '') {
    divErro.innerHTML = "O campo telefone não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inTelefone.focus();
    return false;
  }

  if (telefone.trim().length < 11) {
    divErro.innerHTML = "O campo telefone deve conter pelo menos 11 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inTelefone.focus();
    return false;
  }

  if (telefone.trim().length > 11) {
    divErro.innerHTML = "O campo telefone deve conter menos de 11 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inTelefone.focus();
    return false;
  }

  /*/////////SENHA///////////*/

  if (senha.trim() == '') {
    divErro.innerHTML = "O campo não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inSenha.focus();
    return false;
  }

  let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
  let SenhaIsValid = padraoSenha.test(senha.trim());

  if (!SenhaIsValid) {
    divErro.innerHTML = "O campo Senha não corresponde ao padrão desejado!";
    divErro.style.display = 'block';
    frmRegistro.inSenha.focus();
    return false;
  }

  if (senha.trim().length < 8) {
    divErro.innerHTML = "O campo senha deve conter pelo menos 8 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inSenha.focus();
    return false;
  }

  if (senha.trim().length > 30) {
    divErro.innerHTML = "O campo senha deve conter menos de 30 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inSenha.focus();
    return false;
  }

  /////////NOME DO PET////////////////

  if (nomePet.trim() == '') {
    divErro.innerHTML = "O campo nome do pet não pode ser vazio!";
    divErro.style.display = 'block';
    frmRegistro.inNomeDoPet.focus();
    return false;
  }

  if (nomePet.trim().length < 3) {
    divErro.innerHTML = "O campo nome do pet deve conter pelo menos 3 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inNomeDoPet.focus();
    return false;
  }

  if (nomePet.trim().length > 100) {
    divErro.innerHTML = "O campo nome do pet deve conter menos de 100 caracteres!";
    divErro.style.display = 'block';
    frmRegistro.inNomeDoPet.focus();
    return false;
  }


  if (dtNascPet != '') {
    let dataA = new Date(dtNascPet)
    let agora = Date.now();

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let tempo = (agora - dataA.getTime())
    tempo = Math.floor(tempo / day);
    let dias = 0;
    let meses = 0;
    let anos = 0;
    let restoDiv = 0;
    anos = parseInt(tempo / 365);
    restoDiv = tempo % 365;
    meses = parseInt(restoDiv / 30);
    dias = restoDiv % 30;
    let idadeAnimal = anos + ' anos, ' + meses + ' meses e ' + dias + ' dias.';
    inIdade.value = idadeAnimal;
    inIdade.style.display = 'block';
  } else {
    divErro.innerHTML = "Data Invalida!";
    divErro.style.display = 'block';
    frmRegistro.inNomeDoPet.focus();
    return false;
  }
}


function exibircampo() {
  let select = document.getElementById("selects").value;
  let outros = document.getElementById("outros");
  if (select == "Outros") {
    outros.style.display = "block";
  } else {
    outros.style.display = "none";
  }

}





///////////////////////////////////////PAGINA AGENDAMENTO//////////////////////////////////////
function agendamento() {
  let divErro = document.getElementById("mensagem-erro");
  divErro.style.display = 'none';
  let divacerto = document.getElementById("mensagem-acerto");
  let cliente = div1agendamento.inCLIE.value;
  let pets = div1agendamento.inNome.value;
  let data = div1agendamento.inData.value;
  let hora = div1agendamento.inhora.value;
  let servico = div1agendamento.inServico.value;



  /////////////CLIENTE////////////

  if (cliente == '') {
    divErro.innerHTML = "o campo nome nao pode ser vazio!";
    div1agendamento.inCLIE.focus();
    divErro.style.display = 'block';
    return false;
  }

  if (cliente.length < 3) {
    divErro.innerHTML = "o campo nome nao pode ter menos que 3 caracteres!";
    div1agendamento.inCLIE.focus();
    divErro.style.display = 'block';
    return false;
  }

  if (cliente.length > 100) {
    divErro.innerHTML = "o campo nome nao pode ter mais que 100 caracteres!";
    div1agendamento.inCLIE.focus();
    divErro.style.display = 'block';
    return false;
  }

  /////////////PETS////////////

  if (pets == '') {
    divErro.innerHTML = "o campo nome do pet nao pode ser vazio!";
    div1agendamento.inNome.focus();
    divErro.style.display = 'block';
    return false;
  }

  if (pets.length < 3) {
    divErro.innerHTML = "o campo nome do pet nao pode ter menos que 3 caracteres!";
    div1agendamento.inNome.focus();
    divErro.style.display = 'block';
    return false;
  }

  if (pets.length > 100) {
    divErro.innerHTML = "o campo nome do pet nao pode ter mais que 100 caracteres!";
    div1agendamento.inNome.focus();
    divErro.style.display = 'block';
    return false;
  }


  /////////////DATA//////////////

  if (data.trim() == '') {
    divErro.innerHTML = "Informe uma data valida!";
    div1agendamento.inData.focus();
    divErro.style.display = 'block';
    return false;
  }

  let diaSemana = new Date(data).getDay();

  if (diaSemana == '5' || diaSemana == '6') {
    divErro.innerHTML = "Não é possivel agendar aos fim de semana!";
    div1agendamento.inData.focus();
    divErro.style.display = 'block';
    return false;
  }
  remover = /\D/g
  data = data.replace(remover, '');
  let padraoData = /^(\d{4})(\d{2})(\d{2})$/
  let dataValida = true;
  let ano = ''
  let mes = ''
  let dia = ''

  if (data.length == 8) {
    let vetorData = padraoData.exec(data);
    //console.log(vetorData);
    ano = vetorData[1];
    mes = vetorData[2];
    dia = vetorData[3];
  }
  if (ano < 2023) {
    divErro.innerHTML = "Selecione uma data Futura!";
    div1agendamento.inData.focus();
    divErro.style.display = 'block';
    return false;
  }

  if (ano > 2025) {
    divErro.innerHTML = "Agendamentos permitidos somente até 2025!";
    div1agendamento.inData.focus();
    divErro.style.display = 'block';
    return false;
  }

  ///////////HORA///////////

  let removerHora = /\D/g;
  hora = hora.replace(removerHora, '');
  let padraoHora = /^(\d{2})(\d{2})$/;

  let Hora = ''

  if (hora.length == 4) {
    let vetorHora = padraoHora.exec(hora);
    Hora = vetorHora[1];
  }

  if (Hora <= 07 || Hora >= 18) {
    divErro.innerHTML = "Não é possivel agendar fora do horário comercial!";
    div1agendamento.inhora.focus();
    divErro.style.display = 'block';
    return false;
  }

  let codServico = div1agendamento.inServico.value;
  if (codServico == '1') {
    let servico = 'Compra de produtos'
  }
  if (codServico == '2') {
    let servico = 'Banho e Tosa em filhotes'
  }
  if (codServico == '3') {
    let servico = 'Banho e Tosa na tesoura'
  }
  if (codServico == '4') {
    let servico = 'Banho e Tosa higiênico'
  }
  if (codServico == '5') {
    let servico = ' Banho higiênico'
  }
  if (codServico == '6') {
    let servico = 'Outros'
  }

  let linhaTabela = '<tr><td>' + cliente + '</td><td>' + pets + '</td><td>' + servico + '</td><td>' + data + '</td><td>' + hora + '</td></tr>';
  let tabela = document.getElementById('tabelaAgenda');
  tabela.innerHTML = tabela.innerHTML + linhaTabela;
  divacerto.style.display = 'block';
  return false;
}





////////////////////////////////////////////PÁGINA LOGIN//////////////////////////////////////////
function login() {

  let divErro = document.getElementById("mensagem-erro");
  divErro.style.display = 'none';

  const userPadrao = 'admin@teste.com.br';
  const senhaPadrao = '!@#ABC123def';

  let user = false;
  let senhas = false;

  let usuario = frmLog.inEmail.value;
  let senha = frmLog.inSenha.value;

  if (usuario == userPadrao) {
      user = true;
  } else {
      divErro.innerHTML = "O campo usuário não foi cadastrado!";
      divErro.style.display = 'block';
      return false;
  }

  if (senhas == senhaPadrao) {
      senhas = true;
  }
  divErro.innerHTML="Enviado!"
}