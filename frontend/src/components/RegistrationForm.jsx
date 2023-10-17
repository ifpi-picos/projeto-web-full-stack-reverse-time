"use client"

import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export default function RegistrationForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const signUpUrl = "http://localhost:3030/signup"

    const signUp = () => {
        if (!name) {
            return alert("Campo nome vazio!")
        }

        else if (!email) {
            return alert("Campo email vazio!")
        }

        else if (!password) {
            return alert("Campo senha vazio!")
        }

        if (password != confirmPassword) {
            return alert("Senha e Confirmação de senha distintas!")
        }

        axios
            .post(signUpUrl, {name, email, password})
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <form className="w-1/3 h-3/4 bg-blue-500 text-gray-100 font-semibold border-gray-100 border rounded-xl flex justify-center items-center">
            <fieldset className="w-5/6 h-5/6 border border-gray-100 flex flex-col justify-evenly rounded-xl">
                <legend className="m-auto px-6 py-3 border border-gray-100 rounded-sm">idCurso</legend>

                <div className="flex justify-center">
                    <span className="text-xl">Cadastro</span>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-5/6 mb-5 flex flex-col">
                        <label className="mb-3" htmlFor="name">Nome</label>
                        <input className="text-gray-800 px-2 py-1 border border-gray-100 rounded-sm" id="name" name="name" type="text" placeholder="Digite seu nome" required onChange={(e) => setName(e.currentTarget.value)}/>
                    </div>

                    <div className="w-5/6 mb-5 flex flex-col">
                        <label className="mb-3" htmlFor="email">Email</label>
                        <input className="text-gray-800 px-2 py-1 border border-gray-100 rounded-sm" id="email" name="email" type="email" placeholder="Digite seu email" required onChange={(e) => setEmail(e.currentTarget.value)}/>
                    </div>

                    <div className="w-5/6 mb-5 flex flex-col">
                        <label className="mb-3" htmlFor="passoword">Senha</label>
                        <input className="text-gray-800 px-2 py-1 border border-gray-100 rounded-sm" id="passoword" name="password" type="password" placeholder="Digite sua senha" required onChange={(e) => setPassword(e.currentTarget.value)}/>
                    </div>

                    <div className="w-5/6 mb-5 flex flex-col">
                        <label className="mb-3" htmlFor="confirmPassowrd">Confirmar Senha</label>
                        <input className="text-gray-800 px-2 py-1 border border-gray-100 rounded-sm" id="confirmPassword" name="confirmPassowrd" type="password" placeholder="Confirme sua senha" required onChange={(e) => setConfirmPassword(e.currentTarget.value)}/>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <button className="px-7 py-3 mb-5 border border-gray-100 rounded-sm" type="button" onClick={() => {signUp()}}>Cadastrar-se</button>
                    <Link className="underline" href="/">Entrar</Link>
                </div>
            </fieldset>
        </form>
    )
}