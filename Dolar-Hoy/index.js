const container = document.querySelector(".container");
const compra = document.querySelector(".data__valores ");

container.innerHTML += `
            <div class="coin">
                <div class="coin-name">
                    <h3>${compra}</h3>
                    <span>/USD</span>
                </div>
            </div>
        `;