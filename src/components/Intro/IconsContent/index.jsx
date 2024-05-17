import computingIcon from '../../../img/intro/informatica.svg';
import excelIcon from '../../../img/intro/excel.svg';
import webDesignIcon from '../../../img/intro/web-design.svg';
import programmingIcon from '../../../img/intro/javascript.svg';

import { IconsContainer } from './style';

function IconsContent() {
    return (
        <IconsContainer>
            <img src={computingIcon} alt="computing icon" />
            <img src={excelIcon} alt="excel icon" />
            <img src={webDesignIcon} alt="web design icon" />
            <img src={programmingIcon} alt="programming icon" />
        </IconsContainer>
    );
}

export default IconsContent;