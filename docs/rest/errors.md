# Errors

### BrokenDependentResourcesError

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| code    |String  | _**Required.**_ `BROKEN_DEPENDENT_RESOURCES_ERROR` |
| message   | String      | _**Required.**_ Error message for developers|


### NotFoundResourceError

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| code    |String  | _**Required.**_ `NOT_FOUND_RESOURCE_ERROR` |
| message   | String      | _**Required.**_ Error message for developers|


### InvalidParameterTypeError

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| code    |String  | _**Required.**_ `INVALID_PARAMETERS_TYPE_ERROR` |
| expected   |String | _**Required.**_ Expected type of parameter |
| actual   | String      | _**Required.**_ Actual type of parameter|
| message   | String      | _**Required.**_ Error message for developers|

### InvalidParameterValueRangeError

| Property    | Type  | Description  |
| :---------- |:-------------:| :-----|
| code    |String  | _**Required.**_ `INVALID_PARAMETERS_VALUE_RANGE_ERROR` |
| expected   |Array | _**Required.**_ Expected value range |
| actual   | String      | _**Required.**_ Actual value range|
| message   | String      | _**Required.**_ Error message for developers|
