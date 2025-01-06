import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

const FacebookLink = () => {
    return (
        <IconButton>
        <a
            href={process.env.REACT_APP_FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <FacebookIcon sx={{ color: '#1877F2', fontSize: 50 }} />
        </a>
        </IconButton>
    );
};

export default FacebookLink;
