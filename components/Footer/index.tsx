import { FooterContainer } from "./Footer.styles";
import Link from "next/link";
import {Typography} from "@mui/material/Typography"

function Copyright(props: any) {
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
  return <FooterContainer>Copyright ©️Tech-Genius | 2023</FooterContainer>;
}
