import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


// Flexbox Layout

// function MainLayout({ children }: { children?: ReactNode }) {

//     return (
//         <div className="w-full flex h-svh max-h-svh">
//             <div className="flex h-full flex-col justify-between">
//                 <header className="text-center text-xl sticky top-0 w-full">
//                     {<Navbar />}
//                 </header>

//                 <main className="text-center text-xl">
//                     {children}
//                 </main>

//                 <footer className="text-center text-xl">
//                     {<Footer />}
//                 </footer>
//             </div>
//         </div>
//     )
// }

// export default MainLayout

// Grid Layout
function MainLayout({ children }: { children?: ReactNode }) {

    return (
        <div className="grid grid-cols-12">

            <header className="row-start-1 col-span-12">
                {<Navbar />}
            </header>

            <main className="row-start-2 col-span-12 min-h-screen">
                {children}
            </main>

            <footer className="row-start-3 col-span-12">
                {<Footer />}
            </footer>

        </div>
    )
}

export default MainLayout