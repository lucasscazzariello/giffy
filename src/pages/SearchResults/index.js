import { useEffect, useState } from "react"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import getGifs from "../../services/getGifs"

const SearchResults = ({ params }) => {
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return <>
        {loading
            ? <h3>Cargando</h3>
            : <ListOfGifs gifs={gifs} />
        }
    </>

}

export default SearchResults