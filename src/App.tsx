import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ProtectedRoute} from "./components";
import { Checkout, Dashboard, Final } from "./pages";

export function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Suspense fallback={<div>Loading..</div>}><Dashboard/></Suspense>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/checkout" element={<Suspense fallback={<div>Loading..</div>}><Checkout/></Suspense>}/>
        </Route>
        <Route path="/final" element={<Final/>}/>
      </Routes>
    </BrowserRouter>
  )
}