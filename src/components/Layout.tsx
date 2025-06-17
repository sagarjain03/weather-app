import  {type PropsWithChildren} from 'react'
import Header from './Header'
const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'> 
<Header></Header>
<main className='min-h-screen container mx-auto px-4 py-8'>

      {children}

</main>

<footer className='border-t background-blur py-10 supports-[backdrop-blur] bg-background/50 backdrop-blur-sm dark:bg-background/80'>
<div className='container mx-auto px-4 py-8 text-center text-gray-200 text-lg' >
    <p>Made with ❤️ by Sagar Jain</p>
</div>

</footer>
    </div>
  )
}

export default Layout
