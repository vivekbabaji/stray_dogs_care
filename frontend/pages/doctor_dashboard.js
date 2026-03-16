export default {
    data() {
        return {
            newDogReports: [
                { id: 1, user: 'Alice', dogName: 'Rocky', report: 'Injury on leg', date: '2026-03-15' },
                { id: 2, user: 'Bob', dogName: 'Bella', report: 'Coughing', date: '2026-03-14' },
            ],
            treatedDogs: [
                { id: 1, dogName: 'Max', treatment: 'Vaccination', date: '2026-02-20' },
                { id: 2, dogName: 'Buddy', treatment: 'Surgery', date: '2026-01-10' },
            ]
        };
    },
    template: `
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                    <h2 class="text-center mb-4">Doctor Dashboard</h2>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <h4 class="card-title mb-3">New Dog Reports</h4>
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>User</th>
                                            <th>Dog Name</th>
                                            <th>Report</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="r in newDogReports" :key="r.id">
                                            <td>{{r.user}}</td>
                                            <td>{{r.dogName}}</td>
                                            <td>{{r.report}}</td>
                                            <td>{{r.date}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h4 class="card-title mb-3">Previously Treated Dogs</h4>
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Dog Name</th>
                                            <th>Treatment</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="d in treatedDogs" :key="d.id">
                                            <td>{{d.dogName}}</td>
                                            <td>{{d.treatment}}</td>
                                            <td>{{d.date}}</td>
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
}