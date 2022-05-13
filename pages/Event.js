// import { useRouter } from "next/router"
import Router from "next/router";

const Event = () => {
    // const router = useRouter();

    // const eventHandler = () => {
    //     router.push = "/home";
    // }

    return (
        <>
            <a onClick={()=>Router.push("/home")}>Go Back To Home Page</a>
        </>
    )
}

export default Event;