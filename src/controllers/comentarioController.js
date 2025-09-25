import Controller from "./Controller.js";
import ComentarioService from '../services/comentarioService.js'
const comentarioService = new ComentarioService();
class ComentarioController extends Controller{
  constructor(){
    super(comentarioService)
  }
}

export default ComentarioController;
