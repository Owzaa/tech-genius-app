import { FooterContainer } from "./Footer.styles";


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://tech-genius.com/">
                Tech-Genius
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}


export default function Footer() {
  return <FooterContainer>{Copyright}</FooterContainer>;
}
