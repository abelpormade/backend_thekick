import Controller from './Controller.js';
import PostagemService from  '../services/postagemService.js'
const postagemService = new PostagemService();

class PostagemController extends Controller {
  constructor(){
    super(postagemService)
  }
}

export default PostagemController;
