import Head from 'next/head'
import Navbar from "../components/Navbar"
import ReturnHomeButton from "../components/ReturnHomeButton"

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Navbar />
      <main>
        <section className='text-veryDarkBlueText dark:text-white text-center grid mt-36 gap-20'>
          <h2 className='text-5xl font-extrabold'>Ops!</h2>
          <p className='text-lg font-semibold'>This page doesn't exist or could not be found.</p>
          <div className='inline-block'>
            <ReturnHomeButton title={'Back to Home'}/>
          </div>
        </section>
      </main>
    
    </>
  )
}

export default NotFound
