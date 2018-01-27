## Datum

REST API endpoints

### Search
----

Iterate over datums in the system, return a list of datums. Allows to filter list with specific params 

##### URL

/datums

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
    **Content:** [Datum](../domain-model.md#datum)[]

##### Error Response:

  * **Code:** 400 Bad Request <br />
    **Content:** [InvalidParameterTypeError](errors.md#invalidparametertypeerror) | [InvalidParameterValueRangeError](errors.md#invalidparametervaluerangeerror)

##### Sample Call:

```js
axios.get('/datums?offset=10&limit=10')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Create

----

Create new datum in the system. Server augment data params with next rules:
 
 * override `id` within server generated unique `id`
 * if `name` is not defined then generated it from `title` by replacing spaces with dashes, adding suffix counter if such name already used, converting all charters to lower case
 * extend provided fields within local data source metadata and transformation
 * check consistency between fields local data source metadata and transformation
 * does't check for fields consistency between local metadata and remote data source
 * it's recommended to fill `data.format.parse` section with all available fields in data source


##### URL

/datums

##### Method:

`POST`

##### URL Params:

  * None

##### Data Params:

 *  [Datum](../domain-model.md#datum)

##### Success Response:

  * **Code:** 200 <br />
    **Content:** [Datum](../domain-model.md#datum)

##### Error Response:

  * **Code:** 400 Bad Request <br />
    **Content:** [InvalidParameterTypeError](errors.md#invalidparametertypeerror) | [InvalidParameterValueRangeError](errors.md#invalidparametervaluerangeerror)

##### Sample Call:

```js
axios.post('/datums', {
    title: "Population of USA",
    data: {
      url: 'https://example.com/data/some.csv',
      format: {
        type: 'csv',
        parse: {
          population: 'number',
          age: 'number',
          year: 'date'
        },
      }
    },
   fields: [
     { name: "population", title: "Population"},
     { name: "age", title: "Age"}
    ],
    authority: {
      name: 'example',
      site: 'https://example.com/my-data-information'
    }
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
    "data": {
      "url": "https://example.com/data/some.csv",
      "format": {
         "type": "csv",
         "parse": {
            "population": "number",
            "age": "number",
            "year": "date"
         }
      }
    },
    "fields": [
      { 
        "name": "population", 
        "title": "Population",
        "value": {
           "type": "number",
           "dependent": false
        }
      },
      { 
        "name": "age", 
        "title": "Age",
        "value": {
           "type": "number",
           "dependent": false
        }
      }
    ],
    "authority": {
      "name": "example",
      "site": "https://example.com/my-data-information"
    },
    "looks": []
}
```

### Get
----

Fetch datum by unique `id` 

##### URL

/datums/:id

##### Method:

`GET`

##### URL Params:

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id    |String  | Unique datum `id`|

##### Data Params:

  None

##### Success Response:

  * **Code:** 200 <br />
    **Content:** [Datum](../domain-model.md#datum)

##### Error Response:

  * **Code:** 400 Bad Request <br />
    **Content:** [InvalidParameterTypeError](errors.md#invalidparametertypeerror) | [InvalidParameterValueRangeError](errors.md#invalidparametervaluerangeerror)
  * **Code:** 404 Not Found <br />
    **Content:** [NotFoundResourceError](errors.md#notfoundresourceerror)

##### Sample Call:

```js
axios.get('/datums?offset=10&limit=10')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Update
----

Update datum. Server should check next rules:
 
 * check consistency between fields and local data source metadata and transformation
 * check consistency between datum's fields and fields in dependent looks

##### URL

/datums/:id

##### Method:

`PUT`

##### URL Params:

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id    |String  | Unique datum `id`|

##### Data Params:

 *  [Datum](../domain-model.md#datum)

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
axios.post('/datums/1234', {
    id: '1234',
    name: 'population-of-usa',
    title: "Population of USA",
    data: {
      url: 'https://example.com/data/some.csv',
      format: {
        type: 'csv',
        parse: {
          population: 'number',
          age: 'number',
          year: 'date'
        },
      }
    },
   fields: [
     { 
       name: "population", 
       title: "Population blhabla",
       variable: {
         type: 'number',
         dependent: false
       }
     },
     { 
       name: "age", 
       title: "Age foooo",
       variable: {
        type: 'number',
        dependent: false
       }
     }
    ],
    authority: {
      name: 'example',
      site: 'https://example.com/my-data-information'
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

Remove datum by unique `id` 

##### URL

/datums/:id

##### Method:

`DELETE`

##### URL Params:

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id    |String  | Unique datum `id`|

##### Data Params:

  None

##### Success Response:

  * **Code:** 204 No Content <br />
    **Content:** None

##### Error Response:

  * **Code:** 403 Forbidden <br />
    **Content:** [BrokenDependentResourcesError](errors.md#brokendependentresourceserror)

##### Sample Call:

```js
axios.delete('/datums/1234')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
