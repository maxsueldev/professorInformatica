import { ListMenuUl } from './style';

function ListMenu({ isOpen }) {
    if(isOpen) {
        return (
            <ListMenuUl>
                <li><a href="#aboutMe">Sobre mim</a></li>
                <li><a href="#courses">Cursos</a></li>
                <li><a href="#contactMe">Contato</a></li>  
            </ListMenuUl>
        );
    }
}

export default ListMenu;