import Course from './Course';

import informaticaIcon from '../../img/courses/informatica.svg';
import excelIcon from '../../img/courses/excel.svg';
import webDesignIcon from '../../img/courses/web-design.svg';
import javascriptIcon from '../../img/courses/javascript.svg';

import gradeInformatica from '../../pdf/gradeInformatica.pdf';
import gradeExcel from '../../pdf/gradeExcel.pdf';
import gradeWebDesign from '../../pdf/gradeWebDesign.pdf';
import gradeJavaScript from '../../pdf/gradeJavaScript.pdf';

import { CoursesContainer, FlexCourses } from './style';

function Courses() {
    return (
        <CoursesContainer id="courses">
            <h2>Cursos</h2>
            <FlexCourses>
                <Course name="Informática Básica"
                    courseIcon={informaticaIcon}
                    description="Informática é o campo de estudo e prática que envolve o uso de 
                    computadores e sistemas de informação para processar, armazenar, transmitir 
                    e manipular dados. Em termos simples, é a ciência e a tecnologia relacionadas 
                    ao processamento de informações por meio de computadores e software."
                    hrefGrade={gradeInformatica} />

                <Course name="Excel Básico"
                    courseIcon={excelIcon}
                    description="O Microsoft Excel é um programa capaz de armazenar, organizar e 
                    editar dados em formato de planilhas para a construção de gráficos, tabelas, 
                    análises, entre outras funcionalidades, que vão das básicas até as avançadas."
                    hrefGrade={gradeExcel} />

                <Course name="Web Design"
                    courseIcon={webDesignIcon}
                    description="Um profissional de Web Design é alguém especializado em criar e 
                    desenvolver a aparência visual e a usabilidade de sites na internet. Esse 
                    profissional utiliza habilidades em design gráfico, conhecimento de programação
                    web e compreensão dos princípios de usabilidade para criar páginas web atraentes, 
                    funcionais e fáceis de navegar. O trabalho do web designer envolve a escolha de 
                    layouts, cores, fontes, imagens e outros elementos visuais, garantindo uma 
                    experiência positiva para os usuários que acessam o site."
                    hrefGrade={gradeWebDesign} />

                <Course name="JavaScript Básico"
                    courseIcon={javascriptIcon}
                    description="JavaScript é uma linguagem de programação amplamente empregada no 
                    desenvolvimento web. No contexto do front-end, JavaScript é essencial para criar 
                    interatividade em páginas web, permitindo aos desenvolvedores manipular o conteúdo, 
                    responder a eventos do usuário e criar interfaces dinâmicas."
                    hrefGrade={gradeJavaScript} />
            </FlexCourses>
        </CoursesContainer>
    );
}

export default Courses;