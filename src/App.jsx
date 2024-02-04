import { createContext, useState } from 'react'
import './App.css'
import IPAddressInfo from './Compounds/IPAddressInfo'
import Background from './assets/images/pattern-bg-desktop.png'
import Map from './Compounds/Map'
import 'leaflet/dist/leaflet.css';

const Dataprovider = createContext()
function App() {
  const [location, setlocation] = useState("")
  const [error, seterrState] = useState({ iserr: false, errmsg: '' })
  const [loading, isloading] = useState(false)
  return (
    <>
      <Dataprovider.Provider value={{ location, setlocation, error, seterrState, loading, isloading }}>
        <div className="root">
          <IPAddressInfo />
          <div className='bg-elements'>
            <img src={Background} alt="background-image" />
          </div>
          <Map />

        </div>
      </Dataprovider.Provider>
    </>
  )
}



export { App, Dataprovider }