import GoogleMapReact from "google-map-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useRef } from "react";
import { useState } from "react";
import * as THREE from "three"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';


const MapMarker = ({ lat, lng }) => {
    // const scene=useRef(null)

    // useEffect(()=>{
    //     if(!scene.current){
    //         scene.current=new THREE.Scene()
    //         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //         camera.position.set(0, 0, 5);
    //         const renderer = new THREE.WebGLRenderer();
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //         document.body.appendChild(renderer.domElement);
    //         const light = new THREE.DirectionalLight(0xffffff, 1);
    //         light.position.set(0, 0, 5);
    //         scene.current.add(light);
    //         const loader = new GLTFLoader();
    //         loader.load('../../assets/sf_scooter.glb', (gltf) => {
    //             scene.current.add(gltf.scene);
    //         });
    //         const animate = () => {
    //             requestAnimationFrame(animate);
    //             renderer.render(scene.current, camera);
    //         };
    //         animate();
    //     }
    // },[])

    return (
        // <div ref={scene} style={{ width: '100%', height: '100%' }} />
         <div
        data-lat={lat}
        data-lng={lng}
        style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',

        }}

    >
        <ElectricScooterIcon fontSize="large" color="inherit" />
    </div>
    );
    
}
   
    


const GoogleMap = () => {

    const [location, setLocation] = useState({ lat: null, lng: null })
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (postion) => { setLocation({ lat: postion.coords.latitude, lng: postion.coords.longitude }), console.log(postion, "this is location") },
                (error) => { console.log("Error Getting Location", error) }
            )
        }
    }, [])

    const defaultLocation = {
        center: {
            
            lat: 23.012181580414023,

            lng: 72.52847452415891
        },
        zoom: 8
    }

    return (
        <>
            <div className="w-[99vw] h-[100vh]" >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyACT48wOeY2GteVxA1YaiyrkraguN0rK2Y" }}
                    defaultCenter={defaultLocation.center}
                    zoom={defaultLocation.zoom}
                >

                    <MapMarker lat={location.lat} lng={location.lng} />

                </GoogleMapReact>
            </div>
        </>
    )
}

export default GoogleMap