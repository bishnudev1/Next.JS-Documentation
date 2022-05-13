import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useEffect_Router = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/home");
        },3000)
    },[])
    return (
        <>
            <div className="navbar-next">
                <Link href='/home'>
                    <a style={{ 'padding': '10px' }}>Home</a>
                </Link>
                <Link href='/about'>
                    <a style={{ 'padding': '10px' }}>About</a>
                </Link>
                <Link href='/contact'>
                    <a style={{ 'padding': '10px' }}>Contact</a>
                </Link>
                <Link href='/blog/blog1'>
                    <a style={{ 'padding': '10px' }}>Blog</a>
                </Link>
            </div>
        </>
    )
}

export default useEffect_Router