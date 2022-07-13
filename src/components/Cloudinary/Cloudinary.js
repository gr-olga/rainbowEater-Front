import {Button, Image, Title} from "./index"

export default function Cloudinary(props) {

    // const [image, setImage] = useState()
    const image = props.image
    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        //first parameter is always upload_preset, second is the name of the preset
        data.append('upload_preset', "vmvuhnnp")

        //post request to Cloudinary, remember to change to your own link
        const res = await fetch("https://api.cloudinary.com/v1_1/do3i6cwgf/image/upload", {
            method: "POST",
            body: data
        })

        const file = await res.json()
        console.log("file", file) //check if you are getting the url back
        props.setImage(file.url) //put the url in local state, next step you can send it to the backend
    }

    return (
        <div style={{textAlign: "center"}}>
            <br/>
            <input type="file" onChange={uploadImage}/>
            <div>
                <Image
                    src={image ? image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}/>
                {image ? <Title style={{fontSize: 20}}>Succesfully uploaded!</Title> : ""}
            </div>
        </div>
    );
}