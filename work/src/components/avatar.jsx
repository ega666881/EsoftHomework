import { Container } from "@mui/material"


function Avatar({image}) {
  return (
    <Container sx={{borderRadius: "20px", margin: 0, padding: 0}}>
        <img src={image} style={{borderRadius: "20px", margin: 0, padding: 0 }}></img>
    </Container>
  )
}

export default Avatar
