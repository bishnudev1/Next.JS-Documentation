import Link from 'next/link'

const Errorpage = () => {
  return (
    <>
        <h3>Something went wrong! Page not found in the server.</h3>
        <Link href='/home'><a>Home Page</a></Link>
    </>
  )
}

export default Errorpage