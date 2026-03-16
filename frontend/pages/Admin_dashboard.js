export default {
        template : `
           
           
            <div class="container py-5">
           
                <h2 class="mb-4 text-center text-primary fw-bold">Admin Dashboard</h2>
                  <div class="bg-white shadow-sm py-3 mb-4">
                <div class="container d-flex justify-content-center gap-3">
                    <button class="btn btn-outline-primary">Users</button>
                    <button class="btn btn-outline-success">Payments</button>
                    <button class="btn btn-outline-info">Doctors</button>
                </div>
            </div>
                <div class="row mb-5 justify-content-center">
                    <div class="col-md-3 mb-3">
                        <div class="card shadow text-center">
                            <div class="card-body">
                                <h5 class="card-title">Total Users</h5>
                                <p class="display-6 fw-bold text-primary">120</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card shadow text-center">
                            <div class="card-body">
                                <h5 class="card-title">Total Donations</h5>
                                <p class="display-6 fw-bold text-success">₹ 45,000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card shadow text-center">
                            <div class="card-body">
                                <h5 class="card-title">Total Doctors</h5>
                                <p class="display-6 fw-bold text-info">15</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow mb-4">
                    <div class="card-header bg-primary text-white fw-bold">Current Dog Requests</div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Location</th>
                                        <th>Reported By</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bruno</td>
                                        <td><span class="badge bg-warning text-dark">Injured</span></td>
                                        <td>Sector 21, City</td>
                                        <td>user123</td>
                                        <td>2026-03-15</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Luna</td>
                                        <td><span class="badge bg-success">Available</span></td>
                                        <td>Park Avenue</td>
                                        <td>user456</td>
                                        <td>2026-03-14</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Max</td>
                                        <td><span class="badge bg-danger">Adopted</span></td>
                                        <td>Main Street</td>
                                        <td>user789</td>
                                        <td>2026-03-13</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
}