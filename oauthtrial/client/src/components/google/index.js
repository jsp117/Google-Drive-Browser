import { useEffect, useState } from "react";
import API from "../../utils/api";

export default function Google() {
    const [login, setLogin] = useState("");
    const [loading, setLoading] = useState("true");

    useEffect(() => {
        googleAPI()
    }, [])

    useEffect(() => {

    }, [loading])

    function googleAPI() {
        API.google()
            .then((res) => {
                console.log("response: ", res)
                setLogin(res.data);
                setLoading(false);
            });

        // console.log("response: ", loginMessage);
    }
    return (
        <div className="text-center mt-40">
            {!loading && login !== "" ? <div>{login}</div> : <div>Redirecting...</div>}
        </div>
    )
}