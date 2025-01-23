import React from 'react'; 
import Header from './header';
import Content from './content'  


const TaskLogging : React.FC = () => {  
  return (

    <div className="notificationsFrame">
     <div className="panel">

        <Header title="Registro de tareas"/>
        <Header title="Perfil" />
        <Header title="Preferencias" />
        <Header title="Chat" />

        <Content valorAlt='Francisca' nombreImagen='francisca' descripcion='Fui a comer con unos amigos'/>
        <Content valorAlt='Paco' nombreImagen='paco' descripcion='Leí un artículo sobre tecnología'/>
        <Content valorAlt='Quica' nombreImagen='quica' descripcion='Escribí notas sobre un proyecto importante'/>
        <Content valorAlt='Curro' nombreImagen='curro' descripcion='Reparé la presentación para la reunión de mañana'/>

     </div>
    </div>
);

}



export default TaskLogging;
