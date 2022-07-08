export default class Requisicao {
    static base_url = "https://blog-m2.herokuapp.com";
    static headers = {"Content-Type": "application/json",};

    static async cadastrarUsuario(newUserData) {
        const usuario =  await fetch(`${this.base_url}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(newUserData),
        })
        .then((response) => { return response.json()})
        .catch((error) => console.log(error))

        if(usuario.message === null){
            window.location = './src/views/login.html';
        }
        return usuario
        
    };

    static async logarUsuario(userData) {
        const usuario = await fetch(`${this.base_url}/users/login`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('@kenzie-blog:userId', data.userId);
                localStorage.setItem('@kenzie-blog:token', data.token);
                return data
            })
            .catch(error => console.log(error))

            console.log(usuario)

            if(usuario.message !== 'Invalid email or password'){
                window.location = '../src/views/dashboard.html';
            }
            return usuario
    }
}
