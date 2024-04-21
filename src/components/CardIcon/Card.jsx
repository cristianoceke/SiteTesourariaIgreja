import "./styles.css";
import PropTypes from 'prop-types'; 

function Card({ icon, title, text, color}) {
    return (
        <section className={`card ${color}`}>
            <div className="card-footer">
                <div className="icones">
                    {icon}
                </div>
            </div>
            <div>
                <p>{title}</p>
                <h3>{text}</h3>
            </div>
        </section>
    );
}

Card.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Card;