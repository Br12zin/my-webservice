import { User } from '../../interface/User';
// Função para buscar todos os usuários da API
export async function getUsers(): Promise<User[] | null> {
 try {
 // Faz a requisição para a API 
 const response = await fetch("<http://localhost:3003/users>",{
    method: 'GET', // Método HTTP para a requisição
    headers: {
      'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
    }
 });
 // Verifica se a resposta foi bem-sucedida
 if (!response.ok) {
 throw new Error("Erro ao buscar na requisição");
 }
 // Converte a resposta da API para JSON (formato de dados)
 const data = await response.json();
 // Retorna a lista de usuários
 return data;
 } catch (error) {
 // Captura qualquer erro que ocorra (ex.: servidor offline, JSON inválido)
 console.error('Erro ao buscar usuários:', error);
 return []; // Retorna um array vazio para indicar que houve um erro
 } finally {
 // Executa sempre, independentemente de sucesso ou erro
 console.log('Requisição GET finalizada');
 }
}