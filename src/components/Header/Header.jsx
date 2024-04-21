import "./styles.css";
import PropTypes from "prop-types";

function Header( props ) {
    return (
        <div className="main-content">
            <div className="header--wrapper">
                <div className="header--title">
                    <span>{props.title}</span>
                    <h2>{props.subtitle}</h2>
                </div>
                <div className='user--info'>
                    <div className='searh--box'>
                        <span>Cristiano N Jesus</span>
                    </div>
                    <img src="src/assets/perfil.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
}    


Header.propTypes = {
    title: PropTypes.string.isRequired, // Garanta que 'title' seja uma string e seja requerido
    subtitle: PropTypes.string.isRequired, // Garanta que 'subtitle' seja uma string e seja requerido
};  

export default Header;