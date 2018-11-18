import axios from 'axios/index'
import { compile } from 'vega-lite'
import * as vega from "vega"
import _ from "lodash"

// TODO: replace with server-side, it's all proper loader config
function modifyDataSourceLocation(spec) {
  if (spec.data && spec.data.url) {
    let url = spec.data.url

    spec.data.url = `https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/${url}`
  }

  if (spec.layer && spec.layer.length > 0) {
    spec.layer = spec.layer.map(layer => {
      let result = { ...layer }
      if (layer.data && layer.data.url) {
        result.data.url = `https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/${layer.data.url}`
      }
      return result
    })
  }
  return spec;
}

export function modifySpec (spec, type) {
  spec = modifyDataSourceLocation(spec)

  if (type === 'VEGA_LITE') {
    spec = compile(spec).spec
  }

  return spec
}


export const fetchSpecLookups = async (options) => {
  const response = await axios.get('/specs', { params: options })
  return response.data
}

export const fetchSpec = async (options) => {
  const response = await axios.get(`/specs/${options.id}`);
  return response.data;
}

export const publishSpec = async ({spec, author, type, title}) => {
  // TODO: replace it with proper handling loader config and UI notification
  spec = modifySpec(spec)

  let specToRender = _.cloneDeep(spec);
  if (type === 'VEGA_LITE'){
    specToRender = compile(specToRender).spec;
  }

  let view = new vega.View(vega.parse(specToRender), {
    logLevel: vega.Warn,
    renderer: 'svg',
  });

  view = await view.runAsync();

  let preview = await view.toSVG();

  const response = await axios.post(`/specs`, {
    spec,
    title,
    preview,
    type
  });

  return response.data;
}
