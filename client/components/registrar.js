export default function registrar (root){

root.innerHTML = 
`
<section>
    <form id="signup-form">
        <label for="username-signup">Usuário:</label>
        <input type="text" placeholder="username" id="username-signup">
        <label for="password1">Senha:</label>
        <input type="password" placeholder="senha" id="password1">
        <label for="password2">Confirme a senha:</label>
        <input type="password" placeholder="senha" id="password2">
        <button type="submit">Registrar</button>
    </form>
    <button id="goto-login" type="button">Login</a>
</section>
`
}