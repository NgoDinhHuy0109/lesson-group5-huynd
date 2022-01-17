const username = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let space=[];
    if (username.value === '' || username.value == null) {
        space.push('Username không được để trống')
      }
      if (password.value.length <= 8) {
        space.push('Mật khẩu ít nhất là 8 ký tự')
      }
    
      if (password.value === 'password') {
        space.push('Password cannot be password')
      }
    
      if (space.length > 0) {
        e.preventDefault()
        errorElement.innerText = space.join(', ')
      }
    }
)