# REST API

## Datum

Main Datum's responsibility is to define connection between datasource and looks build on top of that datasource, link to authority
information.

`Datum` should contains information about connection to datasource, like format, protocol, data format. 
`Datum` may embedded dataset instead of referencing to some remote datasource. 
Also `Datum` should provide information about datasource authority, like link to site with explanation about data in that datasource. 
`Datum` should have information about looks build on top of it.

`Datum` may contains transformation around original dataset (aggregations, filter) which should be common to all dependent
looks, looks should't know about transformation and treat transformed dataset as original one

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| name        | String  |  Name of the datum for later reference. <br/> **Default value:** generated from `title` by replacing spaces with dashes, adding suffix counter if such name already used and converting all charters to lower case|
| title       | String      | _**Required.**_ Title of the datum. For example: `World Population`, `Stores around me`, etc.|
| description | String      | Description of this datum for commenting purpose. |
| data | [Data](https://vega.github.io/vega-lite/docs/data.html)  | _**Required.**_ An object describing the data source. <br/> Reused from [Vega-Lite](https://vega.github.io/vega-lite/docs/spec.html) specification  |
| looks | String[] | _**Required.**_ The full list of look's names which were build from that datum |
| transform | [Transform](https://vega.github.io/vega-lite/docs/transform.html)[] | An array of data transformations such as filter and new field calculation. <br/> Reused from [Vega-Lite](https://vega.github.io/vega-lite/docs/spec.html) specification|
| authority | Authority | Information about data source author |
| fields | Field[] | List all available fields within data source, it should include fields generated after transformation|

#### Authority

Contains information about data source's author, it may be person or organization, github repository with data

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| name        | String  |  Name of the authority for later reference. |
| site       | URL      | _**Required.**_ Link to data repository landing or at least to article with description|


#### Field

Contains human readable title and information about variable which it refers to

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| name        | String  |  _**Required.**_ Name of the authority for later reference. |
| title       | String  | _**Required.**_ Link to data repository landing or at least to article with description|
| variable        | Variable  | 

#### Variable

Define Data type of variable and [statistical variable dependency](https://en.wikipedia.org/wiki/Dependent_and_independent_variables)

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| type        | String  |  _**Required.**_ One of `string`, `number`, `date` |
| dependent   | Boolean  |  _**Required.**_  In Business Intelligence <br/> if it equals`false` then it's [`dimention`](https://en.wikipedia.org/wiki/Dimension_(data_warehouse)) <br/> if it equals `true` then it's [`measure`](https://en.wikipedia.org/wiki/Measure_(data_warehouse))


## Data 

## Look


## LookPreview

## DatumPreview
