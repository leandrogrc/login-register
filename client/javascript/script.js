window.document.addEventListener('DOMContentLoaded', ()=>{

    const registerForm = document.getElementById('registerForm')
    const loginForm = document.getElementById('loginForm')

    registerForm.addEventListener('submit', (event)=>{
            event.preventDefault();
            const registerUsername = document.getElementById('registerUsername').value
            const registerPassword1 = document.getElementById('registerPassword1').value
            const registerPassword2 = document.getElementById('registerPassword2').value

            const body = { username: registerUsername, password1: registerPassword1, password2: registerPassword2 }

            const postConfig = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }

            fetch('http://localhost:9090/cadastrar', postConfig)
            .then(response=>response.json())
            .then(server_data=> {
                Toastify({
                    text: server_data,
                    duration: 3000,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: '#55AD9B'
                    },
                  }).showToast();
            })
            .catch(err=>console.error(err))

            document.getElementById('registerUsername').value = ''
            document.getElementById('registerPassword1').value = ''
            document.getElementById('registerPassword2').value = ''
        })

    loginForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        const loginUsername = document.getElementById('loginUsername').value
        const loginPassword = document.getElementById('loginPassword').value

        const body = { username: loginUsername, password: loginPassword }

        const postConfig = {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:9090/login', postConfig)
            .then(response=>response.json())
            .then(server_data=> {
                Toastify({
                    text: server_data,
                    duration: 3000,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: '#55AD9B'
                    },
                  }).showToast();
            })
            .catch(err=>console.error(err))
    })
})