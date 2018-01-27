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
 * extend provided fields within local data source metadata and transformation
 * check consistency between fields local data source metadata and transformation
 * does't check for fields consistency between local metadata and remote data source
 * it's recommended to fill `data.format.parse` section with all available fields in data source


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
axios.get('/looks?offset=10&limit=10')
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
 
 * check consistency between fields and local data source metadata and transformation
 * check consistency between look's fields and fields in dependent looks

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

##### Error Response:

  * **Code:** 403 Forbidden <br />
    **Content:** [BrokenDependentResourcesError](errors.md#brokendependentresourceserror)

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
