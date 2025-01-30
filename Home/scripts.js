async function fetchUSGDP() {
    const apiUrl = "https://api.worldbank.org/v2/country/US/indicator/NY.GDP.MKTP.CD?date=2022&format=json&per_page=1";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("API Response:", data); // Debugging

        if (data && data[1] && data[1][0] && data[1][0].value) {
            const gdpValue = data[1][0].value;
            document.getElementById("gdp-data").innerText = `GDP: $${gdpValue.toLocaleString()}`;
        } else {
            document.getElementById("gdp-data").innerText = "Data not available";
        }
    } catch (error) {
        document.getElementById("gdp-data").innerText = "Error fetching data";
        console.error("Error fetching GDP data:", error);
    }
}

fetchUSGDP();
