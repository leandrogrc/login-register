export default function login(root){

root.innerHTML = 
`
<section>
    <form id="login-form">
        <label for="username-login">Usuário:</label>
        <input type="text" placeholder="username" id="username-login">
        <label for="password">Senha:</label>
        <input type="password" placeholder="senha" id="password">
        <button type="submit">Entrar</button>
    </form>
    <button onclick="register(root)" id="goto-register" type="button">Criar conta</button>
</section>
`
}