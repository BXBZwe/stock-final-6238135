import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  console.log('supplier 2', supplier)
  if (!supplier) return (
    <div>
      <p>Supplier not found</p>
      <Link href="/supplier">Back</Link>
      </div>
  );

  return (
    <>
      <Head>
        <title>{supplier.name}</title>
      </Head>
      <h1>{supplier.name}</h1>
      <p>{supplier.address}</p>
      <p>{supplier.phonenumber}</p>
      <Link href="/suppliers">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params);
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/suppliers/${params.id}`);
  const suppliers = await res.json();
  console.debug('supplier 1', suppliers);
  return { props: { suppliers } };
}