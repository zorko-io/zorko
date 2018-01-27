## Look

REST API endpoints

### Search
----

Iterate over looks in the system, return a list of looks. Allows to filter list with specific params 

##### URL

/looks

##### Method:

`GET`

##### URL Params:

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| offset   |Integer | provide `offset` to define position from which to show collection<br/> **Default value:** `0` |
| limit   | Integer | provide `limit` to define length of returned result <br/> **Default value:** `10` <br/>  **Max value:** `101`|

##### Data Params:

  None

##### Success Response:

  * **Code:** 200 <br />
    **Content:** [Look](../domain-model.md#look)[]

##### Error Response:

  * **Code:** 400 Bad Request <br />
    **Content:** [InvalidParameterTypeError](errors.md#invalidparametertypeerror) | [InvalidParameterValueRangeError](errors.md#invalidparametervaluerangeerror)

##### Sample Call:

```js
axios.get('/looks?offset=10&limit=10')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Create

----

Create new look in the system. Server augment data params with next rules:
 
 * override `id` within server generated unique `id`
 * if `name` is not defined then generated it from `title` by replacing spaces with dashes, adding suffix counter if such name already used, converting all charters to lower case
 * check for datum existence before look creation
 * generate preview if it's not available
 * generate default layout if not provided
 * if filters not defined then generate them from visualization
 * if filters defined then check their consistency with visualization


##### URL

/looks

##### Method:

`POST`

##### URL Params:

  * None

##### Data Params:

 *  [Look](../domain-model.md#look)

##### Success Response:

  * **Code:** 200 <br />
    **Content:** [Look](../domain-model.md#look)

##### Error Response:

  * **Code:** 400 Bad Request <br />
    **Content:** [InvalidParameterTypeError](errors.md#invalidparametertypeerror) | [InvalidParameterValueRangeError](errors.md#invalidparametervaluerangeerror)

##### Sample Call:

```js
axios.post('/looks', {
    name: "population-of-usa-for-2000",
    title: "Population of USA for 2000",
    visualization: {
       $schema: "https://vega.github.io/schema/vega-lite/v2.json",
       data: { url: "https://example.com/data/population.json"},
       transform: [
         {filter: {field: "year", equal: 2000}}
       ],
       mark: "bar",
       encoding: {
         y: {
           aggregate: "sum", field: "people", type: "quantitative",
           axis: {title: "population"},
           stack:  "normalize"
         },
         x: {
           field: "age", type: "ordinal",
           scale: {rangeStep: 17}
         }
       }
     },
    fields: [
     { name: 'population', title: 'Population'},
     { name: 'age', title: 'Age'},
     { name: 'year', title: 'Year'}
    ],
    filters: [{
      id: 0,
      type: 'TextInputValue'
    }],
    datum: "uuid-3230-3232"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Sample Response:

```json
{
  "id": "uuid-1111-9999",
  "name": "population-of-usa",
  "title": "Population of USA",
  "visualization": {
     "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
     "data": { "url": "https://example.com/data/population.json"},
     "transform": [
       {"filter": {"field": "year", "equal": 2000}}
     ],
     "mark": "bar",
     "encoding": {
       "y": {
         "aggregate": "sum", "field": "people", "type": "quantitative",
         "axis": {"title": "population"},
         "stack":  "normalize"
       },
       "x": {
         "field": "age", "type": "ordinal",
         "scale": {"rangeStep": 17}
       }
     }
   },
  "fields": [
   { "name": "population", "title": "Population"},
   { "name": "age", "title": "Age"},
   { "name": "year", "title": "Year"}
  ],
  "filters": [{
    "id": 0,
    "type": "TextInputValue"
  }],
  "layout": {
    "type": "stack",
    "filter": "collapsed",
    "visualization": "expanded",
    "table": "collapsed"
  }
}
```

### Get
----

Fetch look by unique `id` 

##### URL

/looks/:id

##### Method:

`GET`

##### URL Params:

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id    |String  | Unique look `id`|

##### Data Params:

  None

##### Success Response:

  * **Code:** 200 <br />
    **Content:** [Look](../domain-model.md#look)

##### Error Response:

  * **Code:** 400 Bad Request <br />
    **Content:** [InvalidParameterTypeError](errors.md#invalidparametertypeerror) | [InvalidParameterValueRangeError](errors.md#invalidparametervaluerangeerror)
  * **Code:** 404 Not Found <br />
    **Content:** [NotFoundResourceError](errors.md#notfoundresourceerror)

##### Sample Call:

```js
axios.get('/looks/1234')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Update
----

Update look. Server should check next rules:
 
 * check consistency between visualization, table, filters and fields

##### URL

/looks/:id

##### Method:

`PUT`

##### URL Params:

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id    |String  | Unique look `id`|

##### Data Params:

 *  [Look](../domain-model.md#look)

##### Success Response:

  * **Code:** 204 No Content <br />
    **Content:** None

##### Error Response:

  * **Code:** 400 Bad Request <br />
    **Content:** [InvalidParameterTypeError](errors.md#invalidparametertypeerror) | [InvalidParameterValueRangeError](errors.md#invalidparametervaluerangeerror)
  * **Code:** 403 Forbidden <br />
      **Content:** [BrokenDependentResourcesError](errors.md#brokendependentresourceserror)

##### Sample Call:

```js
axios.post('/looks/1234', {
    "id": "uuid-1111-9999",
    "name": "population-of-usa",
    "title": "Population of USA",
    "visualization": {
       "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
       "data": { "url": "https://example.com/data/population.json"},
       "transform": [
         {"filter": {"field": "year", "equal": 1999}}
       ],
       "mark": "bar",
       "encoding": {
         "y": {
           "aggregate": "sum", "field": "people", "type": "quantitative",
           "axis": {"title": "population"},
           "stack":  "normalize"
         },
         "x": {
           "field": "age", "type": "ordinal",
           "scale": {"rangeStep": 17}
         }
       }
     },
    "fields": [
     { "name": "population", "title": "Population"},
     { "name": "age", "title": "Age"},
     { "name": "year", "title": "Year"}
    ],
    "filters": [{
      "id": 0,
      "type": "TextInputValue"
    }],
    "layout": {
      "type": "stack",
      "filter": "collapsed",
      "visualization": "expanded",
      "table": "collapsed"
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Delete
----

Remove look by unique `id` 

##### URL

/looks/:id

##### Method:

`DELETE`

##### URL Params:

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id    |String  | Unique look `id`|

##### Data Params:

  None

##### Success Response:

  * **Code:** 204 No Content <br />
    **Content:** None

##### Sample Call:

```js
axios.delete('/looks/1234')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
