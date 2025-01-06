import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';

const WhatsAppLink = ({ fontSize }) => {
    fontSize = (!fontSize || fontSize == "") ? 50 : fontSize;
    return (
        <IconButton>
            <a
                href={process.env.REACT_APP_WHATSAPP_LINK} // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <WhatsAppIcon sx={{ color: '#25D366', fontSize: fontSize }} />
            </a>
        </IconButton>

    );
};

export default WhatsAppLink;
