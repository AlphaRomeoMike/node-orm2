Model Class
===========

Please note: If you are using custom-built tables, you must have an id column!

model.get( *id*, *options*, *callback* )
----------------------------------------

*id* is the id of the object you are wishing to get

*options* is an optional object of options which uses the same flags as the ``orm.define()`` function in :doc:`orm`.

*callback* is a function which takes two parameters which are ``error`` and ``instance``. Instance is an :doc:`instance`.

model.find( ... )
-----------------

This function takes the following parameters

* *conditions*, Object: The conditions you wish to search by
* *options*, object: The options of the query, Optional;
* *limit*, Integer: The maximum number of records to return per-query
* *ordering*, list: Ordering. This will generally contain 2 elements. The first is the field to sort by and the second is the method. This is ``A`` for Ascending order and ``Z`` (default) descending order. Optional
* *callback*, function: Called when the data is available. Takes two parameters: ``error`` and ``items`` (items is an array of :doc:`instance` )

Conditions is an object which is quite limited at the moment. You can include a value to compare with (``=`` comparator) or a list (``IN`` comparator). :doc:`See More <../querying>`

Options can contain more including (all of which are optional):

* __merge which joins two tables together and contains two values of ``from`` and ``to`` which each contain a ``table`` and ``field`` value
* offset: Integer, the number to start loading data from
* limit: Integer, the number to limit to per query.
* only: List, a list of properties that you wish to contain if you want to restrict them

model.clear()
-------------

Clears the table in the database.

.. warning::
	
	THIS WILL DESTROY DATA! BE CAREFUL!


model.hasOne( *type*, *another_model* )
---------------------------------------

Relates this item to another.

* *type*, String: What relationship does the current item have to *another_model*
* *another_model*, Model: Model to relate to. Optional, if ommited it defaults to itself.

For example::

	var Person = db.define('person', {
	    name : String
	});
	var Animal = db.define('animal', {
	    name : String
	});
	Animal.hasOne("owner", Person);

With this example it assumes ``animal`` has a field called ``owner_id`` which is an Integer.

If you have enabled ``autoFetch``, then instances will have a *type* property with the other model instance. Otherwise you will have a function with the name of get*type* (although *type* is capitalized for CammelCase typing).

.. note::

	If you are using @kennydude's version the following applies:

This will also attach a reverse-lookup function to your model with the name of model.findBy *type* ( *other_model*, *extra*, *callback* )

Where *extra* is optional, and *callback* takes 2 arguments, ``error``` and ``item`` (a :doc:`instance` )

model.hasMany( *type*, *extra*, *another_model* )
-------------------------------------------------

Relates this model to another in a many-to-many fashion.

* *type*, String: What relationship does the current item have to *another_model*
* *extra*, Object: Extra attributes on the intermediate table you want to include. Optional
* *another_model*, Model: Model to relate to. Optional, if ommited it defaults to itself.

For example::

	var Person = db.define('person', {
	    name : String
	});
	Person.hasMany("friends", {
	    rate : Number
	});

	Person.get(123, function (err, John) {
	    John.getFriends(function (err, friends) {
	        // assumes rate is another column on table person_friends
	        // you can access it by going to friends[N].extra.rate
	    });
	});

You require an intermediate table with relationshipType_id and anotherModelName_id fields at least. The table is called thisModelName_type. For the above you would have a table called person_friends with the fields friend_id and person_id.

.. note::

	If you are using @kennydude's version the following applies:
	

This will also attach a reverse-lookup function to your model with the name of model.findBy *type* ( *other_model*, *extra*, *callback* )

Where *extra* is optional, and *callback* takes 2 arguments, ``error``` and ``items`` (array of :doc:`instance` )