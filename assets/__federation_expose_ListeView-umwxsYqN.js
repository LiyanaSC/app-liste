import { importShared } from './__federation_fn_import-dmqIiFee.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$2 = {  };
const {createElementVNode:_createElementVNode$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');


const _hoisted_1$2 = { class: "list-sidebar" };

function _sfc_render$1(_ctx, _cache) {
  return (_openBlock$2(), _createElementBlock$2("nav", _hoisted_1$2, _cache[0] || (_cache[0] = [
    _createElementVNode$1("h2", { class: "sidebar-title" }, "Mes Listes", -1)
  ])))
}
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$1],['__scopeId',"data-v-51e5599f"]]);

const _sfc_main$1 = {  };
const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1$1 = { class: "list-results" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1$1, _cache[0] || (_cache[0] = [
    _createElementVNode("h2", null, "Résultats de la recherche", -1),
    _createElementVNode("p", null, [
      _createTextVNode("Aucun résultat trouvé. "),
      _createElementVNode("span")
    ], -1)
  ])))
}
const ListResults = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__scopeId',"data-v-0ba65835"]]);

const {createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "app-liste" };




const _sfc_main = {
  __name: 'App',
  setup(__props) {

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Vérifie si l'utilisateur préfère le mode sombre
// Si l'utilisateur préfère le mode sombre, on applique le thème sombre, sinon on applique le thème clair
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(Sidebar),
    _createVNode(ListResults)
  ]))
}
}

};
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-ad725d67"]]);

export { App as default };
