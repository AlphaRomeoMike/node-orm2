Built-in Validators
===================

For information on how to use validation or these functions see :doc:`../validation`.

validators.rangeNumber( *min*, *max*, *message* )
-------------------------------------------------

Checks if the value is a number between *min* and *max*. If not *message* is returned.

validators.rangeLength( *min*, *max*, *message* )
-------------------------------------------------

Checks if the value is a string between *min* and *max* length.

validators.insideList( *values*, *message* )
--------------------------------------------

Check if a value is contained in the *values* list. If not returns *message*.

For example you could pass a list of months of the year. This would mean there would be no way to create your own month.

validators.outsideList( *values*, *message* )
---------------------------------------------

Check if a value is **not** contained on the *values* list.

This is useful for creating a blacklist of values, however do not use it for large instances.

validators.equalToProperty( *property*, *message* )
---------------------------------------------------

Checks if the value you are validating is the same as the value in *property*.

For example take this block of data::

	{ "password" : "blah", "retype_password" : "xyz" }

And you validated ``retype_password`` with the property as ``password`` it would fail validation because ``blah`` != ``xyz``

validators.notEmptyString( *message* )
--------------------------------------

Checks if the value is empty or not

validators.unique( *message* )
------------------------------

Checks if the value is unique in the database.

.. container:: warning

	This will slow down validation! You should handle errors returned by the database instead

validators.patterns.match( *regex*, *message* )
-----------------------------------------------

Checks if the value matches the Regex *regex*

validators.patterns.hexString( *message* )
------------------------------------------

Checks if the value is a hexadecimal string. ( 0-9 and A-F )

validators.patterns.email( *message* )
--------------------------------------

Checks if the value is a valid email address

validators.patterns.ipv4( *message* )
-------------------------------------

Checks if the value is a valid IP v4 address.