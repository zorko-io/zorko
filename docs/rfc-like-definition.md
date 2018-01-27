# Datum

Main Datum's responsibility is to define connection between datasource and looks build on top of that datasource, link to authority
information.

`Datum` should contains information about connection to datasource, like format, protocol, data format. 
`Datum` may embedded dataset instead of referencing to some remote datasource. 
Also `Datum` should provide information about datasource authority, like link to site with explanation about data in that datasource. 
`Datum` should have information about looks build on top of it.

`Datum` may contains transformation around original dataset (aggregations, filter) which should be common to all dependent
looks, looks should't know about transformation and treat transformed dataset as original one
