import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
function App() {
 
  return (
    <>
    <div className='ml-5 mt-1'>
<h1 className='bg-green-500 p-3 text-center text-white  mb-4'>Learning Props in React </h1>
<Cart username="Krishna" btntext="visit me"  description="Hello hola bye bye " imageurl="https://imgs.search.brave.com/EpRuqqrWeevdLPDxvFDZpjDSyQKYKxcNSY3kBYk-XNM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM4/MTM0MTU2L3Bob3Rv/L3BpY3R1cmUtb2Yt/aGluZHUtZ29kcy1y/YWRoYS1rcmlzaG5h/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0yeC1VaFFsVm10/OWtYUzJHdVVpeGVS/OW5mWmdiWnZMbTFR/bl95Zm04Z08wPQ"/>
<br></br>
<Cart username="Ganesh" btntext="more details" description="bye bye anurag" imageurl="https://imgs.search.brave.com/LHR7lJ3u6jTlUearIXZCHngpFNAK1HJ6qfHUxamfBvA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzkwLzg2LzQz/LzM2MF9GXzU5MDg2/NDMyNF81dkc2M21F/c1A5emN1SlBvSlpE/Nm15T2N6M2dobERy/Ny5qcGc" />
<br></br>
<Cart username="Shree Ramchandra" btntext="more details " description="bye bye anurag" imageurl="https://imgs.search.brave.com/Pij_DUHAT1aD6DrPNvt9Md8R2ikqemtNXSPn2Ngzyv4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBmLzI5/LzUyLzBmMjk1MjI0/NmQ3YWU1Mzg1NzNj/Y2FlMzQ2ODk4YjYx/LmpwZw" />
</div>
    </>
  )
}

export default App
