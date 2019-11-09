(function(window, undefined) {
  var dictionary = {
    "22baf083-ea3e-44b7-bbbf-e9935de0b03c": "busquedaDigitacionFromInicio",
    "741021f8-d1dd-448f-aa5a-0b6d04f0c34c": "Explorar",
    "4c50c77a-dcdf-4f49-8762-cab78d888ddf": "Cuenta",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Registrar",
    "2efe61e8-1818-4475-984c-c350c15c7a62": "fichaTecnia-imagen",
    "9dca71af-e5cf-46aa-b311-f68c15b3be51": "fichaTenica-informacion",
    "a368196d-9b45-4507-a073-ee343632495a": "Inicio",
    "4a496e0b-acff-410b-8296-59aeabbc576a": "Planes",
    "0e7f9fa1-02bc-4dad-8aa2-2a666ec8f28d": "busquedaDigitacionFromExplorar",
    "dd9977cc-0e19-4cc4-974b-2012f2a01fe9": "agregarPlan",
    "70b5cff9-57bb-47a5-9392-a849392be320": "IniciarSesion",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);