# Functional Overview

## Important User Scenario's

### Global Navigation

1. As Anonymus User I can upload JSON or CSV file and start new exploration
1. As Anonymus User I can copy paste url to JSON/CSV http resource and start new exploration
1. As Anonymus User I can see list of publicly available looks in the system
1. As Anonymus User I can see list of publicly available datums in the system

1. As Casual User after login I can see profile info in account section

~~1. As Casual User I can see all my looks and datums~~

~~1. As Casual User I can see number of watches for each look~~

### Look

1. As Anonymus User I can open link to shared look and see visualization, filters and table
1. As Anonymus User I can change filters condition, values so it would reflect in visualization and table
1. As Anonymus User I can expand/collapse filter, visualization, table panels
1. As Anonymus User I can continue exploration of look

~~1. As Anonymus User I can perform login and then fork from the exploration~~

~~1. As Casual User I can open datum and start exploration of new look~~

~~1. As Casual User I can upload vega-lite specification, so it would create new datum and look~~

~~1. As Casual User I can add comments to look~~

~~1. As Casual User I can edit look's specification (vega-lite)~~

### Explore

1. As Anonymus User I can see fields available for explore
1. As Anonymus User I can see fields as dimensions and 'Count' as measure
1. As Anonymus User I can create filter from any non-filtered field
1. As Anonymus User I can select filed and it would be added as column in table
1. As Anonymus User I can deselect filed and it would be removed from table
1. As Anonymus User I can deselect filed and it would be removed from occupied encoding channel in visualization
1. As Anonymus User I can change encoding channels for selected fields in visualization
1. As Anonymus User I can change color configuration for visualization

~~1. As Anonymus User I can pivot one field and it would became column for other columns in table~~
~~1. As Anonymus User I can pivot one field and it would occupy column faced in visualization~~ 
~~1. As Anonymus User I can remove pivoted field, so it became an just a regular column in table~~

1. As Anonymus User I can't save or share exploration without login to system

> Actually it make sense to skip that restriction and recomend user to login as main UI and some option to continue as 
anonym
~~1. As Anonymus User I should see a login dialog with advice to login, however I can contionue as anonym~~

### Datum

1. As Anonymus User I can open datum and see all it's fields and looks build on top of it
1. As Anonymus User I can navigate from datum to looks build on top of it
1. As Anonymus User I can start exploration from datum

~~1. As Casual User I can add new datum by url to some remote http resource~~

~~1. As Casual User I can see the number of usage (by looks) for any datum~~~

~~1. As Casual User I can see all looks related to current datum~~

~~1. As Casual User I can uncheck 'publish datum' (during creation), so others can't use it in their explorations~~

~~1. As Casual User I can add comments to datum~~

### Embedded

~~1. As Casual User I can embedd look on third party page, so filters, table and visualization would be available~~




