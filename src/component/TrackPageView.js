import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import axios from 'axios'

const TrackPageView = () => {
    const location = useLocation();

    const user_id = localStorage.getItem("user_id")


    useEffect(() => {
        const pageTitle = document.title || "HifiveCafe";

        ReactGA.send({
            hitType: "pageview",
            page: location.pathname,
            title: pageTitle
        });

        trackVistorSave(location.pathname);

        console.log(`Tracked Page: ${location.pathname}, Title: ${pageTitle}`);
    }, [location]);



    async function trackVistorSave(page) {
        try {
            const ipResponse = await axios.get(process.env.REACT_APP_IP_EXTERNAL_URL);
            const browser = navigator.userAgent;

            const formData = new FormData();
            formData.append('ip', ipResponse.data.ip);
            formData.append('browser', browser);
            formData.append('page', page);
            formData.append('userid', user_id);

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/track/visitor`, formData)

            if (res?.data?.Response?.Success == '1') {
                console.log("RESPONSE :", res.data);
            } else {
                console.log('Execution Error');
            }
        } catch (err) {
            console.log('Fetching Error:', err);
        }
    }

    return null;
};

export default TrackPageView;
