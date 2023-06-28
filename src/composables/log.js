import { ref, onMounted } from "vue";
import { login as serviceLogin } from "@/services/base";
import { register as serviceRegister } from "@/services/base";
const usuario = ref();
const setError = ref(null);

export const useLogin = () => {
  const trylogin = async (email, password) => {
    try {
      const data = await serviceLogin(email, password);
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("usuario", data.user.name);
        usuario.value = data.user.name;
      } else {
        setError.value = data;
      }
    } catch (error) {
      setError.value = error;
    }
  };

  onMounted(() => {
    const sessionUsuario = sessionStorage.getItem("usuario");
    if (sessionUsuario) {
      usuario.value = sessionUsuario;
    }
  });

  const register = async (name, email, password) => {
    try {
      const data = await serviceRegister(name, email, password);
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("usuario", data.user.name);
        usuario.value = data.user.name;
        setError.value = null;
      } else {
        setError.value = data;
      }
    } catch (error) {
      setError.value = error;
    }
  };
  //    const register = (name, email, password) => {
  //         serviceRegister(name, email, password)
  //         .then (data => {
  //             sessionStorage.setItem('token',data.token)
  //             sessionStorage.setItem('usuario',data.user.name)
  //             usuario.value = data.user.name
  //         })
  //         .catch(error => console.log(error))

  //    }

  const logout = () => {
    sessionStorage.clear("usuario");
    sessionStorage.setItem("token", null);
    usuario.value = null;
  };
  return {
    trylogin,
    logout,
    register,
    usuario,
    setError,
  };
};

// const loginData = login('santiagogirolami@gmail.com','curco')

//sessionStorage.setItem('token',data.token)
