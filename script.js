const imageUrls = [
    "https://s3-alpha-sig.figma.com/img/d636/7d6d/f34ce14e7187edeeb026d73413e4a29c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nejz5M5nvkC~ufQ6L~VnA1ATv-nDdbhOpUONmrNOKs053lqTtnY58s-zNJuJEMI4Vf3qUdsjgrpGY7h6z516wfe~uP-y5IH6uA8w5YatUGJ8WcNC~34AJGTYXtAJhg65xAksMNcjOqHoa333mqgjUZkioDqHMyENuIQ-BCaQ0lmrQfN-tEf~JgOT0LBvMfEIsD6SmDuqBC9a6TfarxaPINCJBva65uwUy1jDI4vazV-oteyKhx4ZqUMsgZxWXUdwEd4M5AE8fs0649bWpgKgasM~GiPDr6Ws3sxJzQo3JoXX0546yXxve49shSedcSxulVrJKl~tfkoLZddSOu2LYw__",
    "https://s3-alpha-sig.figma.com/img/8a12/5fd1/8ad1df2ca3d3367baa54e79cf0caeff1?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jee39xSK-TesGDdB4ikB7AeAzHgVZEFSLCPmpsdWiDKF7tlLYIki12B8egIzHvHJFiDrlZ77yO6xeARgsawZtAhN3Dai82rxuDiqaFhuJqgB9qGnRKL~y7bKBGbmFbEnUQKoNp29mcaNh2HegzYJrqCCWaGrjD9HFou9fbFikeJeC1MifBEmFtlCpI~z0bqSKy45yEt7uAjCxGCorYJ~tNIOJ2ydgJ2qkXXLfWWfyye1Ukc1D1tEWSil8eicHE122yrDud89gKQ9VjwqNTx-3LlrY8LlrpT9GRUoB3yHbjN6PXD2AeqQ0NeTG5SvvMPV5fNbJJJmX31UN5Hmd178Bw__",
    "https://s3-alpha-sig.figma.com/img/7f07/20f0/38539658df252c621f52c64231e8986a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkYANVwb0N6zY3AwWqcq5lB84n2FDEm9hgUlSkqAykc6zFnKgTgDfvxHru3z2qC8gzmNxEsQPFUg43zqg4ZG2TURdpX6z1k7LcrcQtESCGmxI8aMf6b~RRjJ56b~JcOxnEJz2hCfqA~5SpgXSsvGIawgHehsAI8aLD1iNucIcAu7bvQ944UUbKlBV5tU50C4AH4aXUtBpq49h6V1q35oUUVwai39ZNWUBdDzuoYQF1jlLiXg3hPrWCgI-56lt00gQi1LIPbCAsZMuC2uQ5GKAPKJlJeKoAaZO-aEQ672wchWkNycBkidn9SRg9vWJ9olIv6BV6iX5U5kuBsE9eKmjw__",
    "https://s3-alpha-sig.figma.com/img/2b85/4ec0/815f49c8ce3ddd231e2da63ce0596dc4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYg4oxHEv20diWN5kTt8pX0I6HqtzpJ9mhTSnw4Fk5vABxzbEWcuEMANZf6WYqs5CdBVuV~8TDeo7PTCANU1wq~79tHkkXTEREqNeWkI3n~C-33oQ9K5CBlk06xjxxGr1z0Vo6eeOvaEoSDU0v1SNM0SbadFyOBPRyGIkZ5IIdoJ-nMBNDH-3r6xo5u7JIhppuKPnYUwjtWdrfs2w7oghrK~PnL1tZcGZs7cD0RJNn8~YzdaCKdoLySRw0pu03wIiQTXLOnDUEWLiCCD2WAhGtIlVUKhMT~q8vEr2z1COlWERsX3DFWYbbGI9JWCtAmgPJW-2lDdAgboi5DrZMN5vA__"
];


document.addEventListener('DOMContentLoaded', function() {
    const decrementButton = document.querySelector('.decrement-button');
    const incrementButton = document.querySelector('.increment-button');
    const quantityInput = document.querySelector('.quantity-input');

    decrementButton.addEventListener('click', function() {
        const currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', function() {
        const currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
    });
});


const mainImageDiv = document.querySelector('.main-image');
const thumbnailsDiv = document.querySelector('.thumbnail-images');



const mainImg = document.createElement('img');
mainImg.src = imageUrls[0];
mainImg.alt = 'Main product image';
mainImageDiv.appendChild(mainImg);
// Fetch product data from the API
fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448')
    .then(response => response.json())
    .then(data => {
        const product = data.product;
        

        // Update product title
        document.querySelector('.product-title').textContent = product.title;

        // Update product vendor
        document.querySelector('.product-vendor').textContent = product.vendor;

        // Update product price
        document.querySelector('.product-price').textContent = product.price;

        // Update compare at price
        document.querySelector('.compare-price').textContent = product.compare_at_price;

        const tempDiv = document.createElement('div');
        // Set the innerHTML of the temporary div to the product description
        tempDiv.innerHTML = product.description;
        // Extract the text content from the temporary div, which will not include HTML tags
        const cleanDescription = tempDiv.textContent || tempDiv.innerText || '';

        // Update the product description on the page
        document.querySelector('.product-description').textContent = cleanDescription;

        const colorOptionsContainer = document.querySelector('.color-options');
        product.options.find(option => option.name === 'Color').values.forEach((color, index) => {
            const colorDiv = document.createElement('div');
            colorDiv.classList.add('color-option');
            const colorName = Object.keys(color)[0];
            colorDiv.style.backgroundColor = color[colorName];
            
            colorDiv.style.border = color[colorName];
            colorDiv.dataset.color = colorName;
            colorDiv.addEventListener('click', function () {
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
            colorOptionsContainer.appendChild(colorDiv);
        
            // Set the first color option as selected
            if (index === 0) {
                colorDiv.classList.add('selected');
            }
        });
        
        // Populate size options and set the first one as selected
        const sizeOptionsContainer = document.querySelector('.size-options');
        product.options.find(option => option.name === 'Size').values.forEach((size, index) => {
            const sizeButton = document.createElement('button');
            sizeButton.classList.add('size-option');
            sizeButton.textContent = size;
            sizeButton.addEventListener('click', function () {
                document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
            sizeOptionsContainer.appendChild(sizeButton);
        
            // Set the first size option as selected
            if (index === 0) {
                sizeButton.classList.add('selected');
            }
        });
        // Update product images
        imageUrls.forEach(imageUrl => {
            const thumbImg = document.createElement('img');
            thumbImg.src = imageUrl;
            thumbImg.alt = 'Product thumbnail';
            thumbImg.classList.add('thumbnail');
            thumbImg.onclick = function () {
                mainImg.src = imageUrl; // Update the main image on click
            };
            thumbnailsDiv.appendChild(thumbImg);
        });
    })
    .catch(error => console.error('Error fetching product data:', error));
