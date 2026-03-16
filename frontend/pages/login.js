export default {
        template : `
            <div style="background: linear-gradient(135deg, #e3f2fd 0%, #f8bbd0 100%); min-height: 100vh;" class="d-flex align-items-center justify-content-center">
                <div class="card shadow-lg p-4 animate__animated animate__fadeIn" style="max-width: 400px; width: 100%; border-radius: 1.5rem;">
                    <div class="text-center mb-3">
                        <span style="font-size: 3rem; color: #1976d2;">
                            <i class="bi bi-person-circle"></i>
                        </span>
                    </div>
                    <h2 class="mb-4 text-center text-primary fw-bold">Login</h2>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label fw-semibold">Username</label>
                            <input type="text" class="form-control form-control-lg rounded-pill" id="username" v-model = "username" placeholder="Enter your username">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label fw-semibold">Password</label>
                            <input type="password" class="form-control form-control-lg rounded-pill" id="password"  v-model = "password" placeholder="Enter your password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg rounded-pill w-100 mt-3 shadow-sm" @click = "onLogin">Login</button>
                    </form>
                    <div class="mt-3 text-center">
                        <small class="text-muted">Don't have an account? <router-link to="/register" class="text-decoration-none text-primary">Register</router-link></small>
                    </div>
                </div>
            </div>
        ` ,
        data : {
              
           username : null ,
           password : null 

        } ,

             methods : {
                 async onLogin() {
                     // Dummy role check based on username
                     if (this.username === 'admin' && this.password === '1234') {
                         this.$router.push('/admin_dashboard');
                     } else if (this.username === 'doctor' && this.password === '1234') {
                         this.$router.push('/doctor_dashboard');
                     } else if (this.username === 'user' && this.password === '1234') {
                         this.$router.push('/user_dashboard');
                     } else {
                         alert('Invalid username or password.');
                     }
                 }
             }
}