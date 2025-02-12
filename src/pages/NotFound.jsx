const NotFound = () => {
  return ( 
       <>
         <div className="h-[90vh] flex items-center justify-center text-center">
           <div>
             <h1 className="text-5xl">404</h1>
             <p>This page doesn’t exist on the server.</p>
             <p>Go back <a className="font-bold" href="https://secretsenderweb.vercel.app">Home</a></p>
           </div>
         </div>
       </>
    )
}
export default NotFound;