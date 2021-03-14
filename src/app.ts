import axios from 'axios'
(function() {
    type GoogleGeocodingResponse = {
        results: {
            geometry: {
                location: {
                    lat: number;
                    lng: number;
                }
            }
        }[];
        status: 'OK' | 'ZERO RESULTS'
    }
    let address: string;
    const GOOGLE_API_TOKEN: string = ''
    const handleChange = (e: Event) => {
        let target = e.target as HTMLInputElement;
        address = target.value.trim();
    }
    const handleSubmit = (e: Event) => {
        e.preventDefault()
        form.reset()
        axios.get<GoogleGeocodingResponse>
        (`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_API_TOKEN}`)
            .then(res => {
                const mapDiv = document.getElementById('map')! as HTMLDivElement;
                const coordinates = res.data.results[0].geometry.location
            })
            .catch(err => {
                throw new Error(err)
            })
    }
    const form = document.querySelector('form')! as HTMLFormElement;
    const addressInput = form.querySelector('#address')! as HTMLInputElement;
    addressInput.onchange = handleChange;
    form.onsubmit = handleSubmit
})()
