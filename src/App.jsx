import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Start from './components/Start/Start'
import Service from './components/Service/Service'
import Service_Detail from './components/Service/Service_Detail'
import Transport from './components/Transport/Transport'
import StationToStation from './components/Transport/Detail/StationToStation'
import WarehouseToWarehouse from './components/Transport/Detail/WarehouseToWarehouse'
import HCMToGB from './components/Transport/Detail/HCMToGB'
import HNToHCM from './components/Transport/Detail/HNToHCM'
import HCMTransportation from './components/Transport/Detail/HCMTransportation'
import HNTransportation from './components/Transport/Detail/HNTransportation'
import CentralTransportation from './components/Transport/Detail/CentralTransportation'
import Blog from './components/Blog'
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/start' element={<Start></Start>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/serviceDetail' element={<Service_Detail></Service_Detail>}></Route>
        <Route path='/transport' element={<Transport></Transport>}></Route>
        <Route path='/stationToStation' element={<StationToStation></StationToStation>}></Route>
        <Route path='/warehouseToWarehouse' element={<WarehouseToWarehouse></WarehouseToWarehouse>}></Route>
        <Route path='/HCMToGB' element={<HCMToGB></HCMToGB>}></Route>
        <Route path='/HNToHCM' element={<HNToHCM></HNToHCM>}></Route>
        <Route path='/HCMTransportation' element={<HCMTransportation></HCMTransportation>}></Route>
        <Route path='/HNTransportation' element={<HNTransportation></HNTransportation>}></Route>
        <Route path='/CentralTransportation' element={<CentralTransportation></CentralTransportation>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}
