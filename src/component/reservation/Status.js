
import { useEffect, useState } from 'react';


const Status = ({ msg, type, toggle, onClose }) => {

    const [msg1, setMsg1] = useState(msg);
    const [type1, setType1] = useState(type);
    const [toggle1, setToggle1] = useState(toggle);

    useEffect(() => {
        setMsg1(msg);
        let type1 = (type == "error") ? "danger" : type;
        setType1(type1);
        setToggle1(toggle);
    }, [toggle]);

    useEffect(() => {
        const interval = setInterval(() => {
            onClose();
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        (toggle1 == "open") ?
            <>
                <div className={`alert alert-${type1}`} role="alert">
                    <div className={`status_text ${type1}`}>{msg1}
                        <span onClick={() => { setMsg1(""); setType1("danger"); setToggle1("close"); onClose(); }} className="closebtn">&times;</span>
                    </div>
                </div >
            </>
            : ""
    )
}
export default Status