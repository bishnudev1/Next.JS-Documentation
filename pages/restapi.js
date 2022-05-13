import Link from "next/dist/client/link";

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