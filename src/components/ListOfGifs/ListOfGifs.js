import './ListOfGifs.css'
import Gif from '../Gif/Gif'

const ListOfGifs = ({ gifs }) => {

    return <div className="ListOfGifs">
        {
            gifs.map(({ title, url, id }) => <Gif title={title} url={url} id={id} key={id} />)
        }
    </div>

}

export default ListOfGifs