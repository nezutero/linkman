import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box align="center" opacity={0.3} fontSize="sm" pt={4}>
            <a href="https://github.com/nezutero/linkman" target="_blank" rel="noopener noreferrer">
                <p>
                    source code
                </p>
            </a>
            <br />
            &copy; {new Date().getFullYear()} nezutero | all rights reserved
        </Box>
    );
};

export default Footer;
