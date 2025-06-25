"use client";
import {User} from "../../interface/User";
import {getUsers} from "../../services/user/get";
import {useEffect, useState} from "react";

//Página para gerenciar usuários (CRUD)
export default function Dashboard(){
    //Estado para armazenar a lista de usuários
    const [users, setUsers] = useState<User[]>([]);

    //Carrega a lista de usuários ao carregar a página
    useEffect(()=>{
        async function fetchUsers(){
            const data = await getUsers();
            setUsers(data);
        }
        fetchUsers();
    }, []);

    return(
        <div className="p-6">
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">E-mail</th>
                        <th className="border p-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key = {user.id}>
                            <td className="border p-2">{user.id}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}