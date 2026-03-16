export default {
  template: `
    <div class="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%; border-radius: 1.5rem;">
        <h2 class="mb-4 text-center text-primary fw-bold">User Registration</h2>
        <form>
          <div class="mb-3">
            <label for="username" class="form-label fw-semibold">Username</label>
            <input type="text" class="form-control form-control-lg rounded-pill" id="username" placeholder="Enter your username">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label fw-semibold">Email</label>
            <input type="email" class="form-control form-control-lg rounded-pill" id="email" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label fw-semibold">Password</label>
            <input type="password" class="form-control form-control-lg rounded-pill" id="password" placeholder="Enter your password">
          </div>
          <button type="submit" class="btn btn-primary btn-lg rounded-pill w-100 mt-3 shadow-sm">Register</button>
        </form>
      </div>
    </div>
  `
}
