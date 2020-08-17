// Product Constructor
class Product {
    constructor(name, price, year, res,puerco, tripa, tortares, tortapastor, tortapuerco, tortatripa) {
        this.name = name;
        this.price = price;
        this.year = year;
        this.res = res;
        this.puerco = puerco;
        this.tripa = tripa;
        this.tortares = tortares;
        this.tortapastor = tortapastor;
        this.tortapuerco = tortapuerco;
        this.tortatripa = tortatripa;


    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre</strong>: ${product.name} -
                    <strong>Mesa</strong>: ${product.price} - 
                    <br>
                    <h4>Tacos</h4>
                    <strong>Tacos de Oastor</strong>: ${product.year}
                    <br>
                    <strong>Tacos de Res</strong>: ${product.res}
                    <br>
                    <strong>Tacos de Puerco</strong>: ${product.puerco}
                    <br>
                    <strong>Tacos de Tripa</strong>: ${product.tripa}
                    <br>
                    <h4>Tortas</h4>
                    <strong>Torta de Res</strong>: ${product.tortares}
                    <br>
                    <strong>Torta de Pastor</strong>: ${product.tortapastor}
                    <br>
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;
            res = document.getElementById('res').value;
            puerco = document.getElementById('puerco').value;
            tripa = document.getElementById('tripa').value;
            tortares = document.getElementById('tortares').value;
            tortapastor = document.getElementById('tortapastor').value;
            // tortapuerco = document.getElementById('tortapuerco').value;
            // tortatripa = document.getElementById('tortatripa').value;


        // Create a new Oject Product
        const product = new Product(name, price, year, res, puerco, tripa, tortares, tortapastor );

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (name === '' || price === '' || year === '' || res === '' || puerco === '' || tripa === '' || tortares === '' || tortapastor === ''  ) {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });