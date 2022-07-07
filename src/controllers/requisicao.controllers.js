export default class Requisicao {
    static base_url = "https://blog-m2.herokuapp.com";
    static token = ''
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    };

    static async cadastrarUsuario() {
        return await fetch(`${this.base_url}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify()
        } )
    }
}
