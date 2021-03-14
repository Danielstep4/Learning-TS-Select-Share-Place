import axios from 'axios';
(function () {
    let address;
    const GOOGLE_API_TOKEN = '';
    const handleChange = (e) => {
        let target = e.target;
        address = target.value.trim();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        form.reset();
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_API_TOKEN}`)
            .then(res => {
            const mapDiv = document.getElementById('map');
            const coordinates = res.data.results[0].geometry.location;
        })
            .catch(err => {
            throw new Error(err);
        });
    };
    const form = document.querySelector('form');
    const addressInput = form.querySelector('#address');
    addressInput.onchange = handleChange;
    form.onsubmit = handleSubmit;
})();
