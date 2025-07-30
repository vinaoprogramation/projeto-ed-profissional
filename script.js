document.getElementById('empresaForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const estado = document.getElementById('estado').value;
  const nicho = document.getElementById('nicho').value;

  let mensagem = `<h3>Resultados para ${nome}</h3>`;
  mensagem += `<p>Com base em sua localização (${estado}) e setor (${nicho}), sua empresa pode ser elegível para:</p><ul>`;

  if (estado === 'SP') {
    mensagem += "<li>Redução do ICMS Verde para setores sustentáveis.</li>";
  }
  if (estado === 'RJ') {
    mensagem += "<li>Incentivo estadual para projetos de energia limpa.</li>";
  }
  if (nicho === 'alimentos') {
    mensagem += "<li>Isenção parcial de IPI para empresas com certificado orgânico.</li>";
  }
  if (nicho === 'construcao') {
    mensagem += "<li>Benefícios fiscais para uso de materiais reciclados.</li>";
  }

  mensagem += "</ul><p>Recomendamos consultar a Secretaria de Fazenda do seu estado para mais detalhes.</p>";

  document.getElementById('resultado').innerHTML = mensagem;
});