// Function to fetch colors from the API and display them
async function fetchColors() {
    try {
        const response = await fetch('https://reqres.in/api/unknown');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayColors(data.data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayColors(colors) {
    const container = document.getElementById('color-container');
    container.innerHTML = '';

    colors.forEach(color => {
        const colorBlock = document.createElement('div');
        colorBlock.className = 'color-block';
        colorBlock.style.backgroundColor = color.color;
        colorBlock.textContent = color.name;

        container.appendChild(colorBlock);
    });
}

fetchColors();
