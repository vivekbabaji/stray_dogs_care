export default {
    data() {
        return {
            dogs: [
                { id: 1, name: 'Buddy', breed: 'Labrador', age: 3, gender: 'Male', location: 'Delhi', status: 'Available' },
                { id: 2, name: 'Bella', breed: 'Beagle', age: 2, gender: 'Female', location: 'Mumbai', status: 'Available' },
                { id: 3, name: 'Max', breed: 'German Shepherd', age: 4, gender: 'Male', location: 'Bangalore', status: 'Available' },
                { id: 4, name: 'Lucy', breed: 'Golden Retriever', age: 1, gender: 'Female', location: 'Chennai', status: 'Available' },
            ]
        };
    },
    methods: {
        requestAdopt(dog) {
            alert(`Adoption request sent for ${dog.name}!`);
        }
    },
    template: `
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                    <h2 class="text-center mb-4">Adopt a Dog</h2>
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <p class="mb-4 text-secondary text-center">
                                Find your new best friend! Browse available dogs and request adoption.
                            </p>
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Breed</th>
                                            <th>Age</th>
                                            <th>Gender</th>
                                            <th>Location</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="dog in dogs" :key="dog.id">
                                            <td>{{dog.name}}</td>
                                            <td>{{dog.breed}}</td>
                                            <td>{{dog.age}} years</td>
                                            <td>{{dog.gender}}</td>
                                            <td>{{dog.location}}</td>
                                            <td>{{dog.status}}</td>
                                            <td>
                                                <button class="btn btn-primary btn-sm" @click="requestAdopt(dog)" :disabled="dog.status !== 'Available'">Request Adopt</button>
                                            </td>
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