import Image from "next/image"

const image = () => {
  return (
    <>
        <Image width="200px" height="200px" src='/Logo.jpg'/>
        <Image width="200px" height="200px" src='https://www.pexels.com/photo/landscape-covered-in-snow-10522082/'/>
    </>
  )
}

export default image