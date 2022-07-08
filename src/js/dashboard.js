import DashBoard from "./controllers/dashboard.controller.js";

DashBoard.headerInfoUser()

// postsRecentes.forEach(element => {
//     const avatar = element.user.avatarUrl;
//     const username = element.user.username;
//     const post = element.content;
//     const tratativa = element.createdAt.split('T').reverse().slice(1)[0].split('-').reverse()
//     tratativa.forEach(elem => {
//         console.log(elem)
//     })
        
//         //.replace('T', '-').replace('Z', '').split('-').reverse()
//         //.splice(-3, 3)
//     const dataTratada = Number(tratativa)
//     const data = dataTratada.toString()
//     console.log(tratativa);
    
//     const cardPostRecente = ComponentesDOM.cardPostsRecentes(avatar, username, post, )
// });