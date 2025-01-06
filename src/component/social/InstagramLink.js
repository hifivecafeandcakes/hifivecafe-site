import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';

const InstagramLink = () => {
    return (
        <IconButton>
        <a
            href={process.env.REACT_APP_INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <InstagramIcon sx={{ color: '#E4405F', fontSize: 50 }} />
        </a>
        </IconButton>
    );
};

export default InstagramLink;
