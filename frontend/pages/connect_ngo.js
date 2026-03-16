export default {
  data() {
    return {
      ngos: [
        {
          id: 1,
          name: 'Hope for Paws',
          area: 'Delhi NCR',
          services: 'Rescue, Adoption, Vaccination, Awareness',
          contact: 'hopeforpaws@email.com',
        },
        {
          id: 2,
          name: 'Stray Care Foundation',
          area: 'Mumbai',
          services: 'Sterilization, Medical Aid, Adoption',
          contact: 'straycare@email.com',
        },
        {
          id: 3,
          name: 'Paws & Claws',
          area: 'Bangalore',
          services: 'Rescue, Foster, Rehabilitation',
          contact: 'pawsclaws@email.com',
        },
      ],
      newNgo: {
        name: '',
        area: '',
        services: '',
        contact: ''
      }
    };
  },
  methods: {
    addNgo() {
      if (
        this.newNgo.name.trim() &&
        this.newNgo.area.trim() &&
        this.newNgo.services.trim() &&
        this.newNgo.contact.trim()
      ) {
        this.ngos.push({
          id: this.ngos.length + 1,
          ...this.newNgo
        });
        this.newNgo = { name: '', area: '', services: '', contact: '' };
      } else {
        alert('Please fill in all fields.');
      }
    }
  },
  template: `
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <h2 class="text-center mb-4">Connect with NGOs</h2>
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <p class="mb-4 text-secondary text-center">
                NGOs working for stray dogs can share their details, working area, and services provided. Connect with them for collaboration or support.
              </p>
              <form @submit.prevent="addNgo" class="mb-4">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input v-model="newNgo.name" type="text" class="form-control" placeholder="NGO Name" required>
                  </div>
                  <div class="form-group col-md-6">
                    <input v-model="newNgo.area" type="text" class="form-control" placeholder="Working Area" required>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input v-model="newNgo.services" type="text" class="form-control" placeholder="Services Provided" required>
                  </div>
                  <div class="form-group col-md-6">
                    <input v-model="newNgo.contact" type="email" class="form-control" placeholder="Contact Email" required>
                  </div>
                </div>
                <div class="text-right">
                  <button type="submit" class="btn btn-success">Add NGO</button>
                </div>
              </form>
              <div class="table-responsive">
                <table class="table table-bordered table-hover">
                  <thead class="thead-light">
                    <tr>
                      <th>Name</th>
                      <th>Working Area</th>
                      <th>Services Provided</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="ngo in ngos" :key="ngo.id">
                      <td>{{ngo.name}}</td>
                      <td>{{ngo.area}}</td>
                      <td>{{ngo.services}}</td>
                      <td>{{ngo.contact}}</td>
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
