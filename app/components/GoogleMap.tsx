'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@mantine/core'

interface GoogleMapProps {
  address: string;
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    window.initMap = () => {
      if (mapRef.current) {
        const geocoder = new google.maps.Geocoder()
        geocoder.geocode({ address: address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const map = new google.maps.Map(mapRef.current, {
              center: results[0].geometry.location,
              zoom: 16,
            })
            new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            })
          } else {
            console.error('Geocode was not successful for the following reason: ' + status)
          }
        })
      }
    }

    if (!window.google) {
      loadGoogleMapsScript()
    } else {
      window.initMap()
    }

    return () => {
      window.initMap = () => {}
    }
  }, [address])

  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default GoogleMap

