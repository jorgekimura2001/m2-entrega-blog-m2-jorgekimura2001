export default class Requisicao {
    static base_url = "https://blog-m2.herokuapp.com";
    static token = localStorage.getItem('@kenzie-blog:token');
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    };

    static async cadastrarUsuario(newUserData) {
        return await fetch(`${this.base_url}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(newUserData),
        })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    };

    static async logarUsuario(userData) {
        return await fetch(`${this.base_url}/users/login`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.removeItem('@kenzie-blog:id')
                localStorage.setItem('@kenzie-blog:userId', data.userId);
                localStorage.setItem('@kenzie-blog:token', data.token);
                return data
            })
            .catch(error => console.log(error))
    }
}
