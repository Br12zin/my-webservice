import {User} from "../../interface/User";

//função para buscar todos os usuários da api
export async function getUsers(): Promise<User[]>{

    //faz uma requisição GET para a api
    const response = await fetch("http://localhost:3003/users");

    //converte a resposta da api para JSON 
    const data = await response.json();

    //retorna a lista de usuários
    return data;
}