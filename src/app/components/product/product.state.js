/*
 * Simple factory for productState
 * Author     : hatemalimam
 */
export default function ProductState() {
    var state = {
        title: 'Product',
        image: '',
        goal: 0,
        progress: 0,
        currentDoners: 0,
        currentDonation: 0
    };
    
    return state;
}