export function showHostelLocationOnMap( setClose, setActivate, originalHostelCardData, hostelId, setGoogleMapSrc ) {
    setClose(false);
    setActivate(true)
    const hostel = originalHostelCardData.find(h => h.id === hostelId);
    if (hostel && hostel.location) {
        const { latitude, longitude } = hostel.location;
        const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`;
        setGoogleMapSrc(mapUrl);
    } else {
        console.error("Hostel not found or missing location data.");
    }
}

//export default showHostelLocationOnMap;