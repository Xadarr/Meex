// 'use server'
//
const submitForm = async (data: any) => {
    try {
        const response = await fetch('http://localhost:5000/paint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('Form submitted successfully');
            // Handle success, such as showing a success message or redirecting the user
        } else {
            console.error('Error submitting form:', response.statusText);
            // Handle error, such as displaying an error message to the user
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, such as displaying an error message to the user
    }
}
export default submitForm;
