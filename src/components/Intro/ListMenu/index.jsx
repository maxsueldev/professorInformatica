import { ListMenuUl } from './style';

function ListMenu({ isOpen }) {
    if(isOpen) {
        return (
            <ListMenuUl>
                <li><a href="#">Test1</a></li>
                <li><a href="#">Test2</a></li>
                <li><a href="#">Test3</a></li>  
            </ListMenuUl>
        );
    }
}

export default ListMenu;