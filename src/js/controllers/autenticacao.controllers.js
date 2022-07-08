export default class Autenticacao {
    static base_url = "https://blog-m2.herokuapp.com";
    static token = localStorage.getItem("@kenzie-blog:token");
    static id = localStorage.getItem('@kenzie-blog:userId')
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
    };
    
    static async listarUsuario() {
        return await fetch(`${this.base_url}/users/${this.id}`, {
            method: "GET",
            headers: this.headers,
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}