export default {
        data() {
                return {
                        payments: [
                                { id: 1, date: '2026-03-01', amount: '$50', method: 'Credit Card', status: 'Completed' },
                                { id: 2, date: '2026-02-15', amount: '$30', method: 'PayPal', status: 'Completed' },
                        ],
                        dogReports: [
                                { id: 1, dogName: 'Buddy', report: 'Vaccinated and healthy', date: '2026-03-10' },
                                { id: 2, dogName: 'Max', report: 'Adopted by new family', date: '2026-02-20' },
                        ]
                };
        },
        template: `
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-8">
                        <h2 class="text-center mb-4">User Dashboard</h2>
                        <div class="card mb-4 shadow-sm">
                            <div class="card-body">
                                <div class="d-flex justify-content-end mb-2">
                                    <button class="btn btn-primary" @click="onDonate">Make Donation</button>
                                </div>
                                <h4 class="card-title mb-3">Donation Payment Details</h4>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Method</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="p in payments" :key="p.id">
                                                <td>{{p.date}}</td>
                                                <td>{{p.amount}}</td>
                                                <td>{{p.method}}</td>
                                                <td>{{p.status}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <div class="d-flex justify-content-end mb-2">
                                    <button class="btn btn-success" @click="onCreateReport">Create Dog Report</button>
                                </div>
                                <h4 class="card-title mb-3">Dog Reports</h4>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Dog Name</th>
                                                <th>Report</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="r in dogReports" :key="r.id">
                                                <td>{{r.dogName}}</td>
                                                <td>{{r.report}}</td>
                                                <td>{{r.date}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        ,
        methods: {
            onDonate() {
                alert('Redirect to donation page or open donation modal.');
            },
            onCreateReport() {
                alert('Redirect to create dog report page or open report modal.');
            }
        }
    }