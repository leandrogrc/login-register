import express from 'express'
import bcrypt from 'bcrypt'
import cors from 'cors'

const PORT = process.env.PORT || 9090

const app = express()
app.use(express.json())
app.use(cors())

let users = []

app.post('/cadastrar', async (request, response)=> {
    const { username, password1, password2 } = request.body
    const specialChar = ["!", ".", "_", "-", "?", ";", ","]

    const userCheck = users.find((user) => user.username == username)

    if(userCheck){
        response.json('Usuário já cadastrado')
        return
    }

    if(password1 !== password2){
        response.json('Certifique-se de que as senhas são iguais')
        return
    }

    
    
    if(specialChar.includes(username[0])){
        response.json(`Username não pode começar com ${username[0]}`)
        return
    }
    
    if(/[\s+]/.test(username) || /[\s+]/.test(password1)){
        response.json('O usuário ou a senha não podem ter espaços em branco!')
        return
    }

    if(password1.length < 8){
        response.json('Insira senha com 8 caracteres ou mais!')
        return
    }
    
    const hashed = await bcrypt.hash(password1, 10)

    users.push({
        username: username,
        password: hashed
    })
    console.log(users)
    response.json('Usuário cadastrado com sucesso!')
})

app.post('/login', async (request, response)=>{
    const { username, password } = request.body
    const userFound = users.find((user) => user.username == username)
    if(!userFound){
        response.json("nenhum usuário com username: " + username)
        return
    }
    const senhaValida = await bcrypt.compare(password, userFound.password)
    if(!senhaValida){
        response.json("senha inválida!")
        return
    }
    response.json('login ok')
})


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))