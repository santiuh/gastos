import { ref } from "vue";
import {
  balance as serviceBalance,
  getOperaciones,
  getCategorias2,
  postOperaciones,
  editOperaciones,
} from "@/services/base";
import { deleteOperaciones } from "../services/base";

const balancevalor = ref(null);
const categoriaFiltro = ref("Desactivado");
const fechaFiltroDesde = ref("");
const fechaFiltroHasta = ref("");
const listaops = ref([null]);
const listacat = ref(null);
const modalEstado = ref(false);
const modalFecha = ref("");
const modalCategoria = ref("");
const modalCategoriaID = ref("");
const modalCategoriaNuevo = ref("");
const modalTypeId = ref("");
const modalNota = ref("");
const modalId = ref("");
const modalMonto = ref("");
const modalErrorEstado = ref(false);
const modalErrorContenido = ref("");
const tipoFiltro = ref("Desactivado");

export const useOps = () => {
  const balance = () => {
    serviceBalance().then((data) => (balancevalor.value = data));
  };

  const operaciones = () =>
    getOperaciones().then((data) => (listaops.value = data));

  const categorias = async () => {
    listacat.value = await getCategorias2();
  };

  const borrarOperaciones = async (id) => {
    await deleteOperaciones(id);
    operaciones();
    balance();
  };

  const agregarOperaciones = async (a, d, n, c, t) => {
    await postOperaciones(a, d, n, c, t);
    operaciones();
    balance();
  };

  const editarOperaciones = async (a, d, n, c, id) => {
    await editOperaciones(a, d, n, c, id);
    operaciones();
    balance();
  };

  return {
    balance,
    balancevalor,
    operaciones,
    listaops,
    categorias,
    categoriaFiltro,
    fechaFiltroDesde,
    fechaFiltroHasta,
    listacat,
    borrarOperaciones,
    agregarOperaciones,
    modalEstado,
    modalMonto,
    modalId,
    modalCategoria,
    modalCategoriaID,
    modalCategoriaNuevo,
    modalTypeId,
    modalFecha,
    modalNota,
    editarOperaciones,
    modalErrorContenido,
    modalErrorEstado,
    tipoFiltro,
  };
};
