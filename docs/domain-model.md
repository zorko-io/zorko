# Domain Model

Define main models in the system

## Datum

Datum it's combination of common metadata, transformation, connection and authority information around data source. 
Track dependencies to it's data source in the system

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id        | String  |  Unique identification|
| name        | String  |  Name of the datum for later reference|
| title       | String      | _**Required.**_ Title of the datum. For example: `World Population`, `Stores around me`, etc.|
| description | String      | Description of this datum for commenting purpose. |
| data | [Data](https://vega.github.io/vega-lite/docs/data.html)  | _**Required.**_ An object describing the data source. <br/> Reused from [Vega-Lite](https://vega.github.io/vega-lite/docs/spec.html) specification  |
| looks | String[] |  The full list of look's unique ids which were build from that datum.  <br/> **Default value:** `[]` |
| transform | [Transform](https://vega.github.io/vega-lite/docs/transform.html)[] | An array of data transformations such as filter and new field calculation. <br/> Reused from [Vega-Lite](https://vega.github.io/vega-lite/docs/spec.html) specification|
| authority | DatumAuthority | Information about data source author |
| fields | Field[] | List fields exposed to user|

### DatumAuthority

Contains information about data source's author, it may be person or organization, github repository with data

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| name        | String  |  Name of the authority for later reference. |
| site       | URL      | _**Required.**_ Link to data repository landing or at least to article with description|


## Field

Contains human readable title and information about variable which it refers to

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| name        | String  |  _**Required.**_ Name of the authority for later reference. |
| title       | String  | _**Required.**_ Link to data repository landing or at least to article with description|
| variable    | FieldVariable  |  Define information about variable behind the field|

### FieldVariable

Field refers to some variable. It defines type of value and [statistical variable dependency](https://en.wikipedia.org/wiki/Dependent_and_independent_variables)

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| type        | String  |  _**Required.**_ One of `string`, `number`, `date` |
| dependent   | Boolean  |  _**Required.**_  In Business Intelligence <br/> if it equals`false` then it's [`dimention`](https://en.wikipedia.org/wiki/Dimension_(data_warehouse)) <br/> if it equals `true` then it's [`measure`](https://en.wikipedia.org/wiki/Measure_(data_warehouse))

## Look

Define analytic visualization as combination of filters, graphic and/or table

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id        | String  |  Unique identification|
| name        | String  |  Name of the datum for later reference.|
| title       | String      | _**Required.**_ Title of the datum. For example: `World Population`, `Stores around me`, etc.|
| description | String      | Description of this datum for commenting purpose. |
| preview | String     | Preview image of visualization in SVG format|
| visualization | VegaLiteSpec | _**Required.**_ An object describing the data source. <br/> Reused from [Vega-Lite](https://vega.github.io/vega-lite/docs/spec.html) specification  |
| fields | Field[] | List of all fields used in analysis|
| filters | LookFilter[] | List of all filters presentations used in analysis|
| layout | LookLayout | Define position and visibility of filter, visualisation and data table|
| table | LookDataTable | Define structure of table|
| datum  | String  | Datum identification on which look was build

### LookFilter

Define filter presentation for particular type of value, range etc. 

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| id        | Number  | _**Required.**_ Index of filter definition in visualisation's transformation|
| type | String      | Type of filter presentation. One of `TextInputValue` etc|

### LookLayout

Layout of filter, visualization and table

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| type | String      | _**Required.**_  Type of layout. One of `stack` etc <br/> **Default value:** `stack`|
| filters | String  | State of filters panel. One of `collapsed`, `expanded`, `disabled` |
| visualization | String | State of visualization panel. One of `collapsed`, `expanded`, `disabled`|
| table | String | State of table panel. One of `collapsed`, `expanded`, `disabled` |

### LookDataTable

Define table structure, headers etc.

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| headers   | String[]  | List of all fields used in analytics and added to table. Order is important|
