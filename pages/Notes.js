const LinkValue = `<Link href='./Home'><a>Home Page</a></Link>`;
const LinkValue1 = `import Router from "next/router";`;
const LinkValue2 = `<a onClick={()=>Router.push("/home")}>Go Back To Home Page</a>`;
const LinkValue3 = `import { useEffect } from 'react';`;
const import_comp = `import Footer from '../../components/Footer';`;
const export_comp = `<Footer />`;
const import_style = `import styles from '../styles/Module.module.css';`;
const export_style = `className={styles.headText}`;
const inlineCSS = `<h1 style={{'color':'red','fontSize':'20px'}}>Inline CSS in Next.JS</h1>`
const importImg = `import Image from "next/image"`;
const exportImg = `<Image width="200px" height="200px" src='/Logo.jpg'/>`;
const headTag = `import Head from "next/head"`;
const exportHead = `<Head></Head>`;
const jsxStyle1 = `h1{
                      color:pink;
                     }
                   p{
                      padding:10px;
                      width:50%;
                    }`

const jsxStyle2 = `<style jsx>${jsxStyle1}</style>`;


const UseEffect_Router = `useEffect(() => {
  setTimeout(() => {
    router.push("/home");
},3000)
})`
let useRouter = '{ useRouter }';

const Notes = () => {

  return (
    <>
      <div className='introduction'>
        <div className='what-next-js'>
          <h3>What is Next.JS ?</h3>
          <p>
            Next J.S is a React framework that enables you to build superfast and extremely user-friendly static websites, as well as full fledge production ready web applications using React. In fact, thanks to Automatic Static Optimization, "static" and "dynamic" become one now. This feature allows Next.JS to build hybrid applications that certain both server-rendered and statically generated pages.
          </p>
        </div>
        <div className='why-next-js'>
          <h3>Why Next.JS ?</h3>
          <p>
            The big reason to choose Next.JS is it's SEO efficiency. It is using Server-Side Rendering (SSR) and at the same time it can be also a great Static Site Generator (SSG). Also there is
            <p>1. File Based Routing(pages/index.js)</p>
            <p>2. Support CSS Modules</p>
            <p>3. Pre-rendering(better SEO)</p>
            <p>4. Image Optimization('next/image')</p>
            <p>5. API Route(`pages/api/user.js`)</p>
            <p>6. Typescript Support</p>
            <p>7. Fast Refresh(fast, Live Editing Experience)</p>
            <p>8. Dev & Prod build System</p>
          </p>
        </div>
        <div className='what-can-we-build'>
          <h3>What can we build with Next.JS ?</h3>
          <p>1. MVP(Minimum Viable Product)</p>
          <p>2. Jamstack Websites</p>
          <p>3. Web Portals</p>
          <p>4. Single Web Pages, Static Websites</p>
          <p>5. eCommerce and retail websites</p>
          <p>6. Saas Products</p>
          <p>7. Complex and demanding web applications</p>
        </div>
        <div className='create-first-app'>
          <h3>How to create your first Next.JS app ?</h3>
          <p>Create a Next.JS app by...</p>
          <p><b>npx create-next-app Your_App_Name</b></p>
          <p>Run the Next.JS app by...</p>
          <p><b>npm run dev</b></p>
          <p>Customizing the Next.JS app by...</p>
          <p><b>Editing index.js file in pages folder</b></p>
        </div>
        <div className='pre-requisite-next-js'>
          <h3>What things needed to learn Next.JS app ?</h3>
          <p>1. HTML5</p>
          <p>2. CSS3</p>
          <p>3. Javascript</p>
          <p>4. ES6 Syntaxes</p>
          <p>5. React Basics</p>
        </div>
      </div>
      <div className='hello-world-app'>
        <h3>How to create hello world app in Next.JS ?</h3>
        <p>1. Create Next.JS app by <i>npx create-next-app helloWorld</i></p>
        <p>2. Go to the pages/index.js</p>
        <p>3. Write Hello,World! in return section</p>
        <p>4. Open terminal and run it by <b>npm run dev</b></p>
      </div>
      <div className='folder-struct-next-js'>
        <h3>Understanding the folder structure in Next.JS</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='file-based-routing'>
        <h3>File Based Routing in Next.JS</h3>
        <p>1. Make all the components like Home.js, About.js, Contact.js in the pages folder and just use them by giving "/Home" or "/About" or "/Contact" [ Letter-Casing is not important here like React ].</p>
        <p>2. Make an another folder in the pages like Blog and make a file index.js in it but you can render it by giving "/Blog".</p>
        <p>3. Access it by <b>http://localhost:3000/blog</b></p>
        <h3>Nested File Based Routing in Next.JS</h3>
        <p>1. Make your components under blog/pages like blog1 & blog2</p>
        <p>2. Access it by <b>http://localhost:3000/blog/blog1</b></p>
        <h3>Dynamic Routing in Next.JS</h3>
        <p>1. Create a dynamic JS file by <b>[FolderName].js</b></p>
        <p>2. <b>import {useRouter} from "next/router"</b></p>
        <p>3. Initiallizing router by <b>const router = useRouter()</b></p>
        <p>4. Get URL value by <b>const getval = router.quiry.FolderName</b></p>
      </div>
      <div className='navbar-without-refresh'>
        <h3>Creating a Navbar in Next.JS</h3>
        <p>1. <b>import Link from "next/link";</b></p>
        <p>2. Give <b>Link</b> tag <b>href</b> attribute instead of <b>Anchor</b> tag</p>
        <p>3. <b>{LinkValue}</b></p>
      </div>
      <div className="creating-error-page">
        <h3>How to create your own Error Page in Next.JS ?</h3>
        <p>1. Create a JS file named <b>404.js (Mandetory)</b></p>
        <p>2. Access it by <b>http://localhost:3000/dadadadadarfafa</b></p>
      </div>
      <div className="event-handler-next-js">
        <div className="redirect-home-page">
          <h3>Redirect To Home Page on Click</h3>
          <p>1. <b>{LinkValue1}</b></p>
          <p>2. <b>{LinkValue2}</b></p>
        </div>
        <div className="redirect-home-page-after-3-seconds">
          <h3>Redirect To Home Page after 3 seceonds</h3>
          <p>1. <b>{LinkValue3}</b></p>
          <p>2. <b>{LinkValue1}</b></p>
          <p>3. {UseEffect_Router}</p>
        </div>
      </div>
      <div className="components-next-js">
        <h3>How to use Components in Next.JS ?</h3>
        <p>1. Make a folder like Components and Create a file named like Footer.js</p>
        <p>2. <b>{import_comp}</b></p>
        <p>3. <b>Export it by {export_comp}</b></p>
      </div>
      <div className="css-next-js">
        <div className="global-css-next-js">
          <h3>How to use Global/External CSS in Next.JS ?</h3>
          <p>1. Create a CSS file like <b>style.css</b> and add style in it</p>
          <p>2. import it by <b>import './style.css</b></p>
        </div>
        <div className="css-module-next-js">
          <h3>How to use Modules/Internal CSS in Next.JS ?</h3>
          <p>1. Create a Internal CSS file like <b>home.module.css</b> & add styling in it.</p>
          <p>2. <b>{import_style}</b></p>
          <p>3. Use this style by <b>{export_style}</b></p>
        </div>
        <div className="inline-style-next-js">
          <h3>How to use Inline CSS in Next.JS ?</h3>
          <p>1. {inlineCSS}</p>
        </div>
      </div>
      <div className="styled-jsx-next-js">
        <h3>How to use Styled-JSX in Next.JS ?</h3>
        <p>1. <b>{jsxStyle2}</b></p>
      </div>
      <div className="image-comp-next-js">
        <h3>How to add Image Internally in Next.JS ?</h3>
        <p>1. <b>{importImg}</b></p>
        <p>2. Paste a img like Logo.jpg in <b>public</b> folder</p>
        <p>3. <b>{exportImg}</b></p>
        <h3>How to add Image Externally in Next.JS ?</h3>
        <p>1. Add Image domain in <b>next.config.js</b>...</p>
        <p>2. <b>domains: ["images.pexels.com"]</b></p>
        <p>3. Export it in <b>src=''</b> of Image</p>
      </div>
      <div className="head-comp-SEO-next-js">
        <h3>What's head tag in Next.JS ?</h3>
        <p>1. Head tag is just same we use in normal <b>HTML</b> which contains necessary meta data in it and title of webpage also.</p>
        <p>2. <b>{headTag}</b></p>
        <p>3. Export it by <b>{exportHead}</b></p>
        <p>4. Head tag normally cotains... <a href="https://www.w3schools.com/tags/tag_meta.asp">Click Here</a></p>

      </div>
      <div className="rest-api-next-js">
        <h3>How to fetch & get data in Next.JS ?</h3>
        <p>1. Use any API and use <b>Fetch</b> method with <b>Promise</b> and return it with <b>Object</b> literals</p>
        <p>2. Use <b>Map</b> method to destructure it and use it.</p>
        <p>3 .Use <b>Slice(0,5)</b> with <b>Map</b> method to get only 5 data</p>
      </div>
      <div className="how-to-upload-nextapp-vercel">
        <h3>How to upload Next.JS App in Vercel for free ?</h3>
        <p>1. Create your account in Vercel</p>
        <p>2. <b>npm i -g vercel</b></p>
        <p>3. Link and verify your gmail id to Vercel</p>
        <p>4. <b>vercel</b></p>
        <p>5. Add to existing or new vercel project</p>
      </div>
    </>
  )
}

export default Notes