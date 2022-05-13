# Next.JS-Documentation 📑🎓

## Introduction
### What is Next.JS ?
Next J.S is a React framework that enables you to build superfast and extremely user-friendly static websites, as well as full fledge production ready web applications using React. In fact, thanks to Automatic Static Optimization, "static" and "dynamic" become one now. This feature allows Next.JS to build hybrid applications that certain both server-rendered and statically generated pages.

### Why Next.JS ?
The big reason to choose Next.JS is it's SEO efficiency. It is using Server-Side Rendering (SSR) and at the same time it can be also a great Static Site Generator (SSG). Also there is
- File Based Routing(pages/index.js)
- Support CSS Modules
- Pre-rendering(better SEO)
- Image Optimization('next/image')
- API Route(`pages/api/user.js`)
- Typescript Support
- Fast Refresh(fast, Live Editing Experience)
- Dev & Prod build System

### What can we build with Next.JS ?
- MVP(Minimum Viable Product)
- Jamstack Websites
- Web Portals
- Single Web Pages, Static Websites
- eCommerce and retail websites
- Saas Products
- Complex and demanding web applications

### How to create your first Next.JS app ?
```bash
npx create-next-app Your_App_Name
```
```bash
cd Your_App_Name
```
```bash
npm run dev
```
- Editing index.js file in pages folder

### What things needed to learn Next.JS app ?
- HTML5
- CSS3
- Javascript
- ES6
- React Basics

### Routing in Next.JS
- Make all the components like Home.js, About.js, Contact.js in the pages folder and just use them by giving "/Home" or "/About" or "/Contact" [ Letter-Casing is not important here like React ]
- Make an another folder in the pages like Blog and make a file index.js in it but you can render it by giving "/Blog".
- Access it by <b>http://localhost:3000/blog
### Nested File Based Routing in Next.JS
- Make your components under blog/pages like blog1 & blog2
- Access it by <b>http://localhost:3000/blog/blog1
### Dynamic Routing in Next.JS
- Create a dynamic JS file by <b>[FolderName].js
- Import Router 
```bash
import {useRouter} from "next/router"
```
- Initialize Router
```bash
const router = useRouter()
```
- Get URL Value
```bash
const getval = router.quiry.FolderName
```
### Creating a Navbar in Next.JS
- Import Link
```bash
import Link from "next/link";
```
- Give Link tag href attribute instead of Anchor tag
```bash
<Link href='./Home'><a>Home Page</a></Link>
```
### How to create your own Error Page in Next.JS ?
- Create a JS file named 404.js (Mandetory)
- Access it by <b>http://localhost:3000/dadadadadarfafa
### Redirect To Home Page on Click
- Import Router
```bash
import Router from "next/router";
```
- Create Home Route
```bash
<a onClick={()=>Router.push("/home")}>Go Back To Home Page</a>
```
### Redirect To Home Page after 3 seceonds
- Import useEffect
```bash
import { useEffect } from 'react';
```
- Import Router
```bash
import Router from "next/router";
```
- Set Router After 3 Seconds to Home Page
```bash
useEffect(() => {
  setTimeout(() => {
    router.push("/home");
},3000)
})
```
### How to use Components in Next.JS ?
- Make a folder like Components and Create a file named like Footer.js
- Import Components like Footer
```bash
import Footer from '../../components/Footer';
```
- Export it JSX
```bash
<Footer />
```
### How to use Global/External CSS in Next.JS ?
- Create a CSS file like style.css and add style in it
- import it by import './style.css
### How to use Modules/Internal CSS in Next.JS ?
- Create a Internal CSS file like home.module.css & add styling in it.
- Import Style
```bash
import styles from '../styles/Module.module.css';
```
- Export Style
```bash
className={styles.headText}
```
### How to use Inline CSS in Next.JS ?
- Use it directly in JSX
```bash
<h1 style={{'color':'red','fontSize':'20px'}}>Inline CSS in Next.JS</h1>
```
### How to use Styled-JSX in Next.JS ?
```bash
<style jsx>
  `h1{
      color:pink;
     }
   p{
      padding:10px;
      width:50%;
      }`  
</style>
```
### How to add Image Internally in Next.JS ?
- Import Image
```bash
import Image from "next/image"
```
- Paste a img like Logo.jpg in <b>public</b> folder
- Export Image
```bash
<Image width="200px" height="200px" src='/Logo.jpg'/>
```
### How to add Image Externally in Next.JS ?
- Add Image domain in <b>next.config.js
```bash
  images: {
    domains: ["www.pexels.com"]
  },
```
- Export it in src='' of Image
### What's head tag in Next.JS ?
- Head tag is just same we use in normal <b>HTML</b> which contains necessary meta data in it and title of webpage also.
- Import Head
```bash
import Head from "next/head"
```
- Export Head
```bash
<Head></Head>
```
- Head tag normally cotains... <a href="https://www.w3schools.com/tags/tag_meta.asp">Click Here</a>

### How to fetch & get data in Next.JS ?
- Use any API and use Fetch method with Promise and return it with Object literals.
- Use Map method to destructure it and use it.
- Use Slice(0,5) with Map method to get only 5 data
```bash
export const getStaticProps = async (context) => {
    const id = context.params.myData;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    return {
      props: {
        data,
      }
    }
}

const restapi = ({data}) => {

  return (
    <>
      <div key={data.id}>
        <h3>{data.id}</h3>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </>
  )
}

export default restapi
```
  
### How to upload Next.JS App in Vercel for free ?
- Create your account in Vercel
```bash
npm i -g vercel
```
- Link and verify your gmail id to Vercel
```bash
vercel
```
- Add to existing or new vercel project

### Please Give This Repo One Star If You Appreciete My Work 😊
