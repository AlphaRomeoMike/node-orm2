ORM Class
=========

To access this class you will typically do this::

	var orm = require("orm");

*static* orm.connect( *connection_string*, *callback* )
-------------------------------------------------------

Connects to a database. *connection_string* is a URI.

Currently supported schemas/drivers are:

* sqlite://*path_to_database*
* mysql://username:password@host/database
* postgres://username:password@host/database

Returns a :ref:`ORM <db>` instance via *callback* once connected

.. _db:

orm.define( *name*, *properties*, *options* )
---------------------------------------------

Define a :doc:`model`. Models represent the tables in your database.

*name* will be the name of your table

*properties* will be the fields in your table expressed in an object fashion like so::

	{
		name : String,
		number_of_warnings : Number,
		data_applied : Date
	}

Data type accepted for *properties* are:

* String
* Number
* Boolean
* [ 'value', 'x' ] - Enum type
* Buffer (aka Binary)
* Object - JSON Encoded

*options* is an object of the following

* cache: Boolean; Option to flag if you want to store caches of objects
* autoSave: Boolean; Option to flag if you want the model to auto-save when you change properties. Default is false
* autoFetch: Boolean; Option to flag if you want to automatically fetch any associated objects. Default is false
* autoFetchLimit: Integer; How far to go with fetching associated objects. Required if you use autoFetch
* methods, Object; An object of methods you want to attach to the :doc:`instance` items.
* validations, Object; An object of validators you wish to attach :doc:`See more <../validation>`.

orm.close()
-----------

Closes the database connection. There is no open function, you have to reconnect globally.

orm.validators
--------------

Built-in validators. See :doc:`validators` for more information.