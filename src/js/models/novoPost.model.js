export default class NovoPost{
    static cardNovoPost() {
        const formNovoPost = document.createElement('form');
        
        const textArea = document.createElement('textarea');
        textArea.name = 'content';
        textArea.cols = '30';
        textArea.rols = '10';
        textArea.placeholder = "Comece seu post incrível!";
        
        const btnNovoPost = document.createElement('button');
        btnNovoPost.classList.add("btn__novoPost");
        btnNovoPost.innerText = '+'

        formNovoPost.append(textArea, btnNovoPost)
        return formNovoPost
    }
}