// donate page
export default  {
        template : `
            <div class="container d-flex flex-column align-items-center justify-content-center min-vh-100">
                <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%; border-radius: 1.5rem;">
                    <h2 class="mb-4 text-center text-success fw-bold">Donate</h2>
                    <p class="text-center mb-4">Choose your preferred donation method:</p>
                    <div class="d-flex flex-column gap-3">
                        <button class="btn btn-outline-primary btn-lg w-100" type="button">
                            <i class="bi bi-upc-scan me-2"></i> UPI
                        </button>
                        <button class="btn btn-outline-success btn-lg w-100" type="button">
                            <i class="bi bi-credit-card-2-front me-2"></i> Debit Card
                        </button>
                    </div>
                </div>
            </div>
        `
}
