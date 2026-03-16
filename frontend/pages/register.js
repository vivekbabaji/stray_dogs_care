export default {
  template: `
    <div class="container d-flex justify-content-center align-items-center min-vh-100">

      <div class="card shadow-lg p-5 text-center" style="max-width:500px; width:100%; border-radius:15px;">
        
        <h2 class="text-primary mb-4 fw-bold">
          🐾 Registration
        </h2>

        <p class="text-muted mb-4">
          Join our platform to help stray dogs and connect with our community.
        </p>

        <div class="d-grid gap-3">

          <router-link 
            to="/user_registration" 
            class="btn btn-primary btn-lg">
            👤 Register as User
          </router-link>
          </div>
         <div class="d-grid gap-3">
          <router-link 
            to="/doctor_registration" 
            class="btn btn-success btn-lg">
            🩺 Register as Doctor
          </router-link>

        </div>

      </div>

    </div>
  `
}