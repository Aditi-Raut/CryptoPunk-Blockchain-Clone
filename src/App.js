import './App.css';
import Header from "./components/Header"
import Punklist from "./components/Punklist"
import Main from "./components/Main"
import CollectionCard from "./components/CollectionCard"
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async() => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xfbd1e310cafe419A80EaDDcfB4b8E80DcE50a993"
        )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
      punkListData.sort()
    }
    getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header/>
      {punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist 
            punkListData={punkListData} 
            setSelectedPunk={setSelectedPunk} 
            />
          </>
      )}
      
    </div>
   );
}

export default App;
