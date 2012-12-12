Validation
==========

Validation is an important part of managing a database. By putting it in the ORM it makes it very difficult to get around when coding. This is great for security and making your code simpler!

To use validation methods when you create your model, add an options parameter containing ``validations`` like so::
	
	var Person = db.define('person', {
        name      : String,
        surname   : String,
        age       : Number,
    }, {
        validations: {
            age: orm.validators.rangeNumber(18, undefined, 'under-age')
        }
    });

That's it!

To see the whole range of built in validation checks see :doc:`ref/validators`

Handling Errors
---------------

You must take care to handle errors in validating your content. At the moment, once an error has been reached no more will be checked.

When saving, the callback will contain and ``error`` parameter. If it is not null then it will be an error validating or an error saving to the database.

A validation error will contain

* message - The message defined by the validation to show. When defining these do not use full language texts, as this is bad for translation.
* field - The field that failed validation
* value - The value that failed validation

Multiple Validation Checks
--------------------------

You can easily use multiple validation checks using a list of checks like so::
	
	validations: {
        age: [
        	orm.validators.rangeNumber(18, undefined, 'under-age'),
        	orm.validators.rangeNumber(18, undefined, 'under-age'),
        ]
    }

Custom Validation Checks
------------------------

It is quite simple to write your own validation checks.

Simply write a function which takes these parameters in this order:

* *value* - The value to test
* *next* - The function to call when you're done
* *data* - The rest of the data we are validating
* *Model* - The model itself
* *prop* - The name of the property we are validating.

You will generally only need *value* and *next*.

If you call ``next()`` without any parameters it means the validation was successful. If not, send a string of the message you want to return.