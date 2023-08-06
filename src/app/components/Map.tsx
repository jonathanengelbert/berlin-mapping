import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { leafletBaseLayers } from "@/config";

import 'leaflet/dist/leaflet.css'


const { defaultBaseLayer: { url, attribution } } = leafletBaseLayers
const LeafletMap = () => {
   return (
       <MapContainer
           center={[52.5200, 13.40509]}
           zoom={13} scrollWheelZoom={true}
           style={{ height: '100vh' , width: '100vw' }}>
           <TileLayer
               attribution={attribution}
               url={url}
           />
           <Marker position={[51.505, -0.09]}>
               <Popup>
                   A pretty CSS3 popup. <br/> Easily customizable.
               </Popup>
           </Marker>
       </MapContainer>
   )
}

export default LeafletMap