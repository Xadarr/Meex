

const healthCheck = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/health');
        if (response.ok) {
            const data = await response.json();
            return "ok"
        } else {
           return "ko"
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default healthCheck;