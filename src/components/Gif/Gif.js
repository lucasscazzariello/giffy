import { Link } from 'wouter'
import './Gif.css'

const Gif = ({ title, url, id }) => {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img src={url} alt={title} />
            </Link>
        </div>
    )

}

export default Gif