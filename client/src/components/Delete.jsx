import axios from "axios"
import { navigate } from "@reach/router"
const Delete = props => {
        axios.delete(`http://localhost:8000/api/pirates/delete/${props.id}`)
        .then(res => console.log("successfully deleted"),
        navigate("/pirates"))
        .catch(err => console.log(err))
    return null
}
export default Delete