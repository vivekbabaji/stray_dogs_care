
export default {
  template: `
    
    <div class="landing-page bg-light min-vh-100 py-5">
     <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-primary" href="#">Stray Dogs Care</a>
        <div class="d-flex gap-3">
            <router-link to="/register" class="btn btn-outline-success">Register</router-link>
            <router-link to="/login" class="btn btn-outline-secondary">Login</router-link>
            <router-link to="/adopt" class="btn btn-outline-success">Adopt a Dog</router-link>
        </div>
      </div>
    </nav>
      <div class="container text-center">

        <h1 class="display-4 fw-bold text-primary mb-4">
          🐶 Welcome to Stray Dogs Care
        </h1>

        <p class="lead text-muted mb-5">
          Helping stray dogs receive care, love, and medical support.
        </p>

        <div class="row justify-content-center g-4">

          <div class="col-md-5">
            <div class="card shadow-lg border-0 h-100">
              <div class="card-body">
                <h3 class="card-title text-success">Our Mission</h3>
                <p class="card-text">
                  We provide a platform where users can report injured
                  or helpless stray dogs and donate for their treatment.
                  Doctors can register and provide medical care while
                  receiving fair compensation.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-5">
            <div class="card shadow-lg border-0 h-100">
              <div class="card-body">
                <h3 class="card-title text-warning">About the Platform</h3>
                <p class="card-text">
                  Our platform connects compassionate users, donors,
                  and veterinary doctors to help stray dogs in need,
                  especially in remote areas where veterinary care
                  is not easily available.
                </p>
              </div>
            </div>
          </div>

        </div>


        <div class="mt-5 d-flex justify-content-center gap-3 flex-wrap">

          <router-link to="/donate" class="btn btn-primary btn-lg px-4 me-4">
            Donate Now
          </router-link>
          <router-link to="/connect_NGO" class="btn btn-primary btn-lg px-4 me-4">
            connect as a NGO
          </router-link>

         </div>
          <p class="lead text-muted mb-5">
           🐾Stray Dogs Care is a platform dedicated to addressing the growing challenges
            related to stray dog welfare and public health. In many areas, the population of stray dogs
             is increasing rapidly, and due to the lack of proper veterinary care, many of them suffer from injuries, diseases, and inadequate medical attention. 
             This situation not only affects the well-being of the animals but can also create health risks for communities, including the spread of diseases such as rabies.
              Our platform aims to support population control, ensure timely medical treatment, and improve the overall care of stray dogs, especially in remote areas where veterinary doctors are not readily available.
               By connecting veterinary doctors, donors, and compassionate users, Stray Dogs Care creates a collaborative network that helps provide treatment, resources, and support to stray animals while promoting a safer and healthier environment for both animals and people. 
               🐾

        </p>

        </div>

      </div>

    </div>
  `
}