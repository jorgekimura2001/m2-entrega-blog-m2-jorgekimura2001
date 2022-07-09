export default class Autenticacao {
  static base_url = "https://blog-m2.herokuapp.com";
  static token = localStorage.getItem("@kenzie-blog:token");
  static id = localStorage.getItem("@kenzie-blog:userId");
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };

  static async listarUsuario() {
    return await fetch(`${this.base_url}/users/${this.id}`, {
      method: "GET",
      headers: this.headers,
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  static async listarPosts() {
    return await fetch(`${this.base_url}/posts?page=1`, {
      method: "GET",
      headers: this.headers,
    })
        .then(resp => resp.json())
        .catch(err => console.log(err))
  }

  static async criarPost(newPostData) {
    return await fetch(`${this.base_url}/posts`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(newPostData),
    })
      .then(response => response.json())
      .catch(err => console.log(err))
  }

  static async listarInfoPost(idPost) {
    return await fetch(`${this.base_url}/posts/${idPost}`, {
      method: "GET",
      headers: this.headers
    })
      .then(resp => resp.json())
      .catch(err => console.log(err))
  }
  
  static async editarPost(idPost, postEditData) {
    return await fetch(`${this.base_url}/posts/${idPost}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(postEditData)
    })
      .then(resp => resp.json())
      .catch(err => console.log(err))
  }

  static async apagarPost(idPost) {
    return await fetch(`${this.base_url}/posts/${idPost}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(resp => resp.json())
      .catch(err => console.log(err))
  }
}