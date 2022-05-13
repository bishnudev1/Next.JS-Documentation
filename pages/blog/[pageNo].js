import { useRouter } from "next/router"

const pageNo = () => {
    const router = useRouter();
    const pageNo = router.query.pageNo;
    return (
        <>Welcome to blogs no {pageNo}</>
    )
}

export default pageNo