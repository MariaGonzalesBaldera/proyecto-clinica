import { Suspense, lazy } from "react";
import Cargando from '../../components/Cargando'
export default function Home() {

  const Navbar = lazy(() => import('../../components/Navbar'))
  const Search = lazy(() => import('../../components/Search'))

  return (
    <>
      <Suspense fallback={<Cargando/>}>
        <Navbar />
        <Search />
      </Suspense>


    </>
  )
}