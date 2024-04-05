Querying
========

Querying is an important area of interacting with a database.

.. note::
	
	The following only applies if you are using @kennydude's version

To query the database you use the ``model.find()`` method from the :doc:`ref/model`

A simple ``=`` operation can be done like so::
	
	model.find( { "field" : "value" })

Operators
---------

To use more than a straightforward ``=`` or ``in`` operator you use a slightly different syntax like so::
	
	model.find({
		field : { "operator" : "value" }
	});

Those operators are:

+-----------------------+-----------------------------+
| Operator              | Values to use operator      |
+=======================+=============================+
| Equals                | =                           |
+-----------------------+-----------------------------+
| Less Than             | <, "less than"              |
+-----------------------+-----------------------------+
| Less Than or Equal to | <=, "less than or equal to" |
+-----------------------+-----------------------------+
| More than             | >, "more than"              |
+-----------------------+-----------------------------+
| More than or equal to | >=, "more than or equal to" |
+-----------------------+-----------------------------+

If you want to use ``IN`` you present a list of values which is done like so::
	
	model.find({
		field : [ "item 1", "item 2" ]
	})

